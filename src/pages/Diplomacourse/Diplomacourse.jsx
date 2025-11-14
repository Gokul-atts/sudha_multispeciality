'use client';

import React, { useState } from 'react';
import Banner from "@/assets/fellownationalboard/banner.png";
import Diploma from "@/assets/fellownationalboard/diplomacourses.webp";
import { motion } from 'framer-motion';
import HospitalCard from "@/components/Hospital";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import Bookappointment from "@/components/Bookappointment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faculties from '@/components/faculties';
import Anaesthesia from '@/assets/fellownationalboard/anaesthesia.png';
import Radiology from '@/assets/fellownationalboard/radiology.png';

import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Academics", href: "" },

    { label: "Post MBBS Diploma Courses (DNB)", href: "/post-mbbs-diploma-courses" },
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



// Main Page Component
const Diplomacourse = () => {

    const courses = [
        {
            title: "DNB – Anesthesiology",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Anaesthesia,
            since: "Since 2002",
            link: '/academics/post-mbbs-diploma-courses/dnb-anaesthesiology',
        },
        {
            title: "DNB – Radio Diagnosis",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Radiology,
            since: "Since 2002",
            link: '/academics/post-mbbs-diploma-courses/dnb-radio-diagnosis',
        },
    ];

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
                            className="text-[40px]  mb-3"
                        >
                            Post MBBS Diploma Courses
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 text-white"
                        >
                            Offering the Advanced Healthcare Education.
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
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-10 rounded-xl">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h5 className="inline-block mb-4 px-4 sm:px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm">
                            Diploma Courses
                        </h5>

                        <h2 className="text-[30px]">
                            Diplomate of National Board (DNB)
                        </h2>

                        <p className="mb-4 mt-4">
                            Sudha Multispeciality Hospital offers accredited DNB Post MBBS Diploma courses in Anaesthesiology and Radio-diagnosis, designed to provide comprehensive postgraduate training for aspiring specialists. These diploma programmes equip candidates with advanced theoretical knowledge and extensive practical experience in their respective fields.
                        </p>

                        <p className="mb-4 mt-4">
                            Under the guidance of experienced faculty and access to modern clinical facilities, trainees gain expertise in perioperative care, pain management, and critical care (Anaesthesiology), as well as state-of-the-art imaging techniques and diagnostic interpretation (Radio-diagnosis). Our structured curriculum, combined with hands-on patient care, ensures well-rounded clinical competence.
                        </p>

                        <p className="mb-4 mt-4">
                            We support our trainees with dedicated mentorship and a conducive learning environment to prepare them for successful careers as competent specialists.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={Diploma.src}
                            alt="Doctors"
                            className="rounded-3xl object-cover w-full h-auto"
                        />
                    </div>
                </div>
            </section>




            <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-14 lg:py-8">

                <div className="text-center">
                    <h5 className="inline-block mb-4 px-4 sm:px-5 py-1.5 sm:py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm">
                        Courses offered
                    </h5>
                    <h2 className="text-[30px]">
                        DNB Courses Offered by <br />Sudha Multispeciality Hospital
                    </h2>
                </div>
                {/* Heading */}


                {/* Card Grid */}
                <div className="bg-[#f0f7fd] flex justify-center items-center mt-8 rounded-2xl p-4 sm:p-6 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl flex flex-col md:flex-row w-full p-4 sm:p-5"
                            >
                                {/* Image Section */}
                                <div className="relative w-full md:w-[40%] flex justify-center items-center">
                                    <div className="rounded-3xl overflow-hidden w-full">
                                        <Image
                                            src={course.img}
                                            alt={course.title}
                                            width={500}
                                            height={300}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white text-[#2A3F92] text-[12px] font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow">
                                        {course.since}
                                    </span>
                                </div>

                                {/* Text Section */}
                                <div className="flex flex-col justify-between mt-4 md:mt-0 md:ml-5 w-full md:w-[60%]">
                                    <div>
                                        <h3 className="text-[20px] ">
                                            {course.title}
                                        </h3>
                                        <p className="mt-2">{course.duration}</p>
                                        <p className="mt-4">{course.seats}</p>
                                    </div>

                                    <div className="mt-4 border-t pt-6">
                                        <Link href={course.link}>
                                            <button className="btn-diagonal w-full mx-auto sm:w-auto">
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

            <section className="text-center px-4 py-6 md:px-8 lg:px-8">
                <h5 className="inline-block mb-4 px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm ">
                    Meet Our Expert Faculty
                </h5>
                <h2 className="text-[30px]">
                   Experts Guiding the Next Generation <br/> of Medical Professionals.
                </h2>
                <div className='max-w-7xl mx-auto px-4 py-10 relative'>
                    <Faculties />
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
                <Bookappointment />
            </section>


        </div>
    );
};

export default Diplomacourse;
