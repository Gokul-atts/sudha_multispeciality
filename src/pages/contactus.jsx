"use client";
import React from 'react'
import Banner from "@/assets/about/contact-banner.png";
import { motion } from "framer-motion";


import Contactusfooter from '@/components/contactusfooter';
import Registeration from '@/components/registeration';
import HospitalCard from "@/components/Hospital";
import hospitalOne from "@/assets/home/cards/c1.svg";

import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },
      { label: "Resources", href: "" },
    { label: "Contact Us", href: "/contact-us" },
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

const Contactus = () => {
  return (
    <div className='mt-4'>

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
              className="text-white  mb-3"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px]  mb-3"
            >
              Contact Us

            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              Book Your Appointment in Just One Click
              {/* Expert Hands to Take Care Of You At Every Step */}.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* <button className="inline-flex items-center gap-2 bg-white text-[#2B3990] text-sm font-semibold px-5 py-2 rounded-full shadow text-[18px]">
                Book an Appointment <ArrowUpRight className="w-4 h-4" />
              </button> */}
            </motion.div>
          </div>
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
      <section>
        <div className="max-w-7xl mx-auto pt-16 pb-16 h-full">
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

      {/* <div className="max-w-7xl mx-auto py-10 relative">
        <Registeration />
      </div> */}

      {/* <div className="max-w-7xl mx-auto px-4 py-10 relative">
        <Contactusfooter />
      </div> */}
    </div>
  )
}

export default Contactus;