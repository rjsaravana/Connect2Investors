import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Meeting from "../Tabs/meeting";
import AdminPage from "../admin/adminpage";
import UpdatePage from "../admin/updatepage";
import AssignPage from "../dashboard/assignpage";
import Home from "../dashboard/home";
import Login from "../auth/login";

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <Layout className="app-container">
        <Layout className="app-layout">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/assign-startup" element={<AssignPage />} />
            <Route path="/meeting-schedule" element={<Meeting />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/updatepage" element={<UpdatePage />} />
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  );
};
