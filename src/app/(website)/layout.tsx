"use client";
import DashboardSidebar from "@/components/web-pages/dashboard-sidebar";
import React, { ReactNode, useState } from "react";
import { Card, Row, Col, Typography, Select, Space, Badge, Avatar } from "antd";
import { BellOutlined } from "@ant-design/icons";

const layout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { Title, Text } = Typography;

  return (
    <div className="flex gap-2 p-2 md:p-0 bg-[#F1F1F9] min-h-screen">
      <div className="w-[240px]">
        <DashboardSidebar collapsed={collapsed} onCollapse={setCollapsed} />
      </div>
      <div className="w-full flex-1  ">
        {/* Header */}
        <div className="px-[24px]">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              background: "#fff",
              padding: "16px 24px",
              borderRadius: "0 0 24px 24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              marginTop: "-2px",
            }}
          >
            <Title level={3} style={{ margin: 0 }}>
              {/* Analytics */}
            </Title>
            <Space
              style={{
                gap: "30px",
              }}
              size="middle"
            >
              <Badge dot>
                <BellOutlined
                  style={{
                    fontSize: "18px",
                    color: "#666",
                    backgroundColor: "#F1F1F9",
                    padding: "8px",
                    borderRadius: "50%",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                />
              </Badge>
              <Space>
                <Avatar src="/user.jpg?height=32&width=32" size={32} />
                <span style={{ color: "#333" }}>Admin Yead</span>
              </Space>
            </Space>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
