import { Layout } from "antd"
import Navbar from "../navbar/navbar"
import { Outlet } from "react-router"

export const AppLayout:React.FC = ()=>{
    return (
        <Layout>
        <Navbar />
        <Layout className="app-container">
          <Layout className="app-layout" style={{marginTop:"5%",background:'#FEFEFE'}}>
            <Outlet />
          </Layout>
      </Layout>
    </Layout>
    )
}