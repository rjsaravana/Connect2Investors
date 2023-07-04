import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Meeting from "../Tabs/meeting";
import AdminPage from "../admin/adminpage";
import UpdatePage from "../admin/updatepage";
import AssignPage from "../dashboard/assignpage";
import Home from "../dashboard/home";
import Login from "../auth/login";
import { AppLayout } from "./app-layout";
import Dashboardpage from "../dashboard/dashboardpage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<AppLayout />}>
        <Route path="" element={<Home />} />
        <Route path="assign-startup" element={<AssignPage />} />
        <Route path="meeting-schedule" element={<Meeting />} />
        <Route path="adminpage" element={<AdminPage />} />
        <Route path="updatepage" element={<UpdatePage />} />
        <Route path="dashboardpage" element={<Dashboardpage />} />
      </Route>
    </Routes>
  );
};
