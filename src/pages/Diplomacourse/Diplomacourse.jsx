'use client';

import React, { useState } from 'react';
import Banner from "@/assets/Diplomacourse/Banner.png";
import Doctors from "@/assets/Diplomacourse/Doctors.png";
import Rectangle from "@/assets/Diplomacourse/Rectangle.png";
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import DocsGroup from "@/assets/Diplomacourse/DocsGroup.png";
import cardone from "@/assets/home/cards/1.svg";
import cardtwo from "@/assets/home/cards/2.svg";
import cardthree from "@/assets/home/cards/3.svg";
import cardfour from "@/assets/home/cards/4.svg";
import ServiceCard from "@/components/ServiceCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Bookappointment from "@/components/Bookappointment";
import { AlertCircle } from "lucide-react";
import Doc1 from "@/assets/Diplomacourse/Doc1.png"
import Doc2 from "@/assets/Diplomacourse/Doc2.png"
import Doc3 from "@/assets/Diplomacourse/Doc3.png"
import Doc4 from "@/assets/Diplomacourse/Doc4.png"
import DiplomaDoctor from "@/components/diplomaSlider";
import DoctorSlider from "@/components/Slicksliderdoctor";
import { doctorsData } from "@/constants/doctorDetails";


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
    { name: "Dr. U. Shyla", degree: "MBBS., DGO., DNB(OG)., DRM., MNAMS", image: Doc1.src },
    { name: "Dr. T. Naga Tejaswi", degree: "MBBS., MS(OBG), FRM", image: Doc2.src },
    { name: "Dr. Aruna Saradha K", degree: "MBBS., MS(OBG), FRM", image: Doc3.src },
    { name: "Dr. V. Indhumathy", degree: "MBBS., MS(OBG), FRM", image: Doc4.src },
    { name: "Dr. Nadiya Hameed", degree: "MBBS., MS(OBG), FRM", image: Doc1.src },

];


const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute z-10 
               lg:right-[150px] right-[290px] translate-x-[60px] 
               lg:bottom-[-60px] bottom-[-100px] 
               border border-[#2B3990] text-[#2B3990] 
               hover:bg-[#2B3990] hover:text-white 
               p-2 rounded-full"
        >
            <ChevronLeft className="w-5 h-5" />
        </button>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute right-0 bottom-0 m-4 z-10 p-2 bg-[#2B3990] text-white rounded-full hover:bg-[#1f2e6e]"
        >
            <ChevronRight className="w-5 h-5" />
        </button>
    );
};

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const trainingCenters = [
    ["Erode", "Coimbatore", "Chennai", "Salem", "Trichy", "Madurai", "Tirunelveli", "Karur", "Hosur", "Namakkal"],
    ["Villupuram", "Puducherry", "Vellore", "Salem", "Tirupur", "Dharapuram", "Dindigul", "Thanjavur", "Ramanathapuram", "Krishnagiri"],
    ["Ambattur", "Bangalore", "Hyderabad", "Vijayawada", "Tenali", "Ongole", "Chilakaluripet"]
];

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

// Main Page Component
const Diplomacourse = () => {
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
                            className="text-sm mb-4"
                        >
                            Home / Academic / Post MBBS Diploma Courses - (DNB)
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-4xl font-bold mb-4"
                        >
                            Post MBBS Diploma Courses - (DNB)
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
                            Post MBBS Diploma Courses - (DNB)
                        </div>

                        <h1 className="text-black font-bold text-2xl md:text-3xl leading-tight">
                            Reproductive Medicine & <br />
                            Maternal & Fetal Medicine
                        </h1>

                        <p className="text-[#5E566A]">
                            Sudha Hospital, a leading name in fertility and maternal care,
                            proudly offers the Fellow of National Board (FNB) programs in both
                            Reproductive Medicine and Maternal & Fetal Medicine – prestigious,
                            super specialty fellowships accredited by the {" "}
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
                    <div className="space-y-3 text-medium ">
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

            {/* Branch-Wise Program Availability */}
            <section className="bg-[#eaf4ff] py-16">
                <div className="max-w-7xl mx-auto bg-white rounded-2xl px-6 md:px-20 py-14 shadow-lg">
                    <div className="text-center mb-10">
                        <span className="text-sm text-blue-700 bg-[#e4efff] px-5 py-1.5 rounded-full font-medium inline-block mb-4">
                            Branch-Wise Program Availability
                        </span>
                        <h2 className="text-2xl md:text-4xl font-semibold text-black">
                            FNB Accredited Training Centres
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-x-10 text-sm md:text-base font-medium text-gray-800 px-4 md:px-8">
                        {trainingCenters.map((col, colIndex) => (
                            <ul key={colIndex} className="space-y-4">
                                {col.map((city, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <TickCircle />
                                        <span>{city}</span>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>


                    {/* Alert note */}
                    <div className="mt-10 flex items-start text-sm text-gray-600 px-4 md:px-8">
                        <AlertCircle className="text-red-500 w-5 h-5 mt-0.5 mr-2" />
                        <p>
                            <span className="font-semibold">FNB training</span> is currently conducted at NBE-recognized branches
                            (<span className="text-black font-medium">Erode & Coimbatore</span>). Other branches play a supporting
                            role in advanced reproductive services and case exposure.
                        </p>
                    </div>
                </div>
            </section>


            {/* Get Trained by India’s Fertility Leaders */}
            <section className="py-12 sm:py-16 bg-[#f2f8ff]">
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

export default Diplomacourse;
