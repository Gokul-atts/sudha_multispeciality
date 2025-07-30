"use client";
 
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { doctorsData } from "@/constants/doctorDetails";
import Link from "next/link";
 
function NextArrow({ onClick }) {
  return (
    <button
      className="absolute right-2 md:-right-25 bottom-[-50px] w-8 h-8 bg-[#2B3990] text-white rounded-full flex items-center justify-center z-10"
      onClick={onClick}
    >
      <ChevronRight size={20} />
    </button>
  );
}
 
function PrevArrow({ onClick }) {
  return (
    <button
      className="absolute right-12 md:right-18 bottom-[-50px] w-8 h-8 bg-[#2B3990] text-white rounded-full flex items-center justify-center z-10"
      onClick={onClick}
    >
      <ChevronLeft size={20} />
    </button>
  );
}
 
export default function DoctorSlider({ specialty, counter }) {
  const filteredDoctors = doctorsData.filter(
    (doctor) => doctor.speciality === specialty
  );
  const settings = {
    arrows: counter > 3, // ✅ disables arrows for 1, 2, 3
    infinite: true,
    speed: 500,
    slidesToShow: counter,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(filteredDoctors.length, 2),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
 
  return (
    <div className="relative bg-[#f0f7ff] py-10 px-4 md:px-8 max-w-4xl mx-auto">
      <Slider {...settings}>
        {filteredDoctors.map((doc, index) => (
          <div key={index} className="">
            <div className="rounded-2xl text-center relative h-full flex flex-col items-start justify-between">
              <div className="ourteamcard_img_one self-start">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  className="rounded-lg mb-2 w-full max-w-[250px] p-1 h-auto object-contain"
                />
              </div>
 
              <Link
                href={`/doctor-detail/${doc.id}`}
                className="absolute bottom-12 left-52 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-md z-30 group transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-black"
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
 
  {/* Text centered below */}
  <div className="mt-4 text-center">
    <h3 className="text-[#2B3990] text-base font-semibold">{doc.name}</h3>
    <p className="text-sm text-black">{doc.title}</p>
  </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
 