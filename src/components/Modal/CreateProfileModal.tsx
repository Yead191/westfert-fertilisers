"use client";

import React, { useState } from "react";
import { Modal, Input, Button, Select, Form } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { toast } from "sonner";

const { Option } = Select;

interface CreateProfileModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (data: {
    userName: string;
    designationType: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

const CreateProfileModal: React.FC<CreateProfileModalProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    userName: "",
    designationType: "Sales Executive",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    form
      .validateFields()
      .then(() => {
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match!");
          return;
        }
        onSave(formData);
        setFormData({
          userName: "",
          designationType: "Sales Executive",
          email: "",
          password: "",
          confirmPassword: "",
        });
        onClose();
      })
      .catch((error) => {
        console.log("Validation failed:", error);
        toast.error("validation failed, Fill up all required fields");
      });
    form.resetFields();
  };

  return (
    <Modal
      title="Create Profile"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "12px",
        }}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onValuesChange={(changedValues, allValues) => setFormData(allValues)}
        >
          <Form.Item
            name="userName"
            label="User Name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              value={formData.userName}
              onChange={(e) => handleChange("userName", e.target.value)}
              placeholder="tk"
            />
          </Form.Item>

          <Form.Item
            name="designationType"
            label="Designation Type"
            rules={[
              { required: true, message: "Please select designation type!" },
            ]}
          >
            <Select
              value={formData.designationType}
              onChange={(value) => handleChange("designationType", value)}
            >
              <Option value="Sales Executive">Sales Executive</Option>
              <Option value="Manager">Manager</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="tk@mymzo.co.za"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[
              { required: true, message: "Please confirm your password!" },
            ]}
          >
            <Input.Password
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="Confirm Password"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            type="primary"
            style={{ background: "#6DBD44", borderColor: "#6DBD44" }}
            onClick={handleSave}
          >
            Create Account
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateProfileModal;
