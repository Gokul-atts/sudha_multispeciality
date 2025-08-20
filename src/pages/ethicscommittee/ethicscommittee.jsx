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
import Doc1 from "@/assets/ethicscommittee/doc1.png";
import Doc2 from "@/assets/ethicscommittee/doc2.png";
import EthicsCommitteTable from '@/components/ethicscommitteetable';


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

const terms = [
    "Ensure the highest scientific and ethical standards of research",
    "Review and approve proposals for clinical, basic or translation research projects (intra and extra mural) for scientific and ethical content",
    "Improve ethical standards and issue guidelines.",
    "To malfunction as a forum to advise the administration in case of any ethical issues that may rise form patients, families or public.",
    "To maintain leadership as a national standard of reference to all fields.",
    "To issue and periodically update and revise SOPs and guidelines for effective functioning of EC as and when necessary.",
    "Continuing education to clinical research, bioethical and ethical aspects of clinical practices by seminars, workshops and interactive discussion for all categories of staff members including nursing and paramedical staff.",
    "To initiate and commission research studies on ethical aspects of practice.",
]

const roles = [
    "To protect and safeguard the dignity, rights, safety and well-being of all actual or potential research participants.",
    "To ensure that the research projects that are carried out are sound in design, have statistical validity and are conducted according to the New Drugs and Clinical Trial Rule 2019, ICH GCP and ICMR guidelines.",
    "To consider the principle of justice, that the benefits and burdens of research be distributed fairly among all groups and classes in society taking into account age, gender, economic status, culture and ethics consideration.",
    "To provide advice to the researchers on all aspects of the welfare and safety of research participants ensuring the scientific soundness of the proposed research.",
    "To ensure the research are conducted under the supervision of trained medical /bio-medical persons with the required expertise.",
    "To ensure that research will include solely patients or participants who have given voluntary and informed consent.",
    "It may be ensured that no research projects shall be started unless ethics clearance is obtained.",
    "It will review the proposals before start of the studies as well as monitor the research throughout the study and after completion by examining the annual reports and final reports. The committee will also examine whether all regulatory requirements and laws are complied with or not."
]

const TickCircle = () => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white ">
        <svg
            className="w-4 h-4 text-[#2B3990]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);



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
const EthicsCommitte = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 1536, settings: { slidesToShow: 5 } }, // 2xl
            { breakpoint: 1280, settings: { slidesToShow: 4 } }, // xl
            { breakpoint: 1024, settings: { slidesToShow: 3 } }, // lg
            { breakpoint: 768, settings: { slidesToShow: 2 } }, // md
            { breakpoint: 640, settings: { slidesToShow: 1 } }, // sm & below
        ]
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
                            Home / Academic /  Ethics Committee
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px]  mb-2"
                        >
                            Ethics Committee
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
                <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-12 h-full px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
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
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
                    {/* Left Content */}
                    <div className="md:col-span-8">
                        <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-bold leading-snug">
                            Institutional Ethics Committee at Sudha Hospitals
                        </h2>
                        <p className="mb-2 text-sm text-blue-900 sm:text-base mt-6">
                            Registration No:
                            <span className="text-sm text-gray-600 sm:text-base">
                                {" "}ECR / 948 / INST / TN / 2018 / RR-22
                            </span>
                        </p>
                        <p className="mb-2 text-sm text-blue-900 sm:text-base">
                            Valid From:
                            <span className="text-sm text-gray-600 sm:text-base">
                                {" "}14 May 2022
                            </span>
                        </p>
                        <p className="mb-2 text-sm text-blue-900 sm:text-base">
                            Valid To:
                            <span className="text-sm text-gray-600 sm:text-base">
                                {" "}13 May 2027
                            </span>
                        </p>
                        <p className='mt-8'>
                            The EC shall be established to formalize and specify the institution's
                            commitment to the promotion of high scientific and ethical standards in
                            patient care, professional education, clinical research, and community
                            interests.
                        </p>
                    </div>
                    {/* right image */}
                    <div className="md:col-span-4">
                        <img
                            src={Doctors.src}
                            alt="Doctors"
                            className="rounded-2xl object-cover w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[350px]"
                        />

                    </div>
                </div>
            </section>

            {/* section-1 */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
                    <div className="md:col-span-4">
                        <img
                            src={Doc1.src}
                            alt="Doc1"
                            className="rounded-2xl object-cover w-full h-[200px] sm:h-[280px] md:h-[400px] lg:h-[450px]"
                        />
                    </div>

                    {/* Text (8 cols) */}
                    <div className="md:col-span-8">
                        <h2 className="text-2xl md:text-[24px] mb-4 font-bold">
                            Terms Of Reference Of EC
                        </h2>
                        {terms.map((term, idx) => (
                            <div key={idx} className="flex gap-3 mb-3">
                                <div className="flex-shrink-0 mt-1">
                                    <TickCircle className="w-5 h-5 text-[#2B3990]" />
                                </div>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                    {term}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* Section 2 - Roles and Responsibility */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start">

                    {/* Text Column */}
                    <div className="order-2 md:order-1 md:col-span-8">
                        <h2 className="text-xl sm:text-2xl md:text-[24px] mb-4 mt-3 sm:mt-5 font-bold">
                            Roles and Responsibility of EC
                        </h2>
                        {roles.map((role, idx) => (
                            <div key={idx} className="flex gap-3 mb-3">
                                <div className="flex-shrink-0 mt-1">
                                    <TickCircle className="w-5 h-5 text-[#2B3990]" />
                                </div>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                    {role}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Image Column */}
                    <div className="order-1 md:order-2 md:col-span-4">
                        <img
                            src={Doc2.src}
                            alt="Doc2"
                            className="rounded-2xl object-cover w-full 
                   h-[200px] sm:h-[260px] md:h-[380px] lg:h-[420px]"
                        />
                    </div>

                </div>
            </section>



            <section className='md:12 px-28'>
                <h2 className="text-[24px] mb-7 mt-5">
                    Composition of the Ethics Committee
                </h2>
                <div className='text-center mb-9'>
                    <EthicsCommitteTable />
                </div>
            </section>

            <section>
                <Bookappointment />
            </section>

        </div>
    );
};

export default EthicsCommitte;
