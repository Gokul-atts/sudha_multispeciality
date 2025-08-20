"use client";
import React from "react";
import Image from "next/image";
import Award from "../assets/Contactus/award.png";

const Awardlist = () => {
  const rightbar = [
    {
      head: "Excellence In Multi-Specialty Hospital (Kongu Region) 2025",
      label:
        "National–Level Prestigious Recognition for Sudha Hospital Awarded 'Excellence In Multi-Specialty Hospital (Kongu Region)' at the India Health Summit 2025-South Edition.",
    },
    {
      head: "Excellence In Multi-Specialty Hospital (Kongu Region) 2025",
      label:
        "National–Level Prestigious Recognition for Sudha Hospital Awarded 'Excellence In Multi-Specialty Hospital (Kongu Region)' at the India Health Summit 2025-South Edition.",
    },
    {
      head: "Excellence In Multi-Specialty Hospital (Kongu Region) 2025",
      label:
        "National–Level Prestigious Recognition for Sudha Hospital Awarded 'Excellence In Multi-Specialty Hospital (Kongu Region)' at the India Health Summit 2025-South Edition.",
    },
    {
      head: "Excellence In Multi-Specialty Hospital (Kongu Region) 2025",
      label:
        "National–Level Prestigious Recognition for Sudha Hospital Awarded 'Excellence In Multi-Specialty Hospital (Kongu Region)' at the India Health Summit 2025-South Edition.",
    },
    {
      head: "Excellence In Multi-Specialty Hospital (Kongu Region) 2025",
      label:
        "National–Level Prestigious Recognition for Sudha Hospital Awarded 'Excellence In Multi-Specialty Hospital (Kongu Region)' at the India Health Summit 2025-South Edition.",
    },
    {
      head: "Excellence In Multi-Specialty Hospital (Kongu Region) 2025",
      label:
        "National–Level Prestigious Recognition for Sudha Hospital Awarded 'Excellence In Multi-Specialty Hospital (Kongu Region)' at the India Health Summit 2025-South Edition.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-2 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {rightbar.map((item, index) => (
          <div
            key={index}
            className="relative award bg-white rounded-xl p-6 flex flex-col h-full"
          >
            {/* Content Section */}
            <div className="flex flex-col justify-between h-full pb-12">
              <h3 className=" text-[20px] mb-5">
                {item.head}
              </h3>
              <p className=" ">{item.label}</p>
            </div>

            {/* Award Icon - Responsive Position */}
            <div className="absolute bottom-0 right-1   lg:right-1  p-2 rounded-xl z-40">
              <Image
                src={Award}
                alt="Award Icon"
                width={50}
                height={50}
                className="w-14 h-14"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awardlist;
