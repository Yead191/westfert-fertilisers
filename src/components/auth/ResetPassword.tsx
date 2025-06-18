"use client";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

const ResetPassword = () => {
  const router = useRouter();

  const [form] = Form.useForm();

  const onFinish = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    toast.success("Password updated successfully!");
    router.push("/auth/login");
    form.resetFields();
  };

  return (
    <div className="w-full max-w-[550px] mx-auto px-10 pt-10 pb-8 shadow-lg rounded-lg ">
      <div className=" mb-6">
        <h1 className="text-[24px] font-semibold  ">Set a new password</h1>
        <p className="text-[14px] text-[#6B7280] mt-2">
          Create a new password. Ensure it differs from <br /> previous ones for
          security
        </p>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Please input your new Password!",
            },
          ]}
          style={{ marginBottom: 0 }}
        >
          <Input.Password
            type="password"
            placeholder="Enter New password"
            style={{
              border: "1px solid #E0E4EC",
              height: "52px",
              background: "white",
              borderRadius: "8px",
              outline: "none",
            }}
            className="mb-6"
          />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: 0 }}
          name="confirmPassword"
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Enter Confirm password"
            style={{
              border: "1px solid #E0E4EC",
              height: "52px",
              background: "white",
              borderRadius: "8px",
              outline: "none",
            }}
            className="mb-6"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              fontWeight: "500",
              padding: "20px 0px",
              backgroundColor: "#6DBD44",
              borderColor: "#52c41a",
            }}
          >
            Update Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassword;
