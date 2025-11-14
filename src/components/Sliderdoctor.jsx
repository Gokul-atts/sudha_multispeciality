"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { doctorsDatarenal } from "@/constants/doctorDetails";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 
               right-24 lg:right-[90px]
               -bottom-12 md:-bottom-14 text-[#2B3990]
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
               -bottom-12 md:-bottom-14
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
    slidesToShow: 4, // desktop default
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280, // lg screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // small tablets & landscape phones
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto pt-16 pb-20 px-4 md:px-6 lg:px-8">
     
      <div className="flex justify-center">
        <h6 className="bg-white text-[#2B3990] px-5 py-2 rounded-full text-sm font-semibold">
          Our Medical Team
        </h6>
      </div>

      <h2 className="text-center text-[30px] text-black mt-4 ">
        Our Transplant Team
      </h2>

      
      <div className="relative mt-10">
        <Slider {...settings}>
          {doctorsDatarenal.map((doc, index) => (
            <div key={index} className="px-2">
              <div className="bg-white h-[450px] max-w-[300px] mx-auto rounded-2xl text-start flex flex-col overflow-hidden ">
                {/* Doctor Image */}
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={300}
                  height={300}
                  className="w-full h-[280px] object-cover rounded-t-2xl"
                />

                {/* Doctor Content */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-md font-bold text-[#2B3990]">
                      {doc.name}
                    </h3>
                    <p className="text-[12px] mt-1">{doc.degrees}</p>
                    <p className="text-[12px] mt-1">{doc.qualification}</p>
                  </div>

                  {/* CTA */}
                  {/* <Link
                    href={`/doctor-detail/${doc.id}`}
                    className="btn-diagonal-outline px-6 sm:px-8 w-full mt-6 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    View Profile <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
