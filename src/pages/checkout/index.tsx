import { Col, Form, Input, List, Row, Select } from "antd";
import React, { useState } from "react";
import Swal from "sweetalert2";
import PaymentPage from "../../components/check-out";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { UPLOADS_URL } from "../../constants/api";
import {
    useGetMyCartQuery
} from "../../redux/services/cartSlice";
import { useValidateCouponMutation } from "../../redux/services/couponSlice";
import {
    useGetAllStatesQuery,
    useGetCitiesByStateMutation,
} from "../../redux/services/locationSlice";
import { useCreateOrderMutation } from "../../redux/services/orderSlice";
import { useNavigate } from "react-router";

const { Option } = Select;

const Checkout: React.FC = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [form] = Form.useForm();

  const [createOrder] = useCreateOrderMutation();
  const [validateCoupon, { isLoading }] = useValidateCouponMutation();

  const { data: cartResponse, isLoading: isCartLoading, isFetching: isCartFetching} = useGetMyCartQuery({});


  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponId, setCouponId] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const [cities, setCities] = useState([]);
  const { data: allStates, isLoading: isLoadingStates } = useGetAllStatesQuery({});
  const [getCitiesByState, { isLoading: isLoadingCities }] = useGetCitiesByStateMutation();

  const cart = cartResponse;
  const cartItems = cart?.items || [];
  const subTotal = Number(cart?.totalAmount || 0);

  const handleValidateCoupon = async () => {
    if (isCouponApplied) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Coupon already applied",
      });
    }

    if (!couponCode.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter a coupon code",
      });
    }

    try {
      const res: any = await validateCoupon({
        code: couponCode,
      });

      if (res?.data?.success) {
        const { type, value } = res.data.coupon;

        Swal.fire({
          title: "Are you sure?",
          text: "Do you really want to apply this coupon?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Yes, apply it",
          cancelButtonText: "No, cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            if (type === "percentage") {
              const discounted = subTotal - (subTotal * value) / 100;

              setDiscountedPrice(discounted);
            } else {
              const discounted = subTotal - value;
              setDiscountedPrice(discounted < 0 ? 0 : discounted);
            }

            setIsCouponApplied(true);
            setCouponId(res.data.coupon._id);
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: res.message || res?.error?.data?.message || "Invalid coupon",
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || error?.data?.message || "Something went wrong",
      });

      console.log("🚀 ~ handleValidateCoupon ~ error:", error);
    }
  };

  const handleSubmit = async (token: any) => {
    const values = form.getFieldsValue();
    if (!cartItems.length) {
     return Swal.fire({
        title: "Cart is empty",
        text: "Please add something to your cart before placing an order.",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    }

    const products = cartItems.map((item: any) => {
        const collectionId = item.collection?._id;
        if (!collectionId) return null
        return { collectionId, quantity: item.quantity || 1};
      }).filter(Boolean);


    if (!products.length) {
     return Swal.fire({
        title: "Error!",
        text: "No valid collections were found in your cart.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    const payload: any = {
      billingAddress: {
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        country: values.country,
        state: values.state,
        city: values.city,
        zipCode: values.zipCode,
        email: values.email,
        phone: values.phone,
      },

      cardDetails: {
        nameOnCard: values.nameOnCard,
        cardNumber: values.cardNumber,
        expirationDate: values.expirationDate,
        cvc: values.cvc,
      },

      orderNote: values.orderNote,
      products,
      token,
    };

    if (couponId && isCouponApplied) {
      payload.couponId = couponId;
    }

    try {
      const response: any = await createOrder(payload);
      if (response?.data?.success) {
        Swal.fire({
          title: "Success",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        form.resetFields();
        setCouponCode("");
        setCouponId("");
        setIsCouponApplied(false);
        setDiscountedPrice(0);
        navigate("/")
      } else {
        Swal.fire({
          title: "Error!",
          text:
            response?.error?.data?.errors?.[0]?.msg ||
            response?.error?.data?.message ||
            "Something went wrong!",
          icon: "error",
          confirmButtonText: "Ok",
        });

        return false;
      }
    } catch (error: any) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      Swal.fire({
        title: "Error!",
        text: error?.error?.data?.message || error?.data?.message || "Something went wrong!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const handleStateChange = async (value: any) => {
    try {
      const res = await getCitiesByState(value).unwrap();
      setCities(res.data);
    } catch (error) {
      console.error("Failed to get cities:", error);
      setCities([]);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen text-white flex flex-col md:flex-row gap-6 p-4 md:p-10 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2a2a2a] ">
        <aside className="w-full md:w-1/3  text-white p-5 rounded-xl shadow-md">
          {!isCouponApplied ? (
            <>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Coupon Code</span>

                <button className="text-xs text-pink-400 hover:text-pink-300">
                  Apply Code
                </button>
              </div>

              <div className="flex items-center mb-6">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 p-2 rounded-l-full bg-[#2b3143] text-sm focus:outline-none"
                />

                <button
                  onClick={handleValidateCoupon}
                  className="bg-[#C97873] hover:bg-[#C97873] px-4 text-sm text-black font-semibold"
                  style={{
                    color: "#000",
                    borderRadius: "50px",
                  }}
                >
                  {isLoading ? "wait..." : "Apply"}
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => {
                setCouponCode("");
                setIsCouponApplied(false);
                setCouponId("");
                setDiscountedPrice(0);
              }}
              className="bg-[#C97873] hover:bg-[#C97873] w-full px-4 text-sm text-black font-semibold"
              style={{
                color: "#000",
                borderRadius: "50px",
              }}
            >
              Clear Coupon
            </button>
          )}

          {discountedPrice && isCouponApplied ? (
            <>
              <div style={{ padding: 16 }}>
                <h4>Summary</h4>

                <div>
                  <h4>
                    Discounted Price
                    <span
                      style={{
                        float: "right",
                      }}
                    >
                      ${discountedPrice.toFixed(2)}
                    </span>
                  </h4>
                </div>
              </div>
            </>
          ) : (
            <>
              <div style={{ padding: 16 }}>
                <h4>Summary</h4>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span>Sub-total:</span>

                  <span>${subTotal.toFixed(2)}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span className="text-xs text-gray-400">
                    Tax And Other Charges Will Be Applied
                  </span>

                  <span></span>
                </div>
              </div>
            </>
          )}

          <List
            itemLayout="horizontal"
            dataSource={cartItems}
            loading={isCartLoading || isCartFetching}
            renderItem={(item: any) => {

             const collection = item.collection;

              return (
                <List.Item>
                  <div className="flex items-center gap-4">
                    {collection?.products?.map(
                      (product: any, index: number) => (
                        <div key={index} className="flex flex-col items-center">
                          <img
                            crossOrigin="anonymous"
                            src={UPLOADS_URL + product.image}
                            alt={product.name || `product-${index}`}
                            className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                          />
                        </div>
                      ),
                    )}

                    {!collection?.products?.length && collection?.image && (
                      <div className="flex flex-col items-center">
                        <img
                          crossOrigin="anonymous"
                          src={UPLOADS_URL + collection.image}
                          alt={collection.title || collection.name}
                          className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                        />
                      </div>
                    )}

                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-400 mt-1">
                        {collection?.title || collection?.name}
                      </span>

                      <span className="text-xs text-gray-300">
                        ${Number(collection?.CollectionPrice || 0).toFixed(2)} x{" "}
                        {item.quantity}
                      </span>
                    </div>
                  </div>
                </List.Item>
              );
            }}
          />
        </aside>

        {/* Main Form */}

        <Col xs={24} md={16} lg={18}>
          <div className="form-box mt-0">
            <h4>Billing Information</h4>

            <Form
              form={form}
              layout="vertical"
              initialValues={{
                country: "PK",
              }}
            >
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="First Name *"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "First Name is required",
                      },
                    ]}
                  >
                    <Input placeholder="First Name" className="web-input" />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label="Last Name *"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Last Name is required",
                      },
                    ]}
                  >
                    <Input className="web-input" placeholder="Last Name" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Address *"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Address is required",
                  },
                ]}
              >
                <Input className="web-input" placeholder="Address" />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="Country *"
                    name="country"
                    rules={[
                      {
                        required: true,
                        message: "Country is required",
                      },
                    ]}
                  >
                    <Select className="web-input" placeholder="Select Country">
                      <Option value="PK">Pakistan</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                  <Form.Item
                    label="State *"
                    name="state"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      disabled={
                        !allStates || allStates.length === 0 || isLoadingStates
                      }
                      className="web-input"
                      placeholder="Select State"
                      onChange={handleStateChange}
                    >
                      {allStates?.map((s: any) => (
                        <Option key={s.name} value={s.name}>
                          {s.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                  <Form.Item
                    label="City *"
                    name="city"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      disabled={
                        !cities || cities.length === 0 || isLoadingCities
                      }
                      className="web-input"
                      placeholder="Select City"
                    >
                      {cities.map((c: any) => (
                        <Option key={c} value={c}>
                          {c}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Zip Code *"
                name="zipCode"
                rules={[
                  {
                    required: true,
                    message: "Zip Code is required",
                  },
                ]}
              >
                <Input className="web-input" placeholder="Zip Code" />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Email *"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Email is required",
                      },
                    ]}
                  >
                    <Input
                      className="web-input"
                      placeholder="Email"
                      type="email"
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label="Phone Number *"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Phone Number is required",
                      },
                    ]}
                  >
                    <Input className="web-input" placeholder="Phone Number" />
                  </Form.Item>
                </Col>
              </Row>

              <h4 className="text-white">Additional Information</h4>

              <Form.Item label="Order Notes (Optional)" name="orderNote">
                <Input.TextArea
                  rows={4}
                  placeholder="Notes about your order"
                  className="web-textarea text-white hover:text-black"
                />
              </Form.Item>

              {/* Stripe Implementation */}

              <h4 className="text-white">Card Details ( Debit / Credit)</h4>

              <div className="">
                <PaymentPage handleSubmit={handleSubmit} />
              </div>
            </Form>
          </div>
        </Col>
      </div>

      <section className="ethicsBoundary-bg">
        <ChooseInfoSection />

        <Footer />
      </section>

      {/* Order Success Modal */}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm z-50 transition-opacity duration-300">
          <div
            className={`bg-white rounded-2xl p-8 max-w-md w-full text-center relative transform transition-all duration-300 ease-out ${
              isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Close button */}

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-black text-lg"
            >
              ✕
            </button>

            {/* Success Icon */}

            <div className="flex justify-center mb-4">
              <div className="bg-green-500 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}

            <h2 className="text-xl font-bold mb-2 text-black">
              Order Placed Successfully!
            </h2>

            {/* Message */}

            <p className="text-gray-600 text-sm mb-6">
              Congratulations on CHOOSING WELL! You will soon experience one of
              the many powerful benefits of your Pak Buy membership.
            </p>

            {/* Continue Button */}

            <button
              onClick={() => setIsModalOpen(false)}
              className="site-btn text-black font-semibold py-2 px-6 rounded-full"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
