"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { doctorsDatarenal } from "@/constants/doctorDetails";


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 
               right-24 lg:right-[90px]
               bottom-[-40px] md:bottom-[-50px] text-[#2B3990]
               border border-[#2B3990]
               hover:bg-[#2B3990] hover:text-white 
               p-2 rounded-full"
  >
    <ChevronLeft className="w-4 h-4" />
  </button>
);

const NextArrow = ({ onClick }) => (
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

export default function Sliderdoctor() {
  const settings = {
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
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-20">
        <div className="relative mt-10">
          <Slider {...settings}>
            {doctorsDatarenal.map((doc, index) => (
              <div
                key={index}
                className="w-[160px] sm:w-[160px] md:w-[180px] h-[400px]  
             rounded-xl overflow-hidden text-center relative "
              >
                <div className="ourteamcard_img_orgain">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    className="mx-auto rounded-xl mb-2 w-[90%] h-auto gap-4 "
                  />
                </div>
                {/* Arrow Button */}
                <Link
                  href={`/doctor-detail/${doc.id}`}
                  className="absolute bottom-33  right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center z-30 group "
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
                <p className="text-[12px] font-semibold text-text-[#2B3990] mt-2">
                  {doc.degrees}
                </p>
                <p className="text-[12px] font-semibold text-text-[#2B3990] mt-2">
                  {doc.qualification}
                </p>
        
                
              </div>
            ))}
          </Slider>
        </div>




      </div>
    </section>
  );
}
