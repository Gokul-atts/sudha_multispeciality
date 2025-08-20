"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import docImg from "../assets/home/doc/shyla.jpg";

const doctors = [
  {
    name: "Dr. U. Shyla",
    title: "Preventive Cardiologist",
    image: docImg,
  },
  {
    name: "Dr. U. Shyla",
    title: "DNB Cardiologist",
    image: docImg,
  },
  {
    name: "Dr. U. Shyla",
    title: "Interventional Cardiologist",
    image: docImg,
  },
];

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

export default function DoctorSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="relative bg-[#f0f7ff] py-10 px-4 md:px-8 max-w-4xl mx-auto">
      <Slider {...settings}>
        {doctors.map((doc, index) => (
          <div key={index} className="">
            <div className=" rounded-2xl  text-center relative h-full flex gap-4 flex-col items-center justify-between">
              <div className="ourteamcard_img_one w-[100%] ">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  className="mx-auto rounded-lg  mb-2 w-[90%] "
                />
              </div>
              <div>
                <h3 className="text-[#2B3990] text-base font-semibold mt-4">
                  {doc.name}
                </h3>
                <p className="text-sm text-black">{doc.title}</p>
              </div>
              <div className="absolute bottom-4 right-4">
                {/* Calendar icon here if needed */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
