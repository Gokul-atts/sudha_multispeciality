"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/specialites/dermatology/dermatology-banner.webp";
import Clinic from "@/assets/about/clinic.png";
import Image from "next/image";
import consult1 from "@/assets/about/img.png";
import consult2 from "@/assets/about/img.png";
import consult3 from "@/assets/about/img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./dermatology.css";
import Bookappointment from "@/components/Bookappointment";
import SidebarTabs from "./SidebarTabs";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowUpRight } from "lucide-react";

const consultSlides = [consult1, consult2, consult3];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Dermatology Aesthetics and Lasers", href: "/dermatology-aesthetics-and-lasers" },
];

function Dermatology() {
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
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></div>
    ),
  };
  return (
    <div>
      <section className="relative -mt-12 lg:-mt-28 m-10">
        {/* Background Gradient */}
        <div
          className="max-w-full mx-auto px-4 py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover lg:bg-contain banner min-h-400"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="pl-8 md:pl-20">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-4"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[44px]  mb-3"
            >
              Dermatology Aesthetics and Lasers
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-white"
            >
              Advanced Care for All Your Skin Needs
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="#"
                className="btn-white inline-flex  text-[16px] tracking-wide items-center px-7 py-3 bg-white text-[#2B3990] font-semibold rounded-full  transition hover:-translate-y-[3px] transition-transform duration-200"
              >
                Book an Appointment  <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-[40px] hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990] p-4 rounded-xl w-[220px]">
            <h3 className="text-[36px] font-bold">40+</h3>
            <p className="text-lg leading-snug text-black font-semibold">
              Years of Trusted <br />
              Expertise in <br />
              Healthcare
            </p>
          </div>
        </div>
      </section>

    <section>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
    <SidebarTabs />
  </div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
    {/* Left - Image with Overlay Card */}
    <div className="relative w-full lg:w-1/2 mx-auto rounded-2xl overflow-hidden">
      {/* Background Image */}
      <Image
        src={Clinic}
        alt="Clinic"
        className="w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-full object-cover"
      />

      {/* Overlay Card at Bottom Center */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-white/80 p-4 sm:p-6 w-[92%] sm:w-[85%] bottom-4 sm:bottom-8 lg:bottom-10 flex flex-col items-center justify-end rounded-2xl shadow-lg">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-center">
          Your Health, Our Priority
        </h2>
        <p className="text-sm sm:text-base mb-4 text-center">
          Get all your personalised healthcare services under one roof from
          experienced and trusted doctors.
        </p>
        <button className="btn-diagonal inline-flex items-center gap-2 text-white bg-[#2B3990] hover:bg-[#1e2a70] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:-translate-y-[3px] transition-transform duration-200">
          Book an Appointment
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>

    {/* Right - Info Card and Paragraph */}
    <div className="w-full lg:w-3/5 flex flex-col gap-6">
      {/* Gradient Box */}
      <div className="bg-gradient-to-r from-[#2B3990] to-[#0D112A] p-6 sm:p-8 rounded-2xl text-white shadow-lg">
        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
          World-Class Care for Everyone
        </h4>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white leading-relaxed">
          We are dedicated to providing top-quality treatments and healthcare
          services, supported by advanced international technology and a team
          of highly experienced medical professionals.
        </p>
      </div>

      {/* Description - Slider */}
      <div className="w-full max-w-4xl mx-auto">
        <Slider {...settings}>
          {consultSlides.map((img, idx) => (
            <div key={idx}>
              <div className="overflow-hidden rounded-2xl">
                <div className="doc">
                  <Image
                    src={img}
                    alt={`Consult ${idx + 1}`}
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px] object-cover"
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

      <section>
        <Bookappointment />
      </section>
    </div>
  );
}

export default Dermatology;
