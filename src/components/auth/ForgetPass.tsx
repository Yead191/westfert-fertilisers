"use client";

import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const ForgetPassword = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [email, setEmail] = useState<string | null>(null);

  const onFinish = async (values: { email: string }) => {
    setEmail(values.email);
    console.log(email);
    toast.success("Verification code sent to your email!");
    form.resetFields();
    router.push("/auth/verify-otp");
  };

  return (
    <div className="w-full max-w-[550px] mx-auto px-10 pt-10 pb-8  shadow-lg rounded-lg">
      <div className=" mb-4 ">
        <h1 className="text-[24px] font-semibold ">Forgot Password ?</h1>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <label htmlFor="">Email</label>
        <Form.Item
          name="email"
          id="email"
          style={{ marginTop: 4 }}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            placeholder="Enter your email address"
            style={{
              height: 48,
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none",
            }}
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
            Send Code in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPassword;
