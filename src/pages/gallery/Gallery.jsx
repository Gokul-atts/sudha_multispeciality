"use client";
import Contactusmain from "@/components/contactusmain";
import React, { useState } from "react";
import Banner from "@/assets/about/gallery.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";
import "./gallery.css";
import Clinic from "@/assets/about/clinic.png";
import Marquee from "react-fast-marquee";
import gallery1 from "@/assets/gallery/1.webp";
import gallery2 from "@/assets/gallery/2.webp";
import gallery3 from "@/assets/gallery/3.webp";
import gallery4 from "@/assets/gallery/4.webp";
import gallery5 from "@/assets/gallery/5.webp";
import gallery6 from "@/assets/gallery/6.webp";
import gallery7 from "@/assets/gallery/7.webp";
import gallery8 from "@/assets/gallery/8.webp";
import gallery9 from "@/assets/gallery/9.webp";
import gallery10 from "@/assets/gallery/10.webp";
import gallery11 from "@/assets/gallery/11.webp";
import gallery12 from "@/assets/gallery/12.webp";
import gallery13 from "@/assets/gallery/13.webp";
import gallery14 from "@/assets/gallery/14.webp";
import gallery15 from "@/assets/gallery/15.webp";
import gallery16 from "@/assets/gallery/16.webp";
import gallery17 from "@/assets/gallery/17.webp";
import gallery18 from "@/assets/gallery/18.webp";
import gallery19 from "@/assets/gallery/19.webp";
import gallery20 from "@/assets/gallery/20.webp";
import gallery21 from "@/assets/gallery/21.webp";
import gallery22 from "@/assets/gallery/22.webp";
import gallery23 from "@/assets/gallery/23.webp";
import gallery24 from "@/assets/gallery/24.webp";
import gallery25 from "@/assets/gallery/25.webp";
import gallery26 from "@/assets/gallery/26.webp";
import gallery27 from "@/assets/gallery/27.webp";
import gallery28 from "@/assets/gallery/28.webp";
import gallery29 from "@/assets/gallery/29.webp";
import gallery31 from "@/assets/gallery/31.webp";
import gallery32 from "@/assets/gallery/32.webp";
import gallery33 from "@/assets/gallery/33.webp";
import gallery34 from "@/assets/gallery/34.webp";
import gallery35 from "@/assets/gallery/35.webp";
import gallery36 from "@/assets/gallery/36.webp";
import gallery37 from "@/assets/gallery/37.webp";
import gallery38 from "@/assets/gallery/38.webp";
import gallery39 from "@/assets/gallery/39.webp";
import gallery40 from "@/assets/gallery/40.webp";
import Image from "next/image";
import Slider from "react-slick";
import consult1 from "@/assets/about/img.png";
import consult2 from "@/assets/about/img.png";
import consult3 from "@/assets/about/img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "" },
     { label: "Infrastructure", href: "/infrastructure" },
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
const consultSlides = [consult1, consult2, consult3];
const categorizedImages = {
  All: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
    gallery22,
    gallery23,
    gallery24,
    gallery25,
    gallery26,
    gallery27,
    gallery28,
    gallery29,
    gallery31,
    gallery32,
    gallery33,
    gallery34,
    gallery35,
    gallery36,
    gallery37,
    gallery38,
    gallery39,
    gallery40,
  ],
  Events: [gallery1, gallery3, gallery5, gallery7, gallery9],
  Doctors: [gallery2, gallery4, gallery6, gallery8, gallery10],
  Facilities: [gallery11, gallery13, gallery15, gallery17, gallery19],
};
const tabs = ["All", "Events", "Doctors", "Facilities"];

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="flex justify-center mt-4">{dots}</div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></div>
    ),
  };
  const [activeTab, setActiveTab] = useState("All");
  const [visibleImages, setVisibleImages] = useState(18);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleImages(18); // reset on tab change
  };

  const loadMore = () => {
    setVisibleImages((prev) => prev + 6);
  };

  const currentImages = categorizedImages[activeTab] || [];

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
    <div>
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
              className="text-white mb-3"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[44px] mb-4"
            >
              Gallery
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              A Visual Journey of Trust and Healing
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="#"
                className="btn-white inline-flex  items-center pt-3 pb-3 pr-7 pl-7 bg-white text-[#2B3990] rounded-full transition hover:-translate-y-[3px] transition-transform duration-200"
              >
                Book an Appointment <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-[10px] hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990] p-4 pt-5 rounded-xl w-[220px] ">
            <h3 className="text-[36px] font-bold mt-1 mb-1">40+</h3>
            <p className="text-lg leading-snug text-black font-semibold">
              Years of Trusted <br />
              Expertise in <br />
              Healthcare
            </p>
          </div>
        </div>
      </section>


      <section>
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
      </section>

      <section>


        <div className="container max-w-7xl  mx-auto relative h-full px-4 sm:px-6 lg:px-8 py-16">
          <p className="bg-white text-[#2B3990] px-5 mb-5 py-2  w-[220px] mx-auto rounded-full  font-semibold">
            Infrastructure & Gallery
          </p>
          <div className="text-center mb-10">
            <h2 className="text-[30px]">
              A Glimpse into Joyful Beginnings
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-start border-b-2 flex-wrap gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 text-sm font-medium transition ${activeTab === tab
                    ? "border-b-[#2B3990] border text-black font-semibold"
                    : "bg-transparent border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {currentImages.slice(0, visibleImages).map((src, index) => (
              <motion.div
                key={index}
                className="mb-4 break-inside-avoid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow"
                  loading="lazy"
                  width={500}
                  height={300}
                />
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {visibleImages < currentImages.length && (
            <div className="flex justify-center mt-8 relative">
              <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#2B3990] to-transparent pointer-events-none"></div>
              <button
                onClick={loadMore}
                className="px-6 py-2 mb-5 text-sm font-medium rounded-md bg-white text-[#2B3990] hover:bg-white transition z-10"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>



      <section className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Left Image */}
          <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden max-w-md lg:max-w-none mx-auto">
            <Image src={Clinic} alt="Clinic" className="w-full h-auto object-cover" />

            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white/80 p-8 w-[100%] bottom-5 sm:w-[400px] min-h-[190px] flex flex-col items-center justify-end rounded-2xl">
              <h2 className=" text-[20px] text-start mb-2">
                Book in Clinic Visits
              </h2>
              <p className=" mb-2 text-center">
                Book in-person visits for personalized care and schedule the appointments with our experienced team.
              </p>
              <button className="btn-diagonal bg-[#2B3990] mt-2 text-[#fff] text-[15px] pt-3 pb-3 pr-7 pl-7 rounded-full transition flex gap-2 hover:-translate-y-[3px] transition-transform duration-200">
                Book an Appointment <ArrowUpRight className="w-5 h-5" />

              </button>
            </div>
          </div>

          {/* Right Info */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <div className="bg-gradient-to-r from-[#2B3990] to-[#0D112A] p-8 md:p-9 rounded-2xl text-white">
              <h2 className="text-white  text-[24px] ">Virtual Care from Everywhere</h2>
              <p className=" mt-2 md:mt-4 text-white">
                Experience the great virtual care from anywhere and connect with
                medical professionals for expert guidance.
              </p>
            </div>

            <div className="w-full max-w-4xl mx-auto ">
              <Slider {...settings}>
                {consultSlides.map((img, idx) => (
                  <div key={idx}>
                    <div className="overflow-hidden rounded-2xl">
                      <div className="doc">
                        <Image
                          src={img}
                          alt={`Consult ${idx + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
