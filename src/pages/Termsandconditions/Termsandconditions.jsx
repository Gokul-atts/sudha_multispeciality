'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Banner from "@/assets/termsandconditions/banner.png";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  
  ];

const Termsandconditions = () => {
    return (
        <div>
            <section className="relative -mt-20 lg:-mt-[100px] m-10">
                {/* Banner Container */}
                <div
                    className="relative top-6 max-w-full mx-auto px-4 py-36 z-10 text-white bg-center bg-no-repeat bg-cover lbg-contain rounded-[24px] overflow-hidden banner"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    {/* Breadcrumb + Title */}
                    <div className="pl-8 md:pl-20">
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
                            className="text-[44px] mb-4"
                        >
                            Terms & Conditions
                        </motion.h1>
                    </div>

                    <div className="absolute bottom-0 right-4 sm:right-10 md:right-[-40px] z-30 hidden md:block">
                        <div className="w-[220px] shadow-md overflow-hidden rounded-tl-xl rounded-tr-xl rounded-br-xl">
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


            <div className="max-w-7xl mx-auto px-4 py-10 " >
                <p className='pt-10'>
                    Terms By accessing this website, you agree to be bound by the following Terms and Conditions of Use, all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark laws.
                </p>
                <h3 className='text-[24px] pb-2 pt-6'>Disclaimer</h3>
                <p className='pt-2'>
                    The materials on Sudha Hospital website are provided on an ‘as is’ basis. Sudha Hospital makes no warranties, expressed or implied and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose or non-infringement of intellectual property or other violation of rights. Further, Sri Ramakrishna Hospital does not warrant or make any representations concerning the accuracy, likely results or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to its website.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Limitations</h2>
                <p className='pt-2'>
                    In no event shall Sudha Hospitals or its suppliers be liable for any damages (including without limitation, damages for loss of data or profit or due to business interruption) arising out of the use or inability to use the materials on the Sudha Hospitals website, even if Sudha Hospital or a Sri Ramakrishna Hospital-authorized representative has been notified orally or in writing of the possibility of such damage. As some jurisdictions do not allow limitations on implied warranties or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Revisions and Errata</h2>
                <p className='pt-2'>
                    The materials appearing on Sudha Hospital website could include technical, typographical or photographic errors. Sudha Hospital does not warrant that any of the materials on its website are accurate, complete or current. Sri Ramakrishna Hospital may make changes to the materials contained on its website at any time without notice. Sudha Hospital does not however, make any commitment to update the materials.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Site Terms of Use Modifications</h2>
                <p className='pt-2'>
                    Sudha Hospital may revise these terms of use for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Governing Law</h2>
                <p className='pt-2 mb-10'>
                    Any claim relating to Sudha Hospital website shall be governed by the laws of the State of Tamil Nadu without regard to its conflict of law provisions.
                </p>
            </div>
        </div>
    );
}

export default Termsandconditions;
