import { EyeOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useGetOrderByUserQuery } from "../../redux/services/orderSlice";

const MyOrders: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: orderData, isLoading } = useGetOrderByUserQuery(
    {},
    { refetchOnMountOrArgChange: true, pollingInterval: 3000 },
  );

  const columns = [
    {
      title: "S.no",
      dataIndex: "sno",
      key: "sno",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "orderDate",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Collections",
      dataIndex: "products",
      key: "title",
      render: (products: any[]) =>
        products?.map((p) => p.collectionId?.name).join(", "),
    },
    {
      title: "Quantity",
      dataIndex: "products",
      key: "quantity",
      render: (products: any[]) =>
        products?.reduce((sum, p) => sum + (p.quantity || 1), 0),
    },
    {
      title: "sub Total",
      dataIndex: "subTotal",
      key: "amount",
      render: (amount: number) => (
        <p className="whitespace-nowrap">{amount.toFixed(2)}</p>
      ),
    },
    {
      title: "discount",
      dataIndex: "discountAmount",
      key: "amount",
      render: (amount: number) => (
        <p className="whitespace-nowrap">{amount.toFixed(2)}</p>
      ),
    },
    {
      title: "Amount Paid",
      dataIndex: "totalAmount",
      key: "amount",
      render: (amount: number) => (
        <p className="whitespace-nowrap">{amount.toFixed(2)}</p>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const statusStyles: Record<
          string,
          { bg: string; text: string; dot: string }
        > = {
          pending: {
            bg: "rgba(234, 179, 8, 0.12)",
            text: "#eab308",
            dot: "#eab308",
          },
          confirmed: {
            bg: "rgba(59, 130, 246, 0.12)",
            text: "#60a5fa",
            dot: "#60a5fa",
          },
          dispatched: {
            bg: "rgba(217, 70, 239, 0.12)",
            text: "#e879f9",
            dot: "#e879f9",
          },
          delivered: {
            bg: "rgba(34, 197, 94, 0.12)",
            text: "#4ade80",
            dot: "#4ade80",
          },
          cancelled: {
            bg: "rgba(239, 68, 68, 0.12)",
            text: "#f87171",
            dot: "#f87171",
          },
        };

        const key = status?.toLowerCase() ?? "";
        const style = statusStyles[key] ?? {
          bg: "rgba(255, 255, 255, 0.08)",
          text: "#a3a3a3",
          dot: "#a3a3a3",
        };

        return (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "9999px",
              backgroundColor: style.bg,
              color: style.text,
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "capitalize",
              letterSpacing: "0.02em",
              border: `1px solid ${style.text}33`,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                backgroundColor: style.dot,
              }}
            />
            {status}
          </span>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button
          type="text"
          icon={<EyeOutlined style={{ color: "#ffffff" }} />}
          onClick={() => navigate(`/track-order/${record._id}`)}
        />
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6  min-h-[60vh]">
        <h2 className="text-center text-3xl font-bold mb-8 text-[#C97873] tracking-wide">
          Order Log
        </h2>
        <div className="rounded-2xl shadow-2xl overflow-hidden p-4 border border-[#C97873]/20">
          <Table
            columns={columns}
            dataSource={orderData || []}
            loading={isLoading}
            pagination={{ pageSize: 6 }}
            rowKey="_id"
            className="order-log-table"
          />
        </div>
      </div>
      <section className="bg-[#0d0d0d]">
        <ChooseInfoSection />
        <Footer />
      </section>
    </>
  );
};

export default MyOrders;
