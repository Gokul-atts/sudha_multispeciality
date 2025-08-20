'use client';

import Banner from "@/assets/fellownationalboard/Banner.png";
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Bookappointment from "@/components/Bookappointment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lab from '@/assets/bssvocationaleducational/lab.png';
import Xray from '@/assets/bssvocationaleducational/xray.png';
import Dialysis from '@/assets/bssvocationaleducational/dialysis.png';
import Anesthesia from '@/assets/bssvocationaleducational/anesthesia.png';
import Healthcare from '@/assets/bssvocationaleducational/healthcare.png';
import Operation from '@/assets/bssvocationaleducational/operation.png';
import Highlight1 from "@/assets/bssvocationaleducational/highlight1.png";
import Student from "@/assets/vocationaldegree/student.png";
import Doc from "@/assets/vocationaldegree/doc.png";


const VocationalDegree = () => {


    const degrees = [
        {
            id: 1,
            title: "B.VOC in Medical Laboratory Technology",
            qualification: "12th Pass",
            duration: "3 years",
            img: Lab,
        },
        {
            id: 2,
            title: "B.VOC in Radiology and Medical Imaging Technology ",
            qualification: "12th Pass",
            duration: "3 years",
            img: Xray,
        },
        {
            id: 3,
            title: "B.VOC in Operation Theatre Technology ",
            qualification: "12th Pass",
            duration: "3 years",
            img: Dialysis,
        },
        {
            id: 4,
            title: "B.VOC in Physiotherapy ",
            qualification: "12th Pass",
            duration: "3 years",
            img: Anesthesia,
        },
        {
            id: 5,
            title: "B.VOC in Patient Care Management",
            qualification: "12th Pass",
            duration: "3 years",
            img: Healthcare,
        },
        {
            id: 6,
            title: "B.VOC in Cardiac Care Technology ",
            qualification: "12th Pass",
            duration: "3 years",
            img: Operation,
        },

    ];


    const terms = [
        "Affordable fee structure ",
        "Practical, hands-on training sessions ",
        "Training at NABH-accredited hospital",
        "Enhance ethical standards by developing and issuing clear guidelines.",
        "Classes conducted by experienced faculty",
        "Assured job placement after course completion",
    ]
    const documents = [
        "10th Marksheet – 1 original & 2 photocopies",
        "Transfer Certificate – 1 original & 2 photocopies",
        "Aadhaar Card – 2 photocopies",
        "Passport-size photographs – 8 nos",
        "Parent/Guardian’s Aadhaar Card – 2 photocopies ",
    ]



    const TickCircle = () => (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white ">
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
                            Home / Academic / Vocational Degree Courses 
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px] mb-2"
                        >
                            Vocational Degree Courses 
                        </motion.h1>

                        <motion.div className='mt-12'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Link
                                href="#degrees"
                                className="btn-white inline-flex text-[16px] tracking-wide items-center px-7 py-3 bg-white text-[#2B3990] font-semibold rounded-full hover:-translate-y-[3px] transition-transform duration-200"
                            >
                                Enroll Now <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-6 right-4 sm:right-10 md:right-[-40px] z-30 hidden md:block mr-10">
                        <div className="w-[220px] overflow-hidden rounded-tl-xl rounded-br-xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-4">
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

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
                    {/* Left Content */}
                    <div className="md:col-span-8">
                        <div className="inline-block mb-4 px-4 sm:px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm sm:text-base ">
                            Available Courses
                        </div>
                        <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-bold leading-snug">
                            Vocational Degree Courses in Health Education
                        </h2>
                        <p className='mt-8'>
                            Sudha Hospitals, in collaboration with Lingaya’s Vidyapeeth University, offers a 3-year vocational degree program in Health Education.
                            This course combines practical skills and academic knowledge across various healthcare specialities. Designed for 12th pass students,
                            the program prepares learners for rewarding medical careers through hands-on training and an industry-relevant curriculum for comprehensive
                            professional growth.
                        </p>
                    </div>
                    {/* right image */}
                    <div className="md:col-span-4">
                        <img
                            src={Student.src}
                            alt="Student"
                            className="rounded-2xl object-cover w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[350px]"
                        />
                    </div>
                </div>
            </section>

            {/* All Degrees Grid Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-7xl mx-auto">
                    {/* degree Grid */}
                    <div className="max-w-7xl mx-auto p-0 grid md:grid-cols-3 gap-6">
                        {degrees.map(degree => (
                            <div
                                className="bg-white rounded-3xl overflow-hidden p-4 flex flex-col h-full"
                            >
                                {/* degree Image */}
                                <Image
                                    src={degree.img}
                                    alt={degree.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-56 object-cover rounded-2xl"
                                />
                                {/* degree Title */}
                                <h2 className="text-lg font-semibold mt-4 mb-4">{degree.title}</h2>

                                {/* degree Details */}
                                <p className="text-gray-600 text-sm mb-2">
                                    <span className="font-medium">Education Qualification :</span> {degree.qualification}
                                </p>
                                <p className="text-gray-600 text-sm mb-4">
                                    <span className="font-medium">Course Duration :</span> {degree.duration}
                                </p>
                                <div className="flex-grow"></div>

                                {/* View Details Button */}
                                <Link
                                    href="#"
                                    className="block bg-[#2B3990] hover:bg-[#1e2660] text-white py-2 px-4 rounded-full text-center font-medium"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>


                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start">

                            {/* Text Column */}
                            <div className="order-2 md:order-1 md:col-span-6">
                                <h2 className="text-xl sm:text-2xl md:text-[24px] mb-4 mt-3 sm:mt-5 font-bold">
                                    Highlights of the Course
                                </h2>
                                {terms.map((term, idx) => (
                                    <div key={idx} className="flex gap-3 mb-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <TickCircle className="w-5 h-5 text-[#2B3990]" />
                                        </div>
                                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                            {term}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Image Column */}
                            <div className="order-1 md:order-2 md:col-span-6">
                                <img
                                    src={Doc.src}
                                    alt="Doc"
                                    className="rounded-2xl object-cover w-full 
                                       h-[200px] sm:h-[260px] md:h-[380px] lg:h-[420px]"
                                />
                            </div>

                        </div>
                    </section>

                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
                            <div className="md:col-span-6">
                                <img
                                    src={Highlight1.src}
                                    alt="Highlight1"
                                    className="rounded-2xl object-cover w-full h-[200px] sm:h-[280px] md:h-[400px] lg:h-[450px]"
                                />
                            </div>

                            {/* Text (8 cols) */}
                            <div className="md:col-span-6">
                                <h2 className="text-2xl md:text-[24px] mb-4 font-bold">
                                    Documents Required with Application
                                </h2>
                                {documents.map((doc, idx) => (
                                    <div key={idx} className="flex gap-3 mb-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <TickCircle className="w-5 h-5 text-[#2B3990]" />
                                        </div>
                                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                            {doc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>
                </div>
            </section>


            <section>
                <Bookappointment />
            </section>
        </div>
    );
};

export default VocationalDegree;