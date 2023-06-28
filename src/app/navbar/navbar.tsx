import React from "react";
import "./style.css";
import { Dropdown, Layout, Space, theme } from "antd";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
  UserOutlined,
  DownOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => navigate("/home/adminpage")}
        >
          <EditOutlined style={{ marginRight: "5px" }} /> Edit Profile
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => navigate("/")}
        >
          <LogoutOutlined style={{ marginRight: "5px" }} /> Log Out
        </a>
      ),
      key: "1",
    },
  ];

  const hangleNav = () => {
    navigate("/login");
  };

  return (
    <Layout className="layout">
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
            src="/assets/logo/c2i-logo.png"
            alt="Img"
          />
          <img
            style={{ width: "100px" }}
            src="/assets/logo/connect2investors-logo.png"
            alt="Img"
          />
        </div>

        <Space className="nav-content">
          <h4>
            <AppstoreOutlined style={{ marginRight: "6px" }} />
            Dashboard
          </h4>
          <h4  onClick={() => navigate("/home/meeting-schedule")}>
            <CalendarOutlined style={{ marginRight: "6px" }} />
            Meetings
          </h4>

          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <UserOutlined />
                Admin
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      </Header>
    </Layout>
  );
};

export default Navbar;
