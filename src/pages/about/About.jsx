"use client";
import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Banner from "@/assets/about/our-growth-story.webp";
import Link from "next/link";
import one from "@/assets/aboutus/one.png";
import HospitalCard from "@/components/Hospital";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import TimelineSlider from "@/components/Timeline";
import kandaswamy from "@/assets/aboutus/kandaswamy.png";
import Marquee from "react-fast-marquee";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "" },
  { label: "Our Growth Story", href: "/our-growth-story" },
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

function Aboutus() {
  // Animation variants
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
      <section className="relative -mt-12 lg:-mt-24 m-10 pt-4">
        {/* Background Gradient */}
        <div
          className="max-w-full mx-auto px-4 py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover  banner"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="pl-8 md:pl-20">
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
              className="text-[44px] font-bold mb-3"
            >
              Our Growth Story
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[16px]  text-white max-w-xl mb-6 tracking-wide"
            >
              The Story of Our Legacy in Healthcare
            </motion.p>
          </div>

          <div className="absolute bottom-[10px] hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990] p-4 pt-5 rounded-xl w-[220px] ">
            <h3 className="text-[36px] font-bold mt-1 mb-1">40+</h3>
            <p className="text-lg leading-snug text-black font-semibold">
              Years of Trusted <br />
              Expertise in <br />
              Healthcare
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-12 pb-16 ml-4 mr-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
        grid 
        grid-cols-1        
        sm:grid-cols-2     
        md:grid-cols-2     
        lg:grid-cols-3     
        xl:grid-cols-4     
        gap-4 sm:gap-6 lg:gap-8
      "
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






      <section className="px-4 md:px-8 lg:px-16 py-12  pb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="bg-white text-[#2B3990] px-5 mb-5 py-2 rounded-full text-sm font-semibold">
              Our Story
            </span>
            <h2 className="text-[30px] mb-4 mt-5">
              Sudha Multispeciality Hospital
            </h2>
            <p className="">
              Established in 1985 by Dr. D. Kandasamy, Sudha Multispeciality Hospital was born out of a vision to bring world-class healthcare to his homeland. With a strong commitment to serve, he began with a heart care centre in Erode, focusing on cardiac health. As community trust grew, the hospital expanded to include specialised services in mother and childcare. Building on its reputation for quality and compassion, Sudha Hospitals further broadened its expertise into fertility care and multispeciality services. Today, it stands as one of South India’s leading centres for multispeciality care, mother and child health, and fertility treatment.
            </p>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <Image
              src={one}
              alt="Sudha Hospital Overview"
              className="rounded-xl w-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>



      <section className="relative bg-gradient-to-b from-[#2B3990] to-[#0D112A]  py-16 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto  py-16  h-full">
          <div className=" max-w-4xl text-start">
            <h2 className="text-[30px] text-white">
              Our Growth Story
            </h2>
            <p className=" text-white mt-4 mb-6 ">
              Sudha Hospitals was established as a single speciality hospital focusing on cardiology in Erode in 1985. Dr. D. Kandaswamy began the hospital with just 20 beds. Over the years Sudha Hospital spread its wings in Mother and childcare, Multispeciality, and Fertility care.
            </p>
          </div>

          <div className="mt-28">
            <TimelineSlider />
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-12 rounded-3xl">
          {/* Founder Image & Card */}
          <div className="relative w-full flex justify-center">
            {/* <div className="rounded-xl overflow-hidden shadow-md h-auto"> */}
            <Image
              src={kandaswamy} // Replace with your image path
              alt="Founder"
              className="w-[50%] h-auto object-cover"
            />
            {/* </div> */}

            {/* Overlay Card */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:-translate-x-[20%] bg-[#EEF8FF] rounded-2xl  p-6 w-56 text-center">
              <h4 className="font-semibold text-sm ">Founder</h4>
              <h3 className="font-bold text-[#2B3990] text-lg mt-1">
                Dr. D. Kandasamy
              </h3>
              <p className="text-xs text-[#5E566A] mt-1">
                MD, DTCD Preventive Cardiologist
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-12 md:mt-0">
            <h2 className="text-[30px] mb-4">
              About Our Founder
            </h2>
            <p className="mb-4">
              <span className="text-[#2B3990] ">
                Dr. D. Kandaswamy, the visionary behind the legacy of Sudha Multispeciality Hospital.
              </span>
            </p>
            <p className="">With the incredible experience of 50+ years our founder has envisioned to start a hospital identifying the critical need in his native land. Dr. D. Kandaswamy MD, DTCD Preventive Cardiologist wanted to provide quality healthcare for heart in Erode which resulted in establishment of Sudha Hospitals in 1985. He is widely respected for his foresight in preventive healthcare and early diagnosis. Under his leadership, the hospital has grown into a centre of excellence across specialties. He has received multiple recognitions for his lifelong service to the medical field. His commitment to ethical, patient-first care remains the foundation of our values. To this day, he remains actively involved in shaping the future of the institution. </p>
          </div>
        </div>
      </section>

      <section>
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
        <div className="max-w-7xl mx-auto  py-8  h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="bg-[#CBE1FB] rounded-2xl p-8  text-left">
              <h3 className="text-[20px] mb-3">
                Our Vision
              </h3>
              <p className="text-black text-[14px]">
                Become a trusted healthcare leader by providing compassionate, advanced, and accessible care, empowering healthier communities through excellence and innovation.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#D5F2E3] rounded-2xl p-8  text-left">
              <h3 className="text-[20px] mb-3">
                Our Mission
              </h3>
              <p className="text-black text-[14px]">
                To make quality healthcare accessible by blending innovation, medical excellence, and compassion while ensuring value-driven treatment for all.
              </p>
            </div>

            {/* Values */}
            <div className="bg-[#DAD3F9] rounded-2xl p-8  text-left">
              <h3 className="text-[20px] mb-3">
                Our Values
              </h3>
              <p className="text-black text-[14px]">
                We believe in ethical care, compassion, medical excellence, respect, innovation, teamwork, and putting every patient’s needs at the heart.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
