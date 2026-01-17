"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";

// Assets
import Banner from "@/assets/facilities/specialites.webp";
import cardone from "@/assets/home/cards/1.svg";
import cardtwo from "@/assets/home/cards/2.svg";
import cardthree from "@/assets/home/cards/3.svg";
import cardfour from "@/assets/home/cards/4.svg";
import Slide1 from "@/assets/ambulanceservice/ambulance-img.png";
import Slide2 from "@/assets/ambulanceservice/ambulance-1.webp";
import Slide3 from "@/assets/ambulanceservice/ambulance-2.webp";

// Specialties icons
import cardiology from "@/assets/home/medical/cardiology.svg";
import neurology from "@/assets/home/medical/neurology.svg";
import cardiologysurgery from "@/assets/home/medical/cardiothoracic-surgery.svg";
import anesthesiology from "@/assets/home/medical/anesthesia.svg";
import dentistry from "@/assets/home/medical/dentistry.svg";
import dermatology from "@/assets/home/medical/demertology.svg";
import ent from "@/assets/home/medical/ent.svg";
import EmergencyCare from "@/assets/home/medical/emergency-care.svg";
import Gastroenterology from "@/assets/home/medical/gastroenterology.svg";
import Radiology from "@/assets/home/medical/diagnostic-radiology.svg";
import Generalmedicine from "@/assets/home/medical/general-medicine.svg";
import GeneralSurgery from "@/assets/home/medical/surgery-room.svg";
import Intensive from "@/assets/home/medical/icu.svg";
import Urology from "@/assets/home/medical/urogynecology.svg";
import Orthopedics from "@/assets/home/medical/orthopaedics.svg";
import Oncology from "@/assets/home/medical/oncology.svg";
import Nephrology from "@/assets/home/medical/nephrology.svg";
import Obstetrics from "@/assets/home/medical/pregnant.svg";
import Diagnostic from "@/assets/home/medical/imaging.svg";
import Pulmonology from "@/assets/home/medical/pulmonology.svg";
import Pediatrics from "@/assets/home/medical/pediatrics.svg";
import Pain from "@/assets/home/medical/pain-medicine.svg";
import Plastic from "@/assets/home/medical/plastic-surgery.svg";
import Laryngology from "@/assets/home/medical/laryngology.svg";
import Fertility from "@/assets/home/medical/fertility.svg";
import Mother from "@/assets/home/medical/mother-child.svg";

// Components
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";

// Breadcrumb items
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Specialities", href: "/specialities" },
];

// Cards for quick links
const cards = [
  {
    icon: cardone,
    title: (
      <p className="text-md font-extrabold text-black">
        <span className="text-[#2b3990] font-extrabold">24/7</span> <br />
        Emergency Care
      </p>
    ),
    link: "/contact-us",
  },
  {
    icon: cardtwo,
    title: (
      <p className="text-md font-extrabold text-black">
        Master <span className="text-[#2b3990] font-extrabold"> Health </span>
        <br />
        Check Up
      </p>
    ),
    link: "/facilities/health-package",
  },
  {
    icon: cardfour,
    title: (
      <p className="text-md font-extrabold text-black">
        <br />
        Find a <span className="text-[#2b3990] font-extrabold">Doctor</span>
      </p>
    ),
    link: "/find-a-doctor",
  },
  {
    icon: cardthree,
    title: (
      <p className="text-md font-extrabold text-black">
        <br />
        Book an <span className="text-[#2b3990] font-extrabold">Appointment</span>
      </p>
    ),
    link:"tel:04242454545",
  },
];

