"use client";

import { useParams } from "next/navigation";
import { courses } from "@/constants/bssCourseDetails";
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Banner from "@/assets/fellownationalboard/banner.png";
import HospitalCard from "@/components/Hospital";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";



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
export default function CourseDetail() {
    const { id } = useParams();

    const course = courses.find(c => c.id === parseInt(id));

    if (!course) {
        return <div className="p-6">Course not found</div>;
    }

    return (
        <div>
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{
                        backgroundImage: `url(${Banner.src})`,
                        minHeight: "400px"
                    }}

                >
                    <div className="max-w-7xl mx-auto">


                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[40px] mb-3"
                        >
                            BSS Vocational Courses
                        </motion.h1>

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

            {/* Left side */}
            <section className=" py-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-start">

                    {/* Left side */}
                    <div className="md:col-span-6">
                        <h1 className="text-[30px]  mb-4">{course.title}</h1>
                        <p className="text-black mb-2"><strong>Course Code:</strong> {course.courseCode}</p>
                        <p className="text-black mb-2"><strong>Qualification:</strong> {course.education}</p>
                        <p className="text-black mb-2"><strong>Duration:</strong> {course.duration}</p>

                        <table className="mt-6 w-full border bg-white">
                            <thead>
                                <tr className="bg-[#2B3990] text-white ">
                                    <th className="px-5 py-3 text-left font-semibold letter-space text-[14px]">SNo</th>
                                    <th className="px-10 py-3 text-left font-semibold letter-space text-[14px]">Subject Code</th>
                                    <th className=" px-7 py-3 text-left font-semibold letter-space text-[14px]">Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* I Year */}
                                <tr>
                                    <td colSpan="3" className="px-5 py-3 text-center border font-semibold letter-space text-[14px]">I Year</td>
                                </tr>
                                {course.year1?.map(sub => (
                                    <tr key={sub.sno}>
                                        <td className="px-5 py-3  border bg-white font-semibold letter-space text-[14px]">{sub.sno}</td>
                                        <td className="px-5 py-3  border bg-white font-semibold letter-space text-[14px]">{sub.code}</td>
                                        <td className="px-5 py-3  border bg-white font-semibold letter-space text-[14px]">{sub.name}</td>
                                    </tr>
                                ))}

                                {/* II Year - render only if exists */}
                                {course.year2?.length > 0 && (
                                    <>
                                        <tr>
                                            <td colSpan="3" className="px-5 py-3 text-center border  font-semibold letter-space text-[14px]">II Year</td>
                                        </tr>
                                        {course.year2.map(sub => (
                                            <tr key={sub.sno}>
                                                <td className="px-5 py-3  border bg-white font-semibold letter-space text-[14px]">{sub.sno}</td>
                                                <td className="px-5 py-3  border bg-white font-semibold letter-space text-[14px]">{sub.code}</td>
                                                <td className="px-5 py-3  border bg-white font-semibold letter-space text-[14px]">{sub.name}</td>
                                            </tr>
                                        ))}
                                    </>
                                )}
                            </tbody>
                        </table>

                    </div>

                    {/* Right side sticky form */}
                    <div className="md:col-span-6 bg-white rounded-3xl p-8 sticky top-6 h-fit ">
                        <h2 className="text-[30px]  mb-2">Enroll Now!</h2>
                        <p className=" mb-4">Personal Details</p>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter full name"
                                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Mobile No */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile No <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter Mobile No"
                                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email Id"
                                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Qualification */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Qualification <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Qualification"
                                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Message - Full Width */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Leave your Message..."
                                    rows={3}
                                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            {/* Submit Button - Full Width */}
                            <div className="md:col-span-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="btn-diagonal"
                                >
                                    Enroll Now
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>



        </div>
    );
}
