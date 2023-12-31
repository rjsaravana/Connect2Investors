import { Card, Col, Row, Image } from "antd";
import "./style.css";
import { CalendarOutlined, MessageOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

const UpcomingMeeting: React.FC = () => {
  return (
    <>
      <Row>
        <Col xl={11} lg={11} md={24} sm={24} style={{ border: "none" }} className="card-column">
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

        </Col>

        {/*------------------------------------------- Second Col----------------------------------------------------- */}

        <Col xl={11} lg={11} md={24} sm={24} style={{ border: "none" }} className="card-column">
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
        </Col>
      </Row>
    </>
  );
};

export default UpcomingMeeting;
