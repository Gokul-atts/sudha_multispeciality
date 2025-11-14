'use client';

import React, { useState } from 'react';
import Banner from "@/assets/fellownationalboard/banner.png";
import Doctors from "@/assets/fellownationalboard/fellowboards.jpg";
import Rectangle from "@/assets/fellownationalboard/Rectangle.png";
import { motion } from 'framer-motion';

import HospitalCard from "@/components/Hospital";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";

import shyla from "@/assets/fellownationalboard/shyla.png";

import { doctorsData } from "@/constants/doctorDetails";
import Bookappointment from "@/components/Bookappointment";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiplomaDoctor from "@/components/diplomaSlider";
import Faculties from '@/components/faculties';

import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Academics", href: "" },

    { label: "Fellow of National Board (FNB)", href: "/academics/fellow-of-national-board" },
];

const hospitalscards = [
    {
        number: <h3 className="text-[48px] text-[#2B3990]">40+</h3>,
        title: (
            <p className="text-md font-bold text-black">Years of Experience</p>
        ),
        link: "/about-us/our-growth-story",
        icon: hospitalOne,
    },
    {
        number: <h3 className="text-[48px] text-[#2B3990]">300+</h3>,
        title: <p className="text-md font-bold text-black">Patient Beds</p>,
        link: "/facilities/health-package",
        icon: hospitalTwo,
    },
    {
        number: <h3 className="text-[48px] text-[#2B3990]">30+</h3>,
        title: <p className="text-md font-bold text-black">Departments</p>,
        link: "/specialities",
        icon: hospitalThree,
    },
    {
        number: <h3 className="text-[48px] text-[#2B3990]">100+</h3>,
        title: <p className="text-md font-bold text-black">Doctors</p>,
        link: "/find-a-doctor",
        icon: hospitalFour,
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
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-2 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />


                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[40px]  mb-2"
                        >
                            Fellow of National Board (FNB)
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 text-white"
                        >
                            Offering the best medical courses in Erode 
                        </motion.p>

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

                    <div className="absolute bottom-0 right-0  z-30 hidden md:block">
                        <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-5">

                                <p className="text-[16px] text-black font-bold mb-2">
                                    Empowering Future <br /> Healthcare
                                    Professionals  <br />
                                </p>
                                <h3 className="text-[20px] font-extrabold text-[#2B3990]">Since 1985</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className=" max-w-7xl mx-auto  my-20 h-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="
        grid 
        grid-cols-1        
        sm:grid-cols-2     
        md:grid-cols-2     
        lg:grid-cols-3     
        xl:grid-cols-4     
        gap-4 sm:gap-6 lg:gap-8
      "
                    >
                        {hospitalscards.map((card, idx) => (
                            <motion.div key={idx} variants={cardVariants}>
                                <HospitalCard
                                    number={card.number}
                                    icon={card.icon}
                                    title={card.title}
                                    link={card.link}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Intro Content */}
            <section className="max-w-7xl mx-auto px-4 md:px-0 py-10 sm:py-14 lg:py-20">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8 lg:gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h5 className="inline-block px-4 sm:px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm">
                            Fellow of National Board (FNB)
                        </h5>

                        <h2 className="text-[30px] mt-2 ">
                           Reproductive Medicine – NBMS Accredited Fellowship Program (2021) 
                        </h2>
                        <p className="mb-4 mt-4">
                            Sudha Fertility Centre, a part of the renowned Sudha Hospitals network and a pioneer in fertility and maternal healthcare, offers the prestigious Fellow of National Board (FNB) programme in Reproductive Medicine. This super-specialty fellowship is fully accredited by the National Board of Examination in Medical Specialities (NBEMS) since 2021. 
                        </p>
                        <p className="mb-4 mt-4">
                            Our three-year comprehensive training programme is specially designed for NEET PG-qualified doctors, providing advanced clinical exposure, rigorous research opportunities, and extensive hands-on experience. Under the mentorship of highly experienced specialists, fellows gain in-depth knowledge and practical skills essential for excellence in reproductive and maternal medicine. 
                        </p>
                        <p className="mb-4 mt-4">
                           To support our trainees, we offer free accommodation throughout the fellowship duration, ensuring a focused and comfortable learning environment. Sudha Fertility Centre is committed to shaping the next generation of leaders in reproductive healthcare with world-class education and patient care standards. 
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1">
                        <img
                            src={Doctors.src}
                            alt="Doctors"
                            className="rounded-3xl object-cover w-full h-auto "
                        />
                    </div>
                </div>
            </section>



            <section className="text-center px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
                <h5 className="inline-block mb-2 px-4 sm:px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm ">
                    Meet Our Expert Faculty
                </h5>
                <h2 className="text-[30px] mb-4 ">
                    Reproductive Medicine with <br /> Expertise & Care
                </h2>
                <div className="max-w-7xl mx-auto mt-14 relative">
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
