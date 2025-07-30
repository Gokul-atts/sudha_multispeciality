"use client";
import React from 'react'
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./CampusFacilitySlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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




export default function CampusFacilitySlider({data}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNext direction="right" />,
    prevArrow: <CustomPrev direction="left" />,
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
    <section className=" py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {data.map((facility, index) => (
            <div key={index} className="px-4">
              <div className="relative rounded-3xl ">
                <div className='card_img '>
                  <Image
                  src={facility.image}
                  alt={facility.title}
                  className="object-cover rounded-xl w-full h-auto"
                />
                </div>
                <div className="absolute  text-center text-[#2B3990] font-semibold -mt-11 z-30 mb-6 right-10">
                  {facility.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
