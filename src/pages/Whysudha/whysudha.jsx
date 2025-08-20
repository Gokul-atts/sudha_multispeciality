"use client";
import React, { useState } from "react";
import Banner from "@/assets/about/why-choose-us.webp";
import "./whysudha.css";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";
import roboticSurgery from "@/assets/whysudha/patient.png";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import one from "@/assets/aboutus/one.png";
import imgone from "@/assets/whysudha/1.svg";
import imgtwo from "@/assets/whysudha/2.svg";
import imgthree from "@/assets/whysudha/3.svg";
import imgfour from "@/assets/whysudha/4.svg";
import imgfive from "@/assets/whysudha/5.svg";
import { ArrowUpRight } from "lucide-react";

import s1 from "@/assets/whysudha/s1.svg";
import s2 from "@/assets/whysudha/s2.svg";
import s3 from "@/assets/whysudha/s3.svg";
import s4 from "@/assets/whysudha/s4.svg";
import s5 from "@/assets/whysudha/s5.svg";
import s6 from "@/assets/whysudha/s6.svg";
import s7 from "@/assets/whysudha/s7.svg";
import s8 from "@/assets/whysudha/emergency-call.svg";
import ATM from "@/assets/whysudha/atm.png";
import CampusFacilitySlider from "@/components/FacilitySlider/CampusFacilitySlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import consult1 from "@/assets/about/img.png";
import consult2 from "@/assets/about/img.png";
import consult3 from "@/assets/about/img.png";
import Clinic from "@/assets/about/clinic.png";
import Slider from "react-slick";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "" },
  { label: "Why Sudha?", href: "/why-sudha" },
];




const consultSlides = [consult1, consult2, consult3];

const facilities = [
  {
    image: ATM,
    title: (
      <p className="text-primary-blue">
        Gift Shop for <br />
        the New born
      </p>
    ),
  },
  { image: ATM, title: "Canteen" },
  { image: ATM, title: "ATM" },
  { image: ATM, title: "ATM" },
  { image: ATM, title: "ATM" },
  { image: ATM, title: "ATM" },
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
const accordionData = [
  {
    title: "Credibility ",
    img: imgone,
    content:
      "With over 40 years of unwavering commitment, Sudha has grown into a symbol of trust and healing for lakhs of families across the Kongu region. Our journey is built on real stories, real recoveries, and the hope we’ve nurtured in every patient we serve. ",
  },
  {
    title: "Listening that Cares",
    img: imgtwo,
    content: "At Sudha, we don’t just treat, you are heard, understood, and supported. From your first consultation to every step of your recovery, we ensure open communication that makes you feel safe, informed, and respected. ",
  },
  {
    title: "Affordability ",
    img: imgthree,
    content:
      "We believe quality care shouldn’t be a luxury. That’s why we offer treatments that are both advanced and affordable, so that every family can access the best without compromise. ",
  },
  {
    title: "Cutting Edge Technology",
    img: imgfour,
    content:
      "Equipped with world-class infrastructure and the latest medical technologies, Sudha ensures precise diagnosis, effective treatments, and faster recovery. We bring tomorrow’s healthcare to you, today. ",
  },
  {
    title: "Care Beyond Treatment ",
    img: imgfive,
    content:
      "At Sudha, healing is not just about procedures, it’s about people. We treat every patient like family, offering kindness, patience, and heartfelt support at every step. From a gentle smile to a reassuring word, our team ensures your journey to wellness feels comforting, safe, and truly cared for. ",
  },
];

const services = [
  {
    icon: s1,
    title: "Pharmacy ",
    desc: "24 hours Pharmacy service for easy accessibility ",
  },
  {
    icon: s2,
    title: "Counselling  ",
    desc: "Supportive care for emotional well-being and mental strength.",
  },
  {
    icon: s4,
    title: "Laundry ",
    desc: "Fresh, clean linens provided for daily patient comfort. ",
  },
  {
    icon: s5,
    title: "Insurance ",
    desc: "Hassle-free help with insurance claims and approvals.",
  },
  {
    icon: s6,
    title: "Ambulance  ",
    desc: "Quick-response ambulances for timely patient transportation.",
  },
  {
    icon: s7,
    title: "Auditorium ",
    desc: "Space for awareness talks and wellness sessions.",
  },
  {
    icon: s8,
    title: "Emergency Care ",
    desc: "24/7 Immediate critical care for life-threatening conditions. ",
  },
];

function Whysudha() {
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

  const [openIndex, setOpenIndex] = useState(0); // 0 = first one expanded

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className=" mb-3 text-white"
            >

              <Breadcrumb items={breadcrumbItems} />

            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[44px] mb-4"
            >
              Why Sudha?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl max-w-xl mb-6 text-white"
            >
              Your Health is our Priority At Every Step
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

      <section className=" py-16 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-block mb-2 px-4 py-1 mb-4 font-semibold bg-white text-[#2B3990] rounded-full ">
              About us
            </span>
            <h2 className="text-[30px] font-bold mb-4">
              Sudha Overview?
            </h2>
            <p className="">
              Sudha Multispeciality Hospital in Erode was established in 1985 by
              the Kandasamy Charitable Trust to care for Women and Children.
              Since then, this institution has grown to encompass the entire
              spectrum of multi specialties of healthcare under one roof. Being
              the most renowned, trusted and the best hospital in Erode, we take
              utmost care in treating the people with the most advanced
              technologies that help people to recover quickly.
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



      <section>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full bg-[#FFFFFF] rounded-3xl">
          <div className="text-center">
            <div className="flex items-center justify-center  mb-4">
              <span className="bg-blue px-5  py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                Trusted by People
              </span>
            </div>

            <h2 className="text-[30px] mt-3">
              Why Sudha is the Best Multispeciality Hospital <br />in Erode?
            </h2>

          </div>

          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Side - Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={roboticSurgery}
                  alt="Hospital Robotics"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Right Side - Accordion */}
              <div className="w-full md:w-1/2 space-y-4">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-300  overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex gap-5">
                        <Image src={item.img} alt={item.title} />
                        <span className="text-[16px] font-bold text-left text-[#2B3990]">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-sm">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    {/* AnimatePresence + motion.div for smooth expand */}
                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="px-4 pb-4 text-sm leading-[1.6] text-[#5E566A] font-semibold tracking-widely overflow-hidden"
                        >
                          {item.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center  mb-4">
              <span className="bg-white text-primary-blue px-5  py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                Integrated Services
              </span>
            </div>
          </div>

          <h2 className="text-[30px] mb-10 text-center">
            Patient Amenities & Support For a <br />peaceful Healing Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center flex justify-center items-center hover:shadow-lg transition"
              >
                <div>
                  <div className="flex justify-center mb-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-[18px]  text-[#2B3990]">
                    {service.title}
                  </h3>
                  <p className=" mt-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto py-12 px-4">

          <p className="px-5  py-2 rounded-full text-sm font-semibold bg-white text-[#2B3990] w-[140px] mx-auto">
            Infrastructure
          </p>
          <h2 className=" mt-4 text-[30px] mb-6 text-center">
            In Campus
          </h2>
          <CampusFacilitySlider data={facilities} />
        </div>
      </section>

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
}

export default Whysudha;
