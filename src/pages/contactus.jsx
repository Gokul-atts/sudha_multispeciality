"use client";
import React from 'react'
import Banner from "@/assets/about/hero.png";
import { motion } from "framer-motion";


import Contactusfooter from '@/components/contactusfooter';
import Bookappointment from '@/components/Bookappointment';
import Registeration from '@/components/registeration';
import HospitalCard from "@/components/Hospital";
import hospitalOne from "@/assets/home/cards/c1.svg";

import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
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

      <section className="relative -mt-12 lg:-mt-24 m-10">
        <div
          className="max-w-full mx-auto px-4 py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover md:bg-contain"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="pl-8 md:pl-20">

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
              className="text-[44px]  mb-3"
            >
              Contact Us

            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              Schedule An Appointment
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

      <div className="max-w-7xl mx-auto py-10 relative">
        <Registeration />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 relative">
        <Contactusfooter />
      </div>
    </div>
  )
}

export default Contactus;