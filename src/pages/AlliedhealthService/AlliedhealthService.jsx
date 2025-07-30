"use client";
import React from "react";
import Banner from "@/assets/alliedhealthservice/Banner.png";
import { motion } from "framer-motion";
import { ArrowUpRight, Link } from "lucide-react";
import SidebarTabs from "@/pages/cardiology/SidebarTabs";
import Alliedhealthsidebar from "@/components/Alliedhealthsidebar";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import Main from "@/assets/nursingservice/main.jpg";
import Bookappointment from "@/components/Bookappointment";
import Image from "next/image";


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
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-4 text-white"
                        >
                            Home / Facilities Insights
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="tracking-wide text-[44px] font-bold mb-3"
                        >
                            Allied Health Service
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-lg md:text-xl max-w-xl mb-6 text-white"
                        >
                            Comprehensive Support for Complete Recovery
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <button className="inline-flex items-center gap-2 bg-white text-[#2B3990] text-sm font-semibold px-5 py-2 rounded-full shadow text-[18px]">
                                Book an Appointment <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                        <div className="absolute bottom-0 right-4 sm:right-8 md:right-0 z-30 hidden md:block mb-8">
                            <div className="w-[220px] shadow-md overflow-hidden rounded-tl-xl rounded-br-xl">
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

            <div>
                <Marquee
                    speed={50}
                    gradient={false}
                    pauseOnHover={true}
                    className="mt-5"
                >
                    <span className="mx-4 text-[#D5DAE5] font-semibold text-[56px]">
                        Experienced Professionals + Preventive Care
                    </span>
                </Marquee>
            </div>

            <div className="max-w-7xl mx-auto ">
                <Alliedhealthsidebar />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20 sm:py-24 lg:py-36">
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
                                                className="w-full h-[250px] rounded-xl sm:h-[300px] md:h-[350px] "
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 bg-[#2B3990] rounded-xl flex flex-col justify-start items-start text-left p-6 sm:p-10">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white px-4 py-1 rounded-3xl inline-block mb-4">
                                <p className="text-black text-sm font-semibold">
                                    Why Choose Us
                                </p>
                            </div>
                        </motion.div>

                        <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-[36px] leading-tight mb-4">
                            Personalised Care, Trusted Support
                        </h3>

                        <p className="text-white text-sm sm:text-base mb-6">
                            Every patient’s journey is unique, and so is the care we provide.  With gentle guidance and focused support, 
                            we help you move forward with trust and comfort.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 w-full">
                            {/* Award */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                        <p className="text-[#2B3990] text-xl font-semibold">80+</p>
                                    </div>
                                    <p className="text-white font-semibold text-base">
                                        Winning Awards
                                    </p>
                                </div>
                            </motion.div>

                            {/* Clients */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                        <p className="text-[#2B3990] text-xl font-semibold">24m</p>
                                    </div>
                                    <p className="text-white font-semibold text-base">
                                        Happy Clients
                                    </p>
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
