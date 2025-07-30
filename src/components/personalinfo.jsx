"use client";
import React from 'react';
import RegistrationForm from './Appointment';
import Tick from '../assets/Doctordetails/check 1.png';
import Image from "next/image";
import { motion } from 'framer-motion';

const Personalinfo = ({ doctor }) => {
  if (!doctor) {
    return <p className="p-5">Doctor info not available.</p>;
  }

  return (
    <div className="p-5">
      {/* Personal Details */}
      {doctor.personalDetails && (
        <motion.div className="pb-10" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false }}>
          <h1 className="text-xl text-black font-bold">{doctor.personalDetails.title}</h1>
          <p className="text-[#5E566A] text-md font-medium mt-4">{doctor.personalDetails.description}</p>
        </motion.div>
      )}

      {/* Clinical Expertise */}
      {doctor.clinicalExpertise && (
        <motion.div className="pb-10" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false }}>
          <h1 className="text-xl text-black font-bold">{doctor.clinicalExpertise.title}</h1>
          <ul className="text-[#5E566A] text-md font-medium">
            {doctor.clinicalExpertise.list.map((item, index) => (
              <li key={index} className="flex items-center gap-5 pb-3 mt-2">
                <Image src={Tick} alt="tick" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Research and Publications */}
      {doctor.researchandpublications && (
        <motion.div className="pb-10" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false }}>
          <h1 className="text-xl text-black font-bold">{doctor.researchandpublications.title}</h1>
          <ul className="text-[#5E566A] text-md font-medium">
            {doctor.researchandpublications.list.map((item, index) => (
              <li key={index} className="flex items-center gap-5 pb-3 mt-2">
                <Image src={Tick} alt="tick" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Awards */}
      {doctor.awards && (
        <motion.div className="pb-10" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false }}>
          <h1 className="text-xl text-black font-bold">{doctor.awards.title}</h1>
          <ul className="text-[#5E566A] text-md font-medium">
            {doctor.awards.list.map((item, index) => (
              <li key={index} className="flex items-center gap-5 pb-3 mt-2">
                <Image src={Tick} alt="tick" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Appointment Form */}
      <div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Personalinfo;
