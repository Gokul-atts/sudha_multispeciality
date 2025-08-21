'use client';

import React, { useState } from 'react';
import Banner from "@/assets/fellownationalboard/Banner.png";
import Doctors from "@/assets/fellownationalboard/Doctors.png";
import Rectangle from "@/assets/fellownationalboard/Rectangle.png";
import { motion } from 'framer-motion';
import HandIcon from "@/assets/healthpackage/nephrology.svg";
import { ArrowUpRight } from "lucide-react";
import DocsGroup from "@/assets/fellownationalboard/DocsGroup.png";
import cardone from "@/assets/home/cards/1.svg";
import cardtwo from "@/assets/home/cards/2.svg";
import cardthree from "@/assets/home/cards/3.svg";
import cardfour from "@/assets/home/cards/4.svg";
import ServiceCard from "@/components/ServiceCard";
import Slider from "react-slick";
import Image from "next/image";
import shyla from "@/assets/fellownationalboard/shyla.png";
import Link from "next/link";
import { doctorsData } from "@/constants/doctorDetails";
import Bookappointment from "@/components/Bookappointment";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiplomaDoctor from "@/components/diplomaSlider";
import Faculties from '@/components/faculties';

const cards = [
    {
        icon: cardone,
        title: (
            <p className="text-md font-extrabold text-black">
                <span className="text-[#2b3990] font-extrabold">Sudha </span>Integrated <br />
                out patient centre
            </p>
        ),
        link: "/contact-us",
    },
    {
        icon: cardtwo,
        title: (
            <p className="text-md font-extrabold text-black">
                <span className="text-[#2b3990] font-extrabold"> Master </span> Health<br />
                Check Up
            </p>
        ),
        link: "/maternity",
    },
    {
        icon: cardfour,
        title: (
            <p className="text-md font-extrabold text-black">
                {" "}
                <br />
                Find a<span className="text-[#2b3990] font-extrabold "> Doctor</span>
            </p>
        ),
        link: "/find-doctor",
    },
    {
        icon: cardthree,
        title: (
            <p className="text-md font-extrabold text-black">
                <br />
                Book an
                <span className="text-[#2b3990] font-extrabold"> Appointment </span>
            </p>
        ),
        link: "/#book-appointment",
    },
];



const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};
// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const TickCircle = () => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
        <svg
            className="w-6 h-4 text-[#2B3990]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);



const handleScroll = (direction) => {
    const slider = document.getElementById("doctor-slider");
    if (slider) {
        const scrollAmount = 250; // Adjust based on card width
        slider.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    }
};

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
               lg:right-[150px] right-[290px] translate-x-[60px] 
               lg:bottom-[-60px] bottom-[-100px] 
               border border-[#2B3990] text-[#2B3990] 
               hover:bg-[#2B3990] hover:text-white 
               p-1.5 rounded-full"
    >
        <ChevronLeft className="w-4 h-4" />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute z-10 
               lg:right-[-20px] right-20 -translate-x-[60px] 
               lg:bottom-[-60px] bottom-[-100px] 
               bg-[#2B3990] hover:bg-[#1f2e6e] 
               text-white p-2 rounded-full"
    >
        <ChevronRight className="w-4 h-4" />
    </button>
);


// Main Page Component
const Fellownationalboard = () => {

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

    return (
        <div>
            {/* Banner Section */}
            <section className="relative -mt-12 lg:-mt-24 m-10">
                <div
                    className="max-w-full mx-auto px-4 py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover lg:bg-contain banner min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="pl-8 md:pl-20">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-2 text-white"
                        >
                            Home / Academic / Fellow of National Board (FNB)
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px]  mb-2"
                        >
                            Fellow of National Board (FNB)
                        </motion.h1>

                        <motion.div className='mt-12'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* <Link
                                href="#"
                                className="btn-white inline-flex  text-[16px] tracking-wide items-center px-7 py-3 bg-white text-[#2B3990] font-semibold rounded-full  hover:-translate-y-[3px] transition-transform duration-200"
                            >
                           
                            </Link> */}
                        </motion.div>

                    </div>

                    <div className="absolute bottom-0 right-4 sm:right-10 md:right-[-40px] z-30 hidden md:block mr-10">
                        <div className="w-[220px] overflow-hidden rounded-tl-xl  rounded-br-xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-4 ">
                                <h3 className="text-[36px] font-bold text-[#2B3990]">40+</h3>
                                <p className="text-lg leading-snug text-black font-semibold">
                                    Years of Trusted <br />
                                    Expertise in <br />
                                    Healthcare
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10"
                >
                    {cards.map((card, idx) => (
                        <motion.div key={idx} variants={item}>
                            <div className="cursor-pointer  duration-300">

                                <ServiceCard
                                    icon={card.icon}
                                    title={card.title}
                                    link={card.link}
                                />

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>


            {/* Intro Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 lg:gap-12">
                    {/* Left Content */}
                    <div className="flex-1">
                        <div className="inline-block mb-4 px-3 sm:px-4 py-1.5 sm:py-2 font-semibold bg-white text-[#2B3990] rounded-full text-xs sm:text-sm md:text-base">
                            Fellow of National Board (FNB)
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold mb-3 leading-snug text-center md:text-left">
                            Reproductive Medicine
                        </h2>
                        <p className="mb-4 text-sm sm:text-base lg:text-lg text-center md:text-left">
                            The Fellow of National Board (FNB) is a prestigious post-doctoral qualification awarded by the National Board of Examinations in Medical Sciences (NBEMS),
                            Government of India. It is offered in approved super-specialties and sub-specialties to promote advanced clinical expertise and academic excellence.
                        </p>
                        <p className="mb-3 text-sm sm:text-base text-center md:text-left">
                            Sudha Multispeciality Hospital, accredited by NBEMS, offers structured training for FNB trainees with expert faculty support and access to advanced
                            medical facilities. The FNB qualification is recognized by the Government of India, included in the First Schedule of the IMC Act, 1956, and considered
                            equivalent to DM/MCh degrees—eligible for specialist and faculty roles across hospitals and teaching institutions nationwide.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1">
                        <img
                            src={Doctors.src}
                            alt="Doctors"
                            className="rounded-2xl object-cover w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
                        />
                    </div>
                </div>
            </section>


            <section className="text-center px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
                <div className="inline-block mb-4 px-4 sm:px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm sm:text-base">
                    Meet Our Expert Faculty
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                    Reproductive Medicine with Expertise & Care
                </h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 relative">
                    <Faculties />
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
                <Bookappointment />
            </section>

        </div>
    );
};

export default Fellownationalboard;
