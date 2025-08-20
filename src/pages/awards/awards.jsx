"use client";
import React from "react";
import Banner from "@/assets/about/awards.webp";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Contactusmain from "@/components/contactusmain";
import Marquee from "react-fast-marquee";
import Awardlist from "@/components/awardlist";
import Slider from "react-slick";
import Image from "next/image";
import Clinic from "@/assets/about/clinic.png";
import consult1 from "@/assets/about/img.png";
import consult2 from "@/assets/about/img.png";
import consult3 from "@/assets/about/img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "" },
     { label: "Awards & Honors", href: "/awards-and-honors" },
  ];

const hospitalscards = [
  {
    number: <h3 className="text-[48px] text-[#2B3990]">40+</h3>,
    title: (
      <p className="text-md font-bold text-black">Years of Experience</p>
    ),
    link: "/op-centre",
    icon: hospitalOne,
  },
  {
    number: <h3 className="text-[48px] text-[#2B3990]">300+</h3>,
    title: <p className="text-md font-bold text-black">Patient Beds</p>,
    link: "/maternity",
    icon: hospitalTwo,
  },
  {
    number: <h3 className="text-[48px] text-[#2B3990]">24+</h3>,
    title: <p className="text-md font-bold text-black">Departments</p>,
    link: "/heart-care",
    icon: hospitalThree,
  },
  {
    number: <h3 className="text-[48px] text-[#2B3990]">100+</h3>,
    title: <p className="text-md font-bold text-black">Doctor's</p>,
    link: "/heart-care",
    icon: hospitalFour,
  },
];

import "./awards.css";
const consultSlides = [consult1, consult2, consult3];

const Awards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <div className="flex justify-center mt-4">{dots}</div>,
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></div>
    ),
  };

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
  return (
    <div>
      <section className="relative -mt-20 lg:-mt-[100px]  m-10">
        <div
          className=" relative top-3 max-w-full  mx-auto px-4 py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover md:bg-contain"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >

          <div className="pl-8 md:pl-20">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-white"
          >
             <Breadcrumb items={breadcrumbItems} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[44px] font-bold mb-4"
          >
            Awards & Honors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white mb-6"
          >
            The Symbol of Sudha Reputation – Our Awards and Honours
          </motion.p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto pt-8 pb-16 h-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            {hospitalscards.map((card, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <HospitalCard
                  number={card.number}
                  icon={card.icon}
                  title={card.title}
                  link={card.link}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      

      <div className="flex flex-col justify-center items-center text-center px-4">
        <div className="bg-white text-[#2B3990] px-5 mb-5 py-2 w-[200px] rounded-full text-sm font-semibold">
          Awards & Achievements
        </div>
        <h2 className="text-[30px]">
          Providing Better Help With <br/> Expert Care
        </h2>
        
      </div>

      <div>
        <Awardlist />
      </div>

      <Marquee
              speed={50}
              gradient={false}
              pauseOnHover={true}
              className="py-8"
            >
              <span className="mx-4 text-[#D5DAE5] font-extrabold text-[76px]">
                Trusted Healthcare Partners
              </span>
            </Marquee>

      <section className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Left Image */}
          <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden max-w-md lg:max-w-none mx-auto">
            <Image src={Clinic} alt="Clinic" className="w-full h-auto object-cover" />

            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white/80 p-8 w-[100%] bottom-5 sm:w-[400px] min-h-[190px] flex flex-col items-center justify-end rounded-2xl">
              <h2 className=" text-[20px] text-start mb-2">
                Book in Clinic Visits
              </h2>
              <p className=" mb-2 text-center">
                Book in-person visits for personalized care and schedule the appointments with our experienced team.
              </p>
              <button className="btn-diagonal bg-[#2B3990] mt-2 text-[#fff] text-[15px] pt-3 pb-3 pr-7 pl-7 rounded-full transition flex gap-2 hover:-translate-y-[3px] transition-transform duration-200">
                Book an Appointment <ArrowUpRight className="w-5 h-5" />
               
              </button>
            </div>
          </div>

          {/* Right Info */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <div className="bg-gradient-to-r from-[#2B3990] to-[#0D112A] p-8 md:p-9 rounded-2xl text-white">
              <h2 className="text-white  text-[24px] ">Virtual Care from Everywhere</h2>
              <p className=" mt-2 md:mt-4 text-white">
                Experience the great virtual care from anywhere and connect with
                medical professionals for expert guidance.
              </p>
            </div>

            <div className="w-full max-w-4xl mx-auto ">
              <Slider {...settings}>
                {consultSlides.map((img, idx) => (
                  <div key={idx}>
                    <div className="overflow-hidden rounded-2xl">
                    <div className="doc">
                        <Image
                        src={img}
                        alt={`Consult ${idx + 1}`}
                        className="w-full h-auto object-cover"
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
    </div>
  );
};

export default Awards;