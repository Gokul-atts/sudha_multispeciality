"use client";

import React from "react";
import clinic from "../assets/contactus/clinic.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import RegistrationForm from "./Appointment";

const AppointmentForm = () => {
  return (
    <div className="min-h-screen flex items-center w-full justify-center -mt-10">
      <div className="bg-white rounded-3xl p-8 w-full max-w-8xl grid lg:grid-cols-2 gap-10">
        
        {/* Heading Section */}
        <div className="col-span-full space-y-2 flex flex-col items-center text-center">
          <div className="flex justify-center">
            <h5 className="bg-blue px-5 py-2 rounded-full text-sm font-semibold">
              Sudha | Caring for People
            </h5>
          </div>

          <h2 className="text-[30px]">
            Trusted by Families, Recommended by Experts
          </h2>

          <p className="text-gray-600 text-sm">
            Get expert consultations from top doctors for all your health concerns.
          </p>
        </div>

        {/* Form Section */}
        <motion.div
          className="flex-1 space-y-6 mt-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <RegistrationForm />
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative hidden sm:block w-full mt-5"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={clinic}
            alt="Clinic"
            className="rounded-3xl w-full object-cover h-auto max-h-[540px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AppointmentForm;
