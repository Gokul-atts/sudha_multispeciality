'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Banner from "@/assets/disclaimer/common-banner.webp";
import Breadcrumb from "@/components/Breadcrumb";
import Link from 'next/link';


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Disclamier", href: "/disclaimer" },

];
const Disclaimer = () => {
    return (
        <div>
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                {/* Banner Container */}
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className=" mb-3 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[40px] mb-4"
                        >
                            Disclaimer
                        </motion.h1>
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


            <div className="max-w-7xl mx-auto px-4 py-10  " >
                <div className='space-y-10'>


                    <div className="mt-5">
                        <h4 className='text-[24px] mb-3'>Disclaimer </h4>
                        <p className=''>
                            The information provided on the official website of <Link href="https://sudhahospitals.com/" className='text-blue-600'>Sudha Hospitals</Link> is for general informational and educational purposes only. By accessing and using this website, you acknowledge and agree to the following disclaimer:
                        </p>
                    </div>

                    <div className="mt-5">
                        <h4 className='text-[24px] mb-3'>Not a Substitute for Medical Advice  </h4>
                        <p className=''>
                            The content on this website—including articles, blog posts, videos, downloadable materials, and any other information—is not intended to replace or substitute professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare professionals regarding any medical condition or treatment options.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h4 className='text-[24px] mb-3'>No Doctor-Patient Relationship </h4>
                        <p className=''>
                            Accessing or using the website does not establish a doctor-patient relationship between you and Sudha Hospitals or any of its medical professionals. Appointments, consultations, and treatments should be scheduled directly through our official channels or in person at our facilities.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h4 className='text-[24px] mb-3'>Accuracy of Information</h4>
                        <p className=''>
                            While we strive to ensure that the content on this website is accurate, complete, and up-to-date, Sudha Hospitals makes no warranties or representations regarding the accuracy or reliability of any content. Medical knowledge and practices evolve rapidly, and the website may not reflect the most current developments.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h4 className='text-[24px] mb-3'>Third-party Content and Links</h4>
                        <p className=''>
                            The website may contain links to third-party websites or resources for convenience and reference. Sudha Hospitals is not responsible for the content, accuracy, or privacy policies of these external sites and does not endorse any products or services they offer.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h4 className='text-[24px] mb-3'>Limitation of Liability </h4>
                        <p className=''>
                            Sudha Hospitals, its affiliates, staff, and content providers shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or misuse of the information on this website. Use of the site and its content is entirely at your own risk.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h4 className='text-[24px] mb-3'>Changes to Disclaimer </h4>
                        <p className=''>
                            Sudha Hospitals reserves the right to update or modify this disclaimer at any time without prior notice. It is your responsibility to review this page periodically for any changes.
                        </p>
                    </div>

                    <div className="mt-5">

                        <p className=''>
                            If you have any concerns or require medical advice, please contact us through email or phone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Disclaimer;
