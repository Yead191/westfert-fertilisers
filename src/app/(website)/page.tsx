"use client";
import Spinner from "@/components/Spinner";
import { useGetProfileQuery } from "@/redux/feature/auth/authApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const { data: user, isLoading } = useGetProfileQuery({});
  if (isLoading) {
    return (
      <div className="bg-white h-[80vh] mx-6 rounded-3xl">
        <Spinner />
      </div>
    );
  }
  // console.log("check ", user);
  const router = useRouter();
  if (!user) {
    toast.error("Please Login to continue...");
    return router.push("/auth/login");
  }

  return router.push("/analytics");
}
