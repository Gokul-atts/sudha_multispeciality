import React from 'react';
import Image from "next/image";
import clinic from "../assets/Doctordetails/id1.jpg";
import Doclogo from "../assets/Doctordetails/Doclogo.png";
import { motion } from "framer-motion";

const Doctordeatils = ({ doctor }) => {
  if (!doctor) {
    return <p className="p-5">Doctor details not found.</p>;
  }

  return (
<div
  className="rounded-xl overflow-hidden"
  style={{
    background: 'linear-gradient(180deg, #2B3990 0%, #0D112A 100%)',
  }}
>
  {/* Doctor Image */}
  <Image
    alt="Doctor"
    src={doctor.image || clinic}
    className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-t-xl"
  />

  {/* Logo Over Image (only on sm and up) */}
  <div className="relative -mt-10 z-10 flex justify-end pr-6 hidden sm:flex">
    <Image src={Doclogo} alt="Logo" className="w-20 h-auto" />
  </div>

  {/* Details Section */}
  <div className="p-4 sm:p-6">
    {/* Specialist & Name */}
    <motion.div
      className="pb-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="text-sm sm:text-base text-white">{doctor.specialist}</p>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1">{doctor.name}</h1>
      <hr className="mt-4 border-t border-white opacity-30" />
    </motion.div>

    {/* New OP Days */}
    <motion.div
      className="pb-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="text-sm text-white">New OP Days</p>
      <h2 className="text-lg font-semibold text-white mt-1">{doctor.newopdays}</h2>
      <hr className="mt-4 border-t border-white opacity-30" />
    </motion.div>

    {/* Review OP Days */}
    <motion.div
      className="pb-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="text-sm text-white">Review OP Days</p>
      <h2 className="text-lg font-semibold text-white mt-1">{doctor.reviewopdays}</h2>
      <hr className="mt-4 border-t border-white opacity-30" />
    </motion.div>

    {/* Experience */}
    <motion.div
      className="pb-2"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="text-sm text-white">Clinical Experience</p>
      <h2 className="text-lg font-semibold text-white mt-1">{doctor.experience} Years</h2>
    </motion.div>
  </div>
</div>

  );
};

export default Doctordeatils;
