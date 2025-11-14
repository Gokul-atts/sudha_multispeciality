"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { GoThumbsup } from "react-icons/go";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    heading: "Sudha Multispeciality Hospital in Erode",
    btnText: "Healthcare Excellence Made Affordable",
    title: (
      <>
        Comprehensive Care,
        All In One Place.
      </>
    ),
    link: "/centre-of-excellence",
    description:
      "Sudha Multispeciality Hospital, a healthcare icon delivering quality healthcare for 40+ years.",
    buttonText: "Discover Our Service",
    video:
      "https://ship-crm-img.s3.eu-north-1.amazonaws.com/Sudha+Multispeciality+Promo_02.mp4",
  },
  {
    heading: "Motherly Care For Every Mother and Child",
    btnText: "Sudha Mother and Child Care",
    title: (
      <>
        Mother And
        Child Care
      </>
    ),
    link: "/mother-and-child-care",
    description:
      "Because Every mother deserves care that comforts, every step of the way.",
    buttonText: "Discover Our Service ",
    video:
      "https://ship-crm-img.s3.eu-north-1.amazonaws.com/mother-child.mp4",
  },
  {
    heading: "Nurturing Parenthood for Over 40 Years",
    btnText: "Sudha Fertility Centre",
    title: (
      <>
        Fertility
        Centre
      </>
    ),
    link: "https://sudhafertilitycentre.com/",
    description:
      "Sudha Fertility Centre has been a beacon of hope for lakhs of families, helping turn parenthood dreams into joyful realities.",
    buttonText: "Discover Our Service ",
    video:
      "https://ship-crm-img.s3.eu-north-1.amazonaws.com/happy-family-tiny-newborn-infant-male-or-female.mp4",
  },
  {
    heading: "Standing with You Through Every Battle",
    btnText: "Sudha Cancer Centre",
    title: (
      <>
        Cancer
        Centre
      </>
    ),
    description: "The Only Comprehensive Cancer Care in Erode.",
    buttonText: "Discover Our Service ",
    link: "https://sudhacancercentre.com/",
    video:
      "https://ship-crm-img.s3.eu-north-1.amazonaws.com/sudha-cancercentre.mp4",
  },
];

const BannerSlider = () => {
  const swiperRef = useRef(null);
  const progressRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔹 Progress bar animation
  useEffect(() => {
    progressRefs.current.forEach((ref, i) => {
      if (!ref) return;
      ref.style.transition = "none";
      ref.style.width = "0%";

      if (i === activeIndex) {
        setTimeout(() => {
          ref.style.transition = "width 5s linear";
          ref.style.width = "100%";
        }, 50);
      }
    });
  }, [activeIndex]);

  // 🔹 Bottom tab click
  const handleTabClick = (index) => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className="relative w-full h-[90vh] mb-homebanner overflow-hidden top-6">
      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full py-36  rounded-3xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh]">
              {/* Background Video */}
              <video
                src={slide.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(43,57,144,0.8) 20%, rgba(43,57,144,0.2) 100%)",
                }}
              />

              {/* Text Content */}
              <div className="max-w-7xl mx-auto">
                <div className="absolute inset-0 flex items-center mb-p max-w-7xl mx-auto">
                  <div className="text-white max-w-xl">
                    <h6 className="bg-white text-[#2B3990] flex gap-3 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold w-fit mb-4">
                      <GoThumbsup className="size-5 text-[#1ED348]" />
                      {slide.btnText}
                    </h6>

                    <h1 className="md:text-[40px] text-[30px] mb-4">
                      {slide.heading}
                    </h1>

                    <p className="text-[16px] mb-6 text-white/90">
                      {slide.description}
                    </p>

                    <Link
                      href={slide.link}
                      className="btn-outline-white"
                    >
                      {slide.buttonText}
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Titles + Progress Bars */}
      <div className="absolute bottom-0 left-0 w-full px-16 mb-pl py-10 z-50 ">
        <div className="flex justify-between text-white text-sm font-medium gap-6">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="cursor-pointer flex-1"
              onClick={() => handleTabClick(index)}
            >
              <div className="">
                <p className="hidden md:block">
                  <span
                    className={
                      activeIndex === index ? "text-white" : "text-white/70"
                    }
                  >
                    {slide.title}
                  </span>
                </p>
              </div>

              <div className="w-full h-[3px] bg-white/20 mt-1 overflow-hidden">
                <div
                  ref={(el) => (progressRefs.current[index] = el)}
                  className="h-full bg-white"
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
