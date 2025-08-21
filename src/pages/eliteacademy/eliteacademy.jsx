'use client';

import Banner from "@/assets/fellownationalboard/Banner.png";
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import cardone from "@/assets/home/cards/1.svg";
import cardtwo from "@/assets/home/cards/2.svg";
import cardthree from "@/assets/home/cards/3.svg";
import cardfour from "@/assets/home/cards/4.svg";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import Link from "next/link";
import Bookappointment from "@/components/Bookappointment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faculties from '@/components/faculties';
import Laparoscopy from '@/assets/eliteacademy/laparoscopy.webp';
import Hysteroscopy from '@/assets/eliteacademy/hysteroscopy.png';
import Books from '@/assets/eliteacademy/books.webp'

const cards = [
    {
        icon: cardone,
        title: (
            <p className="text-md font-extrabold text-black">
                <span className="text-[#2b3990] font-extrabold">Sudha </span>Integrated <br />
                out patient centre
            </p>
        ),
        link: "/contact-us",
    },
    {
        icon: cardtwo,
        title: (
            <p className="text-md font-extrabold text-black">
                <span className="text-[#2b3990] font-extrabold"> Master </span> Health<br />
                Check Up
            </p>
        ),
        link: "/maternity",
    },
    {
        icon: cardfour,
        title: (
            <p className="text-md font-extrabold text-black">
                {" "}
                <br />
                Find a<span className="text-[#2b3990] font-extrabold "> Doctor</span>
            </p>
        ),
        link: "/find-doctor",
    },
    {
        icon: cardthree,
        title: (
            <p className="text-md font-extrabold text-black">
                <br />
                Book an
                <span className="text-[#2b3990] font-extrabold"> Appointment </span>
            </p>
        ),
        link: "/#book-appointment",
    },
];

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



const EliteAcademy = () => {

    const courses = [
        {
            title: "DNB – Anesthesiology",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Laparoscopy,
            price: 'Price',
            amt: '₹60,180.00',
            link: '/bss-vocational-education',
        },
        {
            title: "DNB – Radio Diagnosis",
            duration: "Post Diploma (DA) :  2 years",
            seats: "Approved Seats : 4 No’s",
            img: Hysteroscopy,
            price: 'Price',
            amt: '₹45,737.00',
            link: '/bss-vocational-education',
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
                            Home / Academic /  Elite Academy
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px]  mb-2"
                        >
                            Elite Academy
                        </motion.h1>

                        <motion.div className='mt-12'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Link
                                href="#"
                                className="btn-white inline-flex  text-[16px] tracking-wide items-center px-7 py-3 bg-white text-[#2B3990] font-semibold rounded-full  hover:-translate-y-[3px] transition-transform duration-200"
                            >
                                Enroll Now <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                    </div>

                    <div className="absolute bottom-6 right-4 sm:right-10 md:right-[-40px] z-30 hidden md:block mr-10">
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

            <section>
                <div className="max-w-7xl mx-auto py-8 h-full">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {cards.map((card, idx) => (
                            <motion.div key={idx} variants={item}>
                                <div className="cursor-pointer  duration-300">

                                    <ServiceCard
                                        icon={card.icon}
                                        title={card.title}
                                        link={card.link}
                                    />

                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Intro Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 rounded-xl">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2">
                        <div className="inline-block mb-4 px-4 sm:px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm sm:text-base">
                            Elite Academy
                        </div>
                        <p className="mb-4 text-sm sm:text-base text-center md:text-left">
                            Elite Academy – Sudha is a distinguished institution committed to advancing the standards of medical education and training. With a focus on academic
                            excellence, clinical expertise, and ethical practice, the academy offers a platform where aspiring and practicing healthcare professionals can refine their skills
                            under the guidance of experienced mentors. Our state-of-the-art facilities, evidence-based curriculum, and hands-on training programs ensure a learning
                            experience that meets global benchmarks.
                        </p>

                        <p className="mb-3 text-sm sm:text-base text-center md:text-left">
                            At Elite Academy, we focus on developing not just skilled professionals but compassionate caregivers who uphold integrity and drive innovation.
                            Through critical thinking, practical training, and patient-centered values, we prepare graduates to make a meaningful impact in healthcare at local,
                            national, and global levels.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={Books.src}
                            alt="Books"
                            className="rounded-2xl object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
                        />
                    </div>
                </div>
            </section>

            <section className="text-center px-4 py-6 md:px-8 lg:px-16">
                <div className="inline-block mb-4 px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm md:text-base">
                    Meet Our Expert Faculty
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-3 leading-snug">
                    Elite Academy
                </h2>
                <div className='max-w-7xl mx-auto px-4 py-10 relative'>
                    <Faculties />
                </div>
            </section>

            <section className="px-4 py-6 md:px-8 lg:px-16">
                <div className="inline-block mb-4 px-5 py-2 font-semibold bg-white text-[#2B3990] rounded-full text-sm md:text-base ml-14">
                    Diplomate of National Board (DNB)
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-3 leading-snug ml-14">
                    Academic Structure & Course Details
                </h2>
                <div className="bg-[#f0f7fd] mt-8 rounded-xl p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl  flex flex-col md:flex-row overflow-hidden"
                            >
                                <div className="relative w-full md:w-2/5 flex justify-center items-center p-3">
                                    <Image
                                        src={course.img}
                                        alt={course.title}
                                        className="w-full h-48 md:h-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-between p-4 w-full">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-600 mt-2 text-sm md:text-base">{course.duration}</p>
                                        <p className="text-gray-600 text-sm md:text-base">{course.seats}</p>
                                    </div>

                                    <div className="mt-4 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                        <div>
                                            <p className="text-gray-600 font-semibold text-sm md:text-base">
                                                {course.price}
                                            </p>
                                            <p className="text-black font-semibold text-base md:text-lg">
                                                {course.amt}
                                            </p>
                                        </div>
                                        <Link
                                            href={course.link}
                                            className="btn-diagonal bg-[#283593] text-white px-5 py-2 rounded-full text-sm md:text-base text-center"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section>
                <Bookappointment />
            </section>

        </div>
    );
};

export default EliteAcademy;
