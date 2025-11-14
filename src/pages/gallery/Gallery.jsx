"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Banner from "@/assets/about/gallery.webp";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";
import Breadcrumb from "@/components/Breadcrumb";
import Bookappointment from "@/components/Bookappointment";

import "./gallery.css";

// Gallery Images
import gallery1 from "@/assets/gallery/gallery-1.webp";
import gallery2 from "@/assets/gallery/gallery-2.webp";
import gallery3 from "@/assets/gallery/gallery-3.webp";
import gallery4 from "@/assets/gallery/gallery-4.webp";
import gallery5 from "@/assets/gallery/gallery-5.webp";
import gallery6 from "@/assets/gallery/gallery-7.webp";
import gallery7 from "@/assets/gallery/gallery-8.webp";
import gallery8 from "@/assets/gallery/gallery-9.webp";
import gallery9 from "@/assets/gallery/gallery-10.webp";
import gallery10 from "@/assets/gallery/gallery-11.webp";
import gallery11 from "@/assets/gallery/gallery-12.webp";
import gallery12 from "@/assets/gallery/gallery-13.webp";
import gallery13 from "@/assets/gallery/gallery-14.webp";
import gallery14 from "@/assets/gallery/gallery-15.webp";
import gallery15 from "@/assets/gallery/gallery-16.webp";
import gallery16 from "@/assets/gallery/gallery-17.webp";
import gallery17 from "@/assets/gallery/gallery-18.webp";
import gallery18 from "@/assets/gallery/gallery-19.webp";
import gallery19 from "@/assets/gallery/gallery-20.webp";
import gallery20 from "@/assets/gallery/ambulance-1.webp";
import gallery21 from "@/assets/gallery/ambulance-2.webp";
import gallery22 from "@/assets/gallery/pharmacy-1.webp";
import gallery23 from "@/assets/gallery/pharmacy-2.webp";
import gallery24 from "@/assets/gallery/pharmacy-3.webp";
import gallery25 from "@/assets/gallery/pharmacy-4.webp";
import gallery26 from "@/assets/gallery/pharmacy-5.webp";
import gallery27 from "@/assets/gallery/lab-1.webp";
import gallery28 from "@/assets/gallery/lab-2.webp";
import gallery29 from "@/assets/gallery/lab-3.webp";
import gallery30 from "@/assets/gallery/lab-4.webp";
import gallery31 from "@/assets/gallery/lab-5.webp";
import gallery32 from "@/assets/gallery/lab-6.webp";
import gallery33 from "@/assets/gallery/lab-7.webp";
import gallery34 from "@/assets/gallery/lab-8.webp";
import gallery35 from "@/assets/gallery/lab-9.webp";
import gallery36 from "@/assets/gallery/lab-10.webp";
import gallery37 from "@/assets/gallery/lab-11.webp";
import gallery38 from "@/assets/gallery/lab-12.webp";
import gallery39 from "@/assets/gallery/lab-13.webp";
import gallery40 from "@/assets/gallery/lab-14.webp";
import gallery41 from "@/assets/gallery/lab-15.webp";
import gallery42 from "@/assets/gallery/lab-16.webp";

// Breadcrumb
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "" },
  { label: "Infrastructure", href: "/about-us/infrastructure" },
];

// Hospital Stats Cards
const hospitalscards = [
  {
    number: <h3 className="text-[48px] text-[#2B3990]">40+</h3>,
    title: <p className="text-md font-bold text-black">Years of Experience</p>,
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

// All gallery images
const allImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8,
  gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15,
  gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22,
  gallery23, gallery24, gallery25, gallery26, gallery27, gallery28, gallery29, gallery30,
  gallery31, gallery32, gallery33, gallery34, gallery35, gallery36, gallery37, gallery38,
  gallery39, gallery40, gallery41, gallery42,
];

function Gallery() {
  const [visibleImages, setVisibleImages] = useState(12);

  // ✅ Detect mobile and adjust initial images
  useEffect(() => {
    if (window.innerWidth < 540) {
      setVisibleImages(6); // show 6 on mobile
    }
  }, []);

  const loadMore = () => setVisibleImages((prev) => prev + 6);
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div>
      {/* Hero Section */}
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
              className="text-white mb-3"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] mb-4"
            >
              Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              A Visual Journey of Trust and Healing
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link href="#contactus" className="btn-white inline-flex items-center">
                Book an Appointment <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-0 right-0 z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <p className="text-[16px] text-black font-bold mb-2">
                  Excellence in healthcare, <br /> always by your side
                </p>
                <h3 className="text-[20px] font-extrabold text-[#2B3990]">Since 1985</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Cards Section */}
      <section>
        <div className="max-w-7xl mx-auto my-20 h-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
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

      {/* Gallery Section */}
      <section>
        <div className="container max-w-7xl mx-auto relative h-full px-4 sm:px-6 lg:px-8 py-8">
          <p className="bg-white text-[#2B3990] px-5 mb-5 py-2 w-[220px] mx-auto rounded-full font-semibold">
            Infrastructure & Gallery
          </p>

          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] ">
              Our Legacy Through the Lens
            </h2>
          </div>

          {/* ✅ Responsive grid with 2 cols on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allImages.slice(0, visibleImages).map((src, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-[180px] sm:h-[220px] lg:h-[300px] object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {visibleImages < allImages.length && (
            <div className="flex justify-center mt-8">
              <button onClick={loadMore} className="btn-diagonal">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="contactus" className="my-16">
        <Bookappointment />
      </section>
    </div>
  );
}

export default Gallery;
