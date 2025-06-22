"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Select, Checkbox } from "antd";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useBaseUrl from "@/hooks/useBaseUrl";
import { useLoginMutation } from "@/redux/feature/auth/authApi";
// import { useLoginUserMutation } from "@/redux/feature/auth/authApi";
// import { useRouter } from "next/navigation";
const { Option } = Select;

const SignInForm = () => {
  const router = useRouter();
  const baseUrl = useBaseUrl();
  const [login, { isLoading }] = useLoginMutation();
  const onFinish = async (values: any) => {
    try {
      await toast.promise(
        login(values).unwrap(), // call RTK Query mutation
        {
          loading: "Signing in...",
          success: (res) => {
            router.push("/analytics");
            return <b>{res.message}</b>;
          },
          error: (err) => err.data?.message || err.message || "Login failed",
        }
      );
    } catch (error) {
      // Already handled by toast.promise, but you can log if needed
      console.error("Login error:", error);
    }
  };

  return (
    <div className="w-full max-w-[550px] mx-auto px-10 pt-10 pb-8 shadow-lg rounded-lg">
      <h1 className="text-2xl mb-7 font-semibold ">Sign In</h1>
      <Form
        name="signin"
        onFinish={onFinish}

        // style={{ maxWidth: 600, margin: "auto", padding: 20 }}
      >
        <label htmlFor="email">Email</label>
        <Form.Item
          name="email"
          style={{ marginTop: 4, marginBottom: 12 }}
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="tk@mymza.co.za"
            // style={{ padding: "12px 16px" }}
            size="large"
          />
        </Form.Item>
        <label htmlFor="designationType">Designation Type</label>

        <Form.Item
          name="designation"
          style={{ marginTop: 4, marginBottom: 12 }}
          rules={[
            { required: true, message: "Please select your designation!" },
          ]}
        >
          <Select size="large" placeholder="Designation Type">
            <Option value="Admin">Admin</Option>
            <Option value="Manager">Manager</Option>
          </Select>
        </Form.Item>

        <label htmlFor="designationType">Password</label>

        <Form.Item
          name="password"
          style={{ marginTop: 4, marginBottom: 0 }}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            style={{
              width: "100%",
              padding: "8px 12px",
            }}
            placeholder="Password"
          />
        </Form.Item>

        <div className="flex items-center justify-between py-4">
          <Form.Item
            style={{ marginBottom: 0 }}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link
            className="login-form-forgot text-primary font-semibold"
            href="/auth/forget-password"
          >
            Forgot password
          </Link>
        </div>

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
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInForm;
