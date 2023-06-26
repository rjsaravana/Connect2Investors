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
    <Header className="header-nav">
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

      <div className="nav">
        <div className="nav-right">
          <ul className="ant-menu ant-menu-root ant-menu-horizontal">
            <li className="ant-menu-item ant-menu-item-only-child">
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
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
