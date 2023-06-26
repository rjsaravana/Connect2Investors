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
import { Container } from "@mui/material";

const InvestorInfo: React.FC = () => {
  return (
    <Container style={{ maxWidth: "1350px" }}>
      <div className="inestor-content">
        <div>
          <Image width={151} src="./assets/Ellipse6.png" />
        </div>
        <div>
          <div
            className="investor-title-para"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h4>Investor Name</h4>
            <Button>
              <EditOutlined />
              Edit Info
            </Button>
          </div>
          <p className="investor-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type s
          </p>
        </div>
      </div>

      <Row gutter={24} style={{ marginTop: "70px" }}>
        <Col span={9} className="contact-content blue-back-color">
          <h3 style={{marginLeft:'30px'}}>Contact details</h3>
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
          span={14}
          style={{ marginLeft: "30px" }}
          className="contact-content blue-back-color"
        >
          <h3 style={{ marginLeft: "20px" }}>Address</h3>
          <div className="address-content">
            <p>
              <AimOutlined style={{ marginRight: "20px", fontSize: "20px" }} />
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
              <FlagOutlined style={{ marginRight: "20px", fontSize: "20px" }} />
              Tamil Nadu
            </h6>
          </div>
        </Col>
      </Row>

      <Row gutter={24} className="blue-back-color" style={{ marginTop: "40px" }}>
        <h3 className="investor-details" style={{marginLeft:'40px',marginTop:'40px'}}>Investor Details</h3>
        <div>
          <div className="investor-details-content">
            <h5>Contact Person Name</h5>
            <h6>Arun Karthick</h6>
          </div>
          <div className="investor-details-content">
            <h5>Sector Interests</h5>
            <h6>sds</h6>
          </div>
          <div className="investor-details-content">
            <h5>Investment Category</h5>
            <h6>semi</h6>
          </div>
          <div className="investor-details-content">
            <h5>Comments</h5>
            <p>
              o is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type s
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default InvestorInfo;
