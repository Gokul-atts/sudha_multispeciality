"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Senthur from "@/assets/home/doc/new/senthur.webp";
import Chitra from "@/assets/renal/chitra.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Faculties = () => {
    const team = [
        { image: Senthur, post: "Senior Medical Resident", name: "Dr.C.Senthur Raj", specilist: "MBBS" },
        { image: Chitra, post: "Professional Transplant Coordinator", name: "Mrs.G.Chitra", specilist: "Dialysis Tech" },

    ]

    // Mobile slider settings (dots removed)
    const settings = {
        dots: false,  // Dots disabled
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <MobileNextArrow />,
        prevArrow: <MobilePrevArrow />,
    };

    // Mobile Next Arrow
    function MobileNextArrow({ onClick }) {
        return (
            <button
                onClick={onClick}
                className="absolute z-10 
               right-[10px] 
               bottom-[-50px] 
               border border-white bg-[#2B3990] 
               hover:bg-[#1f2e6e] text-white 
               p-2 rounded-full"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        );
    }

    // Mobile Prev Arrow
    function MobilePrevArrow({ onClick }) {
        return (
            <button
                onClick={onClick}
                className="absolute z-10 
               right-[50px] 
               bottom-[-50px] text-[#2B3990]
               border border-[#2B3990]
               hover:bg-[#2B3990] hover:text-white 
               p-2 rounded-full"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>
        );
    }

    return (
        <>
            {/* Mobile Slider */}
            <div className="block md:hidden relative">
                <Slider {...settings}>
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white rounded-3xl p-4 mx-2 relative"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={295}
                                height={200}
                                className="rounded-full object-cover mx-auto w-full h-[300px]"
                            />
                            <div className="text-center mt-4">
                                <span className="text-[#000000] font-bold text-[14px]">
                                    {member.post}
                                </span>
                                <h3 className="text-[#2B3990] text-[16px] mt-2 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-[14px]">{member.specilist}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:flex justify-center gap-8 flex-wrap">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col max-w-[300px] text-center items-center bg-white rounded-3xl "
                    >
                        <div className="executeimg relative w-full">
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={295}
                                height={200}
                                className="rounded-t-2xl object-cover mx-auto w-full h-[300px]"
                            />
                        </div>
                      
                        <div className="text-center p-4">
                            <span className="text-[#000000] font-bold text-[14px]">
                                {member.post}
                            </span>
                            <h3 className="text-[#2B3990] text-[16px] mt-2 mb-2">
                                {member.name}
                            </h3>
                            <p className="text-[14px]">{member.specilist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Faculties;
