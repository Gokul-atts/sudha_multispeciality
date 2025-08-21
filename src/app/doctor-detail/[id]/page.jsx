"use client";
import React, { use } from "react";
import Banner from "@/assets/about/hero.png";
import { motion } from "framer-motion";
import Doctordeatils from "@/components/Doctordeatils";

import { doctorsData } from "@/constants/doctorDetails";
import Personalinfo from "../../../components/personalinfo";

export default function Doctordetail(props) {
  const params = use(props.params); 
  const id = parseInt(params.id);

  const doctor = doctorsData.find((doc) => doc.id === id);
  if (!doctor) return <p className="p-5">Doctor not found</p>;

  const detail = doctor.doctordetail?.[0];
  if (!detail) return <p className="p-5">Doctor details not available</p>;

  return (
    <div>
      {/* Banner */}
      <section className="relative -mt-20 lg:-mt-20">
        <div
          className="max-w-7xl mx-auto px-4 py-24 md:py-32 text-white rounded-t-[40px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-lg mb-4"
          >
            Home / Doctor / {doctor.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          >
            {doctor.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl mb-2"
          >
            {detail?.menulabel || doctor.qualification}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm sm:text-base md:text-lg font-semibold"
          >
            {detail?.role}
          </motion.div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-[30%]">
          <div className="w-full space-y-6 lg:sticky top-24 h-fit">
            <Doctordeatils doctor={detail} />
          </div>
        </aside>

        <div className="w-full md:w-[70%] bg-white rounded-xl shadow-md p-4 md:p-6">
          <Personalinfo doctor={detail} />
        </div>
      </section>
    </div>
  );
}
