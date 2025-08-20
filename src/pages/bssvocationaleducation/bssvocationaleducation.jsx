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
import Ortho from '@/assets/bssvocationaleducational/ortho.png';
import Highlight1 from "@/assets/bssvocationaleducational/highlight1.png";
import { courses } from '@/constants/bssCourseDetails';

const course = courses.find(c => c.id === 1);


const VocationalEducation = () => {


    const courses = [
        {
            id: 1,
            title: "BSS Diploma in Medical Laboratory Technology",
            code: "AHE001",
            qualification: "10th Pass",
            duration: "2 years",
            img: Lab,
        },
        {
            id: 2,
            title: "BSS Diploma in X-Ray Technology",
            code: "AHE003",
            qualification: "10th Pass",
            duration: "2 years",
            img: Xray,
        },
        {
            id: 3,
            title: "BSS Diploma in Dialysis Technology",
            code: "AHE025",
            qualification: "10th Pass",
            duration: "2 years",
            img: Dialysis,
        },
        {
            id: 4,
            title: "BSS Diploma in Anesthesia Technology",
            code: "AHE003",
            qualification: "10th Pass",
            duration: "2 years",
            img: Anesthesia,
        },
        {
            id: 5,
            title: "BSS Diploma in Medical Laboratory Technology",
            code: "AHE001",
            qualification: "10th Pass",
            duration: "2 years",
            img: Healthcare,
        },
        {
            id: 6,
            title: "Operation Theatre Technician",
            code: "AHE006",
            qualification: "10th Pass",
            duration: "1 years",
            img: Operation,
        },
        {
            id: 7,
            title: "Ortho & Trauma Care Technician",
            code: "AHE020",
            qualification: "10th Pass",
            duration: "1 years",
            img: Ortho,
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

    const notes = [
        "This curriculum is approved by Bharath Sevak Samaj, a government-recognized organization. ",
        "However, the examinations are not conducted by the government. ",
        "The certificate awarded upon course completion is not valid for government job eligibility. ",
        "Certificate holders are eligible to work only as support staff under experienced technicians or healthcare professionals. ",
        "For detailed information about the training hospital, please visit  www.sudhahospitals.com",
        "Prospective students are advised to fully understand the curriculum and course details before enrolling. ",
        "Only students who have paid the full course fee will be permitted to appear for the examination. ",
        "Fees paid are non-refundable under any circumstances. "
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
                            Home / Academic / BSS Vocational Education
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px] mb-2"
                        >
                            BSS Vocational Education
                        </motion.h1>

                        <motion.div className='mt-12'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Link
                                href="#courses"
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

            {/* All Courses Grid Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-block mb-4 px-4 sm:px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm sm:text-base ">
                            BSS Vocational Courses
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pt-3 leading-snug mb-4">
                            Academic Structure & Education Details
                        </h2>
                    </div>

                    {/* Course Grid */}
                    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {courses.map(course => (
                            <div
                                key={course.id}
                                className="bg-white rounded-3xl overflow-hidden p-4 flex flex-col h-full"
                            >
                                {/* Course Image */}
                                <Image
                                    src={course.img}
                                    alt={course.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-56 object-cover rounded-2xl"
                                />

                                {/* Course Title */}
                                <h2 className="text-lg font-semibold mt-4">{course.title}</h2>

                                {/* Course Details */}
                                <p className="text-gray-600 text-sm mt-2">
                                    <span className="font-medium">Course Code :</span> {course.code}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-medium">Education Qualification :</span> {course.qualification}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-medium">Course Duration :</span> {course.duration}
                                </p>

                                {/* Spacer to push button down */}
                                <div className="flex-grow"></div>
                                <Link
                                    href={`/bss-course/${course.id}`}
                                    className="block bg-[#2B3990] hover:bg-[#1e2660] text-white py-2 px-4 rounded-full text-center font-medium mt-4"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* content */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start">
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

                            <div className="order-1 md:order-2 md:col-span-6">
                                <img
                                    src={Highlight1.src}
                                    alt="Highlight1"
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

                    <div className="order-2 md:order-1 md:col-span-12">
                        <h2 className="text-xl sm:text-2xl md:text-[24px] mb-4 mt-3 sm:mt-5 font-bold">
                            Important Note :
                        </h2>
                        {notes.map((note, idx) => {
                            const hasLink = note.includes("www.sudhahospitals.com");

                            return (
                                <div key={idx} className="flex gap-3 mb-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <TickCircle className="w-5 h-5 text-[#2B3990]" />
                                    </div>

                                    {hasLink ? (
                                        (() => {
                                            const parts = note.split("www.sudhahospitals.com");
                                            return (
                                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                                    {parts[0]}
                                                    <a
                                                        href="https://www.sudhahospitals.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-800 underline"
                                                    >
                                                        www.sudhahospitals.com
                                                    </a>
                                                    {parts[1]}
                                                </p>
                                            );
                                        })()
                                    ) : (
                                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                            {note}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            <section>
                <Bookappointment />
            </section>
        </div>
    );
};

export default VocationalEducation;