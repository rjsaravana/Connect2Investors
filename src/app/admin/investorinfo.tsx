import { EditOutlined } from "@ant-design/icons";
import "./style.css";
import { Button, Image } from "antd";

const InvestorInfo: React.FC = () => {
  return (
    <div className="inestor-content">
      <div>
        <Image width={90} src="./assets/Ellipse6.png" />
      </div>
      <div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <h4>Investor Name</h4>
          <Button>
            <EditOutlined />
            Edit Info
          </Button>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type s
        </p>
      </div>
    </div>
  );
};

export default InvestorInfo;
