"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "@/assets/facilities/ambulance-banner.webp";
import "../Ambulanceservice/Ambulanceservice.css";
import Slider from "react-slick";
import Slide1 from "@/assets/ambulanceservice/ambulance-1.webp";
import Slide2 from "@/assets/ambulanceservice/ambulance-2.webp";
import Slide3 from "@/assets/ambulanceservice/ambulance-img.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import Check from "@/assets/insurance/check.svg";
import Group from "@/assets/insurance/emergency-hours.svg";
import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Facilities", href: "" },
  { label: "Ambulance", href: "/facilities/ambulance-services" },
];

const Slides = [Slide1, Slide2, Slide3];

const Ambulanceservice = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <div className="flex justify-end mr-5">{dots}</div>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-white hover:bg-[#2b3990] transition-all duration-300"></div>
    ),
  };

  return (
    <div>
      {/* Banner Section */}
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
              className="text-sm mb-3 text-white"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[32px] md:text-[40px] font-bold mb-4"
            >
              Best Ambulance Services in Erode
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6 text-lg"
            >
              Bringing Critical Care Closer to You.
            </motion.p>
          </div>

          {/* Corner Info Box */}
          <div className="absolute bottom-0 right-0 z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <p className="text-[16px] text-black font-bold mb-2 leading-snug">
                  Quality healthcare <br />
                  backed by superior <br /> facilities
                </p>
                <h3 className="text-[20px] font-extrabold text-[#2B3990]">
                  Since 1985
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto py-16 mt-16 relative z-10">
        <div className="flex justify-center mb-2">
          <h5 className="px-5 py-2 font-semibold text-primary-blue bg-white text-[14px] inline-block rounded-full mb-3">
            Sudha Ambulance Services
          </h5>
        </div>
        <h2 className="text-[26px] md:text-[30px] text-black mb-10 text-center leading-snug">
          24 X 7 Ambulance Services in <br /> Erode for Emergency Care
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 mt-10 items-stretch">
          {/* Left Slider */}
          <div className="w-full lg:w-1/2">
            <Slider {...settings}>
              {Slides.map((img, idx) => (
                <div key={idx}>
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={img}
                      alt={`Ambulance ${idx + 1}`}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Info Box */}
          <div className="w-full bg-[#2B3990] lg:w-1/2 rounded-3xl flex flex-col p-10">
            <h3 className="text-white text-[20px] sm:text-[22px] font-semibold">
              For Booking Please Contact
            </h3>

            <h2 className="flex items-center gap-2 text-white text-[18px] font-bold mt-4">
              <Image src={Check} alt="Check" width={20} height={20} />
              Mobile ICU
            </h2>
            <p className="text-white ml-6 mt-2">
              Specifically for cardiac emergencies, equipped like a mini-ICU for
              prompt medical care.
            </p>

            <h2 className="flex items-center gap-2 text-white text-[18px] font-bold mt-4">
              <Image src={Check} alt="Check" width={20} height={20} />
              Emergency Transport Service
            </h2>
            <p className="text-white ml-6 mt-2">
              Designed for other emergencies, with stretcher and essential
              equipment for safe medical transport.
            </p>

            <p className="flex items-center gap-2 text-white text-[16px] font-semibold mt-6">
              <span className="bg-white rounded-full p-1">
                <Image src={Group} alt="Emergency" width={40} height={40} />
              </span>
              042-424-54545 | +91 90420 65454
            </p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="mt-10"
      >
        <span className="mx-4 text-[#D5DAE5] font-extrabold text-[40px] md:text-[76px] whitespace-nowrap">
          Experienced Professionals + Preventive Care
        </span>
      </Marquee>
    </div>
  );
};

export default Ambulanceservice;
