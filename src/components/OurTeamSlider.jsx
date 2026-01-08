"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { doctorsData } from "@/constants/doctorDetails";

// ---- Custom Arrow Group ---- //
const ArrowGroup = ({ onPrev, onNext }) => (
  <div
    className="
      absolute -bottom-14 right-4 
      flex gap-3 z-20 
      md:bottom-[-70px]
    "
  >
    <button
      onClick={onPrev}
      className="border border-white text-white 
                 hover:bg-[#ffffff] hover:text-[#2b3990] 
                 p-2 rounded-full transition-all duration-300"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
    <button
      onClick={onNext}
      className="border border-white bg-[#ffffff] 
                 hover:bg-[#ffffff] text-[#2b3990]
                 p-2 rounded-full transition-all duration-300"
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

export default function OurTeamSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // disable default arrows
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section>
      <div className="max-w-7xl bg-gradient-to-r from-[#2A3D90] to-[#0C122A] mx-auto px-4 rounded-3xl pt-16 pb-24 relative">
        {/* Section Heading */}
        <div className="flex justify-center">
          <h6 className="bg-white text-[#2B3990] px-6 py-2 rounded-full text-md font-bold">
            Our Medical Team
          </h6>
        </div>

        <h2 className="text-center text-[30px] text-white mt-4">
          Our Multi-Speciality Experts
        </h2>

        <p className="text-white mt-2 text-center">
          Book your appointment with the best specialists for all of your health
          concerns.
        </p>

        {/* Slider Wrapper */}
        <div className="relative mt-10">
          <Slider ref={sliderRef} {...settings}>
            {doctorsData.map((doc, index) => (
              <div key={index} className="px-3">
                {/* Doctor Card */}
                <div className="bg-white h-[500px] max-w-[300px] mx-auto rounded-2xl text-start flex flex-col overflow-hidden ">
                  {/* Image */}
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-[300px] object-cover rounded-t-2xl"
                  />

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-[16px]  text-[#2b3990] font-bold mb-2">
                        {doc.name}
                      </h3>
                      <p className="text-[12px] mt-2">{doc.degrees}</p>
                      <p className="text-[12px] mt-2">{doc.qualification}</p>
                    </div>

                    {/* Button */}

                    <Link
                      href="tel:+919042065454 "
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

          {/* Custom Arrows - bottom right */}
          <ArrowGroup
            onPrev={() => sliderRef.current?.slickPrev()}
            onNext={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>
    </section>
  );
}
