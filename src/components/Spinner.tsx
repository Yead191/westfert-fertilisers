import Image from "next/image";
import React from "react";
// import spinnerLogo from "../assets/shopno-logo.png";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
      {/* Logo */}
      <Image src={"/logo.png"} alt="Westfert Logo" width={500} height={300} />

      {/* Spinner below the image */}
      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-gray-400 border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
