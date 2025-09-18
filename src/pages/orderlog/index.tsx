import { EyeOutlined } from "@ant-design/icons";
import { Button, Table, Tag } from "antd";
import React from "react";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router";
import { useGetOrderByUserQuery } from "../../redux/services/orderSlice";


const AboutUs: React.FC = () => {
    const navigate = useNavigate();

    const { data: orderData, isLoading } = useGetOrderByUserQuery({});


    const columns = [
        {
            title: "S.no",
            dataIndex: "sno",
            key: "sno",
            render: (_: any, __: any, index: number) => index + 1,
        },
        {
            title: "Order Id",
            dataIndex: "_id",
            key: "orderId",
        },
        {
            title: "Order Date",
            dataIndex: "createdAt",
            key: "orderDate",
            render: (date: string) => new Date(date).toLocaleDateString(),
        },
        {
            title: "Collection Name",
            dataIndex: "products",
            key: "title",
            render: (products: any[]) => products?.map((p) => p.collectionId?.name).join(", "),
        },
        {
            title: "Quantity",
            dataIndex: "products",
            key: "quantity",
            render: (products: any[]) =>
                products?.reduce((sum, p) => sum + (p.quantity || 1), 0),
        },
        {
            title: "Amount Paid",
            dataIndex: "totalAmount",
            key: "amount",
            render: (amount: number) => `$ ${amount.toFixed(2)}`,
        },
        {
            title: "Order Status",
            dataIndex: "status",
            key: "status",
            render: (status: string) => {
                let color = "";

                switch (status?.toLowerCase()) {
                    case "pending":
                        color = "red";
                        break;
                    case "confirmed":
                        color = "blue";
                        break;
                    case "dispatched":
                        color = "gold";
                        break;
                    case "delivered":
                        color = "green";
                        break;
                    case "cancelled":
                        color = "volcano";
                        break;
                    default:
                        color = "gray";
                }

                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: "Action",
            key: "action",
            render: (_: any, record: any) => (
                <Button
                    type="text"
                    icon={<EyeOutlined />}
                    onClick={() => navigate(`/track-order/${record._id}`)}
                />
            ),
        },
    ];


    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto p-6">
                <h2 className="text-center text-2xl font-semibold mb-6 text-65">Order Log</h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
                    <Table
                        columns={columns}
                        dataSource={orderData || []}
                        loading={isLoading}
                        pagination={{ pageSize: 6 }}
                        bordered
                    />
                </div>
            </div>
            <section className="ethicsBoundary-bg">
                <ChooseInfoSection />
                <Footer />
            </section>
        </>
    );
};

export default AboutUs;
