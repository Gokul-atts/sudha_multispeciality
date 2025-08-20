import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import cardiology from "../assets/home/medical/cardiology.svg";
import neurology from "../assets/home/medical/neurology.svg";
import cardiologysurgery from "../assets/home/medical/cardiothoracic-surgery.svg";
import anesthesiology from "../assets/home/medical/anesthesia.svg";
import dentistry from "../assets/home/medical/dentistry.svg";
import dermatology from "../assets/home/medical/demertology.svg";
import ent from "../assets/home/medical/ent.svg";
import EmergencyCare from "../assets/home/medical/emergency-care.svg";
import Gastroenterology from "../assets/home/medical/gastroenterology.svg";
import Radiology from "../assets/home/medical/diagnostic-radiology.svg";
import Generalmedicine from "../assets/home/medical/general-medicine.svg";
import GeneralSurgery from "../assets/home/medical/surgery-room.svg";
import Intensive from "../assets/home/medical/icu.svg";
import Urology from "../assets/home/medical/urogynecology.svg";
import Orthopedics from "../assets/home/medical/orthopaedics.svg";
import Nephrology from "../assets/home/medical/nephrology.svg";
import Obstetrics from "../assets/home/medical/pregnant.svg";
import Diagnostic from "../assets/home/medical/imaging.svg";
import Pulmonology from "../assets/home/medical/pulmonology.svg";
import Pediatrics from "../assets/home/medical/pediatrics.svg";
import Pain from "../assets/home/medical/pain-medicine.svg";
import Plastic from "../assets/home/medical/plastic-surgery.svg";
import Laryngology from "../assets/home/medical/laryngology.svg";


import { MdEmergency } from "react-icons/md";

const specialties = [
  {
    title: "Cardiology",
    icon: cardiology,
    href: "/cardiology",
  },
  {
    title: "Cardiothoracic Surgery",
    icon: cardiologysurgery,
    href: "/cardiothoracic-surgery",
  },
  {
    title: "Anaesthesiology",
    icon: anesthesiology,
    href: "/anaesthesiology",
  },
  {
    title: "Dentistry & Oral Surgery",
    icon: dentistry,
    href: "/dentistry-and-oral-surgery",
  },
  {
    title: "Dermatology ",
    icon: dermatology,
    href: "/dermatology-aesthetics-and-lasers",
  },
  {
    title: "ENT",
    icon: ent,
    href: "/ent",
  },
  {
    title: "Emergency Care",
    icon: EmergencyCare,
    href: "/emergency-care",
  },
  {
    title: "Gastroenterology",
    icon: Gastroenterology,
    href: "/gastroenterology",
  },
  {
    title: "Radiology",
    icon: Radiology,
    href: "/radiology",
  },
  {
    title: "General Medicine",
    icon: Generalmedicine,
    href: "/general-medicine",
  },
  {
    title: "General Surgery",
    icon: GeneralSurgery,
    href: "/general-surgery",
  },
  {
    title: "Intensive Care Unit",
    icon: Intensive,
    href: "/intensive-care-unit",
  },
  {
    title: "Urology",
    icon: Urology,
    href: "/urology",
  },
  {
    title: "Orthopedics",
    icon: Orthopedics,
    href: "/orthopaedics",
  },
  {
    title: "Nephrology",
    icon: Nephrology,
    href: "/nephrology",
  },
  {
    title: "Neurology",
    icon: neurology,
    href: "/neurology",
  },
  {
    title: "Obstetrics & Gynaecology",
    icon: Obstetrics,
    href: "/obstetrics-and-gynaecology",
  },
  {
    title: "Imaging & Diagnostic Services",
    icon: Diagnostic,
    href: "/imaging-and-diagnostic-services",
  },
  {
    title: "Pulmonology",
    icon: Pulmonology,
    href: "/pulmonology",
  },
  {
    title: "Pediatrics & Neonatology",
    icon: Pediatrics,
    href: "/paediatrics-and-neonatology",
  },
  {
    title: "Pain Medicine",
    icon: Pain,
    href: "/pain-medicine",
  },
  {
    title: "Plastic Surgery",
    icon: Plastic,
    href: "/plastic-surgery",
  },
  {
    title: "Laryngology",
    icon: Laryngology,
    href: "/laryngology",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute z-10
      lg:right-[150px] -md:right-[120px] right-[120px] 
      translate-x-[60px] 
      lg:bottom-[-60px] md:bottom-[-80px] bottom-[-60px] 
      border border-[#2B3990] text-[#2B3990] 
      hover:bg-[#2B3990] hover:text-white 
      p-2 rounded-full
    "
  >
    <ChevronLeft className="w-4 h-4" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute z-10
      lg:right-[-20px] -md:right-[60px] -right-[60px] 
      -translate-x-[60px] 
      lg:bottom-[-60px] md:bottom-[-80px] bottom-[-60px] 
      bg-[#2B3990] hover:bg-[#1f2e6e] 
      text-white p-2 rounded-full
    "
  >
    <ChevronRight className="w-4 h-4" />
  </button>
);

export default function SpecialitySection() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    rows: 2,
    slidesPerRow: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // laptops
        settings: {
          slidesPerRow: 4,
          rows: 2,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesPerRow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 768, // mobiles
        settings: {
          slidesPerRow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 480, // small phones
        settings: {
          slidesPerRow: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <section className=" px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl bg-white rounded-2xl mx-auto pt-16 pb-20">
        <div className="flex justify-center">
          <h5 className="bg-blue px-5  py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            Our Specialities
          </h5>
        </div>

        <h2 className="text-center text-[30px]  mt-4">
          Premium Healthcare Services for Every <br /> Health Requirement
        </h2>
        <div className="relative mt-10 px-6">
          <Slider {...settings}>
            {specialties.map((item, index) => (
              <div key={index} className="px-2 py-3">
                <Link href={item.href || "#"} passHref>
                  <div className="cursor-pointer h-[180px] sm:h-[200px] bg-[#F0F7FD] rounded-2xl flex flex-col items-center justify-center text-center px-2 hover:shadow-md transition-shadow">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={50}
                      height={50}
                      className="w-[40px] sm:w-[50px] h-auto"
                    />
                    <p className="mt-4 text-[15px] font-bold text-[#2B3990] ">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* <p className="md:text-start text-center  mt-6 text-sm text-[#2B3990] font-semibold">
          We Have 14+ More Care Services Including Emergency Department.{" "}
          <span className="underline cursor-pointer">View All</span>
        </p> */}
      </div>
    </section>
  );
}
