"use client";
import React from "react";
import Banner from "@/assets/alliedhealthservice/alied-banner.webp";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SidebarTabs from "@/pages/cardiology/SidebarTabs";
import inter from "@/assets/home/inter.svg";
import patient from "@/assets/home/patient.svg";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import Main from "@/assets/alliedhealthservice/alliedhealth.webp";

import Bookappointment from "@/components/Bookappointment";
import Image from "next/image";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

import Alliedhealthsidebar from "@/components/AlliedhealthSidebar";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "" },
    { label: "Allied Health Services", href: "/resources/allied-health-services" },
];

const hospitalscards = [
    {
        number: <h3 className="text-[44px] text-[#2B3990]">40+</h3>,
        title: (
            <p className="text-md font-bold text-black">Years of Experience</p>
        ),
        link: "/about-us/our-growth-story",
        icon: hospitalOne,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">300+</h3>,
        title: <p className="text-md font-bold text-black">Patient Beds</p>,
        link: "/facilities/health-package",
        icon: hospitalTwo,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">30+</h3>,
        title: <p className="text-md font-bold text-black">Departments</p>,
        link: "/specialities",
        icon: hospitalThree,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">100+</h3>,
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
const customerSlides = [Main, Main, Main];

const Alliedhealthservice = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div>
                <div className="flex justify-end -mt-[60px] ">{dots}</div>
            </div>
        ),
        customPaging: (i) => (
            <div className="w-3 h-3 mx-1 rounded-full bg-white hover:bg-[#2b3990] transition-all duration-300"></div>
        ),
    };
    return (
        <div>
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >

                    <div className="max-w-7xl mx-auto">
                        {/* Breadcrumb */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-3"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[40px]  mb-3"
                        >
                            Allied Health Service
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 text-white"
                        >
                            Comprehensive Support for Complete Recovery
                        </motion.p>

                        {/* Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Link
                                href="#contactus"
                                className="btn-white"
                            >
                                Book an Appointment <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-0 right-0  z-30 hidden md:block">
                        <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-5">

                                <p className="text-[16px] mb-2 text-black font-bold">
                                    Modern resources <br /> for advanced <br /> patient care
                                </p>
                                <h3 className="text-[20px] font-extrabold text-[#2B3990]">Since 1985</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section>
                <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {hospitalscards.map((card, idx) => (
                            <motion.div key={idx} variants={cardVariants}>
                                <HospitalCard
                                    number={card.number}
                                    icon={card.icon}
                                    title={card.title}
                                    link={card.link}
                                    className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <div>
                <Marquee
                    speed={50}
                    gradient={false}
                    pauseOnHover={true}
                    className="mt-5"
                >
                    <span className="mx-4 text-[#D5DAE5] font-extrabold text-[76px]">
                        Experienced Professionals + Preventive Care
                    </span>
                </Marquee>
            </div>

            <div className="max-w-7xl mx-auto md:px-0 px-4 py-8 sm:py-16 ">
                <Alliedhealthsidebar />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-0  py-8 sm:py-16 ">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Slider Section */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src={Main}
                            alt=""
                            className="w-full h-auto rounded-3xl h-[360px] w-full object-cover  "
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 bg-[#2B3990] rounded-3xl flex flex-col justify-start items-start text-left p-6 sm:p-10">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white px-4 py-2 rounded-full inline-block mb-4">
                                <p className="text-primary-blue text-sm font-semibold">Why Choose Us</p>
                            </div>
                        </motion.div>

                        <h3 className="text-[22px] text-white mb-4">
                            Personalised Care, Trusted Support
                        </h3>

                        <p className="text-white text-sm mb-6">
                            Every patient’s journey is unique, and so is the care we provide. With gentle
                            guidance and focused support, we help you move forward with trust and comfort.
                        </p>

                        {/* Metrics Row */}
                        <div className="flex flex-col sm:flex-row gap-6 w-full ">
                            {/* Award */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                className="flex-1"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                        <Image
                                            src={patient}
                                            alt="icon"
                                            width={40}
                                            height={40}
                                            className="sm:w-[36px] sm:h-[36px]"
                                        />
                                    </div>
                                    <p className="text-white font-bold text-md">World Class
                                        Health Care</p>
                                </div>
                            </motion.div>

                            {/* Clients */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                className="flex-1"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                        <Image
                                            src={inter}
                                            alt="icon"
                                            width={40}
                                            height={40}
                                            className="sm:w-[36px] sm:h-[36px]"
                                        />
                                    </div>
                                    <p className="text-white font-bold text-md">100% Patient
                                        Satisfaction</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>


            <div id="contactus">
                <Bookappointment />
            </div>
        </div>
    );
};

export default Alliedhealthservice;
