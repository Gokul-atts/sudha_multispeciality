"use client";
import React, { useState } from "react";
import Banner from "@/assets/about/why-choose-us.webp";
import "./whysudha.css";
import hospitalOne from "@/assets/home/cards/c1.svg";
import Accordion from "../../components/Accordion";

import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";
import roboticSurgery from "@/assets/whysudha/robot-surgery.webp";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import one from "@/assets/aboutus/why-about-sudha.webp";
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
import Gallery1 from "@/assets/whysudha/gallery/gallery-1.webp";
import Gallery2 from "@/assets/whysudha/gallery/gallery-2.webp";
import Gallery3 from "@/assets/whysudha/gallery/gallery-3.webp";
import Gallery4 from "@/assets/whysudha/gallery/gallery-4.webp";
import Gallery5 from "@/assets/whysudha/gallery/gallery-5.webp";
import Gallery6 from "@/assets/whysudha/gallery/gallery-6.webp";
import Gallery7 from "@/assets/whysudha/gallery/gallery-7.webp";

import CampusFacilitySlider from "@/components/FacilitySlider/CampusFacilitySlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import consult1 from "@/assets/about/img.png";
import consult2 from "@/assets/about/img.png";
import consult3 from "@/assets/about/img.png";
import Clinic from "@/assets/common/general-consultation.webp";
import Slider from "react-slick";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "" },
  { label: "Why Sudha?", href: "/about-us/why-choose-sudha-hospital" },
];




const consultSlides = [consult1, consult2, consult3];

const facilities = [
  {
    image: Gallery1,
    // title: (
    //   <p className="text-primary-blue">
    //     Gift Shop for <br />
    //     the New born
    //   </p>
    // ),
  },
  { image: Gallery2 },
  { image: Gallery3 },
  { image: Gallery4 },
  { image: Gallery5 },
  { image: Gallery6 },
  { image: Gallery7 },
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
      "We believe quality care shouldn’t be a luxury. That’s why we offer treatments that are both advanced and affordable, so that every family can access the best without compromise.  ",
  },
  {
    title: "Cutting Edge Technology",
    img: imgfour,
    content:
      "Equipped with world-class infrastructure and the latest medical technologies, Sudha ensures precise diagnosis, effective treatments, and faster recovery. We bring tomorrow’s healthcare to you, today.  ",
  },
  {
    title: "Care Beyond Treatment ",
    img: imgfive,
    content:
      "At Sudha, healing is not just about procedures, it’s about people. We treat every patient like family, offering kindness, patience, and heartfelt support at every step. From a gentle smile to a reassuring word, our team ensures your journey to wellness feels comforting, safe, and truly cared for.  ",
  },
];


