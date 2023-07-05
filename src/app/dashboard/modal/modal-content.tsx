import Table, { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import "../style.css";

interface DataType {
  date: any;
  amount: any;
  description: any;
  created: any;
}

const ModalContent: React.FC = () => {


  const [modal1Open, setModal1Open] = useState(false);


  const columns: ColumnsType<DataType> = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "Created By",
      key: "created",
      dataIndex: "created",
    },
  ];

  const data: DataType[] = [
    {
    
      date: "Jun 22,2023, 10:53",
      amount: "Rs.60,000",
      description: "It is a long established fact that a reader will be",
      created:"Admin",

    },
    {
        date: "Jun 22,2023, 10:53",
        amount: "Rs.60,000",
        description: "It is a long established fact that a reader will be",
        created:"Admin",
    },
    {
        date: "Jun 22,2023, 10:53",
        amount: "Rs.60,000",
        description: "It is a long established fact that a reader will be",
        created:"Admin",
    },
    {
        date: "Jun 22,2023, 10:53",
        amount: "Rs.60,000",
        description: "It is a long established fact that a reader will be",
        created:"Admin",
    },
    {
        date: "Jun 22,2023, 10:53",
        amount: "Rs.60,000",
        description: "It is a long established fact that a reader will be",
        created:"Admin",
    },
    {
        date: "Jun 22,2023, 10:53",
        amount: "Rs.60,000",
        description: "It is a long established fact that a reader will be",
        created:"Admin",
    },
  ];

  return (
    <>
      <div>
        <h2 className="pop-title">Startup Name Fund Transfer List</h2>
      </div>

      <Table
        style={{padding:'20px'}}
        columns={columns}
        dataSource={data}
        className="pop-table"
      />
    </>
  );
};

export default ModalContent;
