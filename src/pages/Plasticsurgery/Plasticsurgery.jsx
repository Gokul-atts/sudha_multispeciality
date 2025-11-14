"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/specialites/plasticsurgery/plastic-surgery.webp";

import Clinic from "@/assets/common/general-consultation.webp";
import Image from "next/image";

import consult1 from "@/assets/specialites/plasticsurgery/gallery/plastic-1.webp";
import consult2 from "@/assets/specialites/plasticsurgery/gallery/plastic-2.webp";
import consult3 from "@/assets/specialites/plasticsurgery/gallery/plastic-3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./plasticsurgery.css";
import Bookappointment from "@/components/Bookappointment";
import SidebarTabs from "./SidebarTabs";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowUpRight } from "lucide-react";

const consultSlides = [consult1, consult2, consult3];

const breadcrumbItems = [
  { label: "Home", href: "/" },
   { label: "Specialities", href: "/specialities" },
  { label: "Plastic Surgery", href: "/plastic-surgery" },
];

function Plasticsurgery() {
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
              className="text-sm mb-3"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px]  mb-3"
            >
              Best Hospital in Erode for Plastic Surgery
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-white"
            >
              Precision in Every Transformation
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
                <h3 className="text-[36px] font-extrabold text-[#2B3990]">40+</h3>
                <p className="text-[16px] text-black font-bold">
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
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
          <SidebarTabs />
        </div>
      </section>

      {/* Clinic + Info Section */}
      <section className="max-w-7xl mx-auto py-16  relative">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="relative w-full lg:w-1/2 mx-auto rounded-3xl overflow-hidden">
            <Image src={Clinic} alt="Clinic" className="w-full h-[466px] object-cover rounded-3xl" />

            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white/80 p-4 sm:p-6 w-[90%] bottom-6 sm:bottom-6 flex flex-col items-center justify-end rounded-2xl">
              <h3 className="text-[18px] sm:text-[20px] mb-2 text-center">
                Your Health, Our Priority
              </h3>
              <p className="mb-4 text-center ">
                Get all your personalised healthcare services under one roof from experienced and trusted doctors.
              </p>
              <Link href="#contactus" className="btn-diagonal mt-2">
                Book Your Appointment Today <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right - Info Card and Paragraph */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            {/* Gradient Box */}
            <div className="bg-gradient-to-r from-[#2B3990] to-[#0D112A] p-6 sm:p-8 rounded-3xl text-white">
              <h4 className="text-[18px] sm:text-[20px] font-bold mb-2">
                World-Class Care for Everyone
              </h4>
              <p className="mt-4  text-white">
                We are dedicated to providing top-quality treatments and healthcare services,<br className="hidden sm:block" />
                supported by advanced international technology and a team of highly experienced <br className="hidden sm:block" />
                medical professionals.
              </p>
            </div>

            {/* Description */}
            <div className="w-full max-w-4xl mx-auto">
              <Slider {...settings}>
                {consultSlides.map((img, idx) => (
                  <div key={idx}>
                    <div className="overflow-hidden rounded-3xl">
                      <div >
                        <Image
                          src={img}
                          alt={`Consult ${idx + 1}`}
                          className="w-full h-[260px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section id="contactus">
        <Bookappointment />
      </section>
    </div>
  );
}

export default Plasticsurgery;
