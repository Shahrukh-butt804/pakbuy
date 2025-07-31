import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Tag } from "antd";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";

const OrderDetails: React.FC = () => {
    const { id } = useParams();

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto p-6">
                   <h2 className="text-center text-2xl font-semibold mb-6 text-65">Order Details</h2>
                <div className="bg-[#83838340] shadow rounded-xl p-6 relative">
                    <div className="flex justify-between mb-4">
                        <div>
                            <p className="text-white"><strong>Name:</strong> Abc</p>
                            <p className="text-white"><strong>Email:</strong> abc@gmail.com</p>
                            <p className="text-white"><strong>Date:</strong> mm/dd/yy</p>
                            <p className="text-white"><strong>Phone:</strong> +92 345 678 910</p>
                        </div>
                        <div>
                            <p className="text-white"><strong>Order ID:</strong> {id}</p>
                            <p className="text-white"><strong>Payment:</strong> COD</p>
                            <p className="mt-4">
                                <Tag color="orange" className="px-4 py-1 rounded-full text-sm">
                                    Pending
                                </Tag>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-[#d46b08] font-semibold mb-2">Billing Address</h3>
                            <p className="text-white">Abc Street Here</p>
                            <p className="text-white"><strong>City:</strong> Abc</p>
                            <p className="text-white"><strong>Country:</strong> Abc</p>
                            <p className="text-white"><strong>State:</strong> Abc</p>
                            <p className="text-white"><strong>Zipcode:</strong> Abc</p>
                        </div>
                        <div>
                            <h3 className="text-[#d46b08] font-semibold mb-2">Shipping Address</h3>
                            <p className="text-white">Abc Street Here</p>
                            <p className="text-white"><strong>City:</strong> Abc</p>
                            <p className="text-white"><strong>Country:</strong> Abc</p>
                            <p className="text-white"><strong>State:</strong> Abc</p>
                            <p className="text-white"><strong>Zipcode:</strong> Abc</p>
                        </div>
                    </div>

                    <div className="max-w-xs ml-auto">
                        <Card title="SUMMARY" className="rounded-lg shadow-md">
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>$ 500.00</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Tax 0%</span>
                                <span>$ 05.00</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg mb-4">
                                <span>Total Grand</span>
                                <span>$ 1500.00</span>
                            </div>
                            <Button className="site-btn" type="primary" block>
                                Proceed To Checkout
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
            <section className="ethicsBoundary-bg">
                <ChooseInfoSection />
                <Footer />
            </section>
        </>
    );
};

export default OrderDetails;
