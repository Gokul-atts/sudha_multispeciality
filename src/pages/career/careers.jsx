'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Banner from "@/assets/careers/banner.png";
import Link from "next/link";
import Nurse from "@/assets/careers/nurse.png";
import Wellness from "@/assets/careers/wellness.svg";
import Cafeteria from "@/assets/careers/cafeteria.svg";
import Progression from "@/assets/careers/progression.svg";
import Versatility from "@/assets/careers/versality.svg";
import { ArrowUpRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Careers", href: "/careers" },
];

const Careers = () => {
    return (
        <div>
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
                            className="mb-3 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px] font-bold mb-4"
                        >
                            Careers
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-white mb-6"
                        >
                            Explore Your Medical Career Here
                        </motion.p>

                        <Link
                            href="#"
                            className="btn-sidebar inline-flex text-sm   items-center px-6 py-4 bg-white text-[#2B3990] font-semibold rounded-full hover:bg-gray-100 transition"
                        >
                            Job Openings  <ArrowUpRight className=" w-5 h-5" />

                        </Link>
                    </div>

                    <div className="absolute bottom-5 right-4 sm:right-10 md:right-[-0px] z-30 hidden md:block">
                        <div className="w-[220px] overflow-hidden rounded-tl-xl  rounded-br-xl">
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

            {/* Section 1 */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row items-start gap-10 rounded-xl">
                    <div className="w-full md:w-1/2">
                        <div>
                            <span className="bg-white text-[#2B3990] px-5 mb-5 py-2 rounded-full text-sm font-semibold">
                            Our Culture
                        </span>
                        </div>
                        

                        <h2 className="text-[30px] mb-4 mt-5">
                            Careers at Sudha
                        </h2>

                        <h3 className="text-md text font-bold">Sudha Hospital</h3>
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
                            className="rounded-2xl object-cover w-full h-[250px] md:h-[400px]"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="max-w-7xl mx-auto px-4 py-10">
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
            </section>

            {/* Card Section */}
            <section className="text-center px-4 py-10 max-w-7xl mx-auto">
                <div className="inline-block mb-4 px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full">
                    Find Your Best Path
                </div>
                <h2 className="text-[24px] md:text-[30px] font-semibold mb-6">
                    Opportunities at Sudha Multispecialty Hospital
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl p-6 ">
                        <img src={Wellness.src} alt="Wellness" className="mx-auto mb-4 h-[60px] w-[60px]" />
                        <h3 className="text-lg font-semibold text-black">Wellness Check</h3>
                        <p className="text-sm text-gray-600 mt-1">Comprehensive yearly checkup for employees</p>
                    </div>


                    <div className="bg-white rounded-2xl p-6 ">
                        <img src={Cafeteria.src} alt="Cafeteria" className="mx-auto mb-4 h-[60px] w-[60px]" />
                        <h3 className="text-lg font-semibold text-black">Cafeteria Subsidy</h3>
                        <p className="text-sm text-gray-600 mt-1">Subsidized food/ beverages in the staff canteen</p>
                    </div>


                    <div className="bg-white rounded-2xl p-6 ">
                        <img src={Progression.src} alt="Progression" className="mx-auto mb-4 h-[60px] w-[60px]" />
                        <h3 className="text-lg font-semibold text-black">Progression</h3>
                        <p className="text-sm text-gray-600 mt-1">Grow through learning and experience</p>
                    </div>


                    <div className="bg-white rounded-2xl p-6 ">
                        <img src={Versatility.src} alt="Versatility" className="mx-auto mb-4 h-[60px] w-[60px]" />
                        <h3 className="text-lg font-semibold text-black">Versatility</h3>
                        <p className="text-sm text-gray-600 mt-1">Thrive in diverse roles and challenges</p>
                    </div>
                </div>
            </section>



            <section className="px-4 md:px-14 ml-16 mr-16">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 w-full">
                    <div>
                        <div className="inline-block mb-2 px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full">
                            Open Positions
                        </div>
                        <h2 className="text-[20px] md:text-[30px] font-semibold">
                            It's Time to Change The Future Of Healthcare
                        </h2>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <button className="btn-diagonal bg-[#2B3990] text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 text-sm hover:bg-[#1f2c72] transition">
                            Explore More <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Job Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 flex flex-col justify-between h-full">
                        <h3 className="text-lg font-semibold text-black mb-2">Senior Branding Executive</h3>
                        <p className="text-sm text-[#6B7280] mb-4">Experience: 3 – 5 years</p>
                        <div className="text-right mt-auto">
                            <a
                                href="#"
                                className="text-[#2B3990] font-semibold text-sm inline-flex items-center hover:underline"
                            >
                                Apply Now <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 flex flex-col justify-between h-full">
                        <h3 className="text-lg font-semibold text-black mb-2">Nursing</h3>
                        <p className="text-sm text-[#6B7280] mb-4">Experience: 0 – 3 years</p>
                        <div className="text-right mt-auto">
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
