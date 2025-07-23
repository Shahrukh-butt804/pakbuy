import React from 'react';
import { Col, Row, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
// import './GeneMatrixComparisonTable.css';

const { Title } = Typography;

interface ComparisonData {
    key: string;
    feature: string;
    geneMatrix: string | boolean;
    twentythreeAndMe: string | boolean;
    genesight: string | boolean;
    clarityX: string | boolean;
    prenatal: string | boolean;
}

const data: ComparisonData[] = [
    {
        key: '1',
        feature: 'Focus Area',
        geneMatrix: 'Medication response',
        twentythreeAndMe: 'Medication response',
        genesight: 'Medication response',
        clarityX: 'Medication response',
        prenatal: 'Medication response'
    },
    {
        key: '2',
        feature: 'Genes Analyzed',
        geneMatrix: '30–50+',
        twentythreeAndMe: '100+',
        genesight: '100+',
        clarityX: '40+',
        prenatal: '100+'
    },
    {
        key: '3',
        feature: 'Clinical Relevance',
        geneMatrix: 'High (medication guidance)',
        twentythreeAndMe: 'High (medication guidance)',
        genesight: 'High (medication guidance)',
        clarityX: 'High (medication guidance)',
        prenatal: 'High (medication guidance)'
    },
    {
        key: '4',
        feature: 'Dosage & drug insights',
        geneMatrix: 'Dosage & drug insights',
        twentythreeAndMe: 'Dosage & drug insights',
        genesight: 'Dosage & drug insights',
        clarityX: 'Dosage & drug insights',
        prenatal: 'Dosage & drug insights'
    },
    {
        key: '5',
        feature: 'Ideal For',
        geneMatrix: 'Chronic illness, polypharmacy',
        twentythreeAndMe: 'Chronic illness, polypharmacy',
        genesight: 'Chronic illness, polypharmacy',
        clarityX: 'Chronic illness, polypharmacy',
        prenatal: 'Chronic illness, polypharmacy'
    },
    {
        key: '6',
        feature: 'Sample Report Preview',
        geneMatrix: true,
        twentythreeAndMe: true,
        genesight: true,
        clarityX: true,
        prenatal: true,
    },
];

const columns: ColumnsType<ComparisonData> = [
    {
        title: 'Feature',
        dataIndex: 'feature',
        key: 'feature',
        fixed: 'left',
        width: 200,
        ellipsis: true,
    },
    {
        title: 'Pharmacogenomics',
        dataIndex: 'geneMatrix',
        key: 'geneMatrix',
        align: 'center',
        render: (val: boolean | string) => {
            if (typeof val === 'boolean') {
                return val ? (
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                    <CloseCircleTwoTone twoToneColor="#ff4d4f" />
                );
            }
            return <span>{val}</span>;
        },
    },
    {
        title: 'Wellness',
        dataIndex: 'twentythreeAndMe',
        key: 'twentythreeAndMe',
        align: 'center',
        render: (val: boolean | string) => {
            if (typeof val === 'boolean') {
                return val ? (
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                    <CloseCircleTwoTone twoToneColor="#ff4d4f" />
                );
            }
            return <span>{val}</span>;
        },
    },
    {
        title: 'Mental Health',
        dataIndex: 'genesight',
        key: 'genesight',
        align: 'center',
        render: (val: boolean | string) => {
            if (typeof val === 'boolean') {
                return val ? (
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                    <CloseCircleTwoTone twoToneColor="#ff4d4f" />
                );
            }
            return <span>{val}</span>;
        },
    },
    {
        title: 'Cancer Risk',
        dataIndex: 'clarityX',
        key: 'clarityX',
        align: 'center',
        render: (val: boolean | string) => {
            if (typeof val === 'boolean') {
                return val ? (
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                    <CloseCircleTwoTone twoToneColor="#ff4d4f" />
                );
            }
            return <span>{val}</span>;
        },
    },
    {
        title: 'Prenatal',
        dataIndex: 'prenatal',
        key: 'prenatal',
        align: 'center',
        render: (val: boolean | string) => {
            if (typeof val === 'boolean') {
                return val ? (
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                    <CloseCircleTwoTone twoToneColor="#ff4d4f" />
                );
            }
            return <span>{val}</span>;
        },
    },
];

const GeneMatrixComparisonTable: React.FC = () => {
    return (
        <Row justify={"center"}>
            <Col lg={21} md={23} sm={23} xs={23}>
                <div className="comparison-container comparing-table-box">
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            Comparing Test Features
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <Title level={2} className="sec-title_heading">
                            Understand what each genetic test offers
                        </Title>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        scroll={{ x: 'max-content' }}
                        bordered
                        rowClassName={() => 'comparison-row'}
                    />
                </div>
            </Col>
        </Row>
    );
};

export default GeneMatrixComparisonTable;
