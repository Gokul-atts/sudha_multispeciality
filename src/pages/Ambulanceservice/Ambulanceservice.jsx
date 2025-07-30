
"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "@/assets/ambulanceservice/banner.png";
import "../Ambulanceservice/Ambulanceservice.css";
import Slider from "react-slick";
import Slide from "@/assets/ambulanceservice/slider.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import Check from "@/assets/Insurance/check.svg";
import Group from "@/assets/Insurance/emergency-hours.svg";

const Slides = [Slide, Slide, Slide];

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
    customPaging: (i) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></div>
    ),
  };
  return (
    <div>
      <section className="relative -mt-20 lg:-mt-[100px] m-10">
        {/* Banner Container */}
        <div
          className="relative top-6 max-w-full mx-auto px-4 py-36 z-10 text-white bg-center bg-no-repeat bg-cover lbg-contain rounded-3xl overflow-hidden banner"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="pl-8 md:pl-20">
            {/* Breadcrumb */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-4 text-white"
            >
              Home / Facilities / Ambulance
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[44px] font-bold mb-4"
            >
              Ambulance Service
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              Bringing Critical Care Closer to You.
            </motion.p>
          </div>

          <div className="absolute bottom-[20px] hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990]  p-4 rounded-xl  w-[220px]">
            <h3 className="text-[36px] font-bold">40+</h3>
            <p className="text-lg leading-snug text-black font-semibold">
              Years of Trusted <br />
              Expertise in <br />
              Healthcare
            </p>
          </div>
        </div>
      </section>
      <div className='max-w-7xl mx-auto py-16 relative z-10 text-white bg-center bg-no-repeat bg-cover lg:bg-contain'>
        <div className="flex justify-center mb-2">
          <div className="px-5  py-2 font-semibold text-primary-blue bg-white inline-block rounded-full mb-3">
            Sudha Ambulance Services
          </div>
        </div>
        <h2 className=" mt-4 text-[30px] text-black mb-10 text-center">
          24 X 7 Ambulance Services in <br />Erode for Emergency Care
        </h2>
        <div className="flex flex-col md:flex-col lg:flex-row gap-4 mt-10 items-stretch">
          <div className="w-full lg:w-1/2">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Slider {...settings}>
                {Slides.map((img, idx) => (
                  <div key={idx}>
                    <div className="overflow-hidden rounded-[20px]">
                      <div className="doc">
                        <Image
                          src={Slide}
                          alt={`Consult ${idx + 1}`}
                          className="w-full h-auto sm:h-[300px] md:h-[350px] object-cover"
                        // className='w-full h-auto object-cover'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-full bg-[#2B3990] lg:w-1/2 rounded-xl flex overflow-hidden items-start justify-start text-left p-10 flex-col lg:mt-0 ">
            <h3 className="text-white  text-[22px] sm:text-[23px]">
              For Booking Please Contact
            </h3>

            <h2 className="flex items-center gap-2 text-white text-[18px]  font-bold mt-4">
              <Image src={Check} alt="Check" width={20} height={20} />
              Mobile ICU
            </h2>
            <p className="text-white ml-6 mt-3">
              This ambulance is specifically for cardiac emergencies, equipped like a mini-ICU for prompt medical care.
            </p>
            <h2 className="flex items-center gap-2 text-white text-[18px]  font-bold mt-4">
              <Image src={Check} alt="Check" width={20} height={20} />
              Emergency Transport Service
            </h2>
            <p className="text-white ml-6 mt-3">
              This ambulance is for other medical emergencies, with facilities like a foldable stretcher and essential emergency equipment for medical support during transport.
            </p>
            <p className="flex items-center gap-2 text-white text-[16px]  font-semibold mt-4">
              <span className="bg-white rounded-full p-1">
                <Image src={Group} alt="Check" width={40} height={40} />
              </span>
              042-424-54545 | +91 90420 65454
            </p>
          </div>
        </div>
      </div>
      <Marquee speed={50} gradient={false} pauseOnHover={true} className="mt-5">
        <span className="mx-4 text-[#D5DAE5] font-extrabold text-[76px]">
          Experienced Professionals + Preventive Care
        </span>
      </Marquee>
    </div>
  );
};

export default Ambulanceservice;
