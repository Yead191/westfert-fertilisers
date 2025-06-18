"use client";

import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import OTPInput from "react-otp-input";
import { toast } from "sonner";

const { Text } = Typography;

const VerifyOtp = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [form] = Form.useForm();

  const onFinish = async (values: { otp: string }) => {
    // form.resetFields();
    toast.success("Verification code confirmed successfully!");
    console.log("Received values:", values);
    router.push("/auth/set-password");
  };

  const handleResendEmail = async () => {
    toast.success("Verification code resent to your email!");
  };

  return (
    <div className="w-full max-w-[550px] mx-auto px-10 pt-10 pb-6 shadow-lg rounded-lg ">
      <div className=" mb-6">
        <h1 className="text-[25px] font-medium mb-6 text-primary ">
          Confirm Verification code
        </h1>
      </div>

      <Form
        onFinish={onFinish}
        layout="vertical"
        className=" w-full mx-auto"
        form={form}
      >
        <ConfigProvider
          theme={{
            components: {
              Input: {
                // lineHeight: 3,
                controlHeight: 65,
                hoverBorderColor: "#286a25",
                activeBorderColor: "#286a25",
                borderRadius: 10,
              },
            },
            token: {
              colorPrimary: "#286a25",
              colorBorder: "#286a25",
            },
          }}
        >
          <Form.Item
            className="flex items-center justify-center mx-auto w-full"
            name="otp"
            rules={[{ required: true, message: "Please input otp code here!" }]}
          >
            <Input.OTP
              style={{
                width: "100%",
                height: 50,
              }}
              className=""
              variant="filled"
              length={6}
            />
          </Form.Item>
        </ConfigProvider>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              fontWeight: "500",
              marginTop: 10,
              padding: "20px 0px",
              backgroundColor: "#6DBD44",
              borderColor: "#52c41a",
            }}
          >
            Confirm Code
          </Button>
        </Form.Item>

        <div className="flex items-center justify-center gap-3 mb-6 ">
          <Text>You have not received the email?</Text>

          <p
            onClick={handleResendEmail}
            className="login-form-forgot underline font-medium"
            style={{ color: "blue", cursor: "pointer" }}
          >
            Resend
          </p>
        </div>
      </Form>
    </div>
  );
};

export default VerifyOtp;
