'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Banner from "@/assets/careers/career.webp";
import Link from "next/link";
import Nurse from "@/assets/careers/nurse.png";
import Wellness from "@/assets/careers/wellness.svg";
import Cafeteria from "@/assets/careers/cafeteria.svg";
import Progression from "@/assets/careers/progression.svg";
import Versatility from "@/assets/careers/versality.svg";
import { ArrowUpRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";

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
const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Careers", href: "/careers" },
];

const Careers = () => {
    return (
        <div>
            <section className="relative px-7  hero-section -mt-28 mb-hero-section">
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="pl-8 md:pl-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mb-3 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[40px] font-bold mb-4"
                        >
                            Careers at Sudha Multispeciality Hospitals
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-white mb-6"
                        >
                            Be part of a team dedicated to health and healing.
                        </motion.p>

                        <Link
                            href="#"
                            className="btn-white ">
                            Apply Now  <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="absolute bottom-0 right-0  z-30 hidden md:block">
                        <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-5">
                                <h3 className="text-[36px] font-extrabold text-[#2B3990]">40+</h3>
                                <p className="text-[16px] text-black font-bold">
                                    Years of Trusted <br />
                                    Expertise in <br />
                                    Healthcare
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 h-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
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
            {/* Section 1 */}
            <section className="max-w-7xl mx-auto py-16">
                <div className="flex flex-col md:flex-row items-center gap-10 rounded-xl">
                    <div className="w-full md:w-1/2">
                        <div>
                            <span className="bg-white text-[#2B3990] px-5 mb-5 py-2 rounded-full text-sm font-semibold">
                                Our Culture
                            </span>
                        </div>

                        <h2 className="text-[30px] mb-4 mt-3">Careers at Sudha</h2>

                        <p className="mb-3 mt-3">
                            Sudha Multispeciality Hospital was founded with a deep commitment to serving humanity through
                            advanced medical science and compassionate care.
                        </p>
                        <p>
                            What began as a small maternal and child care facility has now grown into a full-fledged multispeciality
                            tertiary care center, offering a wide range of medical services to people from all walks of life. Our vision is to
                            deliver healthcare with empathy and excellence—ensuring that every patient receives accessible, safe, effective,
                            and efficient treatment of the highest standards.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2">
                        <img
                            src={Nurse.src}
                            alt="Nurse"
                            className="rounded-3xl object-cover w-full h-[250px] md:h-[400px]"
                        />
                    </div>
                </div>
            </section>


            {/* Section 2 */}
            {/* <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row items-start gap-10 rounded-xl">
                    <div className="w-full md:w-1/2">
                        <img
                            src={Nurse.src}
                            alt="Nurse"
                            className="rounded-2xl object-cover w-full h-[250px] md:h-[400px]"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="inline-block px-5 py-2 mb-4 font-semibold bg-white text-[#2B3990] rounded-full">
                            Our Culture
                        </div>

                        <h2 className="text-2xl md:text-[30px] mb-2">Careers at Sudha</h2>
                        <h3 className="text-lg font-bold">Sudha Hospital</h3>

                        <p className="mb-3 mt-3">
                            Sudha Multispeciality Hospital was founded with a deep commitment to serving humanity through
                            advanced medical science and compassionate care.
                        </p>

                        <p>
                            What began as a small maternal and child care facility has now grown into a full-fledged multispeciality
                            tertiary care center, offering a wide range of medical services to people from all walks of life. Our vision is to
                            deliver healthcare with empathy and excellence—ensuring that every patient receives accessible, safe, effective,
                            and efficient treatment of the highest standards.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Card Section */}
            <section className="text-center py-16 max-w-7xl mx-auto">
                {/* Badge */}
                <div className="inline-block mb-4 px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm">
                    Find Your Best Path
                </div>

                {/* Heading */}
                <h2 className="text-[24px] md:text-[30px]  mb-10">
                    Opportunities at Sudha Multispeciality Hospital
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-6  transition">
                        <img
                            src={Wellness.src}
                            alt="Wellness"
                            className="mx-auto mb-4 h-[60px] w-[60px]"
                        />
                        <h3 className="text-lg  text-black">Wellness Check</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Comprehensive yearly checkup for employees
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-6  transition">
                        <img
                            src={Cafeteria.src}
                            alt="Cafeteria"
                            className="mx-auto mb-4 h-[60px] w-[60px]"
                        />
                        <h3 className="text-lg  text-black">Cafeteria Subsidy</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Subsidized food & beverages in the staff canteen
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-6  transition">
                        <img
                            src={Progression.src}
                            alt="Progression"
                            className="mx-auto mb-4 h-[60px] w-[60px]"
                        />
                        <h3 className="text-lg  text-black">Progression</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Grow through learning and experience
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl p-6  transition">
                        <img
                            src={Versatility.src}
                            alt="Versatility"
                            className="mx-auto mb-4 h-[60px] w-[60px]"
                        />
                        <h3 className="text-lg  text-black">Versatility</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Thrive in diverse roles and challenges
                        </p>
                    </div>
                </div>
            </section>




            <section className=" max-w-7xl mx-auto py-16">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 w-full">
                    <div>
                        <div className="inline-block mb-3 px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm">
                            Open Positions
                        </div>
                        <h2 className="text-[22px] md:text-[30px] ">
                            It's Time to Change The Future Of Healthcare
                        </h2>
                    </div>

                    <div className="mt-5 md:mt-0">
                        <button className="btn-diagonal ">
                            Explore More <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Job Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Job Card 1 */}
                    <div className="bg-white rounded-2xl p-6  transition flex flex-col h-full">
                        <h3 className="text-lg  text-black mb-2">
                            Senior Branding Executive
                        </h3>
                        <p className="text-sm  mb-6">Experience: 3 – 5 years</p>
                        <div className="mt-auto text-right">
                            <a
                                href="#"
                                className="text-[#2B3990] font-semibold text-sm inline-flex items-center hover:underline"
                            >
                                Apply Now <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Job Card 2 */}
                    <div className="bg-white rounded-2xl p-6  transition flex flex-col h-full">
                        <h3 className="text-lg  text-black mb-2">Nursing</h3>
                        <p className="text-sm  mb-6">Experience: 0 – 3 years</p>
                        <div className="mt-auto text-right">
                            <a
                                href="#"
                                className="text-[#2B3990] font-semibold text-sm inline-flex items-center hover:underline"
                            >
                                Apply Now <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Careers;
