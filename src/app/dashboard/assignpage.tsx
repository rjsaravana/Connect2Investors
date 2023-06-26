import { Card, Col, Row, Image } from "antd";
import "./style.css";
import { CalendarOutlined, MessageOutlined } from "@ant-design/icons";

const AssignPage: React.FC = () => {
  return (
    <>
      <h3 className="dashboard-title">Assigned Startups</h3>
      <Row>
        <Col span={11} className="card-column">
          <div className="card-title">
            <h3>Startups</h3>
            <h6>View All</h6>
          </div>
          <Card className="dashboard-cards">
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
              <h6>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards blue-background-cards">
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
              <h6>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards">
            <div className="card-content">
              <div>
                <Image width={90} src="./assets/Ellipse3.png" />
              </div>
              <div style={{ marginLeft: "30px" }} className="card-headers">
                <h4>Digital Corporation</h4>
                <h6>digitalcorporation@gmail.com</h6>
              </div>
            </div>
            <div className="card-mobile-deatails">
              <h5>+919798718368</h5>
              <h6>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards blue-background-cards">
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
              <h6>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards">
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
              <h6>Details</h6>
            </div>
          </Card>
        </Col>

{/*------------------------------------------- Second Col----------------------------------------------------- */}

        <Col span={11} className="card-column">
          <div className="card-title">
            <h3>Startups</h3>
            <h6>View All</h6>
          </div>
          <Card className="dashboard-cards">
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
              <h6>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards blue-background-cards">
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
              <h6>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards">
            <div className="card-content">
              <div>
                <Image width={90} src="./assets/Ellipse3.png" />
              </div>
              <div style={{ marginLeft: "30px" }} className="card-headers">
                <h4>Digital Corporation</h4>
                <h6>digitalcorporation@gmail.com</h6>
              </div>
            </div>
            <div className="card-mobile-deatails">
              <h5>+919798718368</h5>
              <h6>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards">
            <div className="card-content">
              <div>
                <Image width={90} src="./assets/Ellipse3.png" />
              </div>
              <div style={{ marginLeft: "30px" }} className="card-headers">
                <h4>Digital Corporation</h4>
                <h6>digitalcorporation@gmail.com</h6>
              </div>
            </div>
            <div className="card-mobile-deatails">
              <h5>+919798718368</h5>
              <h6>Details</h6>
            </div>
          </Card>

          <Card className="dashboard-cards">
            <div className="card-content">
              <div>
                <Image width={90} src="./assets/Ellipse3.png" />
              </div>
              <div style={{ marginLeft: "30px" }} className="card-headers">
                <h4>Digital Corporation</h4>
                <h6>digitalcorporation@gmail.com</h6>
              </div>
            </div>
            <div className="card-mobile-deatails">
              <h5>+919798718368</h5>
              <h6>Details</h6>
            </div>
          </Card>
        </Col>
       
      </Row>
    </>
  );
};

export default AssignPage;
