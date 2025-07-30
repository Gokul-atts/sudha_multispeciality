'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Banner from "@/assets/disclaimer/Banner.png";

const Disclaimer = () => {
    return (
        <div>
            <section className="relative -mt-20 lg:-mt-[100px] m-10">
                {/* Banner Container */}
                <div
                    className="relative top-6 max-w-full mx-auto px-4 py-36 z-10 text-white bg-center bg-no-repeat bg-cover lbg-contain rounded-3xl overflow-hidden banner"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="pl-8 md:pl-20">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm mb-4 text-white"
                        >
                            Home / Disclaimer
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-4xl font-bold mb-4"
                        >
                            Disclaimer
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


            <div className="max-w-7xl mx-auto px-4 py-10 text-gray-700 text-base leading-relaxed " >
                <p className='pt-10'>
                    All the information displayed, transmitted or carried by Sudha Hospitals and its related websites including, but not limited to, directories, guides, news articles, opinions, reviews, text, photographs, images, illustrations, profiles, audio clips, video clips, trademarks, service marks and the like, collectively the “Content”, are protected by the copyright and other intellectual property laws and be informed that the content of the same is not intended to be a substitute for professional medical advice and not for solicitation of business.
                    The Content is owned by  Sudha Hospitals, its affiliates or third party licensors. You may not modify, publish, transmit, transfer, sell, reproduce, create derivative work from, distribute, repost, perform, display or in any way commercially exploit any of the Content. You agree to abide by all copyright notices and restrictions attached to any Content accessed through the Sri Ramakrishna Hospitals website and not to alter the content in any way. Permitted Use you may take a single copy of the Content displayed on the Sri Ramakrishna Hospitals for personal,
                    non-commercial use only, provided that you do not remove any trademarks, copyright and any other notice contained in such Content. You shall not archive or retain any Content in any form without written permission. The information provided in this site for the sole purpose of disseminating health information for public benefit.
                </p>
                <h1 className='text-[#000000] font-bold text-2xl pb-2 pt-6'>General Disclaimer and Limitation of Liability</h1>
                <p className='pt-2 mb-10'>
                    The Sudha Hospital’s website contains facts, views, opinions, statements and recommendations of users of the Sudha Hospitals website, advertisers, third party information providers and organizations. Sudha Hospital’s website does not represent or endorse the accuracy, completeness or reliability of any advice, opinion, statement or other information displayed, uploaded or distributed through the website. You acknowledge that any reliance upon any such opinion, advice, statement or information shall be at your sole risk.
                    Sri Ramakrishna Hospital makes no warranty or representation whatsoever regarding the website or any content, advertising services or products provided through or in connection with the website.​                </p>

            </div>
        </div>
    );
}

export default Disclaimer;
