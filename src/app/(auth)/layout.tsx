// import { AntdRegistry } from "@ant-design/nextjs-registry";
import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    // <AntdRegistry>
    <section className="flex items-center justify-center min-h-screen container mx-auto gap-2 p-2">
      <div className="flex-1 justify-end md:flex hidden">
        <Image src={"/logo.png"} height={130} width={550} alt="Logo" />
      </div>
      <div className="flex-1 ">{children}</div>
    </section>
    // </AntdRegistry>
  );
};

export default layout;
