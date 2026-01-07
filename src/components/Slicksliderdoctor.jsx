"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { doctorsData } from "@/constants/doctorDetails";

// Custom Next Arrow
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

// Custom Previous Arrow
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

// Doctor Slider Component
export default function DoctorSlider({ specialty, counter, max }) {
  const filteredDoctors = doctorsData.filter(
    (doctor) => doctor.speciality === specialty
  );

  const settings = {
    arrows: filteredDoctors.length > 3,
    infinite: filteredDoctors.length > counter,
    speed: 500,
    slidesToShow: Math.min(filteredDoctors.length, counter),
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
const maxClass = {
    2: "max-w-2xl",
    3: "max-w-3xl",
    4: "max-w-4xl",
    5: "max-w-5xl",
    6: "max-w-6xl",
    7: "max-w-7xl",
}
  return (
    <div className={`relative bg-[#f0f7ff] ${maxClass[max]} `}>
      <Slider {...settings}>
        {filteredDoctors.map((doc, index) => (
          <div key={index} className="pr-3">
            <div className="bg-white w-full h-[500px] max-w-[300px] rounded-2xl mx-auto md:ml-0 md:mr-auto text-start flex flex-col overflow-hidden">
              
              {/* Doctor Image */}
              <Image
                src={doc.image}
                alt={doc.name}
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover rounded-t-2xl"
              />

              {/* Doctor Info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-md font-bold text-[#2B3990]">{doc.name}</h3>
                  <p className="text-sm mt-2">{doc.degrees}</p>
                  <p className="text-sm mt-2">{doc.qualification}</p>
                </div>

                {/* View Profile Button */}
                <Link
                   href="tel:+919876543210"
                  className="btn-diagonal-outline px-8 w-full mt-6 flex items-center justify-center gap-2"
                >
                  Book an Appointment <ArrowUpRight className="w-5 h-5" />
                </Link>
                {/* <Link
                  href={`/doctor-detail/${doc.id}`}
                  className="btn-diagonal-outline px-8 w-full mt-6 flex items-center justify-center gap-2"
                >
                  View Profile <ArrowUpRight className="w-5 h-5" />
                </Link> */}
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
