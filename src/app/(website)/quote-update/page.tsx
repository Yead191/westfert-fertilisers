import QuoteUpdate from "@/components/web-pages/quote-update";
import { Metadata } from "next";
import React from "react";

const page = () => {
  return (
    <section>
      <QuoteUpdate />
    </section>
  );
};

export default page;


export const metadata: Metadata = {
  title: "Quote Update | Westfert Fertilisers",
  description: "Generated by create next app",
};