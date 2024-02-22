import Link from "next/link";
import React from "react";
import { BiSolidMap } from "react-icons/bi";
import {
  FaBriefcase,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();
  const handleEmailClick = () => {
    window.location.href = `mailto:rifatmiah373@gmail.com`;
  };
  return (
    <footer className="bg-slate-100 text-black border-t-[5px] border-primaryColor shadow-lg">
      <div className="container pt-10">
        {/* footer bottom */}
        <div className="border-t mt-5 border-bg-gray-900 flex flex-col md:flex-row justify-between items-center pt-5 md:pb-16 lg:pb-5 gap-3">
          <p className="text-[16px] text-center md:text-left leading-7 font-[400]">
            copyright @ {year} developed by
            <strong>
              <a
                href="hhttps://rifat-portfolio.vercel.app/"
                target="_blank"
                className="text-[#0861F2] hover:underline hover:decoration-primaryColor"
              >
                <span> MRTECHGIANT</span>
              </a>
            </strong>{" "}
            || All right reserved
          </p>
          <nav className="flex gap-x-1 pb-16 md:pb-0">
            <a
              href="https://www.facebook.com/rifat.khan7625"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <span className="w-10 h-10 rounded-full bg-[#1877f2] transition-all duration-500 flex items-center justify-center group-hover:-translate-y-1">
                <FaFacebookF className=" text-[#ffffff] transition-all duration-500" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/md-rifat-miah-48555b257/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <span className="w-10 h-10 rounded-full bg-[#1877f2] transition-all duration-500 flex items-center justify-center group-hover:-translate-y-1">
                <FaLinkedinIn className=" text-[#ffffff] transition-all duration-500" />
              </span>
            </a>
            <a
              href="https://github.com/tanvirrifat1"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <span className="w-10 h-10 rounded-full bg-[#1877f2] transition-all duration-500 flex items-center justify-center group-hover:-translate-y-1">
                <FaGithub className=" text-[#ffffff] transition-all duration-500" />
              </span>
            </a>
            <a
              href="https://rifat-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <span className="w-10 h-10 rounded-full bg-[#1877f2] transition-all duration-500 flex items-center justify-center group-hover:-translate-y-1">
                <FaBriefcase className=" text-[#ffffff] transition-all duration-500" />
              </span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
