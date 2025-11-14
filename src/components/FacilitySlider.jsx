"use client";

import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ---- images ---- //
import OperationTheatre from "../assets/home/surgical/operation-theatre.webp";
import FieldDigital from "../assets/home/surgical/field-digital-mammo.webp";
import PETCT from "../assets/home/surgical/pet-ct.webp";
import MRI from "../assets/home/surgical/MRI.webp";
import Linear from "../assets/home/surgical/linear.webp";
import Brachytherapy from "../assets/home/surgical/brachytheraphy.webp";
import NICU from "../assets/home/surgical/NICU.webp";

// ---- data ---- //
const facilities = [
  { title: "PET-CT", image: PETCT },
  { title: "MRI", image: MRI },
  { title: "Linear Accelerator", image: Linear },
  { title: "Modular Operation Theatre", image: OperationTheatre },
  { title: "Full Field Digital Mammogram", image: FieldDigital },
  { title: "Brachytherapy Machine", image: Brachytherapy },
  { title: "NICU", image: NICU },
];

// ---- custom arrows ---- //
const CustomPrev = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      absolute -bottom-14 right-14 z-10
      border border-[#2A3D90] text-[#2A3D90]
      hover:bg-[#2B3990] hover:text-white
      p-2 rounded-full
      disabled:opacity-40 disabled:cursor-not-allowed
    `}
  >
    <ChevronLeft className="w-4 h-4" />
  </button>
);

const CustomNext = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      absolute -bottom-14 right-4 z-10
      border border-white bg-[#2B3990]
      hover:bg-[#1f2e6e] text-white
      p-2 rounded-full
      rounded-full
      disabled:opacity-40 disabled:cursor-not-allowed
    `}
  >
    <ChevronRight className="w-4 h-4" />
  </button>
);

export default function FacilitySlider() {
  const [current, setCurrent] = useState(0);

  const slidesToShow = 5;

  const settings = {
    dots: false,
    infinite: false, // important for disabling arrows
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrent(next),
    prevArrow: (
      <CustomPrev disabled={current === 0} />
    ),
    nextArrow: (
      <CustomNext disabled={current >= facilities.length - slidesToShow} />
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-[#EEF8FF] mb-10 rounded-2xl">
      {/* Header */}
      <div className="flex justify-center">
        <h6 className="bg-white text-[#2B3990] px-6 py-2 rounded-full text-md font-bold">
          Cutting-Edge Facilities
        </h6>
      </div>

      <h2 className="text-center text-[30px] mt-4 sm:mt-6">
        Advanced Medical Devices and <br className="hidden sm:block" />
        International Technology
      </h2>

      {/* Slider */}
      <div className="relative mt-10">
        <Slider {...settings}>
          {facilities.map((facility, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-[300px] bg-white rounded-2xl overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3D90] via-transparent to-transparent z-10" />
                <p className="absolute bottom-4 left-2 right-2 text-white font-semibold text-[14px] z-20 text-center">
                  {facility.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
