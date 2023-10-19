import React from "react";
import { BsCodeSlash } from "react-icons/bs";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white  text-[#2E2B2B] py-4 lg:px-24 md:px-8 px-6 flex justify-between items-center shadow-md z-10">
      <h1 className="text-xl font-bold">
        <a href="https://nehra.vercel.app" target="_blank" rel="noreferrer">
          NEHRA
        </a>
      </h1>
      <BsCodeSlash className="text-xl font-bold" />
    </div>
  );
};

export default Header;
