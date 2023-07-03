import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

const Login: React.FC = () => {
  return (
    // <Container>
    <Row gutter={24} style={{ height: "100vh" }}>
      <Col className="login-background" xl={12} lg={12} md={24} sm={24}>
        <div className="login-image">
          <img src="/assets/interace-Logged-in.png" alt="Img" />
        </div>
        <p className="hello-text">Hello Again!</p>
        <p className="login-text">
          Nice to see you again! You have been missed!
        </p>
      </Col>

      <Col xl={12} lg={12} md={24} sm={24}>
        <div className="c2i-logo">
          <img
            style={{ width: "110px" }}
            src="/assets/logo/c2i-logo.png"
            alt="Img"
          />
          <img
            style={{ width: "150px" }}
            src="/assets/logo/connect2investors-logo.png"
            alt="Img"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card className="login-card">
            <Row>
              <Col xl={12} lg={12} md={24} sm={24}>
                <label className="email-text">Email</label>
                <Input
                  className="email-input"
                  placeholder="Email"
                  prefix={<MailOutlined style={{ fontSize: "25px" }} />}
                />
                <label className="password-text">Password</label>
                <Input
                  className="password-input"
                  placeholder="Password"
                  prefix={<LockOutlined style={{ fontSize: "25px" }} />}
                />
              </Col>
            </Row>

            <Link to="/home">
              <Button className="signup-btn" type="primary">
                SIGN UP
              </Button>
            </Link>
          </Card>
        </div>
      </Col>
    </Row>
    // </Container>
  );
};

export default Login;
