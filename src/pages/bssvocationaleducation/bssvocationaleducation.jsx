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
import Breadcrumb from "@/components/Breadcrumb";
import HospitalCard from "@/components/Hospital";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Academics", href: "" },
    { label: "BSS Vocational Courses", href: "/academics/bss-vocational-courses" },
];
const course = courses.find(c => c.id === 1);


const hospitalscards = [
    {
        number: <h3 className="text-[48px] text-[#2B3990]">40+</h3>,
        title: (
            <p className="text-md font-bold text-black">Years of Experience</p>
        ),
        link: "/about-us/our-growth-story",
        icon: hospitalOne,
    },
    {
        number: <h3 className="text-[48px] text-[#2B3990]">300+</h3>,
        title: <p className="text-md font-bold text-black">Patient Beds</p>,
        link: "/facilities/health-package",
        icon: hospitalTwo,
    },
    {
        number: <h3 className="text-[48px] text-[#2B3990]">30+</h3>,
        title: <p className="text-md font-bold text-black">Departments</p>,
        link: "/specialities",
        icon: hospitalThree,
    },
    {
        number: <h3 className="text-[48px] text-[#2B3990]">100+</h3>,
        title: <p className="text-md font-bold text-black">Doctors</p>,
        link: "/find-a-doctor",
        icon: hospitalFour,
    },
];



const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};



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
       
        "Classes conducted by experienced faculty",
        "Assured job placement after course completion",
    ]
    const documents = [
        "10th Marksheet – Original & 2 photocopies",
        "Transfer Certificate – Original & 2 photocopies",
        "Aadhaar Card – 2 photocopies",
        "Passport-size photographs – 8 nos",
        "Parent/Guardian’s Aadhaar Card – 2 photocopies ",
    ]

    const notes = [
        "This curriculum is approved by Bharath Sevak Samaj, a government-recognized organization. ",
        "However, the examinations are not conducted by the government. ",
        "The certificate awarded upon course completion is not valid for government job eligibility. ",
        "Certificate holders are eligible to work only as support staff under experienced technicians or healthcare professionals. ",
        "For detailed information about the training hospital, Contact Us 042-424-54545",
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
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-2 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />

                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[40px] mb-3"
                        >
                            BSS Vocational Courses
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 text-white"
                        >
                            Your Pathway to Professional Excellence
                        </motion.p>


                        <motion.div className='mt-12'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* <Link
                                href="#courses"
                                className="btn-white inline-flex text-[16px] tracking-wide items-center px-7 py-3 bg-white text-[#2B3990] font-semibold rounded-full hover:-translate-y-[3px] transition-transform duration-200"
                            >
                                Enroll Now <ArrowUpRight className="w-5 h-5" />
                            </Link> */}
                        </motion.div>
                    </div>

                    <div className="absolute bottom-0 right-0  z-30 hidden md:block">
                        <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-5">
                                <p className="text-[16px] text-black font-bold mb-2">
                                    Empowering Future <br /> Healthcare
                                    Professionals  <br />
                                </p>
                                <h3 className="text-[20px] font-extrabold text-[#2B3990]">Since 1985</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=" max-w-7xl mx-auto  my-20 h-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="
                    grid 
                    grid-cols-1        
                    sm:grid-cols-2     
                    md:grid-cols-2     
                    lg:grid-cols-3     
                    xl:grid-cols-4     
                    gap-4 sm:gap-6 lg:gap-8
                  "
                    >
                        {hospitalscards.map((card, idx) => (
                            <motion.div key={idx} variants={cardVariants}>
                                <HospitalCard
                                    number={card.number}
                                    icon={card.icon}
                                    title={card.title}
                                    link={card.link}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* All Courses Grid Section */}
            <section className=" ">
                <div className="max-w-7xl mx-auto py-16 ">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="inline-block mb-3 px-4 sm:px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm  ">
                            BSS Vocational Courses
                        </div>
                        <h2 className="text-[30px] mb-4">
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
                                <h2 className="text-[18px] mt-4">{course.title}</h2>

                                {/* Course Details */}
                                <p className=" mt-2 mb-2">
                                    <span className="font-semibold">Course Code :</span> {course.code}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Educational Qualification :</span> {course.qualification}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Course Duration :</span> {course.duration}
                                </p>

                                {/* Spacer to push button down */}
                                <div className="flex-grow"></div>
                                <Link
                                    href={`/academics/bss-vocational-courses/bss-course/${course.id}`}
                                    className="btn-diagonal w-full mx-auto text-center justify-center mt-5"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* content */}
                    <section className="max-w-7xl mx-auto  pt-16 sm:py-8 md:py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

                            {/* Text Column */}
                            <div className="order-2 md:order-1">
                                <h2 className="text-[26px] sm:text-[30px] mb-6">
                                    Highlights of the Course
                                </h2>
                                <div className="space-y-3">
                                    {terms.map((term, idx) => (
                                        <div key={idx} className="flex gap-3">
                                            <TickCircle className="w-5 h-5 text-[#2B3990] mt-1" />
                                            <p className="text-gray-700 leading-relaxed">{term}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="order-1 md:order-2">
                                <img
                                    src={Highlight1.src}
                                    alt="Highlight"
                                    className="rounded-3xl object-cover w-full h-auto max-h-[450px]"
                                />
                            </div>

                        </div>
                    </section>


                    <section className="max-w-7xl mx-auto py-6 sm:py-8 md:py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

                            {/* Left Image */}
                            <div>
                                <img
                                    src={Highlight1.src}
                                    alt="Highlight"
                                    className="rounded-3xl object-cover w-full  h-auto"
                                />
                            </div>

                            {/* Right Text */}
                            <div>
                                <h2 className="text-[26px] sm:text-[30px]  mb-6">
                                    Documents Required with Application
                                </h2>
                                <div className="space-y-3">
                                    {documents.map((doc, idx) => (
                                        <div key={idx} className="flex gap-3">
                                            <TickCircle className="w-5 h-5 text-[#2B3990] mt-1" />
                                            <p className="text-gray-700 leading-relaxed">{doc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="max-w-7xl mx-auto py-6 sm:py-8 md:py-10">
                        <div className="order-2 md:order-1 md:col-span-12">
                            <h2 className="text-[26px] sm:text-[30px] mb-4">
                                Important Note :
                            </h2>

                            <div className="space-y-3">
                                {notes.map((note, idx) => {
                                    const hasLink = note.includes("www.sudhahospitals.com");

                                    if (hasLink) {
                                        const parts = note.split("www.sudhahospitals.com");
                                        return (
                                            <div key={idx} className="flex gap-3">
                                                <TickCircle className="w-5 h-5 text-[#2B3990] mt-1" />
                                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
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
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={idx} className="flex gap-3">
                                            <TickCircle className="w-5 h-5 text-[#2B3990] mt-1" />
                                            <p className=" ">
                                                {note}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                </div>
            </section>


            {/* <section>
                <Bookappointment />
            </section> */}
        </div>
    );
};

export default VocationalEducation;