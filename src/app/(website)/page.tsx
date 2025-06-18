"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = null;
  const router = useRouter();
  if (!user) {
    return router.push("/auth/login");
  }

  return router.push("/analytics");
}
