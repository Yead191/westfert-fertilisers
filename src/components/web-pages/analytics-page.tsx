"use client";

import { Card, Row, Col, Typography, Select, Space, Badge, Avatar } from "antd";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import {
  DollarOutlined,
  FileTextOutlined,
  TrophyOutlined,
  RiseOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

// Demo data for metric cards
const metricsData = [
  {
    title: "Total Sales",
    total: "20555",
    daily: "29",
    icon: <DollarOutlined />,
    color: "#6DBD44",
  },
  {
    title: "Total Quotes Fertiliser",
    total: "109558 tn",
    daily: "1392tn",
    icon: <FileTextOutlined />,
    color: "#6DBD44",
  },
  {
    title: "Total Earning",
    total: "109558 tn",
    daily: "1392tn",
    icon: <TrophyOutlined />,
    color: "#6DBD44",
  },
  {
    title: "Total Profit",
    total: "109558 tn",
    daily: "1392tn",
    icon: <RiseOutlined />,
    color: "#6DBD44",
  },
];

// Demo data for earning statistics timeline
const earningTimelineData = [
  { month: "Jan", earning: 85, profit: 65 },
  { month: "Feb", earning: 92, profit: 78 },
  { month: "Mar", earning: 78, profit: 85 },
  { month: "Apr", earning: 88, profit: 72 },
  { month: "May", earning: 95, profit: 88 },
  { month: "Jun", earning: 82, profit: 75 },
  { month: "Jul", earning: 90, profit: 82 },
  { month: "Aug", earning: 87, profit: 79 },
  { month: "Sept", earning: 93, profit: 86 },
  { month: "Oct", earning: 89, profit: 83 },
  { month: "Nov", earning: 96, profit: 91 },
  { month: "Dec", earning: 91, profit: 87 },
];

// Demo data for total quotes chart
const quotesData = [
  { month: "Jan", quotes: 1200 },
  { month: "Feb", quotes: 1800 },
  { month: "Mar", quotes: 1600 },
  { month: "Apr", quotes: 2200 },
  { month: "May", quotes: 1900 },
  { month: "Jun", quotes: 2400 },
  { month: "Jul", quotes: 1800 },
  { month: "Aug", quotes: 2100 },
  { month: "Sept", quotes: 1700 },
  { month: "Oct", quotes: 2300 },
  { month: "Nov", quotes: 2000 },
  { month: "Dec", quotes: 1900 },
];

// Demo data for sold fertiliser chart
const fertiliserData = [
  { month: "Jan", sold: 320 },
  { month: "Feb", sold: 280 },
  { month: "Mar", sold: 350 },
  { month: "Apr", sold: 380 },
  { month: "May", sold: 420 },
  { month: "Jun", sold: 450 },
  { month: "Jul", sold: 380 },
  { month: "Aug", sold: 480 },
  { month: "Sept", sold: 520 },
  { month: "Oct", sold: 490 },
  { month: "Nov", sold: 580 },
  { month: "Dec", sold: 550 },
];

export default function AnalyticsPage() {
  const currentDate = "13 NOV, 2024";

  return (
    <div style={{ padding: "0 24px 24px" }}>
      {/* Metrics Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
        {metricsData.map((metric, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              style={{
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: metric.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    {metric.icon}
                  </div>
                  {metric.title}
                </Text>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    marginBottom: "4px",
                  }}
                >
                  {currentDate}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Text style={{ color: "#999", fontSize: "12px" }}>
                      Total:{" "}
                    </Text>
                    <Text strong style={{ fontSize: "16px" }}>
                      {metric.total}
                    </Text>
                  </div>
                  <div>
                    <Text style={{ color: "#999", fontSize: "12px" }}>
                      Daily:{" "}
                    </Text>
                    <Text strong style={{ color: "#1890ff", fontSize: "14px" }}>
                      {metric.daily}
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Earning Statistics */}
      <Card
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Earning Statistics</span>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#6DBD44",
                  }}
                ></div>
                <Text style={{ fontSize: "12px" }}>Earning</Text>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#1890ff",
                  }}
                ></div>
                <Text style={{ fontSize: "12px" }}>Profit</Text>
              </div>
              <Select defaultValue="Year" size="small" style={{ width: 80 }}>
                <Option value="Year">Year</Option>
                <Option value="Month">Month</Option>
              </Select>
            </div>
          </div>
        }
        style={{ marginBottom: "24px", borderRadius: "12px" }}
      >
        <div
          style={{
            height: "120px",
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          {earningTimelineData.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#6DBD44",
                    border: "2px solid #fff",
                    boxShadow: "0 0 0 2px #6DBD44",
                  }}
                ></div>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#1890ff",
                    border: "2px solid #fff",
                    boxShadow: "0 0 0 2px #1890ff",
                  }}
                ></div>
              </div>
              <Text style={{ fontSize: "11px", color: "#666" }}>
                {item.month}
              </Text>
            </div>
          ))}
        </div>
      </Card>

      {/* Charts Row */}
      <Row gutter={[16, 16]}>
        {/* Total Quotes Statistics */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Total Quotes Statistics</span>
                <Select defaultValue="Year" size="small" style={{ width: 80 }}>
                  <Option value="Year">Year</Option>
                  <Option value="Month">Month</Option>
                </Select>
              </div>
            }
            style={{ borderRadius: "12px" }}
          >
            <div style={{ height: "250px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={quotesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#666" }}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      background: "#333",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="quotes"
                    stroke="#6DBD44"
                    fill="#6DBD44"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <ReferenceLine x="Jun" stroke="#333" strokeDasharray="2 2" />
                  <ReferenceLine y={1800} stroke="#333" strokeDasharray="2 2" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

        {/* Sold Fertiliser Statistics */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Sold Fertiliser Statistics</span>
                <Select defaultValue="Year" size="small" style={{ width: 80 }}>
                  <Option value="Year">Year</Option>
                  <Option value="Month">Month</Option>
                </Select>
              </div>
            }
            style={{ borderRadius: "12px" }}
          >
            <div style={{ height: "250px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={fertiliserData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#666" }}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      background: "#333",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                    formatter={(value) => [`${value}tn`, "Sold"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="sold"
                    stroke="#6DBD44"
                    strokeWidth={3}
                    dot={{ fill: "#6DBD44", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: "#6DBD44" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
