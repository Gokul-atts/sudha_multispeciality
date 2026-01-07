"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/facilities/organ-transplant.webp";
import Faculties from '@/components/renalfaculties';

import Clinic from "@/assets/common/general-consultation.webp";
import Image from "next/image";
import HandIcon from "@/assets/healthpackage/nephrology.svg";
import consult1 from "@/assets/about/img.png";
import consult2 from "@/assets/about/img.png";
import consult3 from "@/assets/about/img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./renaltransplant.css";
import Phone from "@/assets/Insurance/phone.svg";
import Email from "@/assets/Insurance/email.svg";
import Check from "@/assets/Insurance/check.svg";
import Contact from "@/assets/Insurance/appointment.webp";
import Bookappointment from "@/components/Bookappointment";
import SidebarTabs from "./SidebarTabs";
import DoctorSlider from "@/components/Slicksliderdoctor";
import { doctorsData } from "@/constants/doctorDetails";
import OurTeamSlider from "@/components/OurTeamSlider";
import Sliderdoctor from "@/components/Sliderdoctor";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Senthur from "@/assets/renal/senthur.jpg";

import DonorDataTable from '@/components/donordatatable';
import { ArrowUpRight } from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },

  { label: "Facilities", href: "" },

  { label: "Organ Transplant", href: "/facilities/organ-transplant" },
   { label: "Renal Transplant", href: "/renal-transplant" },
];


const consultSlides = [consult1, consult2, consult3];

function Organtransplant() {
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
      <div className="w-3 h-3 mx-1 rounded-full bg-white hover:bg-[#2b3990] transition-all duration-300"></div>
    ),
  };

  
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 right-24 lg:right-[90px] bottom-[-40px] 
      md:bottom-[-50px] text-[#2B3990] 
      border border-[#2B3990] hover:bg-[#2B3990] hover:text-white 
      p-2 rounded-full"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 right-14 lg:right-[40px] 
      bottom-[-40px] md:bottom-[-50px] 
      border border-white bg-[#2B3990] hover:bg-[#1f2e6e] 
      text-white p-2 rounded-full"
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  );

  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        setting: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 540,
        setting: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        {/* Background Gradient */}
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className=" mb-3  text-white"
            >

              <Breadcrumb items={breadcrumbItems} />

            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" text-[40px]  mb-4"
            >
              Best Hospital for Renal Transplant in Erode
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-white"
            >
              Expert Care for Kidney Transplants and Beyond
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href= "tel:+919042065454"
                className="btn-white"
              >
                Book an Appointment <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-0 right-0  z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <div
                  className="w-12 h-12 mb-2 bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${HandIcon.src})` }}
                ></div>
                <p className="  text-black font-bold">
                  Government <br />
                  Approved <br />
                  Licence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
          <SidebarTabs />
        </div>
      </section>

      <section className="mt-5">
        <div className="max-w-7xl mx-auto  py-8 relative">

          <Sliderdoctor />
        </div>
      </section>

      <section className="max-w-7xl mx-auto  md:px-0 px-4">
        <h2 className="text-center text-[30px]  mt-4 mb-8">
          Our Transplant Co-Ordinators
        </h2>

          <Faculties />
      </section >


      <section className="max-w-7xl mx-auto  pb-2 py-8">
        <div>
          <DonorDataTable />
        </div>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 py-16">
        {/* Left - Contact Info */}
        <div className="bg-[#F5FAFF] rounded-2xl p-6 space-y-6">
          {/* Private Insurance Section */}
          <div>
            <h3 className="text-[#2B3990] text-[18px] mb-2">
              Contact Dialysis Department
            </h3>
            <p className="mb-2">Connect with our dialysis department for expert support</p>
            <p className=" mt-2 mb-2">(Mon - Sat) 8:30 am - 10:00 pm</p>
            <p className=" mb-3">(Sun) 9:00 am - 5:00 pm</p>

            <div className="flex items-center gap-2 text-[14px] font-bold mt-6 text-[#2B3990]">
              <Image src={Phone} alt="Phone" width={32} height={32} />
              <span>0424 - 2454545</span>
              <span>, +91-81221-64545</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] font-bold  text-[#2B3990] mt-2">
              <Image src={Email} alt="Email" width={32} height={32} />
              <span>care@sudhahospital.com</span>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div>
            <h3 className="text-[#2B3990] text-[18px]">For Hosptial</h3>
            <p className="mt-2 mb-2">(Mon - Sat) 8:30 am - 6:00 pm</p>
            <div className="flex items-center gap-2 text-[14px] font-bold  text-[#2B3990] mt-4">
              <Image src={Phone} alt="Phone" width={32} height={32} />
              <span>+91 76700 76006</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
          <Image
            src={Contact}
            alt="Virtual Doctor"
            layout="fill"
            objectFit="cover" // Ensures image covers the whole area
            className="rounded-2xl"
          />
          <div className="absolute inset-0 bg-opacity-80 rounded-2xl flex flex-col justify-end p-6 text-white">
            <h3 className="text-[24px] font-semibold mb-2">
              Advanced Care for Every Health Need 

            </h3>
            <p className="text-white text-sm mb-4">
              Sudha Multispeciality Hospital offers comprehensive healthcare services to every health concern at every age.
            </p>
            <Link href="/contact-us" className="btn-white flex items-center gap-2 bg-white text-[#2B3990] font-semibold text-sm pt-3 pb-3 pr-7 pl-7 rounded-full w-fit hover:-translate-y-[3px] transition-transform duration-200">
              Call for More Information <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* <section>
        <Bookappointment />
      </section> */}
    </div >
  );
}

export default Organtransplant;
