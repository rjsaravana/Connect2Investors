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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/assign-startup" element={<AssignPage />} />
        <Route path="/meeting-schedule" element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
