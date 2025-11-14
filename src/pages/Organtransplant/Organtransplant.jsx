"use client";
import React from "react";
import Banner from "@/assets/organtransplant/organ-transplant.webp";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Accordion from "../../components/Accordion";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import Main from "@/assets/nursingservice/main.jpg";
import Bookappointment from "@/components/Bookappointment";
import Image from "next/image";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import OrganTransplantSidebar from "@/components/OrganTransplantSidebar";

const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Cardiothoracic Surgery" />  */}
          What is the most common organ transplant?
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Kidney transplant is the most commonly performed organ transplant worldwide. Sudha Multispeciality Hospital, recognised as the best hospital in Erode for organ transplant, provides advanced renal transplant care with expert surgical teams.
        </p>


      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          What is the procedure for a liver transplant?
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          A liver transplant involves removing a diseased liver and replacing it with a healthy liver from a donor. Pre-surgical evaluation, donor matching, and post-operative care are critical for success. Sudha Multispeciality Hospital is recognised as the best hospital for liver transplant in Erode, offering comprehensive care throughout the process.
        </p>


      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          Which hospital in India is best for liver transplant?
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          There are many hospitals in India offer advanced liver transplant services. Sudha Multispeciality Hospital is considered the best hospital for organ transplant in Erode, providing specialised liver transplant services with experienced surgeons.
        </p>


      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          What is the ideal age for a liver transplant?
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Liver transplants are typically performed in adults and children when liver function is severely compromised. The suitability depends on overall health rather than age alone. Sudha Multispeciality Hospital, the best hospital for liver transplant in Erode, conducts thorough assessments to determine eligibility.
        </p>

      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          Can a person live with one kidney?
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          It is possible to live a healthy life with one kidney. Donors and patients are carefully evaluated and monitored by specialists at Sudha Multispeciality Hospital, the best hospital for renal transplants in Erode, to ensure safe outcomes.
        </p>

      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          What's the recovery time after donating a kidney?
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Recovery after kidney donation usually takes 4 to 6 weeks, depending on individual health and adherence to post-operative care. Sudha Multispeciality Hospital, recognised as the best hospital for organ transplant in Erode, provides complete guidance and monitoring for a safe recovery.
        </p>

      </div>
    ),
  },

];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Facilities", href: "" },
  { label: "Organ Transplant", href: "/organ-transplant" },
];

const hospitalscards = [
  {
    number: <h3 className="text-[44px] text-[#2B3990]">40+</h3>,
    title: (
      <p className="text-md font-bold text-black">Years of Experience</p>
    ),
    link: "/about-us/our-growth-story",
    icon: hospitalOne,
  },
  {
    number: <h3 className="text-[44px] text-[#2B3990]">300+</h3>,
    title: <p className="text-md font-bold text-black">Patient Beds</p>,
    link: "/facilities/health-package",
    icon: hospitalTwo,
  },
  {
    number: <h3 className="text-[44px] text-[#2B3990]">30+</h3>,
    title: <p className="text-md font-bold text-black">Departments</p>,
    link: "/specialities",
    icon: hospitalThree,
  },
  {
    number: <h3 className="text-[44px] text-[#2B3990]">100+</h3>,
    title: <p className="text-md font-bold text-black">Doctors</p>,
    link: "/find-a-doctor",
    icon: hospitalFour,
  },
];


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
const customerSlides = [Main, Main, Main];

const OrganTransplant = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <div className="flex justify-end -mt-[60px] ">{dots}</div>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-white hover:bg-[#2b3990] transition-all duration-300"></div>
    ),
  };
  return (
    <div>
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
              className="text-sm mb-2"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px]  mb-3"
            >
              Organ Transplant
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-4"
            >
              Advanced Organ Transplant Care at Sudha Multispeciality Hospital.
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
                <p className="text-[16px] text-black font-bold mb-2">
                  Quality healthcare   <br />
                  backed by superior <br /> facilities
                </p>
                <h3 className="text-[20px] font-extrabold text-[#2B3990]">Since 1985</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto md:pt-16 py-16">
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

      <div>
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="mt-5">
          <span className="mx-4 text-[#D5DAE5] font-extrabold text-[76px]">
            Experienced Professionals + Preventive Care
          </span>
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto  md:py-16 py-8 md:px-0 px-4">
        <OrganTransplantSidebar />
      </div>

      <section className="max-w-3xl mx-auto py-16 md:py-16 py-8  md:px-0 px-4" >
        <div>
          <h2 className="text-center text-[30px] mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion accordionData={accordionData} />
        </div>
      </section>

      <section id="contactus">
        <Bookappointment />
      </section>
    </div>
  );
};

export default OrganTransplant;
