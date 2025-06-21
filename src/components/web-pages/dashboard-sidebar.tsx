"use client";

import { useEffect, useState } from "react";
import { Layout, Menu, Avatar, Button, Badge, Typography, Space } from "antd";
import {
  BarChartOutlined,
  TeamOutlined,
  FormOutlined,
  FileTextOutlined,
  HistoryOutlined,
  InboxOutlined,
  BookOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  InfoCircleOutlined,
  FileProtectOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const { Sider, Header, Content } = Layout;
const { Title, Text } = Typography;

interface DashboardSidebarProps {
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

export default function DashboardSidebar({
  collapsed = false,
  onCollapse,
}: DashboardSidebarProps) {
  const [selectedKey, setSelectedKey] = useState("analytics");
  const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname);
  useEffect(() => {
    setSelectedKey(pathname.split("/")[1] || "analytics");
  }, [pathname]);

  const menuItems = [
    {
      key: "analytics",
      icon: <BarChartOutlined />,
      label: "Analytics",
    },
    {
      key: "staff-list",
      icon: <TeamOutlined />,
      label: "Staff List",
    },
    {
      key: "customer-list",
      icon: <FormOutlined />,
      label: "Customer List",
    },
    {
      key: "quote-update",
      icon: <FileTextOutlined />,
      label: "Quote Update",
    },
    // {
    //   key: "quote-history",
    //   icon: <HistoryOutlined />,
    //   label: "Quote History",
    // },
    {
      key: "raw-material",
      icon: <InboxOutlined />,
      label: "Raw Material",
    },
    {
      key: "standard-recipes",
      icon: <BookOutlined />,
      label: "Standard Recipes",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
      children: [
        {
          key: "app-support",
          icon: <CustomerServiceOutlined />,
          label: "App Support",
        },
        {
          key: "about-westfert",
          icon: <InfoCircleOutlined />,
          label: "About Westfert",
        },
        {
          key: "terms-conditions",
          icon: <FileProtectOutlined />,
          label: "Terms & Conditions",
        },
        {
          key: "faq",
          icon: <QuestionCircleOutlined />,
          label: "FAQ",
        },
      ],
    },
  ];

  const bottomMenuItem = {
    key: "logout",
    icon: <LogoutOutlined />,
    label: "Log Out",
  };

  const handleLogOut = () => {
    toast.warning("Are you sure you want to log out?", {
      duration: 5000,
      description: "You will be logged out and redirected to the login page.",
      action: {
        label: "Logout",
        onClick: () => {
          console.log("Logout confirmed");
          toast.success("Logged out successfully!");
          router.push("/auth/login");
        },
      },
    });
  };
  return (
    <Layout style={{ minHeight: "100vh", position: "fixed", zIndex: 10 }}>
      <Sider
        // collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width={240}
        style={{
          background: "#fff",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        {/* Logo Section */}
        <Link
          href={"/analytics"}
          style={{
            padding: "16px",
            borderBottom: "1px solid #f0f0f0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* <div
            style={{
              width: 32,
              height: 32,
              background: "#52c41a",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            W
          </div> */}
          {!collapsed && (
            <div>
              <Image
                src="/logo.png"
                alt="Westfert Logo"
                width={200}
                height={32}
              />
            </div>
          )}
        </Link>

        {/* Main Menu */}
        <div
          style={{
            // height: "calc(100vh - 120px)",
            height: "calc(100vh - 90px)",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Menu
            // className={pathname === selectedKey ? "active" : ""}
            mode="inline"
            selectedKeys={[selectedKey]}
            items={menuItems}
            style={{
              border: "none",
              flex: 1,
            }}
            onClick={({ key }) => {
              router.push(`/${key}`);
              // setSelectedKey(key);
            }}
          />

          {/* Bottom Menu Item */}
          {/* <Menu mode="inline" items={[bottomMenuItem]} /> */}
          <Button
            type="primary"
            style={{
              //   backgroundColor: "none",
              border: "none",
              borderTop: "1px solid #f0f0f0",
              marginTop: "auto",
              padding: "0px 32px",
              backgroundColor: "transparent",
              color: "black",
              fontWeight: "400",
              fontSize: "16px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            onClick={handleLogOut}
          >
            <LogoutOutlined />
            Logout
          </Button>
        </div>
      </Sider>
    </Layout>
  );
}
