"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import sidebar1 from "@/assets/alliedhealthservice/1.png"
import sidebar2 from "@/assets/alliedhealthservice/2.png";
import sidebar3 from "@/assets/alliedhealthservice/3.png";
import sidebar4 from "@/assets/alliedhealthservice/4.png";
import sidebar5 from "@/assets/alliedhealthservice/5.png";
import Image from "next/image";
import Logo from "../assets/nursingservice/Group.png";
import Link from "next/link";

const rightbar = [
    {
        head: "Physiotherapy ",
        label: "The medical professional doctors available in the clinic",
        image: sidebar1,
    },
    {
        head: "Dietetics ",
        label: "The medical professional doctors available in the clinic",
        image: sidebar2,
    },
    {
        head: "Lactation & Maternal Health ",
        label: "The medical professional doctors available in the clinic",
        image: sidebar3,
    },
    {
        head: "Organ Transplant ",
        label: "The medical professional doctors available in the clinic",
        image: sidebar4,
    },
    {
        head: "Psychology ",
        label: "The medical professional doctors available in the clinic",
        image: sidebar5,
    },
];

const Alliedhealthsidebar = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-10">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Section */}
                <aside className="w-full lg:w-1/2 space-y-6 lg:sticky lg:top-24 h-fit">
                    <div className="inline-block bg-white px-4 py-1 rounded-3xl">
                        <p className="text-blue-700 text-1xl font-semibold">Allied Services </p>
                    </div>

                    <div>
                        <h1 className="text-3xl sm:text-4xl text-black font-semibold max-w-[20ch] pb-6">
                            Advanced Allied Healthcare for Complete Recovery
                        </h1>
                        <p className="text-gray-500 font-medium pb-6 text-sm sm:text-base">
                            Sudha Multispeciality Hospital in Erode offers advanced Allied Health Care Services to support patients throughout their treatment
                            and recovery journey. Our expert team provides specialised care in physiotherapy, dietetics, maternal health, psychology, and organ
                            transplant rehabilitation. These services are designed to complement core medical treatments, ensuring holistic healing and improved
                            patient outcomes. With a collaborative approach and patient-centred care, we help individuals regain strength, stability, and overall well-being.
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
                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.head}
                                        width={120}
                                        height={120}
                                        className="w-28 h-28 sm:w-36 sm:h-auto object-cover rounded-lg"
                                    />

                                    {/* Text Content */}
                                    <div className="flex flex-col flex-1 h-full w-full">
                                        {/* Header */}
                                        <div className="flex justify-between items-start w-full">
                                            <h3 className="text-lg font-bold text-[#000000]">{item.head}</h3>
                                            <Image
                                                height={30}
                                                width={30}
                                                alt="Logo"
                                                src={Logo}
                                                className="hidden sm:block"
                                            />
                                        </div>

                                        {/* Bottom label + line */}
                                        <div className="mt-auto pt-20 pr-6 pb-20 sm:pb-0">
                                            <div className="border-t border-gray-200 mt-6 mb-2" />
                                            <p className="text-gray-700 text-sm">{item.label}</p>
                                        </div>
                                    </div>

                                </div>

                                {/* Arrow Icon */}
                                <Link
                                    href="#"
                                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center z-30 shadow-md group-hover:shadow-lg transition-all duration-200"
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

export default Alliedhealthsidebar;
