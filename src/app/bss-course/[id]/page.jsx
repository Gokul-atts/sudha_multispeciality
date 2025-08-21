"use client";

import { useParams } from "next/navigation";
import { courses } from "@/constants/bssCourseDetails";
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Banner from "@/assets/fellownationalboard/Banner.png";


export default function CourseDetail() {
    const { id } = useParams();

    const course = courses.find(c => c.id === parseInt(id));

    if (!course) {
        return <div className="p-6">Course not found</div>;
    }

    return (
        <div>
            <section className="relative -mt-12 lg:-mt-24 m-10">
                <div
                    className="max-w-full mx-auto px-4 py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover lg:bg-contain"
                    style={{
                        backgroundImage: `url(${Banner.src})`,
                        minHeight: "400px"
                    }}

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
            <div className="max-w-full mx-auto p-6 grid md:grid-cols-2 gap-8 items-start">
            </div>

            {/* Left side */}
            <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-12 gap-8 items-start">

                {/* Left side */}
                <div className="md:col-span-6">
                    <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                    <p><strong>Course Code:</strong> {course.courseCode}</p>
                    <p><strong>Qualification:</strong> {course.education}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>

                    <table className="mt-6 w-full border bg-white">
                        <thead>
                            <tr>
                                <th className="text-white p-2 border bg-blue-900">SNo</th>
                                <th className="text-white p-2 border bg-blue-900">Subject Code</th>
                                <th className="text-white p-2 border bg-blue-900">Subject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* I Year */}
                            <tr>
                                <td colSpan="3" className="p-2 border bg-white font-semibold">I Year</td>
                            </tr>
                            {course.year1?.map(sub => (
                                <tr key={sub.sno}>
                                    <td className="p-2 border">{sub.sno}</td>
                                    <td className="p-2 border">{sub.code}</td>
                                    <td className="p-2 border">{sub.name}</td>
                                </tr>
                            ))}

                            {/* II Year - render only if exists */}
                            {course.year2?.length > 0 && (
                                <>
                                    <tr>
                                        <td colSpan="3" className="p-2 border bg-white font-semibold">II Year</td>
                                    </tr>
                                    {course.year2.map(sub => (
                                        <tr key={sub.sno}>
                                            <td className="p-2 border">{sub.sno}</td>
                                            <td className="p-2 border">{sub.code}</td>
                                            <td className="p-2 border">{sub.name}</td>
                                        </tr>
                                    ))}
                                </>
                            )}
                        </tbody>
                    </table>

                </div>

                {/* Right side sticky form */}
                <div className="md:col-span-6 bg-white rounded-lg p-6 sticky top-6 h-fit shadow">
                    <h2 className="text-xl font-bold mb-2">Enroll Now!</h2>
                    <p className="text-gray-600 mb-4">Personal Details</p>

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
                                className="bg-[#2B3990] hover:bg-[#1e2660] text-white py-1 px-6 rounded-full"
                            >
                                Enroll Now
                            </button>
                        </div>
                    </form>
                </div>

            </div>


        </div>
    );
}
