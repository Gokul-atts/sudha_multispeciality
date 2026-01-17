"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import BackgroundIMage from "../../assets/ourteam/find-doctor.webp";

import "../Finddoctor/finddoc.css";
import { doctorsData } from "@/constants/doctorDetails";
import Accordion from "../../components/Accordion";
import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Find a Doctor", href: "/find-a-doctor" },
];

const accordionData = [
  {
    title: <>Who is the best ENT specialist in Erode?</>,
    content: (
      <p className="text-sm">
        The ENT department at Sudha Multispeciality Hospital offers expert diagnosis and treatment for all ear, nose, and throat conditions using advanced facilities.
      </p>
    ),
  },
  {
    title: <>Who is the best cardiologist in Erode?</>,
    content: (
      <p className="text-sm">
        The cardiology team provides comprehensive heart care, including preventive, diagnostic, and interventional cardiology services.
      </p>
    ),
  },
  {
    title: <>Who is the best anesthesiologist in Erode?</>,
    content: (
      <p className="text-sm">
        The anaesthesiology team ensures safe and effective anaesthesia management for all types of surgical procedures.
      </p>
    ),
  },
  {
    title: <>Who is the leading doctor for general medicine in Erode?</>,
    content: (
      <p className="text-sm">
        The general medicine team delivers expert care for a wide range of acute and chronic medical conditions.
      </p>
    ),
  },
  {
    title: <>How can I book an appointment at Sudha Hospital in Erode?</>,
    content: (
      <p className="text-sm">
        Appointments can be booked via the website using the "Book Appointment" option or by calling 042-424-54545.
      </p>
    ),
  },
];

export default function Finddoctor() {
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const filteredDoctors = useMemo(() => {
    if (selectedDoctor) return doctorsData.filter((doc) => doc.name === selectedDoctor);
    if (selectedSpeciality) return doctorsData.filter((doc) => doc.speciality === selectedSpeciality);
    return doctorsData;
  }, [selectedSpeciality, selectedDoctor]);

  const groupedBySpeciality = useMemo(() => {
    const map = new Map();
    filteredDoctors.forEach((doc) => {
      if (!map.has(doc.speciality)) map.set(doc.speciality, []);
      map.get(doc.speciality).push(doc);
    });
    return map;
  }, [filteredDoctors]);

  const uniqueDoctors = useMemo(() => {
    const filtered = selectedSpeciality
      ? doctorsData.filter((doc) => doc.speciality === selectedSpeciality)
      : doctorsData;
    return [...new Set(filtered.map((doc) => doc.name))];
  }, [selectedSpeciality]);

  const uniqueSpecialities = [...new Set(doctorsData.map((doc) => doc.speciality))];

  const scrollRefs = useRef({});

  const scroll = (speciality, direction) => {
    const container = scrollRefs.current[speciality];
    if (!container) return;
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-7 hero-section -mt-28 mb-hero-section">
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-[400px]"
          style={{ backgroundImage: `url(${BackgroundIMage.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-3xl sm:text-4xl mb-3">Find a Doctor</h1>
            <p className="mb-6 text-white text-sm sm:text-base">
              A Heartfelt Care For Your Heart Care
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto pt-16 relative px-4 sm:px-0 z-20">
        <div className="bg-white w-full md:w-[70%] lg:w-[50%] p-6 md:p-8 rounded-3xl -mt-28 relative z-20 shadow-md">
          <h5 className="mb-4 text-[18px] sm:text-[20px] text-center md:text-left">
            Find top specialists by department and book your appointment now.
          </h5>
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              onChange={(e) => {
                setSelectedSpeciality(e.target.value);
                setSelectedDoctor("");
              }}
              className="border px-4 py-2 rounded-md w-full"
              value={selectedSpeciality}
            >
              <option value="">All Specialities</option>
              {uniqueSpecialities.map((speciality, i) => (
                <option key={i} value={speciality}>
                  {speciality}
                </option>
              ))}
            </select>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
              disabled={!selectedSpeciality}
            >
              <option value="">
                {selectedSpeciality ? "All Doctors" : "Select Speciality First"}
              </option>
              {uniqueDoctors.map((name, i) => (
                <option key={i} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

    {/* Doctor Sliders */}
<div className="max-w-7xl mx-auto mt-20 px-4">
  {[...groupedBySpeciality.entries()].map(([speciality, doctors]) => (
    <div key={speciality} className="mb-16 relative">
      <h2 className="text-[24px] text-[#2B3990] mb-6 font-bold">
        {speciality} ({doctors.length})
      </h2>

      {/* ✅ Show Arrows only if more than 3 doctors */}
      {doctors.length > 3 && (
        <button
          onClick={() => scroll(speciality, "left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md p-2 rounded-full"
        >
          <ChevronLeft className="text-[#2B3990]" />
        </button>
      )}

      {/* Slider */}
      <div
        ref={(el) => (scrollRefs.current[speciality] = el)}
        className={`flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4 px-1 snap-x snap-mandatory ${
          doctors.length <= 3 ? "justify-start" : ""
        }`}
        style={{
          scrollBehavior: doctors.length > 3 ? "smooth" : "unset",
          overflowX: doctors.length > 3 ? "auto" : "hidden",
        }}
      >
        {doctors.map((doc) => (
          <motion.div
            key={doc.id}
            whileHover={{ y: -4 }}
            className="w-full sm:w-[90%] md:w-[32%] bg-white rounded-3xl shadow-sm flex-shrink-0 border border-gray-100 transition-transform snap-start"
          >
            <Image
              src={doc.image}
              alt={doc.name}
              width={400}
              height={400}
              className="w-full h-[320px] object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-md font-bold text-[#2B3990]">{doc.name}</h3>
              <p className="text-sm mt-1">{doc.degrees}</p>
              <p className="text-sm mt-1 line-clamp-2">{doc.qualification}</p>
              <Link
                href="tel:04242454545"
                className="btn-diagonal-outline px-6 w-full mt-4 flex items-center justify-center gap-2"
              >
                Book an Appointment <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Show Right Arrow only if more than 3 doctors */}
      {doctors.length > 3 && (
        <button
          onClick={() => scroll(speciality, "right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#2B3990] text-white shadow-md p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  ))}
</div>


      {/* FAQ */}
      <section className="max-w-3xl mx-auto py-8 px-4 sm:px-0">
        <h2 className="text-center text-[30px] mb-8">Frequently Asked Questions</h2>
        <Accordion accordionData={accordionData} />
      </section>
    </>
  );
}
