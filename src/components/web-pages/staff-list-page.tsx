"use client";

import React, { useState } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Tag,
  Checkbox,
  Typography,
  Card,
  Tooltip,
  ConfigProvider,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  EyeOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import EmployeeDetailsModal from "../Modal/EmployeeDetailsModal";
import { toast } from "sonner";
import CreateProfileModal from "../Modal/CreateProfileModal";

const { Title } = Typography;

interface StaffMember {
  key: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  designation: string;
  status: "active" | "inactive";
}

const staffData: StaffMember[] = [
  {
    key: "1",
    id: "MM4178MRV2",
    name: "Admin Humphrey",
    email: "mr101@gmail.ru",
    phone: "(+33)7 00 55 59 27",
    designation: "Sales executive",
    status: "active",
  },
  {
    key: "2",
    id: "AB4578DCD2",
    name: "Siphokazi Selebe",
    email: "mr101@gmail.ru",
    phone: "(+33)7 00 55 59 27",
    designation: "Sales executive",
    status: "active",
  },
  {
    key: "3",
    id: "FF4578EDD4",
    name: "Alison Moloi",
    email: "mr101@gmail.ru",
    phone: "(+33)7 00 55 59 27",
    designation: "Sales executive",
    status: "inactive",
  },
  {
    key: "4",
    id: "BB4578EFD2",
    name: "Mr. Nadir",
    email: "xterris@gmail.com",
    phone: "(+33)7 00 55 59 27",
    designation: "Manager",
    status: "active",
  },
  {
    key: "5",
    id: "FF4578EDD4",
    name: "Babalwa Moloi",
    email: "irnabela@gmail.com",
    phone: "(+33)7 00 55 59 27",
    designation: "Manager",
    status: "active",
  },
  {
    key: "6",
    id: "FH4578ERV2",
    name: "Rashied Naaido",
    email: "codence@gmail.com",
    phone: "(+33)7 00 55 59 27",
    designation: "Manager",
    status: "active",
  },
  {
    key: "7",
    id: "CY6790FJF7",
    name: "Candice Ryan",
    email: "quasiah@gmail.com",
    phone: "(+33)7 00 55 59 27",
    designation: "Manager",
    status: "active",
  },
  {
    key: "8",
    id: "MM4178MRV2",
    name: "Mark Russell",
    email: "xeno@yandex.ru",
    phone: "(+33)7 00 55 59 27",
    designation: "Manager",
    status: "active",
  },
  {
    key: "9",
    id: "FH4578ERV2",
    name: "Sharief Isaacs",
    email: "redaniel@gmail.com",
    phone: "(+33)7 00 55 59 27",
    designation: "Manager",
    status: "active",
  },
  {
    key: "10",
    id: "FF4578EDD4",
    name: "Asad Ujjaman",
    email: "warn@mail.ru",
    phone: "(+33)7 00 55 59 27",
    designation: "Sales executive",
    status: "active",
  },
  {
    key: "11",
    id: "FH4578ERV2",
    name: "Shameemah Salie",
    email: "joie@gmail.com",
    phone: "(+33)7 00 55 59 27",
    designation: "Sales executive",
    status: "active",
  },
  {
    key: "12",
    id: "GM4134ER3C",
    name: "Shameemah Salie",
    email: "ziar@gmail.com",
    phone: "(+33)7 00 55 59 27",
    designation: "Sales executive",
    status: "active",
  },
  {
    key: "13",
    id: "GM4134ER3C",
    name: "Shameemah Salie",
    email: "ahana@mail.ru",
    phone: "(+33)7 00 55 59 27",
    designation: "Sales executive",
    status: "active",
  },
  {
    key: "14",
    id: "FH4578ERV2",
    name: "Shameemah Salie",
    email: "ahana@mail.ru",
    phone: "(+33)7 00 55 59 27",
    designation: "Sales executive",
    status: "active",
  },
  {
    key: "15",
    id: "AB4578DCD2",
    name: "Shameemah Salie",
    email: "joie@gmail.com",
    phone: "(+33)7 00 55 59 27",
    designation: "Sales executive",
    status: "active",
  },
];

