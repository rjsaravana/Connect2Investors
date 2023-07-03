import {
  AimOutlined,
  EditOutlined,
  FlagOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Button, Col, Image, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

const InvestorInfo: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home/updatepage");
  };

  return (
    <Container style={{ maxWidth: "1350px" }}>
      <Row>
        <Col xl={24} lg={24} md={24} sm={24}>
          <div className="inestor-content">
            <div>
              <Image width={151} src="/assets/Ellipse6.png" />
            </div>

            <div>
              <div
                className="investor-title-para"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h4>Investor Name</h4>
                <Button onClick={handleClick}>
                  <EditOutlined />
                  Edit Info
                </Button>
              </div>
              <p className="investor-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type s
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: "70px" }}>
        <Col
          xl={8}
          lg={8}
          md={8}
          sm={24}
          className="contact-content blue-back-color"
        >
          <h3 style={{ marginLeft: "30px" }}>Contact details</h3>
          <h5>
            <MailOutlined style={{ marginRight: "15px" }} />
            vininshgskdksfnafghjjk2000@gmail.com
          </h5>
          <h5>
            <PhoneOutlined style={{ marginRight: "15px" }} />
            914567898529
          </h5>
        </Col>

        <Col
          xl={15}
          lg={15}
          md={15}
          sm={24}
          style={{ marginLeft: "54px" }}
          className="contact-content blue-back-color"
        >
          <h3 style={{ marginLeft: "20px" }}>Address</h3>
          <div className="address-content">
            <p>
              <img
                src="/assets/icons/gps.svg"
                alt="icon"
                style={{ marginRight: "20px", width: "4%" }}
              />
              Erode Fortrwzhertjryky is Lorem Ipsum?Erode Fortrwzhertjryky is
              Lorem Ipsum? Erode Fortrwzhertjryky is Lorem Ipsum?
            </p>
            <p>
              <GlobalOutlined
                style={{ marginRight: "20px", fontSize: "20px" }}
              />
              https://bfx-connect2investors-investor.web.app/on-boardinghttps://bfx-connect2investors-investor.web.app/on-boarding
            </p>
            <h6>
              <FlagOutlined style={{ marginRight: "20px", fontSize: "16px" }} />
              Tamil Nadu
            </h6>
          </div>
        </Col>
      </Row>

      <Row
        gutter={24}
        className="blue-back-color"
        style={{ marginTop: "40px" }}
      >
        <Col  xl={24}
          lg={24}
          md={24}
          sm={24}>
          <h3
            className="investor-details"
            style={{ marginLeft: "40px", marginTop: "40px" }}
          >
            Investor Details
          </h3>
          <div>
            <div className="investor-details-content">
              <label>Contact Person Name</label>
              <label className="input-vales" style={{ marginLeft: "200px" }}>
                Arun Karthick
              </label>
            </div>
            <div className="investor-details-content">
              <label>Sector Interests</label>
              <label className="input-vales" style={{ marginLeft: "250px" }}>
                sds
              </label>
            </div>
            <div className="investor-details-content">
              <label>Investment Category</label>
              <label className="input-vales" style={{ marginLeft: "208px" }}>
                semi
              </label>
            </div>
            <div
              className="investor-details-content"
              style={{ paddingBottom: "50px"}}
            >
              <label>Comments</label>
              <label className="input-vales-para">
                o is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                types
              </label>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InvestorInfo;
