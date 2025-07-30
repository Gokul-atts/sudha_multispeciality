'use client';

import React, { useState } from 'react';
import Banner from "@/assets/fellownationalboard/Banner.png";
import Doctors from "@/assets/fellownationalboard/Doctors.png";
import Rectangle from "@/assets/fellownationalboard/Rectangle.png";
import { motion } from 'framer-motion';
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



// Card data
const cards = [
    {
        icon: cardone,
        title: (
            <div className="min-h-[80px]">
                <p className="md:text-md sm:text-sm ">
                    <span className="text-[#0077cc] font-semibold">Sudha</span> Integrated <br />
                    Out Patient Centre
                </p>
            </div>
        ),
        link: "/op-centre",
    },
    {
        icon: cardtwo,
        title: (
            <p className="md:text-md sm:text-sm ">
                <span className="text-[#0077cc] font-semibold">Sudha</span> Maternity <br />
                Care Unit
            </p>
        ),
        link: "/maternity",
    },
    {
        icon: cardthree,
        title: (
            <p className="md:text-md sm:text-sm ">
                <span className="text-[#0077cc] font-semibold">Sudha</span> Heart <br />
                Hospital Services
            </p>
        ),
        link: "/heart-care",
    },
    {
        icon: cardfour,
        title: (
            <p className="md:text-md sm:text-sm ">
                <span className="text-[#0077cc] font-bold">Sudha</span> Heart <br />
                Hospital Services
            </p>
        ),
        link: "/heart-care",
    },
];

