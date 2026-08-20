import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { Loader } from "../../components/loader";
import { useGetAllResourcesQuery } from "../../redux/services/resourceSlice";

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: resources, isLoading } = useGetAllResourcesQuery({});
  const privacyPolicy = resources?.find(
    (item: any) => item.name === "Privacy Policy",
  )?.content;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <section className=" text-white py-16 px-4 md:px-20">
        <div className="term">
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Col xs={23} md={18}>
              <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col lg={24}>
                  <div className="arrow-box">
                    <FaArrowLeftLong
                      className="arrow"
                      onClick={() => navigate(-1)}
                    />
                    <h3 className="main-heading">Privacy Policy</h3>
                  </div>
                </Col>
              </Row>
              <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col lg={24}>
                  <div
                    dangerouslySetInnerHTML={{ __html: privacyPolicy || "" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
      {/* Footer Section */}
      <section className="ethicsBoundary-bg border-t border-white/10 mt-auto">
        <ChooseInfoSection />
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;
