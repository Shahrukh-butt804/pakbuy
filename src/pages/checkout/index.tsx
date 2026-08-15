import { Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import PaymentPage from "../../components/check-out";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { UPLOADS_URL } from "../../constants/api";
import { useGetMyCartQuery } from "../../redux/services/cartSlice";
import { useValidateCouponMutation } from "../../redux/services/couponSlice";
import {
  useGetAllStatesQuery,
  useGetCitiesByStateMutation,
} from "../../redux/services/locationSlice";
import { useCreateOrderMutation } from "../../redux/services/orderSlice";

const { Option } = Select;

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [form] = Form.useForm();

  const [createOrder] = useCreateOrderMutation();
  const [validateCoupon, { isLoading }] = useValidateCouponMutation();

  const { data: cartResponse, isLoading: isCartLoading } = useGetMyCartQuery(
    {},
  );

  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponId, setCouponId] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const [cities, setCities] = useState([]);
  const { data: allStates, isLoading: isLoadingStates } = useGetAllStatesQuery(
    {},
  );
  const [getCitiesByState, { isLoading: isLoadingCities }] =
    useGetCitiesByStateMutation();

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

    const products = cartItems
      .map((item: any) => {
        const collectionId = item.collection?._id;
        if (!collectionId) return null;
        return { collectionId, quantity: item.quantity || 1 };
      })
      .filter(Boolean);

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
        navigate("/");
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
        text:
          error?.error?.data?.message ||
          error?.data?.message ||
          "Something went wrong!",
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

  if (isLoading || isCartLoading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh] text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#171717] to-[#242424] text-white px-3 py-4 sm:px-5 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* ================= LEFT: ORDER SUMMARY ================= */}
          <aside className="w-full lg:w-[32%] xl:w-[30%]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm p-4 sm:p-5 shadow-xl">
              {/* Coupon */}
              {!isCouponApplied ? (
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-white/80">
                      Coupon Code
                    </span>

                    <button
                      type="button"
                      className="text-xs text-[#d17f89] hover:text-[#e29aa2] transition-colors"
                    >
                      Apply Code
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="
                    min-w-0 flex-1
                    h-10
                    px-3
                    rounded-xl
                    bg-white/[0.06]
                    border border-white/10
                    text-sm text-white
                    placeholder:text-white/30
                    focus:outline-none
                    focus:border-[#d17f89]/60
                    focus:ring-1
                    focus:ring-[#d17f89]/30
                    transition-all
                  "
                    />

                    <button
                      type="button"
                      onClick={handleValidateCoupon}
                      className="
                    h-10
                    px-4
                    rounded-xl
                    bg-[#C97873]
                    hover:bg-[#d98791]
                    text-black
                    text-xs
                    font-semibold
                    transition-all
                    shrink-0
                  "
                    >
                      {isLoading ? "Wait..." : "Apply"}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setCouponCode("");
                    setIsCouponApplied(false);
                    setCouponId("");
                    setDiscountedPrice(0);
                  }}
                  className="
                w-full
                h-10
                mb-5
                rounded-xl
                bg-[#C97873]
                hover:bg-[#d98791]
                text-black
                text-xs
                font-semibold
                transition-all
              "
                >
                  Clear Coupon
                </button>
              )}

              {/* Summary */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-white">
                    Order Summary
                  </h3>

                  <span className="text-[11px] text-white/35">
                    {cartItems?.length || 0} item
                    {(cartItems?.length || 0) !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  {discountedPrice && isCouponApplied ? (
                    <div className="flex justify-between items-center">
                      <span className="text-white/55">Discounted Price</span>

                      <span className="font-semibold text-[#d17f89]">
                        ${discountedPrice.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-white/55">Subtotal</span>

                        <span className="font-medium text-white">
                          ${subTotal.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[11px] text-white/35">
                          Tax & other charges
                        </span>

                        <span className="text-[11px] text-white/30">
                          At checkout
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Cart Items */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-semibold text-white/80">
                    Your Items
                  </h3>
                </div>

                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                  {cartItems?.map((item: any, index: number) => {
                    const collection = item.collection;

                    return (
                      <div
                        key={item._id || index}
                        className="
                      flex items-center gap-3
                      p-2.5
                      rounded-xl
                      bg-white/[0.025]
                      border border-white/5
                      hover:bg-white/[0.045]
                      transition-colors
                    "
                      >
                        {/* Image */}
                        <div className="flex shrink-0">
                          {collection?.products?.length ? (
                            collection.products
                              .slice(0, 1)
                              .map((product: any, productIndex: number) => (
                                <img
                                  key={productIndex}
                                  crossOrigin="anonymous"
                                  src={UPLOADS_URL + product.image}
                                  alt={product.name || "product"}
                                  className="
                                w-10 h-10
                                rounded-lg
                                object-cover
                                border border-white/10
                              "
                                />
                              ))
                          ) : collection?.image ? (
                            <img
                              crossOrigin="anonymous"
                              src={UPLOADS_URL + collection.image}
                              alt={collection.title || collection.name}
                              className="
                            w-10 h-10
                            rounded-lg
                            object-cover
                            border border-white/10
                          "
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-white/5" />
                          )}
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-white/75 truncate">
                            {collection?.title || collection?.name}
                          </p>

                          <p className="text-[11px] text-white/35 mt-0.5">
                            $
                            {Number(collection?.CollectionPrice || 0).toFixed(
                              2,
                            )}{" "}
                            × {item.quantity}
                          </p>
                        </div>

                        <span className="text-xs font-medium text-white/70">
                          $
                          {(
                            Number(collection?.CollectionPrice || 0) *
                            Number(item.quantity || 0)
                          ).toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* ================= RIGHT: CHECKOUT FORM ================= */}
          <div className="w-full lg:flex-1">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-white">
                    Billing Information
                  </h2>

                  <p className="text-[11px] sm:text-xs text-white/35 mt-1">
                    Enter your details to complete your order
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[11px] text-white/35">
                  <span className="w-2 h-2 rounded-full bg-[#C97873]" />
                  Secure Checkout
                </div>
              </div>

              <Form
                form={form}
                layout="vertical"
                initialValues={{
                  country: "PK",
                }}
                className="checkout-form"
              >
                {/* Name */}
                <Row gutter={[12, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="First Name"
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
                      label="Last Name"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Last Name is required",
                        },
                      ]}
                    >
                      <Input placeholder="Last Name" className="web-input" />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Address */}
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Address is required",
                    },
                  ]}
                >
                  <Input className="web-input" placeholder="Street address" />
                </Form.Item>

                {/* Location */}
                <Row gutter={[12, 0]}>
                  <Col xs={24} md={8}>
                    <Form.Item
                      label="Country"
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: "Country is required",
                        },
                      ]}
                    >
                      <Select
                        className="web-input"
                        placeholder="Select Country"
                      >
                        <Option value="PK">Pakistan</Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={8}>
                    <Form.Item
                      label="State"
                      name="state"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        disabled={
                          !allStates ||
                          allStates.length === 0 ||
                          isLoadingStates
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
                      label="City"
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

                {/* Zip */}
                <Form.Item
                  label="Zip Code"
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

                {/* Contact */}
                <Row gutter={[12, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Email"
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
                        placeholder="Email address"
                        type="email"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Phone Number is required",
                        },
                      ]}
                    >
                      <Input className="web-input" placeholder="Phone number" />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Additional */}
                <div className="mt-2 mb-3">
                  <h3 className="text-sm font-semibold text-white">
                    Additional Information
                  </h3>
                </div>

                <Form.Item label="Order Notes" name="orderNote">
                  <Input.TextArea
                    rows={2}
                    placeholder="Notes about your order (optional)"
                    className="web-textarea"
                  />
                </Form.Item>

                {/* Payment */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        Card Details
                      </h3>

                      <p className="text-[11px] text-white/35 mt-0.5">
                        Debit / Credit Card
                      </p>
                    </div>

                    <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/40">
                      Secure
                    </span>
                  </div>

                  <PaymentPage handleSubmit={handleSubmit} />
                </div>
              </Form>
            </div>
          </div>
        </div>
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
