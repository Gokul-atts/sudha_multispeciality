'use client';

import React, { useState } from 'react';
import Banner from "@/assets/fellownationalboard/Banner.png";
import Doctors from "@/assets/fellownationalboard/Doctors.png";
import { motion } from 'framer-motion';
import cardone from "@/assets/home/cards/1.svg";
import cardtwo from "@/assets/home/cards/2.svg";
import cardthree from "@/assets/home/cards/3.svg";
import cardfour from "@/assets/home/cards/4.svg";
import ServiceCard from "@/components/ServiceCard";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import Bookappointment from "@/components/Bookappointment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faculties from '@/components/faculties';
import Anaesthesia from '@/assets/fellownationalboard/anaesthesia.png';
import Radiology from '@/assets/fellownationalboard/radiology.png';


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



// Main Page Component
const Diplomacourse = () => {

    const courses = [
        {
            title: "DNB – Anesthesiology",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Anaesthesia,
            since: "Since 2002",
            link: '/anesthesio-course-details',
        },
        {
            title: "DNB – Radio Diagnosis",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Radiology,
            since: "Since 2002",
            link: '/anesthesio-course-details',
        },
    ];

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
                            Home / Academic /  DNB
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px]  mb-2"
                        >
                            Diplomate of National Board (DNB)
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

            <section>
                <div className="max-w-7xl mx-auto py-8 h-full">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
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
                </div>
            </section>


            {/* Intro Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 rounded-xl">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2">
                        <div className="inline-block mb-4 px-4 sm:px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm sm:text-base">
                            Diplomate of National Board (DNB)
                        </div>

                        <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-bold mb-3 leading-snug text-center md:text-left">
                            Reproductive Medicine <br />

                        </h2>

                        <p className="mb-4 text-sm sm:text-base text-center md:text-left">
                            The Diplomate of National Board (DNB) is a prestigious postgraduate medical qualification awarded by the National Board of Examinations in
                            Medical Sciences (NBEMS), Government of India. It is offered in approved broad specialties, super specialties, and sub-specialties to ensure high and
                            uniform standards of medical education and training across the country.
                        </p>

                        <p className="mb-3 text-sm sm:text-base text-center md:text-left">
                            Sudha Multispeciality Hospital, accredited by NBEMS, offers structured training for DNB trainees with expert faculty guidance and access to
                            advanced medical facilities. The DNB qualification is recognized by the Government of India, included in the First Schedule of the IMC Act, 1956,
                            and is considered equivalent to MD/MS degrees—qualifying doctors for specialist roles and faculty positions in hospitals and medical institutions nationwide.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={Doctors.src}
                            alt="Doctors"
                            className="rounded-2xl object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
                        />
                    </div>
                </div>
            </section>

            <section className="text-center px-4 py-6 md:px-8 lg:px-16">
                <div className="inline-block mb-4 px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm md:text-base">
                    Meet Our Expert Faculty
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-3 leading-snug">
                    Expert Care from DNB-Qualified Doctors
                </h2>
                <div className='max-w-7xl mx-auto px-4 py-10 relative'>
                    <Faculties />
                </div>
            </section>

            <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-14 lg:py-20">
                {/* Heading */}
                <div className="inline-block mb-4 px-4 sm:px-5 py-1.5 sm:py-2 font-semibold bg-white text-[#2B3990] rounded-full text-xs sm:text-sm md:text-base">
                    Diplomate of National Board (DNB)
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pt-3 leading-snug">
                    Academic Structure & Course Details
                </h2>

                {/* Card Grid */}
                <div className="bg-[#f0f7fd] flex justify-center items-center mt-8 rounded-2xl p-4 sm:p-6 lg:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl flex flex-col md:flex-row w-full p-4 sm:p-5"
                            >
                                {/* Image Section */}
                                <div className="relative w-full md:w-[45%] flex justify-center items-center bg-white">
                                    <div className="rounded-xl overflow-hidden w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px]">
                                        <Image
                                            src={course.img}
                                            alt={course.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white text-[#2A3F92] text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ">
                                        {course.since}
                                    </span>
                                </div>

                                {/* Text Section */}
                                <div className="flex flex-col justify-between p-4 w-full">
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                            {course.duration}
                                        </p>
                                        <p className="text-gray-600 text-sm sm:text-base">{course.seats}</p>
                                    </div>

                                    <div className="mt-4 border-t pt-6">
                                        <Link href={course.link}>
                                            <button className="w-full sm:w-auto bg-[#283593] text-white text-sm sm:text-base px-6 sm:px-10 lg:px-16 py-2 sm:py-2.5 rounded-full hover:bg-[#1A237E] transition">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
                <Bookappointment />
            </section>


        </div>
    );
};

export default Diplomacourse;