// Animation variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Specialties list
const specialties = [
  { title: "Cardiology", icon: cardiology, href: "/specialities/cardiology" },
  { title: "Cardiothoracic Surgery", icon: cardiologysurgery, href: "/specialities/cardiothoracic-surgery" },
  { title: "Anaesthesiology", icon: anesthesiology, href: "/specialities/anaesthesiology" },
  { title: "Dentistry & Oral Surgery", icon: dentistry, href: "/specialities/dentistry-and-oral-surgery" },
  { title: "Dermatology", icon: dermatology, href: "/specialities/dermatology" },
  { title: "ENT", icon: ent, href: "/specialities/ent" },
  { title: "Emergency Care", icon: EmergencyCare, href: "/specialities/emergency-care" },
  { title: "Gastroenterology", icon: Gastroenterology, href: "/specialities/gastroenterology" },
  { title: "Radiology", icon: Radiology, href: "/specialities/radiology" },
  { title: "General Medicine", icon: Generalmedicine, href: "/specialities/general-medicine" },
  { title: "General Surgery", icon: GeneralSurgery, href: "/specialities/general-surgery" },
  { title: "Intensive Care Unit", icon: Intensive, href: "/specialities/intensive-care-unit" },
  { title: "Urology", icon: Urology, href: "/specialities/urology" },
  { title: "Orthopedics", icon: Orthopedics, href: "/specialities/orthopaedics" },
  { title: "Nephrology", icon: Nephrology, href: "/specialities/nephrology" },
  { title: "Neurology", icon: neurology, href: "/specialities/neurology" },
  { title: "Obstetrics & Gynaecology", icon: Obstetrics, href: "/specialities/obstetrics-and-gynaecology" },
  { title: "Oncology", icon: Oncology, href: "https://sudhacancercentre.com/" },
  { title: "Imaging & Diagnostic Services", icon: Diagnostic, href: "/specialities/imaging-and-diagnostic-services" },
  { title: "Pulmonology", icon: Pulmonology, href: "/specialities/pulmonology" },
  { title: "Pediatrics & Neonatology", icon: Pediatrics, href: "/specialities/paediatrics-and-neonatology" },
  { title: "Pain Medicine", icon: Pain, href: "/specialities/pain-medicine" },
  { title: "Plastic Surgery", icon: Plastic, href: "/specialities/plastic-surgery" },
  { title: "Laryngology", icon: Laryngology, href: "/specialities/laryngology" },
  { title: "Fertility Centre", icon: Fertility, href: "https://sudhafertilitycentre.com/" },
  { title: "Mother & Child Care", icon: Mother, href: "/mother-and-child-care" },
];

// Slide images
const Slides = [Slide1, Slide2, Slide3];

const Specialities = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-3 text-white"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[32px] md:text-[40px] font-bold mb-4"
            >
              Specialities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
             Excellence in Care, Across Every Department
            </motion.p>
          </div>

          {/* Corner Info Box */}
          <div className="absolute bottom-0 right-0  z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <h3 className="text-[36px] font-extrabold text-[#2B3990]">40+</h3>
                <p className="text-[16px] text-black font-bold">
                  Years of Trusted <br />
                  Expertise in <br />
                  Healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Cards */}
      <section className="my-16">
        <div className="max-w-7xl mx-auto h-full">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            {cards.map((card, idx) => (
              <motion.div key={idx} variants={item}>
                <ServiceCard icon={card.icon} title={card.title} link={card.link} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h5 className="bg-white text-[#2B3990] px-5 py-2 rounded-full text-sm font-semibold inline-block">
              Our Specialities
            </h5>
            <h2 className="mt-4 text-[36px]">
              Premium Healthcare Services for Every <br /> Health Requirement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {specialties.map((item, index) => (
              <Link key={index} href={item.href || "#"} passHref>
                <div className="cursor-pointer h-[180px] sm:h-[200px] bg-white rounded-2xl flex flex-col items-center justify-center text-center px-4 transition-all">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={50}
                    height={50}
                    className="w-[40px] sm:w-[50px] h-auto"
                  />
                  <p className="mt-4 text-[15px] font-bold text-[#2B3990]">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      {/* <Marquee speed={50} gradient={false} pauseOnHover={true} className="mt-10">
        <span className="mx-4 text-[#D5DAE5] font-extrabold text-[40px] md:text-[76px] whitespace-nowrap">
          Experienced Professionals + Preventive Care
        </span>
      </Marquee> */}
    </div>
  );
};

export default Specialities;
