"use client";
// import SignInForm from "@/components/Login";
import { useRouter } from "next/navigation";
// import React, { use } from "react";

const page = () => {
  const user = null;
  const router = useRouter();
  if (user) {
    router.push("/dashboard");
  }
  return router.push("/auth/login");
};

export default page;
