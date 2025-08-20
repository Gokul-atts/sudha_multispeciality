"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import sidebar1 from "@/assets/alliedhealthservice/1.png";
import sidebar2 from "@/assets/alliedhealthservice/2.png";
import sidebar3 from "@/assets/alliedhealthservice/3.png";
import sidebar4 from "@/assets/alliedhealthservice/4.png";
import sidebar5 from "@/assets/alliedhealthservice/5.png";
import Image from "next/image";
import Logo from "../assets/nursingservice/Group.png";
import Link from "next/link";
import './bookappointment.css';

const rightbar = [
  {
    head: "Physiotherapy ",
    label: "The medical professional doctors available in the clinic",
    image: sidebar1,
    link: "/physiotherapy",
  },
  {
    head: "Dietetics ",
    label: "The medical professional doctors available in the clinic",
    image: sidebar2,
    link: "/dietetics",
  },
  {
    head: "Lactation & Maternal Health ",
    label: "The medical professional doctors available in the clinic",
    image: sidebar3,
    link: "/lactation-and-maternal-health",
  },
  {
    head: "Nursing Services ",
    label: "The medical professional doctors available in the clinic",
    image: sidebar4,
    link: "/nursing-service",
  },
  {
    head: "Psychology ",
    label: "The medical professional doctors available in the clinic",
    image: sidebar5,
    link: "/psychology",
  },
];

const Alliedhealthsidebar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <aside className="w-full lg:w-1/2 space-y-6 lg:sticky lg:top-24 h-fit">
          <div className="inline-block mb-2 px-4 py-1.5 font-semibold bg-white text-[#2B3990] rounded-full text-sm sm:text-base">
            Allied Services
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl pb-4 font-semibold">
              Advanced Allied Healthcare for Complete Recovery
            </h2>
            <p className="pb-4 text-sm sm:text-base leading-relaxed text-gray-700">
              At Sudha Multispeciality Hospital, our Allied Health Care Services offer
              critical support that complements your medical treatment. Our expert professionals
              provide personalised care across physiotherapy, dietetics, psychology, maternal
              health, and organ transplant rehab. From the very first step in your healing journey,
              we focus on enhancing recovery outcomes, boosting your physical and emotional strength,
              and ensuring that your overall well-being is restored with compassion, collaboration,
              and cutting-edge therapies.
            </p>

            <Link href="#">
              <div className="btn-diagonal inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 mt-4 text-sm sm:text-base bg-[#253990] font-semibold text-white rounded-full transition duration-300 hover:bg-[#1e2f70]">
                Book a Appointment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
            </Link>
          </div>
        </aside>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            {rightbar.map((item, index) => (
              <Link href={item.link} key={index}>
                <div className="relative group">
                  <div className="bg-white nursingimg rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start">
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.head}
                      className="w-full sm:w-60 h-[220px] sm:h-[260px] object-cover rounded-lg"
                    />

                    {/* Text Content */}
                    <div className="flex flex-col flex-1 h-full w-full">
                      <div className="flex justify-between items-start w-full">
                        <h3 className="text-lg sm:text-[22px] font-semibold">
                          {item.head}
                        </h3>
                        <Image
                          height={40}
                          width={40}
                          alt="Logo"
                          src={Logo}
                          className="hidden sm:block"
                        />
                      </div>

                      <div className="pt-4">
                        <div className="border-t border-gray-200 mt-4 mb-2" />
                        <p className="text-gray-700 text-sm sm:text-base">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center z-30 shadow-md group-hover:shadow-lg transition-all duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-black group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alliedhealthsidebar;
