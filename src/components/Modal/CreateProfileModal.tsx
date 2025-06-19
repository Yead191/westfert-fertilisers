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

  const handleSave = () => {
    form
      .validateFields()
      .then(() => {
        // Get values directly from form
        const formData = form.getFieldsValue();

        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match!");
          return;
        }

        onSave(formData);
        form.resetFields();
        onClose();
      })
      .catch((error) => {
        console.log("Validation failed:", error);
        // Optional: Handle the validation failure message here
      });
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
          initialValues={{
            userName: "",
            designationType: "Sales Executive",
            email: "",
            password: "",
            confirmPassword: "",
          }}
        >
          <Form.Item
            name="userName"
            label="User Name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="tk" />
          </Form.Item>

          <Form.Item
            name="designationType"
            label="Designation Type"
            rules={[
              { required: true, message: "Please select designation type!" },
            ]}
          >
            <Select>
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
            <Input placeholder="tk@mymzo.co.za" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
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
