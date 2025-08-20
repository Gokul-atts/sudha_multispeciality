'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from "@/assets/facilities/health-packages.webp";

import HandIcon from "@/assets/healthpackage/nephrology.svg";
import Doctors from "@/assets/healthpackage/doctors.webp";
import Checking from "@/assets/healthpackage/checking.webp";
import Slider from "react-slick";
import Image from "next/image";
import shyla from "@/assets/fellownationalboard/shyla.png";
import Link from "next/link";
import "./Healthpackage.css";
import { doctorsData } from "@/constants/doctorDetails";
import Bookappointment from "@/components/Bookappointment";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Check from "@/assets/insurance/check.svg";
import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Facilities", href: "" },

    { label: "Master Helath Packages", href: "/health-packages" },
];



const doctors = [
    {
        name: "Dr. U. Shyla",
        qualification: "MBBS., DGO., DNB(OG)., DRM., MNAMS",
        image: shyla,
    },
    {
        name: "Dr. T. Naga Tejaswi",
        qualification: "MBBS., MS(OBG) FRM",
        image: shyla,
    },
    {
        name: "Dr. Aruna Saradha K",
        qualification: "MBBS, MS(OBG), FRM",
        image: shyla,
    },
    {
        name: "Dr. V. Indhumathy",
        qualification: "MBBS., MS(OBG) FRM",
        image: shyla,
    },
    {
        name: "Dr. Nadiya Hameed",
        qualification: "MBBS., MS(OBG) FRM",
        image: shyla,
    },
    { name: "Dr. Jane Doe", qualification: "MBBS., MS(OBG) FRM", image: shyla },
    { name: "Dr. Priya Raj", qualification: "MBBS., MS(OBG) FRM", image: shyla },
];

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute z-10 
               right-24 lg:right-[90px]
               bottom-[-40px] md:bottom-[-50px] text-white 
               border border-white
               hover:bg-[#2B3990] hover:text-white 
               p-2 rounded-full"
    >
        <ChevronLeft className="w-4 h-4" />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute z-10 
               right-14 lg:right-[40px]
               bottom-[-40px] md:bottom-[-50px]
               border border-white bg-[#2B3990] 
               hover:bg-[#1f2e6e] text-white 
               p-2 rounded-full"
    >
        <ChevronRight className="w-4 h-4" />
    </button>
);



const Healthpackage = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5, // default for desktop
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };



    const healthPackages = [
        {
            title: "Basic Health Checkup - Rs. 2000/-",
            testCount: "09",
            leftColumn: [
                "CBC",
                "C-Xray ",
                "S.Creatinine",
                "S.Bilirubin",
                "FBS",
                "PPBS",
            ],
            rightColumn: [
                "Echo Screening",
                "TMT ",
                "Total Cholestrol ",
                "Diet Counselling",
                "Doctor Opinion"
            ]
        },
        {
            title: "Master Health Checkup - Rs. 3000/-",
            testCount: "10",
            leftColumn: [
                "CBC",
                "C-Xray ",
                "RFT",
                "LFT",
                "Lipid Profile",
                "TSH",
                "FBS ",
            ],
            rightColumn: [
                "PPBS",
                "ECHO",
                "TMT",
                "Diet",
                "PFT",
                "Doctor Opinion"
            ]
        },
        {
            title: "Comprehensive Health Checkup - Rs. 4000/-",
            testCount: "13",
            leftColumn: [
                "CBC",
                "RFT",
                "LFT",
                "FBS",
                "PPBS",
                "TSH",
                "Lipid Profile",
            ],
            rightColumn: [
                "PFT",
                "HbA1C",
                "USG Abdomen",
                "Chest X-ray",
                "Eye Checkup",
                "Diet COunseling",
                "Dental Opinion & Specialist Opinion",
            ]
        },

    ];

    return (
        <div>
            <section className="relative -mt-20 lg:-mt-[100px] m-10">
                {/* Banner Container */}
                <div
                    className="relative top-6 max-w-full mx-auto px-4 py-36 z-10 text-white bg-center bg-no-repeat bg-cover lbg-contain rounded-3xl overflow-hidden banner"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="pl-8 md:pl-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className=" mb-3 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px]  font-bold mb-4"
                        >
                            Health Care Packages
                        </motion.h1>
                        <p className='text-white'>Stay Ahead of Health Risks with Regular Checkups</p>
                    </div>

                    <div className="absolute bottom-[5px] hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990] p-4 rounded-xl w-[220px]">
                        <div
                            className="w-12 h-12 mb-2 bg-contain bg-no-repeat"
                            style={{ backgroundImage: `url(${HandIcon.src})` }}
                        ></div>
                        <p className="  text-black font-bold">
                            Government <br />
                            Approved <br />
                            Licence
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Content */}
            <section className="py-10 ml-0.5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start  gap-10">
                    {/* Left Text */}
                    <div className="md:w-7/12 text-[#444] text-[15px] leading-[1.8]">
                        <h2 className="text-[30px] text-black mb-4">
                            Executive Health Check–Up at Sudha Multispeciality Hospital
                        </h2>
                        <p className="">
                            Sudha Hospital offers a range of preventive health checkup packages designed to support early detection, timely intervention, and overall wellness.
                            From basic screenings to comprehensive evaluations, each package includes essential diagnostic tests, specialist consultations, and personalized counselling.
                            These health checkups are tailored to meet the needs of individuals across all age groups and health conditions, ensuring a proactive approach to
                            long-term well-being. With expert medical support and advanced diagnostic tools, Sudha Hospital helps you take charge of your health with confidence.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-5/12 flex justify-center">
                        <img
                            src={Doctors.src}
                            alt="Doctors"
                            className="rounded-3xl shadow-md w-full h-auto object-cover"
                        // style={{ height: '230px', width: '350px' }}
                        />
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-16">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left Section (Image) */}
                    <div className="w-full md:w-[40%] flex flex-col items-start">
                        <img
                            src={Checking?.src}
                            alt="Checking"
                            className="rounded-3xl object-cover max-h-[350px] w-full max-w-md md:max-w-full"
                        />

                        <div className="mt-4 w-full max-w-md">
                            <h2 className="text-[20px] text-black mb-2">
                                Benefits of an Executive Health Check–Up
                            </h2>

                            <ul className="text-left mt-5">
                                {[
                                    "Comprehensive Health Assessment",
                                    "Early Detection of Health Risks",
                                    "Preventive Care Focus",
                                    "Time-Efficient and Convenient",
                                    "Cost-Effective Care",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start  font-semibold text-[#5E566A] mb-3"
                                    >
                                        <span className="text-blue-600 mr-2 leading-none"><Image
                                            src={Check}
                                            alt="tick"
                                            width={24}
                                            height={24}
                                        /></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                    {/* Right Section (Accordion Content) */}
                    <div className="w-full px-4 sm:px-6 md:px-10 lg:w-[70%]">
                        <h1 className='text-left text-[24px] sm:text-[28px] md:text-[30px] text-black mb-8'>
                            Master Health Checkup Packages
                        </h1>
                        <div className="flex flex-col gap-0">
                            {healthPackages.map((pkg, index) => (
                                <div key={index} className="w-full border-b border-gray-200 last:border-b-0">
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full py-4 px-2 sm:px-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-4 pl-4">
                                            <h3 className=" text-[18px]  text-black">
                                                {pkg.title}
                                            </h3>
                                        </div>

                                        <motion.div
                                            animate={{ rotate: openAccordion === index ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-black text-2xl  pr-4"
                                        >
                                            +
                                        </motion.div>
                                    </button>

                                    {/* Accordion Content */}
                                    <AnimatePresence>
                                        {openAccordion === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-0 pb-6">
                                                    <div className="bg-gray-50 border rounded-xl overflow-hidden">
                                                        <div className="bg-[#2b3990] text-white text-center py-2 font-semibold text-sm sm:text-base rounded-t-xl">
                                                            No of Tests – {pkg.testCount}
                                                        </div>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-6 py-5 gap-y-4 sm:gap-y-3 border-t">
                                                            <div className="space-y-3 sm:pr-6 border-r border-gray-200">
                                                                {pkg.leftColumn.map((text, i) => (
                                                                    <div key={i} className="flex items-center text-[14px] space-x-4 text-[#5E566A] font-semibold">
                                                                        <div className="w-6 h-6 rounded-full bg-[#F1F3F9] flex items-center justify-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                <g clip-path="url(#clip0_1266_2376)">
                                                                                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z" fill="#F0F7FD" />
                                                                                    <path d="M16.456 7.45473C16.6672 7.25356 16.9485 7.14234 17.2402 7.14456C17.532 7.14676 17.8114 7.26222 18.0196 7.46655C18.2278 7.67089 18.3486 7.94814 18.3562 8.23978C18.364 8.53143 18.2581 8.81466 18.061 9.02973L12.076 16.5148C11.9731 16.6256 11.8488 16.7146 11.7108 16.7764C11.5727 16.838 11.4236 16.8713 11.2723 16.8742C11.1211 16.8769 10.9709 16.8491 10.8306 16.7926C10.6903 16.736 10.5629 16.6517 10.456 16.5448L6.48697 12.5758C6.37643 12.4728 6.28778 12.3486 6.2263 12.2106C6.1648 12.0726 6.13174 11.9236 6.12908 11.7726C6.12641 11.6215 6.15419 11.4715 6.21079 11.3314C6.26737 11.1913 6.35158 11.064 6.45841 10.9572C6.56524 10.8504 6.69248 10.7662 6.83257 10.7096C6.97265 10.653 7.1227 10.6252 7.27375 10.6279C7.4248 10.6305 7.57378 10.6636 7.71178 10.7251C7.84978 10.7866 7.97398 10.8752 8.07697 10.9858L11.218 14.1253L16.4275 7.48773C16.4368 7.47618 16.4469 7.46515 16.4575 7.45473H16.456Z" fill="#2B3990" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_1266_2376">
                                                                                        <rect width="24" height="24" fill="white" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                        <span>{text}</span>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                            <div className="space-y-3 sm:pl-6 mt-4 sm:mt-0">
                                                                {pkg.rightColumn.map((text, i) => (
                                                                    <div key={i} className="flex items-center text-[#5E566A] text-[14px] space-x-4 font-semibold">
                                                                        <div className="w-6 h-6 rounded-full bg-[#F1F3F9] flex items-center justify-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                <g clip-path="url(#clip0_1266_2376)">
                                                                                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z" fill="#F0F7FD" />
                                                                                    <path d="M16.456 7.45473C16.6672 7.25356 16.9485 7.14234 17.2402 7.14456C17.532 7.14676 17.8114 7.26222 18.0196 7.46655C18.2278 7.67089 18.3486 7.94814 18.3562 8.23978C18.364 8.53143 18.2581 8.81466 18.061 9.02973L12.076 16.5148C11.9731 16.6256 11.8488 16.7146 11.7108 16.7764C11.5727 16.838 11.4236 16.8713 11.2723 16.8742C11.1211 16.8769 10.9709 16.8491 10.8306 16.7926C10.6903 16.736 10.5629 16.6517 10.456 16.5448L6.48697 12.5758C6.37643 12.4728 6.28778 12.3486 6.2263 12.2106C6.1648 12.0726 6.13174 11.9236 6.12908 11.7726C6.12641 11.6215 6.15419 11.4715 6.21079 11.3314C6.26737 11.1913 6.35158 11.064 6.45841 10.9572C6.56524 10.8504 6.69248 10.7662 6.83257 10.7096C6.97265 10.653 7.1227 10.6252 7.27375 10.6279C7.4248 10.6305 7.57378 10.6636 7.71178 10.7251C7.84978 10.7866 7.97398 10.8752 8.07697 10.9858L11.218 14.1253L16.4275 7.48773C16.4368 7.47618 16.4469 7.46515 16.4575 7.45473H16.456Z" fill="#2B3990" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_1266_2376">
                                                                                        <rect width="24" height="24" fill="white" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                        <span>{text}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-3xl ml-auto mr-36">
                <section className="w-full sm:w-auto">
                    <ul className="text-left mt-0 mb-7">
                        {[
                            "+ Rs. 1000/- Extra (Men - Serum PSA, Carotid Doppler)",
                            "+ Rs. 1000/- Extra (Women - Mammogram, PAP Smear)",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start font-semibold text-[#5E566A] mb-3"
                            >
                                <span className="text-blue-600 mr-2 leading-none">
                                    <Image src={Check} alt="tick" width={24} height={24} />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <section className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 ourteam pt-16 pb-20">
                    <div className="flex justify-center">
                        <h2 className="bg-white text-[#2B3990] px-5 py-2 rounded-full text-sm font-semibold">
                            Our Medical Team
                        </h2>
                    </div>

                    <h2 className="text-center text-[24px] sm:text-[28px] md:text-[30px] text-white mt-4">
                        Our Health Checkup Team
                    </h2>

                    <div className="relative mt-10">
                        <Slider {...settings}>
                            {doctorsData.map((doc, index) => (
                                <div
                                    key={index}
                                    className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[380px] sm:h-[400px]  
              rounded-xl overflow-hidden text-center relative mx-auto"
                                >
                                    <div className="ourteamcard_img">
                                        <Image
                                            src={doc.image}
                                            alt={doc.name}
                                            className="mx-auto rounded-xl mb-2 w-[85%] sm:w-[90%] h-auto"
                                        />
                                    </div>

                                    {/* Arrow Button */}
                                    <Link
                                        href=""
                                        className="absolute bottom-28 sm:bottom-32 right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center z-30 group"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-black transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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

                                    <h3 className="text-[13px] sm:text-[14px] md:text-[16px] mt-4 font-semibold text-white">
                                        {doc.name}
                                    </h3>
                                    <p className="text-[11px] sm:text-[12px] font-medium text-white mt-1">
                                        {doc.degrees}
                                    </p>
                                    <p className="text-[11px] sm:text-[12px] font-medium text-white mt-1">
                                        {doc.qualification}
                                    </p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            <Bookappointment />
        </div>
    )
}

export default Healthpackage;