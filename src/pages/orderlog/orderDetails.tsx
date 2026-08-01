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
  const subTotal = data?.subTotal || 0;
  const discountAmount = data?.discountAmount || 0;
  const totalAmount = data?.totalAmount || 0;
  const billingAddress = data?.billingAddress || {};
  const shippingAddress = data?.shippingAddress || {};
  const products = data?.products || [];

  const statusStyles: Record<string, { bg: string; text: string }> = {
    pending: { bg: "rgba(234, 179, 8, 0.12)", text: "#eab308" },
    confirmed: { bg: "rgba(59, 130, 246, 0.12)", text: "#60a5fa" },
    dispatched: { bg: "rgba(217, 70, 239, 0.12)", text: "#e879f9" },
    delivered: { bg: "rgba(34, 197, 94, 0.12)", text: "#4ade80" },
    cancelled: { bg: "rgba(239, 68, 68, 0.12)", text: "#f87171" },
  };
  const statusStyle = statusStyles[status?.toLowerCase()] ?? {
    bg: "rgba(255,255,255,0.08)",
    text: "#a3a3a3",
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh] text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Header />
 <div className="mx-auto p-6 md:px-24 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2a2a2a]">
  <h2 className="text-center text-2xl font-semibold mb-6 text-[#d17f89]">
    Order Details
  </h2>

  <div className="border border-white/10 shadow rounded-xl p-6 relative bg-transparent">
    {/* Top summary row */}
    <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 pb-6 border-b border-white/10">
      <div className="space-y-1">
        <p className="text-white">
          <span className="text-gray-400">Name:</span> {user?.fullName || "N/A"}
        </p>
        <p className="text-white">
          <span className="text-gray-400">Email:</span> {user?.email || "N/A"}
        </p>
        <p className="text-white">
          <span className="text-gray-400">Date:</span>{" "}
          {createdAt ? new Date(createdAt).toLocaleString() : "N/A"}
        </p>
      </div>
      <div className="space-y-1 md:text-right">
        <p className="text-white">
          <span className="text-gray-400">Order ID:</span>{" "}
          <span className="font-mono text-sm">{_id}</span>
        </p>
        <div className="flex md:justify-end">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 14px",
              borderRadius: "9999px",
              backgroundColor: "transparent",
              color: statusStyle.text,
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "capitalize",
              border: `1px solid ${statusStyle.text}33`,
            }}
          >
            {status || "N/A"}
          </span>
        </div>
      </div>
    </div>

    {/* Addresses */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-white/10">
      <div>
        <h3 className="text-[#d17f89] font-semibold mb-3 uppercase text-sm tracking-wider">
          Billing Address
        </h3>
        <div className="space-y-1 text-sm">
          <p className="text-white">
            {billingAddress.firstName || billingAddress.lastName
              ? `${billingAddress.firstName ?? ""} ${billingAddress.lastName ?? ""}`.trim()
              : "N/A"}
          </p>
          {billingAddress.email && <p className="text-gray-300">{billingAddress.email}</p>}
          {billingAddress.phone && <p className="text-gray-300">{billingAddress.phone}</p>}
          <p className="text-gray-300">{billingAddress.address || "N/A"}</p>
          <p className="text-gray-300">
            {[billingAddress.city, billingAddress.state, billingAddress.zipCode]
              .filter(Boolean)
              .join(", ") || "N/A"}
          </p>
          <p className="text-gray-300">{billingAddress.country || "N/A"}</p>
        </div>
      </div>

      <div>
        <h3 className="text-[#d17f89] font-semibold mb-3 uppercase text-sm tracking-wider">
          Shipping Address
        </h3>
        <div className="space-y-1 text-sm">
          <p className="text-white">
            {shippingAddress.firstName || shippingAddress.lastName
              ? `${shippingAddress.firstName ?? ""} ${shippingAddress.lastName ?? ""}`.trim()
              : "N/A"}
          </p>
          {shippingAddress.email && <p className="text-gray-300">{shippingAddress.email}</p>}
          {shippingAddress.phone && <p className="text-gray-300">{shippingAddress.phone}</p>}
          <p className="text-gray-300">{shippingAddress.address || "N/A"}</p>
          <p className="text-gray-300">
            {[shippingAddress.city, shippingAddress.state, shippingAddress.zipCode]
              .filter(Boolean)
              .join(", ") || "N/A"}
          </p>
          <p className="text-gray-300">{shippingAddress.country || "N/A"}</p>
        </div>
      </div>
    </div>

    {/* Order items */}
    <div className="mb-8">
      <h3 className="text-[#d17f89] font-semibold mb-4 uppercase text-sm tracking-wider">
        Items
      </h3>
      <div className="space-y-3">
        {products.map((item: any, index: number) => {
          const collection = item.collectionId;
          return (
            <div
              key={item._id || index}
              className="flex items-center justify-between gap-4 p-3 rounded-lg bg-transparent border border-white/10"
            >
              <div className="flex items-center gap-4">
                <img
                  src={collection?.image}
                  alt={collection?.name}
                  className="w-14 h-14 rounded-lg object-cover border border-white/10"
                />
                <div>
                  <p className="text-white font-medium">{collection?.name || "N/A"}</p>
                  <p className="text-xs text-gray-400">{collection?.title}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-300">Qty: {item.quantity}</p>
                <p className="text-white font-semibold">
                  $ {(collection?.CollectionPrice * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
        {products.length === 0 && (
          <p className="text-sm text-gray-500">No items found for this order.</p>
        )}
      </div>
    </div>

    {/* Summary */}
    <div className="max-w-xs ml-auto">
      <div className="rounded-lg shadow-md bg-transparent border border-white/10 p-4">
        <h4 className="text-[#d17f89] font-semibold uppercase text-xs tracking-wider mb-3">
          Summary
        </h4>
        <div className="flex justify-between mb-2 text-sm text-gray-300">
          <span>Subtotal</span>
          <span>$ {subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm text-gray-300">
          <span>Discount</span>
          <span>
            <span className="text-red-400">-</span> $ {discountAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-3 mt-2 border-t border-white/10 text-white">
          <span>Total</span>
          <span>$ {totalAmount.toFixed(2)}</span>
        </div>
      </div>
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
