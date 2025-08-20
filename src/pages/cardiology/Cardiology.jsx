"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/about/hero.png";
import Clinic from "@/assets/about/clinic.png";
import Image from "next/image";
import consult1 from "@/assets/about/img.png";
import consult2 from "@/assets/about/img.png";
import consult3 from "@/assets/about/img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./cardiology.css";
import Bookappointment from "@/components/Bookappointment";
import SidebarTabs from "./SidebarTabs";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowUpRight } from "lucide-react";

const consultSlides = [consult1, consult2, consult3];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Cardiology", href: "/cardiology" },
];

function Cardiology() {
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
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></div>
    ),
  };

  return (
    <div>
      {/* Banner Section */}
      <section className="relative -mt-12 lg:-mt-24 px-4 md:px-10">
        <div
          className="max-w-full mx-auto py-20 md:py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover lg:bg-contain banner min-h-[300px] sm:min-h-[400px]"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="pl-4 md:pl-20">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm mb-2"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2"
            >
              Cardiology
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm sm:text-base mb-4"
            >
              A Heartfelt Care For Your Heart Care
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="#"
                className="btn-white inline-flex text-xs sm:text-sm items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-[#2b3990] font-semibold rounded-full hover:-translate-y-[3px] transition-transform duration-200"
              >
                Book an Appointment <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Years of Expertise */}
          <div className="absolute bottom-5 sm:bottom-8 hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990] p-4 rounded-xl w-[180px] sm:w-[220px] mt-0 bg-white/90 shadow-lg">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-wide">40+</h3>
            <p className="text-sm sm:text-lg leading-[1.6] tracking-wide text-black font-semibold">
              Years of Trusted <br />
              Expertise in <br />
              Healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Sidebar Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
          <SidebarTabs />
        </div>
      </section>

      {/* Clinic + Info Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Left - Image */}
          <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden">
            <Image
              src={Clinic}
              alt="Clinic"
              className="w-full h-auto object-cover"
            />
            {/* Overlay Card */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white/80 p-4 sm:p-6 w-[95%] sm:w-[90%] bottom-4 sm:bottom-10 flex flex-col items-center justify-end rounded-2xl">
              <h2 className="text-lg sm:text-xl mb-2 text-center">
                Your Health, Our Priority
              </h2>
              <p className="text-xs sm:text-sm mb-4 text-center">
                Get all your personalised healthcare services under one roof from experienced and trusted doctors.
              </p>
              <button className="btn-diagonal inline-flex items-center text-white bg-[#2B3990] hover:bg-[#1e2a70] px-5 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:-translate-y-[3px] transition-transform duration-200">
                Book an Appointment
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Right - Info */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <div className="bg-gradient-to-r from-[#2B3990] to-[#0D112A] p-5 sm:p-9 rounded-xl text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                World-Class Care for Everyone
              </h4>
              <p className="text-xs sm:text-sm md:text-base mt-2 md:mt-4 text-white/90">
                We are dedicated to providing top-quality treatments and healthcare services, supported by advanced international technology and a team of highly experienced medical professionals.
              </p>
            </div>

            {/* Slider */}
            <div className="w-full max-w-4xl mx-auto">
              <Slider {...settings}>
                {consultSlides.map((img, idx) => (
                  <div key={idx}>
                    <div className="overflow-hidden rounded-2xl">
                      <Image
                        src={img}
                        alt={`Consult ${idx + 1}`}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section>
        <Bookappointment />
      </section>
    </div>
  );
}

export default Cardiology;
