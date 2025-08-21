"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { GoThumbsup } from "react-icons/go";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    heading: "Care with Promise in Erode",
    btnText: "Healthcare Excellence Made Affordable",
    title: (
      <>
        Comprehensive Care, <br />
        All In One Place.
      </>
    ),
    description:
      "Sudha Multispeciality Hospital, a healthcare icon delivering quality healthcare for 40+ years.",
    buttonText: "Discover Our Service",
    video: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/happy-family-tiny-newborn-infant-male-or-female.mp4",
  },
  {
    heading: "Motherly Care For Every Mother and Child",
    btnText: "Sudha Mother and Child Care",
    title: (
      <>
        Mother And <br />
        Child Care
      </>
    ),
    description:
      "Because Every mother deserves care that comforts, every step of the way.",
    buttonText: "Discover Our Service ",
    video: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/1165414_Woman_Indoor_3840x2160.mp4",
  },
  {
    heading: "Nurturing Parenthood for Over 40 Years",
    btnText: "Sudha Fertility Centre",
    title: (
      <>
        Fertility <br />
        Care
      </>
    ),
    description:
      "Sudha Fertility Centre has been a beacon of hope for lakhs of families, helping turn parenthood dreams into joyful realities.",
    buttonText: "Discover Our Service ",
    video: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/happy-family-tiny-newborn-infant-male-or-female.mp4",
  },
  {
    heading: "Standing with You Through Every Battle",
    btnText: "Sudha Cancer Centre",
    title: (
      <>
        Sudha Cancer <br />
        Centre
      </>
    ),
    description: "The Only Comprehensive Cancer Care in Erode.",
    buttonText: "Discover Our Service ",
    video: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/happy-family-tiny-newborn-infant-male-or-female.mp4",
  },
];


const BannerSlider = () => {
  const swiperRef = useRef(null);
  const progressRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    progressRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.transition = "none";
        ref.style.width = "0%";
        if (i === activeIndex) {
          setTimeout(() => {
            ref.style.transition = "width 5s linear";
            ref.style.width = "100%";
          }, 50);
        }
      }
    });
  }, [activeIndex]);

  const handleTabClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
<div className="relative w-full h-[90vh] overflow-hidden">
  <Swiper
    ref={swiperRef}
    modules={[Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    className="w-full h-full rounded-3xl"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[90vh]">
          {/* 🔹 Background Video */}
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* 🔹 Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(43,57,144,0.8) 20%, rgba(43,57,144,0.2) 100%)",
            }}
          />

          {/* 🔹 Text Content */}
          <div className="absolute z-10 top-[50%] -translate-y-[50%] text-white max-w-xl">
            <div className="pl-8 md:pl-20">
              <div className="flex">
                <h2 className="bg-white text-[#2B3990] flex gap-4 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold">
                  <GoThumbsup className="size-5 text-[#1ED348]" />
                  {slide.btnText}
                </h2>
              </div>
              <h2 className="text-[44px] mb-4 mt-4">{slide.heading}</h2>
              <p className="text-[16px] mb-6 text-[#fff]">
                {slide.description}
              </p>
              <button className="flex gap-2 bg-transparent border border-white px-6 py-2 text-[14px] rounded-full text-white font-semibold hover:bg-white hover:text-blue-900 transition">
                {slide.buttonText}
                <ArrowUpRight className="w-5 h-5 mt-0.5" />
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* 🔹 Bottom Titles with Progress Bars */}
  <div className="absolute bottom-0 left-0 w-full px-16 py-6 z-50">
    <div className="flex justify-between text-white text-sm font-medium">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="cursor-pointer flex-shrink-0 w-[25%] ml-4"
          onClick={() => handleTabClick(index)}
        >
          <div className="flex flex-col items-start mr-16">
            <p className="hidden md:block">
              <span
                className={
                  activeIndex === index ? "text-white" : "text-white/70"
                }
                style={{ whiteSpace: "pre-line" }}
              >
                {slide.title}
              </span>
            </p>
            <div className="w-full h-[3px] bg-white/20 mt-1 overflow-hidden">
              <div
                ref={(el) => (progressRefs.current[index] = el)}
                className={`h-full ${
                  activeIndex === index ? "bg-white" : "bg-transparent"
                }`}
                style={{ width: "0%" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default BannerSlider;
