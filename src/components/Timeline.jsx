"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from "@/assets/aboutus/t1.png";

const timelineData = [
  {
    year: "1995 ",
    title: "Mother and Child Care",
    desc: "The Sudha Women and Child Care Centre was launched in Erode. ",
    img: t1,
  },
  {
    year: "2011",
    title: "Sudha Fertility Centre",
    desc: "Sudha Women Care and Fertility Centre was inaugurated at Coimbatore. ",
    img: t1,
  },
  {
    year: "2015 ",
    title: "Sudha Medical Centre ",
    desc: "Sudha Medical Centre was launched in Colombo, Sri Lanka. ",
    img: t1,
  },
  {
    year: "2018 ",
    title: "",
    desc: "Sudha Women Care and Fertility Centre was inaugurated in Salem. ",
    img: t1,
  },
  {
    year: "2019 ",
    title: "",
    desc: "Sudha Women Care and Fertility Centre was inaugurated in Chennai. ",
    img: t1,
  },
  {
    year: "2020 ",
    title: "",
    desc: "Sudha Women Care and Fertility Centre was inaugurated in Madurai and Trichy. ",
    img: t1,
  },
  {
    year: "2021",
    title: "",
    desc: "Launch of many new fully equipped Fertility Centre branches at Bangalore, Hyderabad and Theni.",
    img: t1,
  },
  {
    year: "2022 ",
    title: "",
    desc: "Launch of further Fertility Care branches at Vellore, Pondicherry, Thanjavur, Tirupur, Krishnagiri. ",
    img: t1,
  },
  {
    year: "2023  ",
    title: "",
    desc: "Sudha Women Care and Fertility Centre was inaugurated at Karur, Karaikudi, Attapur, Ambattur, Tirunelveli, Hosur, Dindigul, and Vijayawada. ",
    img: t1,
  },
  {
    year: "2024   ",
    title: "",
    desc: "Sudha Woman Care and Fertility Centre was inaugurated at Tiruvannamalai, Nagercoil and Ramanathapuram. ",
    img: t1,
  },
  {
    year: "2025    ",
    title: "",
    desc: "Sudha Woman Care and Fertility Centre was inaugurated at Hanamkonda, Tenali, Chilakaluripet, Ongole ",
    img: t1,
  },
];

const CustomPrev = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-20 -bottom-28 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
  >
    <ChevronLeft className="w-5 h-5 text-black" />
  </button>
);

const CustomNext = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 -bottom-28 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
  >
    <ChevronRight className="w-5 h-5 text-black" />
  </button>
);

export default function TimelineSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrev />,
    nextArrow: <CustomNext />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto  relative">
        {/* Timeline horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/30 z-0" />

        <Slider {...settings}>
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center "
              >
                {isEven ? (
                  <>
                    {/* IMAGE on top */}
                    <div className="bg-white mx-auto rounded-xl p-1 w-fit mb-56 shadow z-10">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={340}
                        height={160}
                        className="rounded-lg object-cover"
                      />
                    </div>

                    {/* Vertical line from image to diamond */}
                    <div className="w-0.5 h-11 bg-white z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-10" />
                    {/* Diamond */}
                    <div className="w-4 h-4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 z-20 border border-[#0C122A]" />

                    {/* No bottom line — just text */}
                    <div className="mt-6 bg-white/10 backdrop-blur-md mx-auto  text-center p-4 rounded-xl max-w-sm z-10">
                      <h3 className="text-xl font-bold">{item.year}</h3>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-white/80 mt-2">{item.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* TEXT on top */}
                    <div className="mb-6 bg-white/10 backdrop-blur-md mx-auto text-center p-4 rounded-xl max-w-sm z-10">
                      <h3 className="text-xl font-bold">{item.year}</h3>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-white/80 mt-2">{item.desc}</p>
                    </div>

                    {/* Diamond */}
                    <div className="w-4 h-4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 z-20 border border-[#0C122A]" />
                    {/* Vertical line to image */}
                    <div className="w-0.5 h-11 bg-white z-20 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2" />

                    {/* IMAGE on bottom */}
                    <div className="mt-56 bg-white rounded-xl p-1 mx-auto w-fit shadow z-10">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={340}
                        height={160}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
