"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Thiagarajan from "@/assets/home/doc/thiyagarajan-liver.png";
import SoundaraRajan from "@/assets/home/doc/soundararajan.png";
import Srikanth from "@/assets/home/doc/srikanth-thummala.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Faculties = () => {
    const team = [
        {
            image: Thiagarajan,
            post: "Senior Consultant & Director",
            name: "Dr.Thiagarajan Srinivasan",
            specilist: "Institute of Liver Diseases, Transplant & HPB Surgery",
        },
        {
            image: Srikanth,
            post: "Consultant Liver Transplant",
            name: "Dr.Srikanth Thummala",
            specilist: "Institute of Liver Diseases, Transplant & HPB Surgery",
        },
        {
            image: SoundaraRajan,
            post: "Consultant Liver Transplant",
            name: "Dr.L SoundaraRajan",
            specilist: "Institute of Liver Diseases, Transplant & HPB Surgery",
        },
    ];

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
                                width={150}
                                height={150}
                                className="rounded-full object-cover mx-auto"
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
                        className="flex flex-col text-center items-center bg-white rounded-3xl p-4 w-[250px]"
                    >
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={150}
                            height={150}
                            className="rounded-full object-cover"
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
            </div>
        </>
    );
};

export default Faculties;
