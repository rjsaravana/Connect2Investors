import { Card, Col, Row, Tag } from "antd";
import { useState } from "react";
import "./style.css";

const Dashboardpage: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h3 className="dashboard-title">Welcome to Connect2Investors!</h3>
      <Row style={{display:'flex', justifyContent:'space-evenly'}}>
        <Col xl={6} lg={6} md={24} sm={24}>
          <Card className="dashboard-card-title" hoverable={true}>
            <h6>No.of Investors</h6>
            <h2>20</h2>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <Tag className="dashboard-card-tags" color="purple">Year of 2023</Tag>
              <img className="dashboard-card-img" src="/assets/icons/savings.svg" alt="Img" />
            </div>
          </Card>
        </Col>

        <Col xl={6} lg={6} md={24} sm={24}>
          <Card className="dashboard-card-title" hoverable={true}>
            <h6>No.of Mentors</h6>
            <h2>20</h2>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <Tag className="dashboard-card-tags" color="purple">Year of 2023</Tag>
              <img className="dashboard-card-img" src="/assets/icons/partner_exchange.svg" alt="Img" />
            </div>
          </Card>
        </Col>

        <Col xl={6} lg={6} md={24} sm={24}>
          <Card className="dashboard-card-title" hoverable={true}>
            <h6>No.of Startup</h6>
            <h2>20</h2>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <Tag className="dashboard-card-tags" color="purple">Year of 2023</Tag>
              <img className="dashboard-card-img" src="/assets/icons/rocket_launch.svg" alt="Img" />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboardpage;
