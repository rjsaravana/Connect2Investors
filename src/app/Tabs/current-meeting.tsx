import { Card, Col, Row, Image } from "antd";
import "./style.css";
import { CalendarOutlined, MessageOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

const CurrentMeeting: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/adminpage");
    };
  return (
    <>
      <Row>
        <Col span={11} style={{ border: "none" }} className="card-column">
          <Card className="dashboard-meeting-cards blue-background-cards" hoverable={true}>
            <div className="card-headers">
              <h4>Call with Hilda</h4>
              <MessageOutlined onClick={handleClick}
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

        <Col span={11} style={{ border: "none" }} className="card-column">
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
      </Row>
    </>
  );
};

export default CurrentMeeting;
