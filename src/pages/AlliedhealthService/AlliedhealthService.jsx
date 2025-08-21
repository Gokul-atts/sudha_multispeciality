"use client";
import React from "react";
import Banner from "@/assets/alliedhealthservice/Banner.png";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SidebarTabs from "@/pages/cardiology/SidebarTabs";

import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import Main from "@/assets/nursingservice/main.jpg";
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
    { label: "Allied Health Services", href: "/allied-health-services" },
];

const hospitalscards = [
    {
        number: <h3 className="text-[44px] text-[#2B3990]">40+</h3>,
        title: (
            <p className="text-md font-bold text-black">Years of Experience</p>
        ),
        link: "/op-centre",
        icon: hospitalOne,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">300+</h3>,
        title: <p className="text-md font-bold text-black">Patient Beds</p>,
        link: "/maternity",
        icon: hospitalTwo,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">24+</h3>,
        title: <p className="text-md font-bold text-black">Departments</p>,
        link: "/heart-care",
        icon: hospitalThree,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">100+</h3>,
        title: <p className="text-md font-bold text-black">Doctor's</p>,
        link: "/heart-care",
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
            <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></div>
        ),
    };
    return (
        <div>
            <section className="relative -mt-12 lg:-mt-28 m-10">
                {/* Background Gradient */}
                <div
                    className="max-w-full mx-auto px-4 py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover lg:bg-contain banner"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="pl-8 md:pl-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-3 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />

                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className=" text-[44px] mb-3"
                        >
                            Allied Health Service
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className=" mb-6 text-white"
                        >
                            Comprehensive Support for Complete Recovery
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <button className="btn-white inline-flex items-center gap-2 bg-white text-[#2B3990] text-sm font-semibold px-5 py-4 rounded-full shadow text-[18px]">
                                Book an Appointment <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                        <div className="absolute bottom-0 right-4 sm:right-8 md:right-0 z-30 hidden md:block mb-9">
                            <div className="w-[220px] overflow-hidden rounded-tl-xl rounded-br-xl">
                                <div className="h-[20%] bg-transparent" />
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
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 h-full">
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

            <div className="max-w-7xl mx-auto py-16 ">
                <Alliedhealthsidebar />
            </div>

            <div className="max-w-7xl mx-auto py-20 ">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Slider Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="w-full">
                            <Slider {...settings}>
                                {customerSlides.map((img, idx) => (
                                    <div key={idx}>
                                        <div className="doc">
                                            <Image
                                                src={Main}
                                                alt={`Consult ${idx + 1}`}
                                                className="w-full h-auto rounded-3xl  "
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
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
                        <div className="flex flex-col sm:flex-row gap-6 w-full mt-7">
                            {/* Award */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                className="flex-1"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                        <p className="text-[#2B3990] text-xl font-extrabold">80+</p>
                                    </div>
                                    <p className="text-white font-bold text-md">Winning Awards</p>
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
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                        <p className="text-[#2B3990] text-xl font-extrabold">24m</p>
                                    </div>
                                    <p className="text-white font-bold text-md">Happy Clients</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>


            <div>
                <Bookappointment />
            </div>
        </div>
    );
};

export default Alliedhealthservice;
