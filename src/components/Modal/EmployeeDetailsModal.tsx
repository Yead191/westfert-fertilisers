"use client";

import React, { useState } from "react";
import { Modal, Avatar, Typography, Button } from "antd";
import { Settings } from "lucide";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import EditProfileModal from "./EditProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";
// import { Settings } from "lucide";

const { Title, Paragraph } = Typography;

interface StaffMember {
  key: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  designation: string;
  status: "active" | "inactive";
}

interface EmployeeDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  employee: StaffMember | null;
}

const EmployeeDetailsModal: React.FC<EmployeeDetailsModalProps> = ({
  visible,
  onClose,
  employee,
}) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

  const handleSettings = () => {
    setIsPasswordModalVisible(true);
    onClose(); // Close the main modal when settings is clicked
    console.log("Settings clicked");
  };
  const handleEdit = () => {
    console.log("Edit clicked");
    setIsEditModalVisible(true);
    onClose(); // Close the main modal when edit is clicked
  };
  const handleSave = (data: any) => {
    console.log("Saved data:", data);
    // Handle save logic here
  };

  return (
    <>
      <Modal
        title="Employee Details"
        open={visible}
        onCancel={onClose}
        footer={null}
        width={600}
        //   style={{ backgroundColor: "#F1F1F9" }}
      >
        {employee && (
          <div
            style={{
              display: "flex",
              gap: "20px",
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <div>
              <Avatar
                style={{ borderRadius: "12px" }}
                size={160}
                src="/people/person1.png"
                className="object-cover rounded-lg"
              />
              <div style={{ flex: 1, textAlign: "center" }}>
                <Title level={5} style={{ marginBottom: "2px" }}>
                  Mr. {employee.name}
                </Title>
                <Paragraph
                  type="secondary"
                  style={{ marginBottom: "0", color: "#FF8000" }}
                >
                  {employee.designation}
                </Paragraph>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center ">
                <Paragraph>
                  <strong>Name:</strong> {employee.name}
                </Paragraph>
                <div className="flex gap-4 ">
                  <SettingOutlined
                    size={25}
                    className="cursor-pointer"
                    onClick={handleSettings}
                  />
                  <EditOutlined
                    size={25}
                    className="cursor-pointer"
                    onClick={handleEdit}
                  />
                </div>
              </div>
              <Paragraph>
                <strong>Position:</strong> {employee.designation}
              </Paragraph>
              <Paragraph>
                <strong>ID no.:</strong> {employee.id}
              </Paragraph>
              <Paragraph>
                <strong>Email:</strong> {employee.email}
              </Paragraph>
              <Paragraph>
                <strong>Contact Number:</strong> {employee.phone}
              </Paragraph>
              <Paragraph>
                <strong>Status:</strong> {employee.status}
              </Paragraph>
              <Paragraph>
                <strong>Date of birth:</strong> 30 Dec, 2000
              </Paragraph>
              <Paragraph>
                <strong>Gender:</strong> Male
              </Paragraph>
              <Paragraph>
                <strong>Address:</strong> Lakshmipur, Chittagong, Bangladesh
              </Paragraph>
              {/* Add more fields as per your design */}
            </div>
          </div>
        )}
      </Modal>

      <EditProfileModal
        visible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
        onSave={handleSave}
        initialData={{
          name: employee ? employee.name : "",
          contactNumber: employee ? employee.phone : "",
          //   squareNumber: "123",
          dateOfBirth: "1990-01-01",
          gender: "Male",
          address: "Netherlands",
        }}
      />
      <ChangePasswordModal
        visible={isPasswordModalVisible}
        onClose={() => setIsPasswordModalVisible(false)}
        onSave={handleSave}
      />
    </>
  );
};

export default EmployeeDetailsModal;