// Tab content
const fnbTabs = [
    {
        label: "FNB – Reproductive Medicine",
        content: {
            title: "FNB – Reproductive Medicine",
            description:
                "Train under India’s top IVF experts in a program that blends advanced scientific knowledge with real-world ART (Assisted Reproductive Technology) exposure.",
            bullets: [
                "Training in IUI, IVF, ICSI, donor programs, cryopreservation",
                "Access to high–volume fertility cases",
                "Dedicated embryology and andrology labs",
                "Faculty with over 20+ years of experience",
                "Research, audits, and case presentation training",
            ],
        },
    },
    {
        label: "FNB – Maternal & Fetal Medicine",
        content: {
            title: "FNB – Maternal & Fetal Medicine",
            description:
                "Specialized training in managing high-risk pregnancies with hands-on experience, ultrasonography, fetal diagnosis and therapy, guided by senior obstetricians.",
            bullets: [
                "Expertise in fetal monitoring, diagnostics, and interventions",
                "Advanced training in prenatal ultrasonography",
                "Exposure to high-risk maternity cases",
                "Faculty with national recognition in fetal medicine",
                "Strong academic and research exposure",
            ],
        },
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

// Tabbed Card Component
const FNBSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tab = fnbTabs[activeTab];

    return (
        <section className="py-10 px-12">
            {/* Outer Blue Card */}
            <div className="bg-[#2B3990] rounded-2xl p-6 md:p-10 shadow-lg ml-4 md:ml-16 mr-4 md:mr-16">
                {/* Tabs */}
                <div className="flex justify-center mb-6 flex-wrap gap-4">
                    {fnbTabs.map((t, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`px-4 py-2 rounded-full font-medium transition text-sm md:text-base ${activeTab === idx
                                ? "bg-white text-[#2B3990] shadow-md"
                                : "bg-transparent border border-white text-white"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* Inner White Card */}
                <div className="bg-white max-w-5xl mx-auto rounded-xl p-8 shadow flex flex-col md:flex-row gap-6 items-center">
                    {/* Left Content */}
                    <div className="md:w-2/3 space-y-4">
                        <h2 className="text-2xl font-bold text-[#2b3990]">{tab.content.title}</h2>
                        <p className="text-gray-600">{tab.content.description}</p>
                        <ul className="list-none space-y-2">
                            {tab.content.bullets.map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <TickCircle />
                                    <span className="text-sm text-gray-800">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 pt-12">
                        <img
                            src={Rectangle.src}
                            alt="Rectangle"
                            className="rounded-xl shadow-md object-cover w-full"
                            style={{ maxHeight: "220px" }}
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

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
            <section className="relative -mt-20 lg:-mt-[100px] m-10">
                <div
                    className="relative top-6 max-w-full mx-auto px-4 py-36 z-10 text-white bg-center bg-no-repeat bg-cover lbg-contain rounded-[12px] overflow-hidden banner"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="pl-8 md:pl-20">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-4 text-white"
                        >
                            Home / Academic / Fellow of National Board (FNB)
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-4xl font-bold mb-4"
                        >
                            Fellow of National Board (FNB)
                        </motion.h1>

                        <button className="bg-[#fff] rounded-[50px] mt-4 text-[#2B3990] pt-2 pb-2 pl-4 pr-4 flex gap-2">
                            Schedule an Appointment <ArrowUpRight />
                        </button>
                    </div>

                    <div className="absolute bottom-0 right-4 sm:right-10 md:right-[-40px] z-30 hidden md:block">
                        <div className="w-[220px] shadow-md overflow-hidden rounded-tl-xl rounded-tr-xl rounded-br-xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-4">
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

            {/* Service Cards */}
            <section>
                <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8 h-full">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {cards.map((card, idx) => (
                            <motion.div key={idx} variants={item}>
                                <ServiceCard icon={card.icon} title={card.title} link={card.link} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Intro Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 rounded-xl p-6 md:p-10">
                    <div className="w-full md:w-1/2 text-[#444] text-sm text-start space-y-5 tracking-[0.03em] md:-ml-6">
                        <div className="text-sm font-semibold text-blue-800 bg-white inline-block px-4 py-1 rounded-full shadow">
                            Fellow of National Board (FNB)
                        </div>

                        <h1 className="text-black font-bold text-2xl md:text-3xl leading-tight">
                            Reproductive Medicine & <br />
                            Maternal & Fetal Medicine
                        </h1>

                        <p className="text-[#5E566A]">
                            Sudha Hospital, a leading name in fertility and maternal care,
                            proudly offers the Fellow of National Board (FNB) programs in both
                            Reproductive Medicine and Maternal & Fetal Medicine – prestigious,
                            super specialty fellowships accredited by the{" "}
                            <span className="text-blue-700 font-medium">
                                National Board of Examinations (NBE), New Delhi
                            </span>.
                        </p>

                        <p className="text-[#5E566A]">
                            These programs are designed to develop the next generation of
                            clinical leaders in advanced fertility treatment and high-risk
                            pregnancy management, through immersive hands-on training and
                            academic excellence.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center md:ml-8">
                        <img
                            src={Doctors.src}
                            alt="Doctors"
                            className="rounded-xl shadow-md object-cover"
                            style={{ height: "300px", width: "450px" }}
                        />
                    </div>
                </div>
            </section>

            {/* Tabbed FNB Section */}
            <FNBSection />

            <section className="text-center px-4 py-6">
                <div className="text-sm font-semibold text-blue-800 bg-white inline-block px-4 py-1 rounded-full shadow">
                    Who we are
                </div>
                <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl leading-tight pt-3">
                    Sudha Hospital
                </h1>
                <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl leading-tight pt-3">
                    NBE Accredited Training Centre
                </h1>
            </section>

            <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4 py-6">
                {/* Left Image Section */}
                <div className="w-full md:w-[40%] flex justify-center">
                    <img
                        src={DocsGroup?.src}
                        alt="Docs"
                        className="rounded-xl object-cover max-h-[350px] w-full max-w-md md:max-w-full"
                    />
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-[60%] rounded-xl p-4 sm:p-6 md:p-10">
                    <p className="text-[#5E566A] text-sm sm:text-base font-medium pb-3">
                        Sudha Hospital stands tall with over 26 centres across South India,
                        equipped with advanced technology, modern infrastructure, and
                        experienced consultants.
                    </p>
                    <div className="space-y-3">
                        {[
                            "NBE-accredited for both FNB Reproductive Medicine & FNB Maternal & Fetal Medicine (at selected branches)",
                            "One of India’s largest IVF & high-risk maternity service providers",
                            "Focus on both academic and clinical skill-building",
                            "Exposure to real-time OPD, IPD, OT, and labor room scenarios",
                        ].map((text, i) => (
                            <p
                                key={i}
                                className="flex items-start text-[#5E566A] font-medium text-sm sm:text-base"
                            >
                                <TickCircle />
                                <span className="ml-3">{text}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>


            {/* Get Trained by India’s Fertility Leaders */}
            <section className="px-4 sm:px-4 lg:px-5 pt-16">
                <div className="max-w-7xl  mx-auto px-4  pb-20">
                    <h2 className="text-center text-[30px] text-Black mt-4">
                        Get Trained by India’s Fertility Leaders
                    </h2>
                    <section className="mt-2">
                        <div className="max-w-7xl mx-auto px-4 py-8 relative">

                            <DiplomaDoctor />
                        </div>
                    </section>
                </div>
            </section>
            <section>
                <Bookappointment />
            </section>

        </div>
    );
};

export default Fellownationalboard;
