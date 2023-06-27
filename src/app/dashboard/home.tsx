import { Card, Col, Row, Image, Modal } from "antd";
import "./style.css";
import { CalendarOutlined, MessageOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import ModalContent from "./modal/modal-content";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/assign-startup");
  };
  const hangleNav = () => {
    navigate("/meeting-schedule");
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <h3 className="dashboard-title">Welcome to Connect2Investors!</h3>
      <Row>
        <Col span={11} className="card-column">
          <div className="card-title">
            <h3>Startups</h3>
            <h6 onClick={handleClick}>View All</h6>
          </div>
          <Card className="dashboard-cards" hoverable={true}>
            <div className="card-content">
              <div>
                <Image width={90} src="./assets/Ellipse1.png" />
              </div>
              <div style={{ marginLeft: "30px" }} className="card-headers">
                <h4>1stCollab</h4>
                <h6>1stCollab@gmail.com</h6>
              </div>
            </div>
            <div className="card-mobile-deatails">
              <h5>+919798718368</h5>
              <h6 onClick={() => setOpen(true)}>Details</h6>
              <Modal
                title=""
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={900}
              >
              <ModalContent />
              </Modal>
            </div>
          </Card>

          <Card className="dashboard-cards blue-background-cards" hoverable={true}>
            <div className="card-content">
              <div>
                <Image width={90} src="./assets/Ellipse2.png" />
              </div>
              <div style={{ marginLeft: "30px" }} className="card-headers">
                <h4>V43 Digital Solution</h4>
                <h6>v43digitalsolution@gmail.com</h6>
              </div>
            </div>
            <div className="card-mobile-deatails">
              <h5>+919798718368</h5>
              <h6 onClick={() => setOpen(true)}>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards" hoverable={true}>
            <div className="card-content">
              <div>
                <Image width={90} src="./assets/Ellipse3.png"/>
              </div>
              <div style={{ marginLeft: "30px" }} className="card-headers">
                <h4>Digital Corporation</h4>
                <h6>digitalcorporation@gmail.com</h6>
              </div>
            </div>
            <div className="card-mobile-deatails">
              <h5>+919798718368</h5>
              <h6 onClick={() => setOpen(true)}>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards blue-background-cards" hoverable={true}>
            <div className="card-content">
              <div>
                <Image width={90} src="./assets/Ellipse4.png" />
              </div>
              <div style={{ marginLeft: "30px" }} className="card-headers">
                <h4>Mohan Startup</h4>
                <h6>mohanstartup@gmail.com</h6>
              </div>
            </div>
            <div className="card-mobile-deatails">
              <h5>+919798718368</h5>
              <h6 onClick={() => setOpen(true)}>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards" hoverable={true}>
            <div className="card-content">
              <div>
                <Image width={90} src="./assets/Ellipse5.png" />
              </div>
              <div style={{ marginLeft: "30px" }} className="card-headers">
                <h4>One co</h4>
                <h6>oneco@gmail.com</h6>
              </div>
            </div>
            <div className="card-mobile-deatails">
              <h5>+919798718368</h5>
              <h6 onClick={() => setOpen(true)}>Details</h6>
            </div>
          </Card>
        </Col>

        {/*------------------------------------------- Second Col----------------------------------------------------- */}

        <Col span={11} className="card-column">
          <div className="card-title">
            <h3>Meeting Schedule</h3>
            <h6 onClick={hangleNav}>View All</h6>
          </div>

          <Card className="dashboard-meeting-cards blue-background-cards" hoverable={true}>
            <div className="card-headers">
              <h4>Call with Hilda</h4>
              <MessageOutlined
                className="message-icon"
                style={{ marginTop: "-10px" }}
              />
              <h5>
                <CalendarOutlined
                  style={{ fontSize: "16px", marginRight: "10px" }}
                />
                21 Jul | 08:20-10:30
              </h5>
            </div>
          </Card>

          <Card className="dashboard-meeting-cards" hoverable={true}>
            <div className="card-headers">
              <h4>Conference Call</h4>
              <MessageOutlined
                className="message-icon"
                style={{ marginTop: "-10px" }}
              />
              <h5>
                <CalendarOutlined
                  style={{ fontSize: "16px", marginRight: "10px" }}
                />
                21 Jul | 08:20-10:30
              </h5>
            </div>
          </Card>

          <Card className="dashboard-meeting-cards blue-background-cards" hoverable={true}>
            <div className="card-headers">
              <h4>Lunch</h4>
              <MessageOutlined
                className="message-icon"
                style={{ marginTop: "-10px" }}
              />
              <h5>
                <CalendarOutlined
                  style={{ fontSize: "16px", marginRight: "10px" }}
                />
                21 Jul | 08:20-10:30
              </h5>
            </div>
          </Card>

          <Card className="dashboard-meeting-cards" hoverable={true}>
            <div className="card-headers">
              <h4>Conference Call</h4>
              <MessageOutlined
                className="message-icon"
                style={{ marginTop: "-10px" }}
              />
              <h5>
                <CalendarOutlined
                  style={{ fontSize: "16px", marginRight: "10px" }}
                />
                21 Jul | 08:20-10:30
              </h5>
            </div>
          </Card>

          <Card className="dashboard-meeting-cards blue-background-cards" hoverable={true}>
            <div className="card-headers">
              <h4>Call with Hilda</h4>
              <MessageOutlined
                className="message-icon"
                style={{ marginTop: "-10px" }}
              />
              <h5>
                <CalendarOutlined
                  style={{ fontSize: "16px", marginRight: "10px" }}
                />
                21 Jul | 08:20-10:30
              </h5>
            </div>
          </Card>

          <Card className="dashboard-meeting-cards" hoverable={true}>
            <div className="card-headers">
              <h4>Conference Call</h4>
              <MessageOutlined
                className="message-icon"
                style={{ marginTop: "-10px" }}
              />
              <h5>
                <CalendarOutlined
                  style={{ fontSize: "16px", marginRight: "10px" }}
                />
                21 Jul | 08:20-10:30
              </h5>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
