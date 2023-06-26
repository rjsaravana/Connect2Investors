import React, { useState } from "react";
import { Tabs, TabsProps } from "antd";
import CurrentMeeting from "./current-meeting";
import PastMeeting from "./past-meeting";
import UpcomingMeeting from "./upcoming-meeting";

const Meeting: React.FC = () => {
  const [selectTab, setSelectTab] = useState<string>("1");
  console.log(selectTab);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Current Meetings",
    },
    {
      key: "2",
      label: "Upcoming Meetings",
    },
    {
      key: "3",
      label: "Past Meetings",
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
        <CurrentMeeting />
      ) : selectTab === "2" ? (
        <UpcomingMeeting />
      ) : selectTab === "3" ? (
        <PastMeeting />
      ) : null}
    </>
  );
};
export default Meeting;
