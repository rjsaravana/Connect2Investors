import { ConfigProvider } from "antd";
import "./App.css";
import Login from "./app/auth/login";
import Navbar from "./app/navbar/navbar";
import Home from "./app/dashboard/home";
import AssignPage from "./app/dashboard/assignpage";

function App() {
  return (
    <ConfigProvider theme={{ hashed: false }}>
      {/* <Login /> */}
      {/* <Navbar /> */}
      <Home />
      {/* <AssignPage /> */}
    </ConfigProvider>
  );
}

export default App;
