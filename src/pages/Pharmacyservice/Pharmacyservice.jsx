"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/facilities/pharmacy-banner.webp";

import Sudha1 from "@/assets/PharmacyService/sudha-pharmacy.webp";
import Image from "next/image";
import "./pharmacy.css";
import Medicine from "@/assets/PharmacyService/pharmacy-rack.webp";
import Check from "@/assets/insurance/check.svg";
import CampusFacilitySlider from "@/components/FacilitySlider/CampusFacilitySlider";
import Slider1 from "@/assets/PharmacyService/slider1.png";
import Slider2 from "@/assets/PharmacyService/pharmacy-rack.webp";
import Slider3 from "@/assets/PharmacyService/slider3.png";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Facilities", href: "" },

    { label: "Pharmacy", href: "/facilities/pharmacy-services" },
];



const facilities = [
    {
        image: Slider1,
        title: (
            <p className="text-primary-blue">
                Gift Shop for <br />
                the New born
            </p>
        ),
    },
    { image: Slider2, title: "Medicine Rack" },
    { image: Slider3, title: "Electronics" },
];


const Pharmacyservice = () => {
    const checklist = [
        "24/7 Pharmacy Support ",
        "Medicines for all specialties and surgeries  ",
        "Handled by certified pharmacists  ",
        "Quality and authenticity assured ",
        "Patient-first service and quick response "
    ]

    return (
        <div>
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                {/* Banner Container */}
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="max-w-7xl mx-auto">
                        {/* Breadcrumb */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className=" mb-3 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[40px]  mb-4"
                        >
                            Pharmacy
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className=" mb-6 text-white"
                        >
                            24/7 Pharmacy Assistance for All Your Needs
                        </motion.p>
                    </div>

                    <div className="absolute bottom-0 right-0  z-30 hidden md:block">
                        <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-5">
                                <p className="text-[16px] text-black font-bold mb-2">
                                    Quality healthcare   <br />
                                    backed by superior <br /> facilities
                                </p>
                                <h3 className="text-[20px] font-extrabold text-[#2B3990]">Since 1985</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto   relative z-10 text-white bg-center bg-no-repeat bg-cover md:bg-contain py-16">
                <div className=' flex flex-col justify-center items-center text-center p-5 rounded-lg '>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 rounded-xl ">
                    <div className="w-full md:w-1/2  text-start space-y-4 ">
                        <h5 className="px-5 text-[14px]  py-2 font-semibold text-primary-blue bg-white inline-block rounded-full ">
                            Pharmacy
                        </h5>
                        <h2 className='text-[30px] text-black '>Sudha Hospital Pharmacy   </h2>
                        <p className=''>
                            Sudha Hospital Pharmacy offers a fully equipped, in-house pharmacy, ensuring timely access to quality medicines and medical essentials. Staffed by certified pharmacists, we prioritize accuracy in dispensing and patient safety. With round-the-clock availability, we are committed to delivering trusted pharmaceutical support, ensuring convenience and care for every patient, every time.
                        </p>

                        <p className=''>
                            We provide medications and pharmaceutical products that support all medical and surgical specialities. Each medicine is carefully sourced from approved manufacturers, ensuring compliance with hospital-grade quality standards.
                        </p>

                        <p className=''>
                            Sudha Pharmacy, the best pharmacy in Erode is also fully stocked with critical care and emergency medicines, as well as essential drugs required for surgeries and post-operative care. Whether it's intensive care support, operation theatre supplies, or immediate-response medications, our pharmacy plays a vital role in supporting clinical outcomes and emergency care efficiency.
                        </p>

                    </div>
                    <div className="w-full md:w-1/2 space-y-4 flex justify-center items-center mt-10">
                        <Image
                            src={Sudha1}
                            alt="Sudha"
                            className="rounded-3xl w-full h-auto object-cover"
                        />
                    </div>
                </div>






            </div>

            <section className="max-w-7xl mx-auto   relative z-10 text-white bg-center bg-no-repeat bg-cover md:bg-contain py-16">

                <div className="bg-white rounded-3xl py-16">


                    <div className="flex flex-col md:flex-row items-start bg-[#ffffff] gap-6 rounded-xl p-6">


                        <div className="w-full md:w-1/2 space-y-4 flex justify-center items-center ">
                            <Image
                                src={Medicine}
                                alt="Medicine"
                                className="rounded-3xl w-full h-[550px] object-cover"
                            // style={{ height: "300px", width: "450px" }}
                            />
                        </div>
                        <div className="w-full md:w-1/2  text-start space-y-4">
                            <h6 className="px-5 text-[14px]  py-2 bg-blue inline-block font-semibold rounded-full ">
                                Sudha Pharmacy
                            </h6>
                            <h2 className="text-[30px] text-[#000000]"> Safe, Reliable Medicines, Anytime You Need </h2>
                            <ul className="flex flex-col list-none space-y-4">
                                {checklist.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-[#5E566A]  font-semibold text-sm">
                                        <Image
                                            src={Check}
                                            alt="tick"
                                            width={20}
                                            height={20}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className=''>
                                Our hospital pharmacy serves as a vital link in the continuum of care, ensuring patients have access to the right medications at the right time. It operates in close coordination with all clinical departments to support safe and effective treatment plans. With a strong focus on patient safety, we adhere to strict storage, labelling, and dosage protocols.
                            </p>
                            <p>
                                In addition to daily dispensing, our pharmacy supports post-discharge medication counselling and prescription guidance. Patients and their families receive clear instructions and support to maintain treatment adherence at home
                            </p>

                        </div>
                    </div>
                </div>

            </section>

            <div className="max-w-7xl mx-auto py-12 px-4">
                <div className="flex justify-center mb-2">
                    <h6 className="px-5  py-2 bg-white text-[14px] text-primary-blue inline-block font-semibold rounded-full mb-3">
                        Sudha Pharmacy
                    </h6>
                </div>
                <h2 className=" text-[30px] text-center">
                    Pharmacy Gallery
                </h2>
                <CampusFacilitySlider data={facilities} />
            </div>
        </div>
    )
}

export default Pharmacyservice