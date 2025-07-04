import AppSupport from "@/components/web-pages/settings/app-support";
import { Metadata } from "next";
import React from "react";

const page = () => {
  return (
    <section>
      <AppSupport />
    </section>
  );
};

export default page;

export const metadata: Metadata = {
  title: "App support | Westfert Fertilisers",
  description: "Generated by create next app",
};