export default function StaffListPage() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<StaffMember | null>(
    null
  );
  const [isCreateProfileModalVisible, setIsCreateProfileModalVisible] =
    useState(false);

  const columns: ColumnsType<StaffMember> = [
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Checkbox
            indeterminate={
              selectedRowKeys.length > 0 &&
              selectedRowKeys.length < staffData.length
            }
            checked={selectedRowKeys.length === staffData.length}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedRowKeys(staffData.map((item) => item.key));
              } else {
                setSelectedRowKeys([]);
              }
            }}
          />
          <span style={{ fontWeight: "500" }}>ID No.</span>
        </div>
      ),
      dataIndex: "id",
      key: "id",
      width: 120,
      render: (text: string, record: StaffMember) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Checkbox
            checked={selectedRowKeys.includes(record.key)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedRowKeys([...selectedRowKeys, record.key]);
              } else {
                setSelectedRowKeys(
                  selectedRowKeys.filter((key) => key !== record.key)
                );
              }
            }}
          />
          <span style={{ fontSize: "12px", color: "#666" }}>{text}</span>
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 180,
      render: (text: string) => (
        <span style={{ fontWeight: "500" }}>{text}</span>
      ),
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      width: 200,
      render: (text: string) => <span style={{ color: "#666" }}>{text}</span>,
    },
    {
      title: "Company Name",
      dataIndex: "phone",
      key: "phone",
      width: 150,
      render: (text: string) => <span style={{ color: "#666" }}>{text}</span>,
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      width: 150,
      render: (text: string) => (
        <Tag
          color={text === "Manager" ? "orange" : "blue"}
          style={{ border: "none", borderRadius: "4px", fontWeight: "500" }}
        >
          {text}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (_, record: StaffMember) => (
        <Space size="small">
          <Tooltip title="View Details">
            <Button
              type="text"
              icon={<EyeOutlined />}
              size="small"
              style={{ color: "#666" }}
              onClick={() => {
                setSelectedEmployee(record);
                setIsModalVisible(true);
              }}
            />
          </Tooltip>
          <Tooltip
            title={record.status === "active" ? "Deactivate" : "Activate"}
          >
            <Button
              type="text"
              onClick={() => {
                // Handle status toggle logic here
                const newStatus =
                  record.status === "active" ? "inactive" : "active";
                const updatedData = staffData.map((item) =>
                  item.key === record.key
                    ? { ...item, status: newStatus }
                    : item
                );
                toast.success(
                  `Employee ${
                    newStatus === "active" ? "activated" : "deactivated"
                  } successfully!`
                );
                // Update the state with the new data
                // This is a placeholder; you would typically update state in a real app
                console.log("Updated Data:", updatedData);
              }}
              icon={
                record.status === "active" ? (
                  <LockOutlined />
                ) : (
                  <UnlockOutlined />
                )
              }
              size="small"
              style={{
                color: record.status === "active" ? "#ff4d4f" : "#52c41a",
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  const filteredData = staffData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase()) ||
      item.designation.toLowerCase().includes(searchText.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleProfileSave = (data: {
    userName: string;
    designationType: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Map the modal data to StaffMember if needed
    const newStaffMember: StaffMember = {
      key: Date.now().toString(),
      id: Math.random().toString(36).substr(2, 10).toUpperCase(),
      name: data.userName,
      email: data.email,
      phone: "", // You may want to collect this in the modal
      designation: data.designationType,
      status: "active",
    };
    console.log("Saved data:", newStaffMember);
    // Handle save logic here
    toast.success("Profile created successfully!");
    setIsModalVisible(false);
  };
  return (
    <div style={{ padding: "0 24px 24px" }}>
      <Card
        style={{ borderRadius: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            marginBottom: "12px",
          }}
        >
          <Title level={3} style={{ margin: 0, color: "#333" }}>
            Employee List
          </Title>
          <Space size="middle">
            <Input
              placeholder="Search here"
              allowClear
              style={{
                width: 350,
                padding: "4px 6px 4px 10px",
                borderRadius: "30px",
              }}
              suffix={
                <SearchOutlined
                  style={{
                    fontSize: "18px",
                    borderRadius: "50%",
                    padding: "10px",
                    backgroundColor: "#D2EBC5",
                  }}
                />
              }
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
            />
            <Button
              style={{
                padding: "22px",
                borderRadius: "50%",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              icon={
                <FilterOutlined style={{ fontSize: "20px", padding: "10px" }} />
              }
            />
            <Button
              onClick={() => {
                setIsCreateProfileModalVisible(true);
              }}
              type="primary"
              icon={<PlusOutlined />}
              style={{
                background: "#6DBD44",
                borderColor: "#6DBD44",
                borderRadius: "20px",
                padding: "20px 20px",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              Add Member
            </Button>
          </Space>
        </div>
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: filteredData.length,
            onChange: (page) => setCurrentPage(page),
            showSizeChanger: false,
            showQuickJumper: false,
            showTotal: (total, range) =>
              `Showing ${range[0]}-${range[1]} out of ${total}`,
            itemRender: (current, type, originalElement) => {
              if (type === "prev") {
                return <Button size="small">Previous</Button>;
              }
              if (type === "next") {
                return <Button size="small">Next</Button>;
              }
              return originalElement;
            },
          }}
          scroll={{ x: 1000 }}
          size="middle"
          rowSelection={rowSelection}
          style={{ background: "#fff" }}
        />
      </Card>

      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "rgb(241,241,249)",
              headerBg: "rgb(241,241,249)",
            },
          },
        }}
      >
        <EmployeeDetailsModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          employee={selectedEmployee}
        />
        <CreateProfileModal
          visible={isCreateProfileModalVisible}
          onClose={() => setIsCreateProfileModalVisible(false)}
          onSave={handleProfileSave}
        />
      </ConfigProvider>
    </div>
  );
}
