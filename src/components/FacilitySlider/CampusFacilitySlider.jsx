"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./CampusFacilitySlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrev = ({ onClick }) => (
  <button
    onClick={onClick}
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

const CustomNext = ({ onClick }) => (
  <button
    onClick={onClick}
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

export default function CampusFacilitySlider({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {data.map((facility, index) => (
            <div key={index} className="px-4">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={facility.image}
                  width={800}
                  height={500}
                  alt={facility.title || "Facility"} // ✅ add alt for accessibility
                  className="object-cover w-full h-[280px] rounded-3xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
