'use client'
import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/about/board-of-directors.webp";
import Contactusmain from '@/components/contactusmain';
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import Chairmen from "@/assets/ourmanagement/chairman.jpg";
import HospitalCard from "@/components/Hospital";
import Executiveteam from '@/components/Executiveteam';
import "../Ourmanagement/Ourmanagement.css";
import Sudha from "@/assets/ourmanagement/Sudha.png"
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "" },
     { label: "Board of Management", href: "/board-of-management" },
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

const Ourmanagement = () => {
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
    <div >
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
              className="text-sm mb-4 text-white"
            >
             <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[44px] font-bold mb-4"
            >
              Our Management
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[16px]  text-white max-w-xl mb-6 tracking-wide"
            >
              The Visionaries behind the Quality Healthcare Service
            </motion.p>
          </div>

          <div className="absolute bottom-[10px] hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990] p-4 pt-5 rounded-xl w-[220px] mr-4">
            <h3 className="text-[20px] font-bold mt-1 mb-1">Providing Quality Healthcare</h3>
            <p className="text-lg leading-snug text-black font-semibold"></p>
            <p className="text-black font-semibold">
              Since 1985
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




      <div className='flex flex-col md:flex-row gap-4 max-w-7xl mx-auto  py-5 relative text-white bg-center bg-no-repeat bg-cover md:bg-contain'>
        <div className='w-full  md:w-[30%] bg-black-500 relative'>
          <div className="relative">
            <Image
              src={Chairmen}
              alt='Image'
              className="rounded-2xl w-full h-auto object-cover"
              style={{ height: "350px", width: "650px" }}
            />
          </div>
          <div className="absolute top-7 left-0 md:left-10 w-full h-full flex items-end justify-start p-7 ">
            <div className='bg-white px-8 py-7 w-full rounded-2xl  text-center items-center justify-center'>
              <h4 className=" text-black text-md mb-2 font-bold">
                Founder
              </h4>
              <h1 className='text-[#2B3990] text-xl mb-2 font-bold'>
                Dr. D. Kandasamy
              </h1>
              <p className='text-[#5E566A] text-sm font-semibold'>MD, DTCD Preventive Cardiologist</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[70%] rounded-xl p-10'>
          <h1 className='text-[#000000] text-[30px]  pb-5'>Chairman’s Message</h1>
          <p className='text-[#2B3990] text-sm md:text-base font-semibold pb-5'> "My dream was to ensure no one had to leave my hometown for quality medical care"</p>
          <p className='pb-5'>
            Sudha Hospitals has proudly served people for more than four decades, offering dependable, cost-effective, ethical, compassionate, advanced, inclusive, and patient-centred care. Our strength lies in the unwavering dedication of our doctors, nurses, and paramedical staff, whose service continues to earn trust and admiration across generations.
          </p>
          <p className=''>
            We have always delivered, and will continue to deliver, healthcare that people can rely on with trust and confidence through evolving technologies, continuous learning, compassionate service, and an unwavering commitment to improving lives every day.
          </p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto mt-10 relative'>
        <h2 className='text-[30px] mb-6'>Our Executive Team</h2>
      </div>
      <div className='max-w-7xl mx-auto px-4 py-10 relative'>
        <Executiveteam />
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
    </div>
  )
}

export default Ourmanagement