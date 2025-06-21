import FAQDashboard from "@/components/web-pages/settings/faq-dashboard";
import { Metadata } from "next";
import React from "react";

const page = () => {
  return (
    <div>
      <FAQDashboard />
    </div>
  );
};

export default page;

export const metadata: Metadata = {
  title: "Faq | Westfert Fertisiers",
};
