'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Banner from "@/assets/termsandconditions/common-banner.webp";
import Breadcrumb from "@/components/Breadcrumb";
import Link from 'next/link';


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },

];

const Termsandconditions = () => {
    return (
        <div>
            <section className="relative px-7 hero-section -mt-28 mb-hero-section">
                {/* Banner Container */}
                <div
                    className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    {/* Breadcrumb + Title */}
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-3"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[40px] mb-4"
                        >
                            Terms and Conditions
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


            <div className="max-w-7xl mx-auto px-4 py-10 " >

                  <h3 className='text-[22px]  pt-2 pb-1'>Terms & Conditions</h3>
                <p className='pt-2 pb-6'>
                    Welcome to the official website of <Link href="https://sudhahospitals.com/" className='text-blue-600'>Sudha Hospitals</Link> By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree with any part of these terms, please do not use this website. 
                </p>
                <h3 className='text-[22px] pt-2 pb-1'>1.Use of Website </h3>
                <p className='pt-2 pb-6'>
                    The information provided on this website is intended for general informational purposes only. It should not be considered a substitute for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for medical concerns. 
                </p>
                <h3 className='text-[22px] pt-2 pb-1'>2.Medical Disclaimer </h3>
                <p className='pt-2 pb-6'>
                    Sudha Hospitals does not guarantee the accuracy, completeness, or relevance of any medical content provided on this site. The website is not intended to offer specific medical advice, and any reliance on the information is solely at your own risk. 
                </p>
                <h3 className='text-[22px] pt-2 pb-1'>3.Appointment & Services </h3>
                <p className='pt-2 pb-6'>
                    Online appointment booking, inquiries, or service-related forms do not guarantee confirmation of services. Our staff will follow up for confirmation, and final decisions will be made based on availability and medical requirements. 
                </p>
                <h3 className='text-[22px] pt-2 pb-1'>4.Intellectual Property </h3>
                <p className='pt-2 pb-6'>
                    All content on this website—including text, images, graphics, logos, videos, and downloadable materials—is the property of Sudha Hospitals unless otherwise stated and is protected by applicable copyright and trademark laws. Unauthorized use, reproduction, or distribution is strictly prohibited. 
                </p>
                <h3 className='text-[22px] pt-2 pb-1'>5.Third-party Links </h3>
                <p className='pt-2  pb-6'>
                    This website may contain links to external websites that are not operated or controlled by Sudha Hospitals. We are not responsible for the content, accuracy, or privacy practices of such third-party websites. 
                </p>
                 <h3 className='text-[22px] pt-2 pb-1'>6.Limitation of Liability </h3>
                <p className='pt-2 pb-6'>
                   Sudha Hospitals and its affiliates shall not be held liable for any direct, indirect, incidental, or consequential damages arising out of or related to the use or inability to use this website, or any errors or omissions in the content. 
                </p>
                <h3 className='text-[22px] pt-2 pb-1'>7.Privacy Policy</h3>
                <p className='pt-2 pb-6'>
                   Use of this website is also governed by our Privacy Policy. By accessing this site, you agree to the practices described therein. 
                </p>

                 <h3 className='text-[22px] pt-2 pb-2'>7.Modifications to Terms </h3>
                <p className='pt-2 pb-6'>
                  Sudha Hospitals reserves the right to modify these terms at any time without prior notice. Continued use of the website after changes are posted will constitute your acceptance of the revised terms. 
                </p>

                 <h3 className='text-[22px] pt-2 pb-1'>8.Governing Law </h3>
                <p className='pt-2 pb-6'>
                 These Terms & Conditions are governed by the laws of the Republic of India. Any disputes arising from the use of this site will fall under the jurisdiction of courts located in Tamil Nadu.  
                </p>


                <p className='pt-10'>For any questions regarding these Terms & Conditions, please contact us through email or phone.  </p>
            </div>
        </div>
    );
}

export default Termsandconditions;
