"use client";
import React, { use } from "react";
import Banner from "@/assets/ourteam/find-doctor.webp";
import { motion } from "framer-motion";
import Doctordeatils from "@/components/doctordeatils";
import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Doctor", href: "/find-a-doctor" },


];
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
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3 text-white flex w-[250px]"
            >
              <Breadcrumb items={breadcrumbItems} /> <span className="w-full">{doctor.name}</span> 
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] mb-4"
            >
              {doctor.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              {detail?.menulabel || doctor.degress}
            </motion.p>

            {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm sm:text-base md:text-lg font-semibold"
          >
            {detail?.role}
          </motion.div> */}
          </div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="max-w-7xl mx-auto py-16 md:px-0 px-4 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-[30%]">
          <div className="w-full space-y-6 lg:sticky top-24 h-fit">
            <Doctordeatils doctor={detail} />
          </div>
        </aside>

        <div className="w-full md:w-[70%] bg-white rounded-3xl  p-4 md:p-6">
          <Personalinfo doctor={detail} />
        </div>
      </section>
    </div>
  );
}
