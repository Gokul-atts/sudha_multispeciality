"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import sidebar1 from "../assets/nursingservice/1.jpg";
import sidebar2 from "../assets/nursingservice/2.jpg";
import sidebar3 from "../assets/nursingservice/3.jpg";
import sidebar4 from "../assets/nursingservice/4.jpg";
import sidebar5 from "../assets/nursingservice/5.jpg";
import Image from "next/image";
import Logo from "../assets/nursingservice/Group.png";
import Link from "next/link";

const rightbar = [
  {
    head: "Nursing Overview",
    label: "Expert Nursing Care for you",
    image: sidebar1,
  },
  {
    head: "Nursing Quality & standards",
    label: "Providing Excellent Care With Excellent Quality Service",
    image: sidebar2,
  },
  {
    head: "Nursing Informatics",
    label: "Improving Patient Care With IT and Nursing Services",
    image: sidebar3,
  },
  {
    head: "Education & Training",
    label: "Transforming the Nursing Industry by Training Young Minds",
    image: sidebar4,
  },
  {
    head: "Reasearch & Projects",
    label: "The medical professisional Doctor Avlaibale in the clinic",
    image: sidebar5,
  },
];

const Nursingsidebar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <aside className="w-full lg:w-1/2 space-y-6 lg:sticky lg:top-24 h-fit">
          <div className="inline-block bg-white px-4 py-1 rounded-3xl">
            <p className="text-blue-700 text-1xl font-semibold">Nursing Services</p>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl text-black font-semibold max-w-[20ch] pb-6">
              Expert Hands to Take Care Of You At Every Step
            </h1>
            <p className="text-gray-500 font-medium pb-6 text-sm sm:text-base">
              The healthcare arena there was a felt need of developing new as well as
              upgrading the existing functioning and processes, consequently develop
              an institution supported with necessary
            </p>

            <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow text-[16px] sm:text-[18px]">
              Book an Appointment <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </aside>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            {rightbar.map((item, index) => (
              <div className="relative group" key={index}>
                <div className="bg-white nursingimg rounded-xl px-4 py-4 border border-gray-200 flex flex-col sm:flex-row gap-4 items-start">
                  <Image
                    src={item.image}
                    alt={item.head}
                    width={120}
                    height={120}
                    className="w-28 h-28 sm:w-36 sm:h-auto object-cover rounded-lg"
                  />
                  <div className="flex flex-col flex-1 justify-between h-full">
                    <h3 className="text-lg font-bold text-[#000000]">{item.head}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.label}</p>
                  </div>
                  <Image
                    height={30}
                    width={30}
                    alt="Logo"
                    src={Logo}
                    className="absolute top-4 right-4 hidden sm:block"
                  />
                </div>

                <Link
                  href="#"
                  className="absolute bottom-2 right-2 sm:bottom-1 sm:right-1 w-8 h-8 rounded-full bg-white flex items-center justify-center z-30 shadow-md group-hover:shadow-lg transition-all duration-200"
                >
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nursingsidebar;