const accordionData1 = [
  {
    title: "Why choose Sudha Multispecialty Hospital Erode?  ",
    img: imgone,
    content: (<p className="text-[14px]">
      Sudha Multispeciality Hospital is recognised as the best multispeciality hospital in Erode, offering advanced medical care across multiple specialties, at an affordable cost, supported by expert consultants, modern infrastructure, and a strong commitment to patient well-being.
    </p>)
    ,
  },
  {
    title: "How is Sudha Hospital Different from other Hospitals? ",
    img: imgtwo,
    content:
      (<p className="text-[14px]">
        "What sets Sudha Multispeciality Hospital apart is its combination of clinical excellence, affordable treatments, and personalised care. With specialised departments, advanced technology, and highly skilled doctors, it provides comprehensive healthcare under one roof. </p>),
  },
  {
    title: "How can I book an appointment at Sudha Hospitals in Erode? ",
    img: imgthree,
    content:
      (<p className="text-[14px]">
        Appointments at Sudha Multispeciality Hospital in Erode can be booked easily through the “Book Appointment” button on the official website, by calling the helpline at 0424-2454545, or by visiting the hospital directly. The process is designed to be simple and accessible for patients’ convenience</p>),
  },
  {
    title: "How do Sudha Hospitals ensure patient care and comfort? ",
    img: imgfour,
    content:
      (<p className="text-[14px]">
        Sudha Multispeciality Hospital focuses on patient-centred care, with personalised treatment plans, modern facilities, and dedicated support staff. Comfort is prioritised through well-equipped rooms, 24/7 assistance, and compassionate medical services.</p>),

  },
  {
    title: "Which hospital is accredited or certified in Erode? ",
    img: imgfive,
    content:
      (<p className="text-[14px]">
        Sudha Multispeciality Hospital is a government-accredited hospital in Erode, recognised for maintaining the highest standards of patient safety, medical quality, and ethical healthcare practices. This accreditation highlights the hospital’s commitment to delivering reliable and trusted medical care.</p>),

  },
  {
    title: "Does Sudha Multispecialty Hospital have advanced facilities and technology? ",
    img: imgfive,
    content:
      (<p className="text-[14px]">
        Sudha Multispeciality Hospital in Erode is equipped with state-of-the-art diagnostic tools, modern surgical theatres, intensive care units, and advanced treatment technologies, ensuring precision and excellence in patient care.</p>),

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

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div>
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        {/* Banner Container */}
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
              className=" mb-3 text-white"
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
              Why Choose Sudha Hospitals?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl max-w-xl mb-6 text-white"
            >
             Your Trusted Healthcare Partner for Generations
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
        <div className="max-w-7xl mx-auto px-4 pt-14 pb-16 h-full">
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

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 xl:px-6 2xl:px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h6 className="inline-block mb-2 px-6 py-2 rounded-full text-md font-bold bg-white text-[#2B3990]">
              About us
            </h6>
            <h2 className="text-[30px]  mb-4">Why Choose Sudha Multispeciality Hospital? </h2>

            <p className="text-black font-bold mb-4">Sudha - Motherly Care from the Heart </p>
            <p>
              Sudha Multispeciality Hospital holds a record of serving more than four decades in the healthcare industry yearning the trust of lakhs of families. With the motherly care from the heart, we serve every people visit our doors with the best treatments for their healthcare needs. We don’t just treat people with medicines; we serve them with kind and compassionate care along with advanced treatments to help people recover quickly.
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
              className="rounded-3xl w-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>



      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-16 h-full bg-[#FFFFFF] rounded-3xl">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-blue px-6 py-2 rounded-full text-md font-bold flex items-center gap-2">
                Trusted by People
              </span>
            </div>

            <h2 className="text-[30px] mt-3">
              Why Sudha is the Best Multispeciality Hospital <br /> in Erode?
            </h2>
          </div>

          {/* Removed duplicate px-4 wrapper and kept padding responsive here */}
          <div className="mt-10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Left Side - Image */}
              <div className="w-full md:w-1/2">
                <div className="sticky top-20"> {/* keeps it stable */}
                  <Image
                    src={roboticSurgery}
                    alt="Hospital Robotics"
                    className="w-full h-[560px] object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Right Side - Accordion */}
              <div className="w-full md:w-1/2 space-y-4">
                {accordionData.map((item, index) => (
                  <div key={index} className="border-b border-gray-300 overflow-hidden">
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
                      <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                    </button>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const isLastRow = index >= services.length - 3; // last 3 items
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 text-center flex justify-center items-center hover:shadow-lg transition ${isLastRow ? "lg:col-span-1" : ""
                    }`}
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
                    <h3 className="text-[18px] text-[#2B3990]">
                      {service.title}
                    </h3>
                    <p className="mt-2">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto py-12 ">

          <h6 className="px-5  py-2 rounded-full text-[14px] font-semibold bg-white text-[#2B3990] w-[140px] mx-auto">
            Infrastructure
          </h6>
          <h2 className=" mt-4 text-[30px]  text-center">
            In Campus
          </h2>
          <CampusFacilitySlider data={facilities} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16" >
        <div>
          <h2 className="text-center text-[30px] mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion accordionData={accordionData1} />
        </div>
      </section>



    </div>
  );
}

export default Whysudha;
