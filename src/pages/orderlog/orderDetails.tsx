import { Card } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useGetOrderByIdQuery } from "../../redux/services/orderSlice";

const OrderDetails: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetOrderByIdQuery({ id }, { skip: !id });

  const createdAt = data?.createdAt;
  const user = data?.user;
  const _id = data?._id;
  const status = data?.status;
  const totalAmount = data?.totalAmount || 0;
  const billingAddress = data?.billingAddress || {};
  const shippingAddress = data?.shippingAddress || {};

  const taxRate = 0.2; // 20% tax
  const subTotal = Math.round(totalAmount / (1 + taxRate));
  const taxAmount = totalAmount - subTotal;



  if (isLoading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-center text-2xl font-semibold mb-6 text-65">Order Details</h2>

        <div className="bg-[#83838340] shadow rounded-xl p-6 relative">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-white"><strong>Name:</strong> {user?.fullName || "N/A"}</p>
              <p className="text-white"><strong>Email:</strong> {user?.email || "N/A"}</p>
              <p className="text-white"><strong>Date:</strong> {createdAt ? new Date(createdAt).toLocaleString() : "N/A"}</p>
            </div>
            <div>
              <p className="text-white"><strong>Order ID:</strong> {_id}</p>
              <p className="text-white"><strong>Status:</strong>  {status}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-[#d46b08] font-semibold mb-2">Billing Address</h3>
              <p className="text-white"><strong>City:</strong> {billingAddress.city || "N/A"}</p>
              <p className="text-white"><strong>Country:</strong> {billingAddress.country || "N/A"}</p>
              <p className="text-white"><strong>State:</strong> {billingAddress.state || "N/A"}</p>
              <p className="text-white"><strong>Zipcode:</strong> {billingAddress.zipCode || "N/A"}</p>
            </div>
            <div>
              <h3 className="text-[#d46b08] font-semibold mb-2">Shipping Address</h3>
              <p className="text-white"><strong>City:</strong> {shippingAddress.city || "N/A"}</p>
              <p className="text-white"><strong>Country:</strong> {shippingAddress.country || "N/A"}</p>
              <p className="text-white"><strong>State:</strong> {shippingAddress.state || "N/A"}</p>
              <p className="text-white"><strong>Zipcode:</strong> {shippingAddress.zipCode || "N/A"}</p>
            </div>
          </div>

          <div className="max-w-xs ml-auto">
            <Card title="SUMMARY" className="rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$ {subTotal}.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax 20%</span>
                <span>$ {taxAmount}.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total Grand</span>
                <span>$ {totalAmount}.00</span>
              </div>
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
