'use client';
import React from 'react';
import Banner from "@/assets/fellownationalboard/Banner.png";
import Anaesthesia from '@/assets/fellownationalboard/anaesthesia.png';
import Radiology from '@/assets/fellownationalboard/radiology.png';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";

const TickCircle = () => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
        <svg
            className="w-4 h-4 text-[#2B3990]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute z-10 
               lg:right-[150px] right-[290px] translate-x-[60px] 
               lg:bottom-[-60px] bottom-[-100px] 
               border border-[#2B3990] text-[#2B3990] 
               hover:bg-[#2B3990] hover:text-white 
               p-1.5 rounded-full"
    >
        <ChevronLeft className="w-4 h-4" />
    </button>
);

// Main Page Component
const MedicalLaboratory = () => {


    const courses = [
        {
            title: "DNB – Anesthesiology",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Anaesthesia,
            since: "Since 2002",
        },
        {
            title: "DNB – Radio Diagnosis",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Radiology,
            since: "Since 2002",
        },
    ];

    return (
        <div>
            {/* Banner Section */}
            <section className="relative -mt-12 lg:-mt-24 m-10">
                <div
                    className="max-w-full mx-auto px-4 py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover lg:bg-contain banner min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="pl-8 md:pl-20">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-2 text-white"
                        >
                            Home / Academic /  DNB
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px]  mb-2"
                        >
                            Diplomate of National Board (DNB)
                        </motion.h1>

                        <motion.div className='mt-12'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* <Link
                                href="#"
                                className="btn-white inline-flex  text-[16px] tracking-wide items-center px-7 py-3 bg-white text-[#2B3990] font-semibold rounded-full  hover:-translate-y-[3px] transition-transform duration-200"
                            >
                           
                            </Link> */}
                        </motion.div>

                    </div>

                    <div className="absolute bottom-0 right-4 sm:right-10 md:right-[-40px] z-30 hidden md:block mr-10">
                        <div className="w-[220px] overflow-hidden rounded-tl-xl  rounded-br-xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-4 ">
                                <h3 className="text-[36px] font-bold text-[#2B3990]">40+</h3>
                                <p className="text-lg leading-snug text-black font-semibold">
                                    Years of Trusted <br />
                                    Expertise in <br />
                                    Healthcare
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="bg-[#f3f9ff] min-h-screen flex justify-center">
                <div className="rounded-2xl max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8">

                    {/* Left Side */}
                    <div className="space-y-4 md:col-span-7">
                        <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#2d2d8f]">Course Details</h2>

                        {/* Anesthesiology */}
                        <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold">DNB – Anesthesiology</h3>
                        <p className=" leading-relaxed text-sm sm:text-base">
                            Our institute is recognised by the National board of examinations and 5 seats have been allotted from 2018 onwards. Work is equally balanced with 
                            academics. Regular teaching programmes keep our post graduates updated with the latest guidelines and working protocol. Lectures, seminars, symposium, 
                            mockdrills, case presentation and mock examination have helped us achieve 100% results. Our postgraduates participate in State and National level 
                            conferences and presents papers and have won awards.
                        </p>
                        <p>
                            All our post graduates take active participation in teaching Anaesthesia technician trainees and in imparting Basic Life Support classes for nursing and 
                            paramedical personnel in our institute.
                        </p>
                        <p>
                            The department of Anaesthesiology at Sri Ramakrishna Hospital provides comprehensive perioperative care to patients , pain management for both 
                            minimally invasive and complex surgeries.
                        </p>

                        <h4 className="text-lg sm:text-xl lg:text-[22px] font-bold">We Work As A Team</h4>
                        <ul className="pl-1 space-y-2 text-gray-700 text-sm sm:text-base">
                            <li className="flex items-center gap-2"><TickCircle /> General surgery</li>
                            <li className="flex items-center gap-2"><TickCircle /> Orthopedics</li>
                            <li className="flex items-center gap-2"><TickCircle /> Obstetric anaesthesia and Anaesthesia for Gynaecological procedures</li>
                            <li className="flex items-center gap-2"><TickCircle /> Otorhinolaryngology</li>
                            <li className="flex items-center gap-2"><TickCircle /> Oro maxillofacial surgery</li>
                            <li className="flex items-center gap-2"><TickCircle /> Paediatric anaesthesia including neonates</li>
                        </ul>

                        {/* Radiology */}
                        <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold">DNB – Radio Diagnosis</h3>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Our institute is recognised by the National board of examinations and 5 seats have been allotted from 2018 onwards. Work is equally balanced with 
                            academics. Regular teaching programmes keep our post graduates updated with the latest guidelines and working protocol. Lectures, seminars, symposium, 
                            mockdrills, case presentation and mock examination have helped us achieve 100% results. Our postgraduates participate in State and National level 
                            conferences and presents papers and have won awards.
                        </p>
                         <p>
                            All our post graduates take active participation in teaching Anaesthesia technician trainees and in imparting Basic Life Support classes for nursing and 
                            paramedical personnel in our institute.
                        </p>
                        <p>
                            The department of Anaesthesiology at Sri Ramakrishna Hospital provides comprehensive perioperative care to patients , pain management for both 
                            minimally invasive and complex surgeries.
                        </p>

                        <h4 className="text-lg sm:text-xl lg:text-[22px] font-bold">We Work As A Team</h4>
                        <ul className="pl-1 space-y-2 text-gray-700 text-sm sm:text-base">
                            <li className="flex items-center gap-2"><TickCircle /> General surgery</li>
                            <li className="flex items-center gap-2"><TickCircle /> Orthopedics</li>
                            <li className="flex items-center gap-2"><TickCircle /> Obstetric anaesthesia and Anaesthesia for Gynaecological procedures</li>
                            <li className="flex items-center gap-2"><TickCircle /> Otorhinolaryngology</li>
                            <li className="flex items-center gap-2"><TickCircle /> Oro maxillofacial surgery</li>
                            <li className="flex items-center gap-2"><TickCircle /> Paediatric anaesthesia including neonates</li>
                        </ul>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl self-start sticky top-8 md:col-span-5">
                        <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold">Enroll Now!</h2>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">Personal Details</p>

                        <form className="mt-4 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Enter full name" className="border rounded-lg p-2 w-full text-sm sm:text-base" />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium">Mobile No <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Enter Mobile No" className="border rounded-lg p-2 w-full text-sm sm:text-base" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium">Email <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="Enter your Email Id" className="border rounded-lg p-2 w-full text-sm sm:text-base" />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium">Qualification <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Enter your Qualification" className="border rounded-lg p-2 w-full text-sm sm:text-base" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-medium">Message</label>
                                <textarea placeholder="Leave your Message..." className="border rounded-lg p-2 w-full h-24 sm:h-28 text-sm sm:text-base" />
                            </div>

                            <button type="submit" className="bg-[#2d2d8f] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-[#1f1f6f] transition text-sm sm:text-base">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default MedicalLaboratory;
