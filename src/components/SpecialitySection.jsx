"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// ---- icons import (same as yours) ---- //
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
import Fertility from "@/assets/home/medical/fertility.svg";
import Mother from "@/assets/home/medical/mother-child.svg";
import Oncology from "@/assets/home/medical/oncology.svg";

// ---- data ---- //
const specialties = [
  { title: "Cardiology", icon: cardiology, href: "/specialities/cardiology" },
  { title: "Cardiothoracic Surgery", icon: cardiologysurgery, href: "/specialities/cardiothoracic-surgery" },
  { title: "Anaesthesiology", icon: anesthesiology, href: "/specialities/anaesthesiology" },
  { title: "Dentistry & Oral Surgery", icon: dentistry, href: "/specialities/dentistry-and-oral-surgery" },
  { title: "Dermatology", icon: dermatology, href: "/specialities/dermatology" },
  { title: "ENT", icon: ent, href: "/specialities/ent" },
  { title: "Emergency Care", icon: EmergencyCare, href: "/specialities/emergency-care" },
  { title: "Gastroenterology", icon: Gastroenterology, href: "/specialities/gastroenterology" },
  { title: "Radiology", icon: Radiology, href: "/specialities/radiology" },
  { title: "General Medicine", icon: Generalmedicine, href: "/specialities/general-medicine" },
  { title: "General Surgery", icon: GeneralSurgery, href: "/specialities/general-surgery" },
  { title: "Intensive Care Unit", icon: Intensive, href: "/specialities/intensive-care-unit" },
  { title: "Urology", icon: Urology, href: "/specialities/urology" },
  { title: "Orthopedics", icon: Orthopedics, href: "/specialities/orthopaedics" },
  { title: "Oncology", icon: Oncology, href: "https://sudhacancercentre.com/" },

  { title: "Nephrology", icon: Nephrology, href: "/specialities/nephrology" },
  { title: "Neurology", icon: neurology, href: "/specialities/neurology" },
  { title: "Obstetrics & Gynaecology", icon: Obstetrics, href: "/specialities/obstetrics-and-gynaecology" },
  { title: "Imaging & Diagnostic Services", icon: Diagnostic, href: "/specialities/imaging-and-diagnostic-services" },
  { title: "Pulmonology", icon: Pulmonology, href: "/specialities/pulmonology" },
  { title: "Pediatrics & Neonatology", icon: Pediatrics, href: "/specialities/paediatrics-and-neonatology" },
  { title: "Pain Medicine", icon: Pain, href: "/specialities/pain-medicine" },
  { title: "Plastic Surgery", icon: Plastic, href: "/specialities/plastic-surgery" },
  { title: "Laryngology", icon: Laryngology, href: "/specialities/laryngology" },
  { title: "Fertility Centre", icon: Fertility, href: "https://sudhafertilitycentre.com/" },
  { title: "Mother & Child Care", icon: Mother, href: "/mother-and-child-care" },
];

// ---- Component ---- //
export default function SpecialitySection() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    cssEase: "ease-in-out",
    arrows: false, // disable default arrows
    rows: 2,
    slidesPerRow: 5,
    responsive: [
      { breakpoint: 1280, settings: { slidesPerRow: 4, rows: 2 } },
      { breakpoint: 1024, settings: { slidesPerRow: 3, rows: 2 } },
      { breakpoint: 768, settings: { slidesPerRow: 2, rows: 2 } },
      { breakpoint: 480, settings: { slidesPerRow: 1, rows: 2 } },
    ],
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl bg-white rounded-3xl mx-auto pt-16 pb-24 relative">
        {/* Header */}
        <div className="flex justify-center">
          <h5 className="bg-blue px-6 py-2 rounded-full text-md font-bold flex items-center gap-2">
            Our Specialities
          </h5>
        </div>
        <h2 className="text-center text-[30px] mt-4">
          Premium Healthcare Services for Every <br /> Health Requirement
        </h2>

        {/* Slider */}
        <div className="relative mt-10 px-6">
          <Slider ref={sliderRef} {...settings}>
            {specialties.map((item, index) => (
              <div key={index} className="px-2 py-3">
                <Link href={item.href || "#"} passHref>
                  <div className="cursor-pointer h-[180px] sm:h-[200px] bg-[#F0F7FD] rounded-2xl flex flex-col items-center justify-center text-center px-2 hover:shadow-lg transition-all">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={50}
                      height={50}
                      className="w-[40px] sm:w-[50px] h-auto"
                    />
                    <p className="mt-4 text-[15px] font-bold text-[#2B3990]">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>

          {/* Custom arrows at bottom-right */}
          <div className="absolute right-6 -bottom-12 flex gap-3">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="border border-[#2B3990] text-[#2B3990] hover:bg-[#2B3990] hover:text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-[#2B3990] hover:bg-[#1f2e6e] text-white p-2 rounded-full "
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
