import { EyeOutlined } from "@ant-design/icons";
import { Button, Table, Tag } from "antd";
import React from "react";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router";


const AboutUs: React.FC = () => {
    const navigate = useNavigate();
    const columns = [
        {
            title: "S.no",
            dataIndex: "sno",
            key: "sno",
        },
        {
            title: "Order Id",
            dataIndex: "orderId",
            key: "orderId",
        },
        {
            title: "Order Date",
            dataIndex: "orderDate",
            key: "orderDate",
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Amount Paid",
            dataIndex: "amount",
            key: "amount",
            render: (amount: number) => `$ ${amount.toFixed(2)}`,
        },
        {
            title: "Order Status",
            dataIndex: "status",
            key: "status",
            render: (status: string) => {
                let color = "";
                switch (status) {
                    case "Pending":
                        color = "red";
                        break;
                    case "In Progress":
                        color = "gold";
                        break;
                    case "Delivered":
                        color = "green";
                        break;
                    default:
                        color = "gray";
                }
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_: any, record: any) => (
                <Button
                    type="text"
                    icon={<EyeOutlined />}
                    onClick={() => navigate(`/orderlog/${record.orderId}`)}
                />
            ),
        }
    ];

    const data = [
        {
            key: "1",
            sno: "01",
            orderId: "001",
            orderDate: "mm/dd/yy",
            title: "Product Name",
            quantity: 5,
            amount: 150,
            status: "Pending",
        },
        {
            key: "2",
            sno: "02",
            orderId: "002",
            orderDate: "mm/dd/yy",
            title: "Product Name",
            quantity: 5,
            amount: 150,
            status: "In Progress",
        },
        {
            key: "3",
            sno: "03",
            orderId: "003",
            orderDate: "mm/dd/yy",
            title: "Product Name",
            quantity: 5,
            amount: 150,
            status: "In Progress",
        },
        {
            key: "4",
            sno: "04",
            orderId: "004",
            orderDate: "mm/dd/yy",
            title: "Product Name",
            quantity: 5,
            amount: 150,
            status: "Delivered",
        },
        {
            key: "5",
            sno: "05",
            orderId: "005",
            orderDate: "mm/dd/yy",
            title: "Product Name",
            quantity: 5,
            amount: 150,
            status: "In Progress",
        },
        {
            key: "6",
            sno: "06",
            orderId: "006",
            orderDate: "mm/dd/yy",
            title: "Product Name",
            quantity: 5,
            amount: 150,
            status: "Pending",
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
                        dataSource={data}
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
