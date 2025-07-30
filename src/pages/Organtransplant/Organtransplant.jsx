"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/renal/renal.png";
import Clinic from "@/assets/about/clinic.png";
import Image from "next/image";
import HandIcon from "@/assets/healthpackage/nephrology.svg";
// Sample images – replace with your own
import consult1 from "@/assets/about/img.png";
import consult2 from "@/assets/about/img.png";
import consult3 from "@/assets/about/img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Organtransplant.css";
import Phone from "@/assets/Insurance/phone.svg";
import Email from "@/assets/Insurance/email.svg";
import Check from "@/assets/Insurance/check.svg";
import Contact from "@/assets/Insurance/bg-contact.webp";
import Bookappointment from "@/components/Bookappointment";
import SidebarTabs from "./SidebarTabs";
import DoctorSlider from "@/components/Slicksliderdoctor";
import { doctorsData } from "@/constants/doctorDetails";
import OurTeamSlider from "@/components/OurTeamSlider";
import Sliderdoctor from "@/components/Sliderdoctor";
import { ChevronLeft, ChevronRight } from "lucide-react";
import kandaswamyImg from "@/assets/organtransplant/Doctorimages/kandaswamy.png";
import shylaImg from "@/assets/organtransplant/Doctorimages/shyla.png";



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
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></div>
    ),
  };

  const doctorsData = [
    {
      id: 1,
      name: "Dr.C.Senthur Raj",
      qualification: "MBBS",
      designation: "Senior Medical Resident",
      image: kandaswamyImg,
    },
    {
      id: 2,
      name: "Mrs.G.Chitra",
      qualification: "Dialysis Tech",
      designation: "Professional Transplant Coordinator",
      image: shylaImg,
    },
  ];

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
    slidesToShow: 5,
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
        breakpoint: 640,
        setting: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <section className="relative -mt-12 lg:-mt-28 m-10">
        {/* Background Gradient */}
        <div
          className="max-w-full mx-auto px-4 py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover lg:bg-contain banner"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="pl-8 md:pl-20">
            {/* Breadcrumb */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-3 tracking-wide text-white"
            >
              Home / Organ Transplant / Renal Transplant
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="tracking-wide text-[44px] font-bold mb-3"
            >
              Renal Transplant
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[16px]  max-w-xl mb-6 tracking-wide text-white"
            >
              Leading You to a Healthier Tomorrow.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="#"
                className="inline-flex  text-[16px] tracking-wide items-center px-7 py-3 bg-white text-[#2B3990] font-semibold rounded-full  hover:bg-gray-100 transition"
              >
                Book an Appointment
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-[40px] hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990] p-4 rounded-xl w-[220px]">
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
      </section>

      <section>
        <div className="max-w-7xl mx-auto  py-8 relative">
          <SidebarTabs />
        </div>
      </section>

      <section className="mt-5">
        <div className="max-w-7xl mx-auto px-4 py-8 relative">

          <Sliderdoctor />
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-20">
          <h1 className="text-center text-[30px] text-black mt-4">
            Our Transplant Co-Ordinators
          </h1>

          <div className="relative mt-10">
            <Slider {...setting}>
              {doctorsData.slice(0, 2).map((doc, index) => (
                <div
                  key={index}
                  className="w-[160px] sm:w-[160px] md:w-[180px] h-[400px] rounded-xl overflow-hidden text-center relative"
                >
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={100}
                    height={120}
                    className="mx-auto rounded-lg mb-2 w-[80%] h-auto"
                  />
                  <Link
                    href={`/doctor-detail/${doc.id}`}
                    className="absolute bottom-33 right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center z-30 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-black transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 7L7 17M7 7h10v10"
                      />
                    </svg>
                  </Link>

                  <h3 className="text-[16px] sm:text-[16px] mt-5 font-bold text-[#2B3990]">
                    {doc.name}
                  </h3>
                  <p className="text-[12px] font-bold font-black mt-1">
                    {doc.qualification}
                  </p>
                  <p className="text-[12px] font-bold font-black mt-1">
                    {doc.designation}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
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
              Virtual Care from Every Where
            </h3>
            <p className="text-white text-sm mb-4">
              Experience the great virtual care from anywhere and connect with
              medical professionals for expert guidance.
            </p>
            <button className="bg-white text-[#2B3990] font-semibold text-sm pt-3 pb-3 pr-7 pl-7 rounded-full w-fit hover:bg-gray-100 transition">
              Call for More Information
            </button>
          </div>
        </div>
      </div>

      <section>
        <Bookappointment />
      </section>
    </div>
  );
}

export default Organtransplant;
