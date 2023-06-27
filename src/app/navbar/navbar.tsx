import React from "react";
import "./style.css";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { AppstoreOutlined, CalendarOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const Navbar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
    <Header
      className="header-nav"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "50px", marginLeft: "25px", marginTop: "10px" }}
          src="./assets/logo/c2i-logo.png"
          alt="Img"
        />
        <img
          style={{ width: "100px" }}
          src="./assets/logo/connect2investors-logo.png"
          alt="Img"
        />
      </div>

      <Menu style={{ display: "flex", flexDirection:'row' , alignItems: "center" }} theme="dark"
          mode="horizontal">
            <ul>
              <li>
                {" "}
                <h4>
                  <AppstoreOutlined />
                  Dashboard
                </h4>
              </li>
              <li>
                <h4>
                  <CalendarOutlined />
                  Meetings
                </h4>
              </li>
            </ul>
            <li>
              <h4>Admin</h4>
            </li>
      </Menu>
    </Header>
    </Layout>         
  );
};

export default Navbar;
