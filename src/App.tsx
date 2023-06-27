import { ConfigProvider } from "antd";
import "./App.css";
import Login from "./app/auth/login";
import Navbar from "./app/navbar/navbar";
import Home from "./app/dashboard/home";
import AssignPage from "./app/dashboard/assignpage";
import { Routes, Route } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Meeting from "./app/Tabs/meeting";
import AdminPage from "./app/admin/adminpage";
import UpdatePage from "./app/admin/updatepage";
import { AppRoutes } from "./app/layout/router";

function App() {
  return (
    <ConfigProvider theme={{ hashed: false }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
