"use client";

import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OperationTheatre from "../assets/home/surgical/operation-theatre.webp";
import FieldDigital from "../assets/home/surgical/field-digital-mammo.webp";
import PETCT from "../assets/home/surgical/pet-ct.webp";
import MRI from "../assets/home/surgical/MRI.webp";
import Linear from "../assets/home/surgical/linear.webp";
import Brachytherapy from "../assets/home/surgical/brachytheraphy.webp";
import NICU from "../assets/home/surgical/NICU.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const facilities = [
  { title: "PET-CT ", image: PETCT },
  { title: "MRI ", image: MRI },
  { title: "Linear Accelerator ", image: Linear },
  { title: "Modular Operation Theatre", image: OperationTheatre },
  { title: "Full Field Digital Mammogram ", image: FieldDigital },
  { title: "Brachytherapy Machine", image: Brachytherapy },
   { title: "NICU ", image: NICU },
];

const CustomPrev = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="absolute z-10 
               right-24 lg:right-[90px]
               bottom-[-40px] md:bottom-[-50px] 
               border border-[#2A3D90] text-[#2A3D90]
               hover:bg-[#2B3990] hover:text-white 
               p-2 rounded-full"
  >
    <ChevronLeft className="w-4 h-4" />
  </button>
);

const CustomNext = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="absolute z-10 
               right-14 lg:right-[40px]
               bottom-[-40px] md:bottom-[-50px]
               border border-white bg-[#2B3990] 
               hover:bg-[#1f2e6e] text-white 
               p-2 rounded-full"
  >
    <ChevronRight className="w-4 h-4" />
  </button>
);

export default function FacilitySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrev />,
    nextArrow: <CustomNext />,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-[#EEF8FF]  pb-40  rounded-2xl">
      <div className="max-w-7xl mx-auto relative">
        <Slider {...settings} className="relative">
          {facilities.map((facility, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-[300px] bg-white rounded-2xl  overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3D90] via-transparent to-transparent z-10" />
                <p className="absolute bottom-4 left-2 right-2 text-white  font-semibold text-[14px] z-20 text-center">
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
