"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/alliedhealthservice/physio/physiotherapy-banner.webp";
import Clinic from "@/assets/common/general-consultation.webp";
import Image from "next/image";
import consult1 from "@/assets/about/img.png";
import consult2 from "@/assets/about/img.png";
import consult3 from "@/assets/about/img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bookappointment from "@/components/Bookappointment";
import SidebarTabs from "./SidebarTabs";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowUpRight } from "lucide-react";
const consultSlides = [consult1, consult2, consult3];

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "" },

    { label: "Allied Health Services", href: "/resources/allied-health-services" },
    { label: "Physiotherapy", href: "/resources/allied-health-services/physiotherapy" },
];


function Physiotherapy() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div className="flex justify-center mt-4">{dots}</div>
        ),
        customPaging: (i) => (
            <div className="w-3 h-3 mx-1 rounded-full bg-white hover:bg-[#2b3990] transition-all duration-300"></div>
        ),
    };
    return (
        <div>
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                {/* Background Gradient */}
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
                            className="text-sm mb-2"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[40px]  mb-2"
                        >
                            Best Hospital in Erode for Physiotherapy
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white mb-4"
                        >
                            Empowering Recovery with Expert Physiotherapy Care
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
                                <p className="text-[16px] text-black font-bold mb-2">
                                    Quality care <br /> backed by skilled <br /> professionals
                                </p>
                                <h3 className="text-[20px] font-extrabold text-[#2B3990]">Since 1985</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
                    <SidebarTabs />
                </div>
            </section>

          

            <section id="contactus">
                <Bookappointment />
            </section>
        </div>
    );
}

export default Physiotherapy;
