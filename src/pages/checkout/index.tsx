import { Checkbox, Col, Form, Input, List, Row, Select } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import PaymentPage from "../../components/check-out";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { UPLOADS_URL } from "../../constants/api";
import { clearCart, selectCartItems } from "../../redux/reducers/cartSlice";
import { useCreateOrderMutation } from "../../redux/services/orderSlice";
import { useValidateCouponMutation } from "../../redux/services/couponSlice";

const { Option } = Select;


const Checkout: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [shipDifferent, setShipDifferent] = useState(false);
    const [couponCode, setCouponCode] = useState('')
    const [form] = Form.useForm();
    const [createOrder] = useCreateOrderMutation()
    const [validateCoupon, { isLoading }] = useValidateCouponMutation()
    const [isCouponApplied, setIsCouponApplied] = useState(false)
    const [couponId, setCouponId] = useState('')

    const myCart = useSelector(selectCartItems)
    const [subTotal, setSubTotal] = useState(myCart?.reduce((total: number, item: any) => total + item.CollectionPrice, 0))
    const tax = subTotal * 0.2
    const [discountedPrice, setDiscountedPrice] = useState(0)



    const dispatch = useDispatch()
    const cartItems = useSelector((state: any) => state.cart.items);



    const handleValidateCoupon = async () => {

        if (isCouponApplied) {
            return Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Coupon already applied',
            })
        }

        try {
            const res: any = await validateCoupon({ code: couponCode })
            if (res?.data?.success) {
                const { type, value } = res.data.coupon
                Swal.fire({
                    title: "Are you sure?",
                    text: "Do you really want to apply this coupon?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Yes, apply it",
                    cancelButtonText: "No, cancel"
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (type === "percentage") {
                            const tax = subTotal * 0.2;
                            const grandTotal = subTotal + tax;
                            const discounted = grandTotal - (grandTotal * value) / 100;
                            setDiscountedPrice(discounted);
                        } else {
                            const tax = subTotal * 0.2;
                            const grandTotal = subTotal + tax;
                            const discounted = grandTotal - value;
                            setDiscountedPrice(discounted);
                        }
                        setIsCouponApplied(true)
                        setCouponId(res.data.coupon._id)
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: res.message || res?.error?.data?.message,
                })
            }
        } catch (error: any) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || error?.data?.message || 'Something went wrong',
            })
            console.log("🚀 ~ handleValidateCoupon ~ error:", error)
        }
    }


    const handleSubmit = async (token: any) => {
        const values = form.getFieldsValue(); // 👈 get all form values

        const products = cartItems.map((item: any) => ({
            collectionId: item._id,
            quantity: 1,
        }));

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


        if (shipDifferent) {
            payload.shippingAddress = {
                firstName: values.shippingFirstName,
                lastName: values.shippingLastName,
                address: values.shippingAddress,
                country: values.shippingCountry,
                state: values.shippingState,
                city: values.shippingCity,
                zipCode: values.shippingZipCode,
                email: values.shippingEmail,
                phone: values.shippingPhone,
            };
        }

        if (couponId && isCouponApplied) {
            payload.couponId = couponId
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
                dispatch(clearCart());
                form.resetFields();
                return true
            } else {
                Swal.fire({
                    title: "Error!",
                    text:
                        response.error?.data?.errors?.[0]?.msg ||
                        response.error?.data?.message ||
                        "Something went wrong!",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
                return false
            }
        } catch (error: any) {
            console.log("🚀 ~ handleSubmit ~ error:", error);
            Swal.fire({
                title: "Error!",
                text: error?.error?.data?.message || "Something went wrong!",
                icon: "error",
                confirmButtonText: "Ok",
            });
            return false
        }
    };




    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#1c2230] text-white flex flex-col md:flex-row gap-6 p-4 md:p-10">
                {/* Sidebar */}

                <aside className="w-full md:w-1/3 bg-[#1e2432] text-white p-5 rounded-xl shadow-md">
                    {/* Title */}
                    {/* <h3 className="text-lg font-semibold mb-4">Summary</h3> */}

                    {/* Total */}
                    {/* <div className="flex justify-between mb-4">
                        <span className="text-sm">Total</span>
                        <span className="text-sm font-medium">${subTotal + tax}</span>
                    </div> */}

                    {/* Gift Card Discount */}
                    {/* <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Gift Card Discount</span>
                        <button className="text-xs text-pink-400 hover:text-pink-300">Apply Code</button>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Gift Card Code"
                            className="flex-1 p-2 rounded-l-full bg-[#2b3143] text-sm focus:outline-none"
                        />
                        <button className="bg-[#D7C6B7] hover:bg-[#D7C6B7] px-4 text-sm text-black font-semibold" style={{ color: '#000', borderRadius: "50px" }}>
                            Apply
                        </button>
                    </div> */}

                    {/* Gift Card Discount */}


                    {/* Coupon Code */}



                    {!isCouponApplied ?
                        <>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm">Coupon Code</span>
                                <button className="text-xs text-pink-400 hover:text-pink-300" >Apply Code</button>
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
                                    className="bg-[#D7C6B7] hover:bg-[#D7C6B7] px-4 text-sm text-black font-semibold" style={{ color: '#000', borderRadius: "50px" }}>
                                    {isLoading ? "wait..." : "Apply"}
                                </button>
                            </div>
                        </>
                        :

                        <button
                            onClick={() => {
                                setCouponCode("")
                                setIsCouponApplied(false)
                                setSubTotal(myCart?.reduce((total: number, item: any) => total + item.price, 0))
                            }}
                            className="bg-[#D7C6B7] hover:bg-[#D7C6B7] w-full px-4 text-sm text-black font-semibold" style={{ color: '#000', borderRadius: "50px" }}>
                            Clear Coupon
                        </button>
                    }


                    {discountedPrice && isCouponApplied ? <>

                        <div style={{ padding: 16 }}>
                            <h4>Summary</h4>
                            <div>
                                <h4>Discounted Price <span style={{ float: "right" }}>${(discountedPrice).toFixed(2)}</span></h4>
                            </div>
                        </div>
                    </> : <>
                        <div style={{ padding: 16 }}>
                            <h4>Summary</h4>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                <span>Sub-total:</span>
                                <span>${subTotal.toFixed(2)}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                                <span>Tax:</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div>
                                <h4>Amount <span style={{ float: "right" }}>${(subTotal + tax).toFixed(2)}</span></h4>
                            </div>
                        </div>
                    </>}
                    <List
                        itemLayout="horizontal"
                        dataSource={myCart}
                        renderItem={(item: any) => (
                            <List.Item

                            >

                                <div className="flex items-center gap-4">
                                    {item.products?.map((product: any, index: number) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <img
                                                crossOrigin="anonymous"
                                                src={UPLOADS_URL + product.image}
                                                alt={product.name || `product-${index}`}
                                                className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                                            />
                                        </div>
                                    ))}
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-gray-700 mt-1">{item.name}</span>
                                        <span className="text-xs text-gray-500">${item.price?.toFixed(2)}</span>
                                    </div>
                                </div>

                            </List.Item>
                        )}
                    />




                </aside>
                {/* Main Form */}
                <Col xs={24} md={16} lg={18}>


                    <div className="form-box mt-0">
                        <h4>Billing Information</h4>


                        <Form form={form} layout="vertical"
                        >
                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item label="First Name *" name="firstName" rules={[{ required: true, message: "First Name is required" }]}>
                                        <Input placeholder="First Name" className="web-input" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Last Name *" name="lastName" rules={[{ required: true, message: "Last Name is required" }]}>
                                        <Input className="web-input" placeholder="Last Name" />
                                    </Form.Item>
                                </Col>
                            </Row>



                            <Form.Item label="Address *" name="address" rules={[{ required: true, message: "Address is required" }]}>
                                <Input className="web-input" placeholder="Address" />
                            </Form.Item>
                            <Row gutter={16}>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Country *" name="country" rules={[{ required: true, message: "Country is required" }]}>
                                        <Select className="web-input" placeholder="Select Country">
                                            <Option value="United States">United States</Option>
                                            <Option value="Canada">Canada</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Region/State *" name="state" rules={[{ required: true, message: "Region/State is required" }]}>
                                        <Select className="web-input" placeholder="Select Region/State">
                                            <Option value="New York">New York</Option>
                                            <Option value="Florida">Florida</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item label="City *" name="city" rules={[{ required: true, message: "City is required" }]}>
                                        <Select className="web-input" placeholder="Select City">
                                            <Option value="New York City">New York City</Option>
                                            <Option value="Miami">Miami</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item label="Zip Code *" name="zipCode" rules={[{ required: true, message: "Zip Code is required" }]}>
                                <Input className="web-input" placeholder="Zip Code" />
                            </Form.Item>
                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Email *" name="email" rules={[{ required: true, message: "Email is required" }]}>
                                        <Input className="web-input" placeholder="Email" type="email" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Phone Number *" name="phone" rules={[{ required: true, message: "Phone Number is required" }]}>
                                        <Input className="web-input" placeholder="Phone Number" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Checkbox checked={shipDifferent} onChange={(e) => setShipDifferent(e.target.checked)} style={{ margin: "16px 0" }}>
                                Ship to different address
                            </Checkbox>

                            {shipDifferent && (
                                <div style={{ border: "1px solid #EEE", padding: 16, borderRadius: 8, marginBottom: 24 }}>


                                    <Row gutter={16}>
                                        <Col xs={24} md={8}>
                                            <Form.Item label="Country *" name="shippingCountry" rules={[{ required: true, message: "Country is required" }]}>
                                                <Select className="web-input" placeholder="Select Country">
                                                    <Option value="United States">United States</Option>
                                                    <Option value="Canada">Canada</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={8}>
                                            <Form.Item label="Region/State *" name="shippingState" rules={[{ required: true, message: "Region/State is required" }]}>
                                                <Select className="web-input" placeholder="Select Region/State">
                                                    <Option value="New York">New York</Option>
                                                    <Option value="Florida">Florida</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={8}>
                                            <Form.Item label="City *" name="shippingCity" rules={[{ required: true, message: "City is required" }]}>
                                                <Select className="web-input" placeholder="Select City">
                                                    <Option value="New York City">New York City</Option>
                                                    <Option value="Miami">Miami</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>






                                    <Form.Item label="Zip Code *" name="shippingZipCode" rules={[{ required: true, message: "Zip Code is required" }]}>
                                        <Input className="web-input" placeholder="Zip Code" />
                                    </Form.Item>
                                    <Row gutter={16}>
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Email *" name="shippingEmail" rules={[{ required: true, message: "Email is required" }]}>
                                                <Input className="web-input" placeholder="Email" type="email" />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Phone Number *" name="shippingPhone" rules={[{ required: true, message: "Phone Number is required" }]}>
                                                <Input className="web-input" placeholder="Phone Number" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </div>
                            )}


                            <h4 className="text-white">Additional Information</h4>
                            <Form.Item label="Order Notes (Optional)" name="orderNote">
                                <Input.TextArea rows={4} placeholder="Notes about your order" className="web-textarea text-white hover:text-black" />
                            </Form.Item>

                            {/* Stripe Implementaion */}
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
                        className={`bg-white rounded-2xl p-8 max-w-md w-full text-center relative transform transition-all duration-300 ease-out ${isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
                            the many powerful benefits of your CHOOSE Well membership.
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















