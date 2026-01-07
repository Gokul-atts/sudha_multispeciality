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
import Clinic from "@/assets/common/general-consultation.webp";
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
  { label: "Awards & Honors", href: "/about-us/awards-and-honors" },
];

const hospitalscards = [
  {
    number: <h3 className="text-[48px] text-[#2B3990]">40+</h3>,
    title: (
      <p className="text-md font-bold text-black">Years of Experience</p>
    ),
    link: "/about-us/our-growth-story",
    icon: hospitalOne,
  },
  {
    number: <h3 className="text-[48px] text-[#2B3990]">300+</h3>,
    title: <p className="text-md font-bold text-black">Patient Beds</p>,
    link: "/facilities/health-package",
    icon: hospitalTwo,
  },
  {
    number: <h3 className="text-[48px] text-[#2B3990]">30+</h3>,
    title: <p className="text-md font-bold text-black">Departments</p>,
    link: "/specialities",
    icon: hospitalThree,
  },
  {
    number: <h3 className="text-[48px] text-[#2B3990]">100+</h3>,
    title: <p className="text-md font-bold text-black">Doctors</p>,
    link: "/find-a-doctor",
    icon: hospitalFour,
  },
];

import "./awards.css";
import Link from "next/link";
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
      <div className="w-3 h-3 mx-1 rounded-full bg-white hover:bg-[#2b3990] transition-all duration-300"></div>
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
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        <div
          className="
            relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400
          "
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3 text-white"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] mb-4"
            >
              Awards & Honors
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              The Symbol of Sudha Reputation – Our Awards and Honours
            </motion.p>
          </div>

          <div className="absolute bottom-0 right-0  z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <p className="text-[16px] text-black font-bold mb-2">
                  Excellence in healthcare,  <br />
                  always by your side
                </p>
                <h3 className="text-[20px] font-extrabold text-[#2B3990]">Since 1985</h3>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section>
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 h-full">
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
        <div className="bg-white text-[#2B3990] px-6 py-2 rounded-full text-md font-bold">
          Awards & Achievements
        </div>
        <h2 className="text-[30px] mt-5">
          Providing Better Help With <br /> Expert Care
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

      {/* Clinic + Info Section */}
      <section className="max-w-7xl mx-auto py-16 px-4  relative">
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
              <Link href="tel:+919042065454">
              
              <button className="btn-diagonal mt-2">
                Book Your Appointment Today <ArrowUpRight className="w-5 h-5" />
              </button>
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
    </div>
  );
};

export default Awards;