import { RocketOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import InvestorInfo from "./investorinfo";

const AdminPage: React.FC = () => {
  const [selectTab, setSelectTab] = useState<string>("1");
  console.log(selectTab);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label:<><RocketOutlined />Investor Info</>,
    },
    {
      key: "2",
      label:<><UserOutlined />Profile </>,
    },
  ];

  const onChange = (key: string) => {
    setSelectTab(key);
  };

  return (
    <>
      <Tabs
        className="meeting-tabs"
        style={{ marginTop: "40px" }}
        defaultActiveKey={selectTab}
        size="large"
        onChange={onChange}
        centered
        items={items}
      />

      {selectTab === "1" ? (
        <InvestorInfo />
      ) : selectTab === "2" ? (
        <InvestorInfo />
      ) : null}
    </>
  );
};
export default AdminPage;
