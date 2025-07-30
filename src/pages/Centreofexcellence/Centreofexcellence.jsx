'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Banner from "@/assets/home/about/why-sudha.webp";
import Heart from "@/assets/centreofexcellence/heart.webp";
import Brain from "@/assets/centreofexcellence/brain.webp";
import Lungs from "@/assets/centreofexcellence/pulmonology.webp";
import Motherchild from "@/assets/centreofexcellence/mother-child.webp";
import Cancercentre from "@/assets/centreofexcellence/cancer.webp";
import Mother from "@/assets/centreofexcellence/fertility.webp";
import HospitalCard from "@/components/Hospital";
import hospitalOne from "@/assets/home/cards/c1.svg";
import Checklight from "@/assets/home/check-light.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";

const hospitalscards = [
    {
        number: <h3 className="text-[48px] text-[#2B3990]">40+</h3>,
        title: (
            <p className="text-md font-bold text-black">Years of Experience</p>
        ),
        link: "/op-centre",
        icon: hospitalOne,
    },
    {
        number: <h3 className="text-[48px] text-[#2B3990]">300+</h3>,
        title: <p className="text-md font-bold text-black">Patient Beds</p>,
        link: "/maternity",
        icon: hospitalTwo,
    },
    {
        number: <h3 className="text-[48px] text-[#2B3990]">24+</h3>,
        title: <p className="text-md font-bold text-black">Departments</p>,
        link: "/heart-care",
        icon: hospitalThree,
    },
    {
        number: <h3 className="text-[48px] text-[#2B3990]">100+</h3>,
        title: <p className="text-md font-bold text-black">Doctor's</p>,
        link: "/heart-care",
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

const services = [
    'Coronary Angiography ',
    'Coronary Angioplasty ',
    'Pacemaker Implantation ',
    'Peripheral Vascular Stenting ',
    'Complex Heart Surgeries',
    'Paediatric Cardiology ',
    'Preventive Cardiology ',
    'Non-Invasive Cardiology ',

];

const servicespulmonology = [
    'Asthma',
    'Chronic Obstructive Pulmonary Disease (COPD)',
    'Interstitial Lung Disease ',
    'Tuberculosis (TB)',
    'Pneumonia',
    'Fungal and bacterial lung infections',
    'Paediatric Pulmonology ',
    'Pulmonology Surgeries ',

];
const servicesneurology = [
    'Micro Neurosurgical Tumour Removal',
    'Stereotactic surgery (Pinhole/Keyhole Brain Biopsy)',
    'Skull Base Surgery ',
    'Paediatric Neurology ',
    'Neurosurgery ',
    'Epilepsy Surgeries ',
    'Stereotactic Surgery ',
    'Stroke Evaluation ',

];
const servicesmother = [
    'Pre-natal Care ',
    'Post-natal Care ',
    'Paediatrics ',
    'Maternity Care',
    'Gynaecology  ',
    'Painless Delivery',
    'Dietetics ',


];

const servicescancer = [
    'Brain Cancer',
    'Breast Cancer ',
    'Cervical Cancer  ',
    'Colorectal Cancer ',
    'Endometrial Cancer   ',
    'Lung Cancer ',
    'Lymphoma Cancer  ',
    'Renal Cancer',


];

const servicesfertility = [
    'IVF ',
    'IUI ',
    'ICSI ',
    'Fertility Checkup ',
    'PCOD & PCOS ',
    'Laparoscopy ',
    'Male Infertility',
    'Female Infertility',


];

const Centreofexcellence = () => {
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
                            className=" mb-4 text-white"
                        >
                            Home / Centre of Excellence
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px]  mb-4"
                        >
                            Centre of Excellence
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className=" mb-4 text-white"
                        >
                            Trust Us to Guide Your Wellness Journey
                        </motion.p>
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

            <section>
                <div className="max-w-7xl mx-auto pt-16 pb-16 h-full">
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

            <section className="text-center  py-16">
                <div className="flex justify-center">
                    <h5 className="bg-white text-[#2B3990] px-5  py-2 rounded-full text-sm font-semibold">
                        Centre of Excellence
                    </h5>
                </div>

                <h2 className="text-[30px]  pt-3">
                    Delivering Excellence Through <br /> Specialised Healthcare Services
                </h2>

            </section>

            {/*Cardiology-card  */}
            <section className="bg-white rounded-3xl  p-8  max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start ml-18">
                <div className="w-full md:w-1/3">
                    <Image
                        src={Heart}
                        alt="Cardiology"
                        className="rounded-2xl object-cover w-full h-[380px] "
                        placeholder="blur"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 space-y-4 ml-5">
                    <h3 className="text-[24px]">Cardiology</h3>
                    <p className="mb-5">
                        Our Cardiology department offers expert care for a wide range of heart conditions, guided by experienced cardiologists and supported by advanced technology. From emergency interventions to chronic disease management, we focus on personalized treatment, early detection, and long-term heart health. Patients receive comprehensive cardiac care through a team-based approach that ensures timely diagnosis and effective outcomes.
                    </p>

                    {/* Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        {services.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <Image src={Checklight} alt="tick" width={24} height={24} />
                                <span className="text-[14px] font-semibold ">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pulmonology-card */}
            <section className="bg-white rounded-3xl  p-8 max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-6 items-start mt-8">
                <div className="w-full md:w-1/3">
                    <Image
                        src={Lungs}
                        alt="Pulmonology"
                        className="rounded-2xl object-cover w-full h-[380px]"
                        placeholder="blur"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 space-y-4">
                    <h3 className="text-[24px] mb-0 ">Pulmonology</h3>
                    <p className="mb-5">
                        The Pulmonology department provides specialized care for all respiratory conditions, blending expert consultation with advanced imaging and diagnostic tools. Our focus is on accurate identification of lung-related disorders, prompt medical management, and long-term respiratory health. Each treatment plan is tailored to help patients breathe easier, recover faster, and manage chronic lung issues with confidence and ongoing support.
                    </p>

                    {/* Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        {servicespulmonology.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <Image src={Checklight} alt="tick" width={24} height={24} />
                                <span className="text-[14px] font-semibold ">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Neurology-card  */}
            <section className="bg-white rounded-3xl  p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start ml-18 mt-8">
                <div className="w-full md:w-1/3">
                    <Image
                        src={Brain}
                        alt="Cardiology"
                        className="rounded-2xl object-cover w-full h-[380px]"
                        placeholder="blur"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 space-y-4">
                    <h2 className="text-[24px] mb-0">Neurology</h2>
                    <p className="mb-5">
                        Our Neurology team delivers thorough evaluation and treatment for disorders affecting the brain, spinal cord, and nervous system. We combine state-of-the-art imaging with clinical expertise to diagnose complex neurological issues early and manage them effectively. From emergency neurological care to long-term rehabilitation, our patient-focused approach ensures the highest level of safety and support throughout.
                    </p>

                    {/* Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        {servicesneurology.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <Image src={Checklight} alt="tick" width={24} height={24} />
                                <span className="text-[14px] font-semibold ">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Mother And Child Care -card  */}
            <section className="bg-white rounded-3xl  p-8 max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-6 items-start mt-8">
                <div className="w-full md:w-1/3">
                    <Image
                        src={Motherchild}
                        alt="Motherchild"
                        className="rounded-2xl object-cover w-full h-[380px]"
                        placeholder="blur"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 space-y-4">
                    <h2 className="text-[24px] mb-0">Mother and Child Care </h2>
                    <p className="mb-5">
                        Our Mother and Child Care unit ensures holistic health services for women and children, focusing on safety, comfort, and expert medical attention at every stage. From pregnancy to delivery, and from newborn care to pediatric support, our multidisciplinary team works together to offer comprehensive, compassionate care for both mothers and their little ones.
                    </p>

                    {/* Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        {servicesmother.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <Image src={Checklight} alt="tick" width={24} height={24} />
                                <span className="text-[14px] font-semibold ">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Cancer Center-card  */}
            <section className="bg-white rounded-3xl  p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start ml-18 mt-8">
                <div className="w-full md:w-1/3">
                    <Image
                        src={Cancercentre}
                        alt="Cancercentre"
                        className="rounded-2xl object-cover w-full h-[380px]"
                        placeholder="blur"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 space-y-4">
                    <h2 className="text-[24px] mb-0">Cancer Centre</h2>
                    <p className="mb-5">
                        Our Cancer Care team offers compassionate and comprehensive treatment tailored to each patient’s diagnosis and stage of illness. Combining advanced technology with multidisciplinary expertise, we focus on early detection, accurate diagnosis, and holistic care. We aim to provide not just treatment, but strength, support, and hope to every individual facing cancer.
                    </p>

                    {/* Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        {servicescancer.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <Image src={Checklight} alt="tick" width={24} height={24} />
                                <span className="text-[14px] font-semibold ">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Sudha Fertility Centre -card  */}
            <section className="bg-white rounded-3xl  p-8 max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-6 items-start mt-8 pb-16">
                <div className="w-full md:w-1/3">
                    <Image
                        src={Mother}
                        alt="Mother"
                        className="rounded-2xl object-cover w-full h-[380px]"
                        placeholder="blur"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 space-y-4">
                    <h2 className="text-[24px] mb-0">Fertility Care </h2>
                    <p className="mt-5">
                        The Fertility Care division supports individuals and couples with personalized reproductive solutions grounded in empathy and clinical excellence. With a focus on emotional wellbeing and transparent guidance, we help patients understand their fertility health and choose the most effective path forward. Our goal is to make the journey to parenthood as smooth, safe, and successful as possible.
                    </p>

                    {/* Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        {servicesfertility.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <Image src={Checklight} alt="tick" width={24} height={24} />
                                <span className="text-[14px] font-semibold ">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Centreofexcellence;
