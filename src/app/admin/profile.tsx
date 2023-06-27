import { Button, Card, Input, Select } from "antd";
import React from "react";

const Profile: React.FC = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <Card className="profile-card" hoverable={true}>
      <label className="profile-labelname">Name*</label>
      <Input className="card-select-input" />
      <label className="profile-labelname">E Mail*</label>
      <Input className="card-select-input" />
      <label className="profile-labelname">Mobile Number*</label>
      <div style={{ display: "flex" }}>
        <Select
          defaultValue="91"
          className="select-box"
          options={[{ value: "91", label: "91" }]}
        />
        <Input className="card-select-input" />
      </div>

      <div style={{ display: "flex",justifyContent:'center',marginTop:'50px'}}>
        <Button className="update-btn">Update</Button>
      </div>
    </Card>
  </div>
);

export default Profile;
