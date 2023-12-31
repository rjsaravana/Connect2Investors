import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const UpdatePage: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <>
      <div
      className="update-title">
        <h4>Update</h4>
        <Button>Cancel</Button>
      </div>

      <Card className="custom-card-design">
        <h5>Basic Info</h5>

        <Form layout="vertical" form={form}>
          <Row style={{ marginLeft: "50px" }}>
            <Col xl={8} lg={10} md={12} sm={24}>
              <Form.Item
                name="investorName"
                label="Investor Name"
                wrapperCol={{ span: 20 }}
              >
                <Input
                  placeholder="Investor Name"
                  className="input-box-bg"
                  maxLength={50}
                />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                wrapperCol={{ span: 20}}
              >
                <Input
                  placeholder="Phone Number"
                  className="input-box-bg"
                  maxLength={50}
                />
              </Form.Item>
              
            </Col>

            <Col xl={16} lg={14} md={12} sm={24}>
            
              <Form.Item
                name="investorUrl"
                label="Investor Url"
                wrapperCol={{ span: 21 }}
              >
                <Input
                  placeholder="Investor Url"
                  className="input-box-bg"
                  maxLength={50}
                  type="url"
                />
              </Form.Item>

              <Form.Item
                name="investorEmail"
                label="Investor Email"
                wrapperCol={{ span: 21 }}
              >
                <Input
                  placeholder="Investor Email"
                  className="input-box-bg"
                  maxLength={50}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="address"
            label="Investor Address"
            wrapperCol={{ span: 22 }}
            style={{ marginLeft: "50px" }}
          >
            <TextArea
              showCount
              maxLength={250}
              rows={5}
              autoComplete="off"
              placeholder="Investor Address"
            />
          </Form.Item>

          <Row style={{ marginLeft: "50px" }}>
            <Col xl={12} lg={10} md={12} sm={24}>
              <Form.Item
                name="country"
                label={<label className="">Country</label>}
                wrapperCol={{ span: 20 }}
              >
                <Select maxLength={50} placeholder="Select Country" />
              </Form.Item>

              <Form.Item
                name="contactPersonName"
                label="Contact Person Name"
                wrapperCol={{ span: 20 }}
              >
                <Input
                  placeholder="Contact Person Name"
                  className="input-box-bg"
                  maxLength={50}
                />
              </Form.Item>
            </Col>

            <Col xl={12} lg={14} md={12} sm={24}>
              <Form.Item name="state" label="State" wrapperCol={{ span: 20 }}>
                <Select maxLength={50} placeholder="Select State" />
              </Form.Item>

              <Form.Item
                name="sectorInterests"
                label="Sector Interests"
                wrapperCol={{ span: 20 }}
              >
                <Select maxLength={50} placeholder="Select Sector Interests" />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ marginLeft: "50px" }}>
            <Col xl={12} lg={14} md={12} sm={24}>
              <Form.Item
                name="investmentCategory"
                label="Investment Category"
                wrapperCol={{ span: 20 }}
              >
                <Select maxLength={50} placeholder="Select Category" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="commentsInterests"
            label="Comments/Interests"
            wrapperCol={{ span: 22 }}
            style={{ marginLeft: "50px" }}
          >
            <TextArea
              showCount
              maxLength={250}
              rows={5}
              autoComplete="off"
              placeholder="Enter Comments/Interests"
            />
          </Form.Item>
        </Form>
      </Card>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          paddingBottom: "50px",
        }}
      >
        <Button className="submit-btn">Submit</Button>
      </div>
    </>
  );
};

export default UpdatePage;
