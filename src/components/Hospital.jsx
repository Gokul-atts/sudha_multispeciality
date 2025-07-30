"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HospitalCard = ({ number,icon, title, link = "#" }) => {
  return (
    <div className="flex justify-center items-stretch ">
      <div className="relative service-card bg-white rounded-2xl p-6 overflow-hidden w-full max-w-xs h-full flex flex-col justify-between min-h-[180px]">
        {/* Icon */}
        <div className="mb-2">{number}</div>

        {/* Title */}
        <h3 className="text-md mt-4 font-semibold leading-[1.4] text-start ">
          {title}
        </h3>

        {/* Arrow Button */}
        <Link
          href={link}
          className="absolute bottom-2 right-3 w-10 h-10 flex items-center justify-center z-30 group transition-all duration-300"
        >
          <Image src={icon} className="w-10 h-10 text-black transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default HospitalCard;
