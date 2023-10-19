import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Info = () => {
  return (
    <div className="mt-28 text-[#2E2B2B] lg:px-24 md:px-8 px-6">
      <div className="bg-[#a7bcb9] flex flex-col justify-end w-full px-10 py-14 rounded-md custom-shadow">
        <div className="border-l-2 border-[#113939] py-1 px-4">
          <h1 className="text-2xl font-bold md:font-light md:text-5xl ">
            Hi🖐️... Iam Nehra Sai Surya
          </h1>
          <h1 className="text-lg md:text-3xl font-semibold mt-2">
            Frontend Web Dev | React JS
          </h1>

          <button className="text-xl font-semibold flex">
            <a
              className="flex items-center gap-2 bg-yellow-100 px-2 py-1 rounded-md"
              href="https://nehra.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit My Portfolio
              <BiLinkExternal />
            </a>
          </button>

          <div className="flex gap-3 mt-2">
            <a
              href="https://www.linkedin.com/in/nehra-sai-surya-72a5a6267"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://instagram.com/__12026838__?utm_source=qr&igshid=MThlNWY1MzQwNA=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/Nehrasaisurya"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
