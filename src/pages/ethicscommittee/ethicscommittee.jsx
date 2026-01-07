'use client';

import React, { useState } from 'react';
import Banner from "@/assets/fellownationalboard/Banner.png";
import Doctors from "@/assets/fellownationalboard/Doctors.png";
import { motion } from 'framer-motion';


import HospitalCard from "@/components/Hospital";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";

import { doctorsData } from "@/constants/doctorDetails";
import Bookappointment from "@/components/Bookappointment";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Doc1 from "@/assets/ethicscommittee/doc1.png";
import Doc2 from "@/assets/ethicscommittee/doc2.png";
import EthicsCommitteTable from '@/components/ethicscommitteetable';
import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Academics", href: "" },

    { label: "Ethics Committee", href: "/academics/ethics-committee" },
];

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

const terms = [
    "Uphold the highest scientific and ethical standards in research. ",
    "Review and approve clinical, basic, and translational research proposals (both intramural and extramural) to ensure scientific rigor and ethical integrity.",
    "Enhance ethical standards by developing and issuing clear guidelines. ",
    "Serve as a consultative forum for the administration on any ethical concerns raised by patients, their families, or the public. ",
    "Maintain leadership as a national benchmark in all related fields. ",
    "Regularly issue, update, and revise Standard Operating Procedures (SOPs) and guidelines to ensure the effective functioning of the Ethics Committee. ",
    "Promote continuing education on clinical research, bioethics, and ethical clinical practice through seminars, workshops, and interactive discussions for all staff categories, including nursing and paramedical personnel. ",
    "Initiate and commission research studies focusing on the ethical aspects of medical practice. ",
]

const roles = [
    "To protect and safeguard the dignity, rights, safety and well-being of all actual or potential research participants. ",
    "To ensure that the research projects that are carried out are sound in design, have statistical validity and are conducted according to the new drugs and clinical trial rule 2019 ICH/ GCP and ICMR guidelines ",
    "To consider the principle of justice, that the benefits and burdens of research be distributed fairly among all groups and classes in society taking into account age, gender, economic status, culture and ethics consideration. ",
    "To provide advice to the researchers on all aspects of the welfare and safety of research participants, ensuring the scientific soundness of the proposed research.",
    "To ensure the research is conducted under the supervision of trained medical/biomedical persons with the required expertise. ",
    "To ensure that research will include solely patients or participants who have given voluntary and informed consent. ",
    "It may be ensured that no research projects shall be / can be started unless ethics clearance/approval is obtained.",
    "It will review the proposals before start of the studies as well as monitor the research throughout the study until and after completion by examining the annual reports and final reports the committee will also examine whether all regulatory requirements and laws are complied with or not.  "
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



// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};




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

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute z-10 
               lg:right-[-20px] right-20 -translate-x-[60px] 
               lg:bottom-[-60px] bottom-[-100px] 
               bg-[#2B3990] hover:bg-[#1f2e6e] 
               text-white p-2 rounded-full"
    >
        <ChevronRight className="w-4 h-4" />
    </button>
);


// Main Page Component
const EthicsCommitte = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 1536, settings: { slidesToShow: 5 } },
            { breakpoint: 1280, settings: { slidesToShow: 4 } },
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ]
    };



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
                            className="text-[40px]  mb-2"
                        >
                            Ethics Committee
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 text-white"
                        >
                            Commitment to Ethical Excellence
                        </motion.p>


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


            {/* Intro Content */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 sm:py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
                    {/* Left Content */}
                    <div className="md:col-span-8">
                        <h2 className="text-[30px]">
                            Institutional Ethics Committee at Sudha Multispeciality Hospitals
                        </h2>
                        <p className=" mt-5 mb-2 text-primary-blue font-bold">
                            Registration No:
                            <span className="text-[14px] font-semibold text-[#5E566A]">
                                {" "}ECR / 948 / INST / TN / 2018 / RR-22
                            </span>
                        </p>
                        <p className="mb-2  text-primary-blue font-bold">
                            Valid From:
                            <span className="text-[14px] font-semibold text-[#5E566A]">
                                {" "}14 May 2022
                            </span>
                        </p>
                        <p className="text-primary-blue font-bold">
                            Valid To:
                            <span className="text-[14px] font-semibold text-[#5E566A]">
                                {" "}13 May 2027
                            </span>
                        </p>
                        <p className='mt-4'>
                            The Ethics Committee was established to formalize and affirm the Institution’s dedication to upholding the highest scientific and ethical standards in patient care, professional education, clinical research, and community welfare.
                        </p>
                    </div>
                    {/* right image */}
                    <div className="md:col-span-4">
                        <img
                            src={Doctors.src}
                            alt="Doctors"
                            className="rounded-2xl object-cover w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[350px]"
                        />

                    </div>
                </div>
            </section>

            {/* section-1 */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
                    {/* Use flex-col-reverse on mobile (default) and md:flex-row for desktop */}
                    <div className="md:col-span-4 order-last md:order-first">
                        <img
                            src={Doc1.src}
                            alt="Doc1"
                            className="rounded-2xl object-cover w-full h-[200px] sm:h-[280px] md:h-[400px] lg:h-[450px]"
                        />
                    </div>

                    {/* Text (8 cols) */}
                    <div className="md:col-span-8 order-first md:order-last">
                        <h2 className="text-[30px] mb-4 ">
                            Terms of Reference of EC
                        </h2>
                        {terms.map((term, idx) => (
                            <div key={idx} className="flex gap-3 mb-3">
                                <div className="flex-shrink-0 mt-1">
                                    <TickCircle className="w-5 h-5 text-[#2B3990]" />
                                </div>
                                <p className="mb-0">
                                    {term}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Section 2 - Roles and Responsibility */}
            <section className="max-w-7xl mx-auto px-4 md:px-4 py-6 sm:py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start">

                    {/* Text Column */}
                    <div className=" md:col-span-8">
                        <h2 className="text-[30px] mb-4">
                            Roles and Responsibility of EC
                        </h2>
                        {roles.map((role, idx) => (
                            <div key={idx} className="flex gap-3 mb-3">
                                <div className="flex-shrink-0 mt-1">
                                    <TickCircle className="w-5 h-5 text-[#2B3990]" />
                                </div>
                                <p className="mb-0">
                                    {role}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Image Column */}
                    <div className=" md:col-span-4">
                        <img
                            src={Doc2.src}
                            alt="Doc2"
                            className="rounded-2xl object-cover w-full 
                   h-[200px] sm:h-[260px] md:h-[380px] lg:h-[420px]"
                        />
                    </div>

                </div>
            </section>



            <section className='max-w-7xl mx-auto px-4  md:px-0 py-6 md:py-10'>
                <h2 className="text-[24px] mb-7 mt-5">
                    Composition of the Ethics Committee
                </h2>
                <div className='text-center mb-9'>
                    <EthicsCommitteTable />
                </div>
            </section>

            {/* <section>
                <Bookappointment />
            </section> */}

        </div>
    );
};

export default EthicsCommitte;
