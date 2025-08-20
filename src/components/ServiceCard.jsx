"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, link }) => {
  return (
    <Link href={link} >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center items-center "
    >
      <div className="relative service-card h-full w-full max-w-xs bg-white rounded-2xl p-6 overflow-hidden duration-300">
        {/* Icon */}
        <Image src={icon} alt="icon" className="w-10 h-10 mb-10" />

        {/* Title */}
        <h3 className="text-md mt-4 font-semibold leading-[1.4] text-start">
          {title}
        </h3>

        {/* Arrow Button */}
        <div
          className="absolute bottom-1 right-2 w-12 h-12 rounded-full bg-white flex items-center justify-center z-30  group transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 7L7 17M7 7h10v10"
            />
          </svg>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default ServiceCard;
