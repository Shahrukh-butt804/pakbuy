import React from 'react';
import { Col, Row, Typography, Tooltip } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
// import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { EnvironmentOutlined } from "@ant-design/icons";
// import './GeneMatrixComparisonTable.css';
import { ImageUrl } from '../../utils/Functions';

const { Title } = Typography;

// interface ComparisonData {
//     key: string;
//     feature: string;
//     geneMatrix: boolean;
//     twentythreeAndMe: boolean;
//     genesight: boolean;
//     clarityX: boolean;
// }

// const data: ComparisonData[] = [
//     { key: '1', feature: 'CLIA Accredited', geneMatrix: true, twentythreeAndMe: false, genesight: true, clarityX: true },
//     { key: '2', feature: 'FDA Compliant Device', geneMatrix: true, twentythreeAndMe: false, genesight: true, clarityX: true },
//     { key: '3', feature: 'USA Made MassARRay', geneMatrix: true, twentythreeAndMe: false, genesight: false, clarityX: true },
//     { key: '4', feature: 'Onsite Laboratory', geneMatrix: true, twentythreeAndMe: false, genesight: false, clarityX: false },
//     { key: '5', feature: 'Oracle 3DES Encryption', geneMatrix: true, twentythreeAndMe: false, genesight: false, clarityX: false },
//     { key: '6', feature: 'HIPAA Compliant', geneMatrix: true, twentythreeAndMe: false, genesight: true, clarityX: true },
//     { key: '7', feature: 'Insurance Accepted', geneMatrix: true, twentythreeAndMe: false, genesight: true, clarityX: false },
//     { key: '8', feature: 'FSA/HSA', geneMatrix: true, twentythreeAndMe: true, genesight: false, clarityX: true },
// ];

// const columns: ColumnsType<ComparisonData> = [
//     {
//         title: 'Feature',
//         dataIndex: 'feature',
//         key: 'feature',
//         fixed: 'left',
//         width: 200,
//         ellipsis: true,
//     },
//     {
//         title: <img src={ImageUrl("tablelogo1.png")} alt="Gene Matrix" className="h-8 mx-auto" />,
//         dataIndex: 'geneMatrix',
//         key: 'geneMatrix',
//         align: 'center',
//         render: (val: boolean) =>
//             val ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#ff4d4f" />,
//     },
//     {
//         title: <img src={ImageUrl("tablelogo2.png")} alt="Gene Matrix" className="h-8 mx-auto" />,
//         dataIndex: 'twentythreeAndMe',
//         key: 'twentythreeAndMe',
//         align: 'center',
//         render: (val: boolean) =>
//             val ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#ff4d4f" />,
//     },
//     {
//         title: <img src={ImageUrl("tablelogo3.png")} alt="Gene Matrix" className="h-8 mx-auto" />,
//         dataIndex: 'genesight',
//         key: 'genesight',
//         align: 'center',
//         render: (val: boolean) =>
//             val ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#ff4d4f" />,
//     },
//     {
//         title: <img src={ImageUrl("tablelogo4.png")} alt="Gene Matrix" className="h-8 mx-auto" />,
//         dataIndex: 'clarityX',
//         key: 'clarityX',
//         align: 'center',
//         render: (val: boolean) =>
//             val ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#ff4d4f" />,
//     },
// ];

interface Pointer {
    id: number;
    top: string;
    left: string;
    name: string;
    link: string;
}

const GeneMatrixComparisonTable: React.FC = () => {

    const pointers: Pointer[] = [
        { id: 1, top: "30%", left: "70%", name: "Gene Matrix Štukljeva cesta 46, 1000 Ljubljana, Slovenia", link: "https://maps.app.goo.gl/s9TLiuJLzpNav68TA" },
        { id: 2, top: "50%", left: "60%", name: "Gene Matrix 1046 W Kinzie St, Suite 100E, Chicago, IL 60642", link: "https://maps.app.goo.gl/ePYccbhQEStwjHzb6" },
        { id: 3, top: "70%", left: "30%", name: "Gene Matrix 7456 S State Rd, Suite 204, Bedford Park, IL 60638", link: "https://maps.app.goo.gl/c5PMk6tRoKYN7jY56" },
        { id: 4, top: "30%", left: "50%", name: "Gene Matrix 29-ti Noemvri Rd 36, 1000 Skopje, North Macedonia", link: "https://maps.app.goo.gl/7Q3TtVWQXGtkXDjL9" },
        { id: 5, top: "20%", left: "20%", name: "Gene Matrix Rruga E Kavajes 116, Tiranë 1001, Albania", link: "https://maps.app.goo.gl/oSJhiEyyPeM1NYM1A" },
        { id: 6, top: "40%", left: "80%", name: "Gene Matrix 1375 W Fulton St, Suite 545, Chicago, IL 60607", link: "https://maps.app.goo.gl/Lex3fpuaqWPT7V8d8" },
        { id: 7, top: "30%", left: "20%", name: "Gene Matrix Manastirski Livadi, ul. Byalo Pole 16A, 1618 Sofia, Bulgaria", link: "https://maps.app.goo.gl/T5LaeZ33zFN84sEY7" },
        { id: 8, top: "15%", left: "80%", name: "Gene Matrix 2401 Plum Grove Rd Suite 200, Palatine, IL 60067", link: "https://maps.app.goo.gl/AoUWMP7FH3G9p6RW7" },
        { id: 9, top: "80%", left: "90%", name: "Gene Matrix 100 Crescent Ct suite 700, Dallas, TX 75201", link: "https://maps.app.goo.gl/zg6x9NsD2picHaym6" },
    ];

    return (
        <Row justify={"center"}>
            <Col lg={21} md={23} sm={23} xs={23}>
                <div className="comparison-container">
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            Our Test kits
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <Title level={2} className="sec-title_heading">
                            The Gene Matrix Difference
                        </Title>
                    </div>

                    <div className="map-container">
                        {/* <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1600px-The_Earth_seen_from_Apollo_17.jpg"
                            alt="World Map"
                            className="map-image"
                        /> */}

                        <img
                            src={ImageUrl("m1.png")}
                            alt="Gene Matrix DNA Testing Kit"
                            className="map-image"
                        />


                        {pointers.map((point) => {
  const nameParts = point.name.startsWith("Gene Matrix")
    ? point.name.replace("Gene Matrix", "").trim()
    : null;

  return (
    <Tooltip
      key={point.id}
      placement="top"
      title={
        nameParts ? (
          <>
            Gene Matrix<br />
            {nameParts}
          </>
        ) : (
          point.name
        )
      }
    >
      <EnvironmentOutlined
        className="map-pointer-icon"
        style={{ top: point.top, left: point.left }}
        onClick={() => window.open(point.link, "_blank")}
      />
    </Tooltip>
  );
})}
                    </div>


                    {/*                     
                    <img
                        src={ImageUrl("worldmap.png")}
                        alt="Gene Matrix DNA Testing Kit"
                        className="object-cover img-fluid"
                    /> */}

                    {/* <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        scroll={{ x: 'max-content' }}
                        bordered
                        rowClassName={() => 'comparison-row'}
                    /> */}
                </div>
            </Col>
        </Row>
    );
};

export default GeneMatrixComparisonTable;
