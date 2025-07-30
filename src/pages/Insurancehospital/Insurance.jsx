"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/Insurance/banner1.png";
import Image from "next/image";
import Patient from "@/assets/Insurance/patient.jpg";
import Icici from "@/assets/Insurance/icici.png";
import Sbi from "@/assets/Insurance/sbi.png";
import Bajaj from "@/assets/Insurance/bajaj.png";
import Niva from "@/assets/Insurance/hdfc.png";
import Tata from "@/assets/Insurance/tata.png";
import Hdfc from "@/assets/Insurance/hdfc.png";
import Scheme from "@/assets/Insurance/pre-auth.webp";
import Emergency from "@/assets/Insurance/emergency.jpg";
import hospitalize from "@/assets/Insurance/hospital.webp";
import Preauth from "@/assets/Insurance/admission.webp";
import Discharge from "@/assets/Insurance/discharge.webp";

import CMCHIS from "@/assets/Insurance/CMCHIS.jpg";

import Check from "@/assets/Insurance/check.svg";
import Contact from "@/assets/Insurance/bg-contact.webp";
import Phone from "@/assets/Insurance/phone.svg";
import Email from "@/assets/Insurance/email.svg";
import Marquee from "react-fast-marquee";
import "./Insurance.css"

const Companies = [Icici, Sbi, Bajaj, Niva, Tata, Hdfc];

const Insurance = () => {
  const [active, setActive] = useState("Planned Admission");

const buttons = [
  "Planned Admission",
  "Emergency Admission",
  "Hospitalisation",
  "Pre-Authorisation",
  "Discharge Process",
];


  const Content = [
    {
      image: Scheme,
      description:
        (
          <>
          <h2 className="text-[26px] text-black mb-3"> Planned Admission</h2>
            <p className="mb-3">For scheduled treatments, patients can visit Sudha Hospital with their CMCHIS–PMJAY card, valid ID proof, and referral if available. Our front office and insurance desk will assist with initial registration and eligibility verification. </p>
            <p className="mb-3">Once the treating doctor confirms the need for hospitalization, our insurance coordinator prepares a pre-authorization request. This includes a summary of the diagnosis, treatment plan, and estimated cost. </p>
            <p className="mb-3">The request is sent to the insurance authority for approval. Once approved, the admission process is completed, and patients are admitted without any upfront payment. Our goal is to ensure a smooth and informed experience from the very beginning.  </p>
          </>
        ),
    },
    { image: Emergency, description: (
          <>
          <h2 className="text-[26px] text-black mb-3"> Emergency Admission</h2>
            <p className="mb-3">In medical emergencies, Sudha Hospital prioritizes immediate treatment. Patients are admitted right away, and the clinical team starts providing care without waiting for formalities. </p>
            <p className="mb-3">The insurance desk ensures that all treatments and services provided align with CMCHIS–PMJAY scheme guidelines. Any updates or extensions to the treatment plan are documented and submitted if needed.   </p>
            <p className="mb-3">The insurance coordinator follows up closely to ensure swift approval from the concerned authority. This allows patients to access urgent care under the scheme without delay or financial burden during critical times.   </p>
          </>
        ), },
    { image: hospitalize, description: (
          <>
          <h2 className="text-[26px] text-black mb-3"> Hospitalisation</h2>
            <p className="mb-3">During hospitalization, patients continue to receive expert medical care as per the approved treatment plan. Our doctors and nurses monitor the patient closely to ensure effective recovery. </p>
            <p className="mb-3">The insurance desk ensures that all treatments and services provided align with CMCHIS–PMJAY scheme guidelines. Any updates or extensions to the treatment plan are documented and submitted if needed. </p>
            <p className="mb-3">Throughout the hospital stay, our staff remains available to answer patient and family queries. We focus on both medical excellence and a supportive environment to promote healing.  </p>
          </>
        ), },
    { image: Preauth, description: (
          <>
          <h2 className="text-[26px] text-black mb-3"> Pre-Authorisation</h2>
            <p className="mb-3">Pre-authorization is a mandatory step before cashless treatment begins. Once a diagnosis is made, the treating doctor prepares a clinical summary and treatment recommendation.  </p>
            <p className="mb-3">This information, along with patient details and required documents, is compiled and submitted to the CMCHIS–PMJAY approval authority through the online portal.  </p>
            <p className="mb-3">Our insurance coordinator follows up regularly to expedite the approval process. Once clearance is received, the patient is notified, and treatment can proceed without upfront payment concerns.  </p>
          </>
        ), },
    { image: Discharge, description: (
          <>
          <h2 className="text-[26px] text-black mb-3">Discharge Process</h2>
            <p className="mb-3">After the successful completion of treatment, the discharge process begins. The medical team prepares a discharge summary, including post-treatment instructions.   </p>
            <p className="mb-3">After the successful completion of treatment, the discharge process begins. The medical team prepares a discharge summary, including post-treatment instructions.   </p>
            <p className="mb-3">Once the approval is received, the patient is discharged. Any follow-up advice or medication details are clearly explained to ensure a smooth transition from hospital to home.   </p>
          </>
        ), },
  ];

const Activeindex = buttons.indexOf(active);
const Activecontent = Content[Activeindex] || { image: null, description: "Content not available." };


  const items = [
    "Interventional Radiology",
    "Cardiothoracic Surgery",
    "Oncology (Radiation therapy)",
    "Interventional Radiology",
    "Smart Card (CM Scheme Card) issued by Tamil Nadu Govt",
    "Old Age Pensioner Card with VAO certificate",
    "Ration Card (Old and New)",
    "Uzhavar Pathukappu Card",
    "Birth Certificate (for children whose name is yet to be added in the ration card)",
    "Srilankan refugees' card with VAO certificate",
  ];

  return (
    <div>
       <section className="relative -mt-20 lg:-mt-[100px] m-10">
         {/* Banner Container */}
         <div
           className="relative top-6 max-w-full mx-auto px-4 py-36 z-10 text-white bg-center bg-no-repeat bg-cover lbg-contain rounded-3xl overflow-hidden banner"
           style={{ backgroundImage: `url(${Banner.src})` }}
         >
           <div className="pl-8 md:pl-20">
            {/* Breadcrumb */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-4 text-white">
              Home / Facilities / Insurance
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[44px] font-bold mb-4"
            >
              Insurance
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              Healing Made Easy with Cashless Insurance Support.
            </motion.p>
          </div>

          <div className="absolute bottom-[20px] hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990]  p-4 rounded-xl  w-[220px]">
            <h3 className="text-[36px] font-bold">40+</h3>
            <p className="text-lg leading-snug text-black font-semibold">
              Years of Trusted <br />
              Expertise in <br />
              Healthcare
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto   relative">
        <div className="flex flex-col md:flex-row items-center justify-center py-16">
          {/* Left: Text Section */}
          <div className="w-full md:w-1/2  h-full">
            <div className="font-semibold text-blue-800 bg-white inline-block px-5  py-2 rounded-full mb-3">
              Insurance
            </div>
            <h2 className="text-[30px] pb-5">
              Insurance Support
            </h2>
            <p className="">
              Sudha Hospital is empanelled with various health insurance schemes, offering eligible patients the benefit of cashless treatment. Our dedicated insurance support team ensures smooth coordination and assistance throughout the process, from verifying eligibility and obtaining approvals to managing documentation. We are committed to providing accessible, affordable care while helping patients and families focus on recovery without the stress of financial procedures. For more details, kindly contact our insurance helpdesk.
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="w-full md:w-1/2 mx-auto flex items-end  justify-end">
            <Image
              src={Patient}
              alt="Patient"
              className="rounded-2xl w-[80%] mx-auto h-[340px] object-cover"
            />
          </div>
        </div>

        <div className="py-16">
          <div className="flex justify-center items-center">
            <h2 className="text-[30px] font-bold pb-5">
              Insurance Companies
            </h2>
          </div>
          <div className="flex justify-center items-center flex-wrap pb-10">
            <Marquee
              speed={50}
              gradient={false}
              pauseOnHover={true}
              className="mt-5"
            >
              {Companies.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center p-4"
                >
                  <Image
                    src={item}
                    width={150}
                    height={150}
                    alt="Comapnies"
                    className="rounded-2xl"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Admission procedure under cashless scheme */}
        <section className="py-12 px-4 bg-white rounded-3xl">
          <div className=" flex flex-col justify-center items-center text-center pb-10">
            <div className=" font-semibold bg-blue inline-block px-6 py-3 rounded-full mb-4">
              Government Scheme
            </div>
            <h2 className="text-[30px] pb-5">
              Cashless Treatment Process Under <br /> CMCHIS–PMJAY
            </h2>


            <div className="flex justify-center w-full px-4">
              <div className="flex flex-wrap justify-center gap-3 bg-[#F0F7FD] p-3   max-w-7xl rounded-2xl">
                {buttons.map((label) => (
                  <button
                    key={label}
                    onClick={() => setActive(label)}
                    className={`px-4 py-2 text-sm rounded-lg font-semibold whitespace-nowrap ${active === label
                        ? "bg-[#2B3990] text-white"
                        : "text-black hover:bg-blue-100"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 rounded-xl px-6 mt-12">
              <div className="flex w-full md:w-1/2 ">
                <Image
                  src={Activecontent.image}
                  alt="Discharge Process"
                  className="rounded-xl w-full h-[340px] object-cover"

                />
                {/* <Image
                src={Scheme}
                alt="Discharge Process"
                className="rounded-xl w-full h-auto object-cover"
                style={{height:"300px",width:"450px"}}
              /> */}
              </div>

              <div className="w-full md:w-1/2 text-start space-y-4 ">
                <p>{Activecontent.description}</p>

              </div>
            </div>

            {/* <div className="w-full md:w-1/2">
              <Image
                src={Scheme}
                alt="Discharge Process"
                className="rounded-xl w-full h-auto object-cover"
                style={{height:"300px",width:"550px"}}
              />
            </div>

            <div className="w-full md:w-1/2 text-[#444] text-sm text-start space-y-4 tracking-[0.03em]">
             <p>De</p>
            </div>
          </div> */}
          </div>
        </section>


        {/* Comprehensive Health Insurance Scheme (CMCHIS - PMJAY) */}

        <div className=" flex flex-col justify-center items-center text-center p-5 rounded-lg pt-16">
          <div className="px-5  py-2 font-semibold text-primary-blue bg-white inline-block rounded-full mb-3">
            Health Insurance Scheme 
          </div>
          <h2 className="text-[30px] font-bold pb-2">
            Chief Minister’s Comprehensive Health Insurance Scheme <br/> (CMCHIS – PMJAY) 
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-6 rounded-xl p-6">
          <div className="w-full md:w-1/2 text-[#444] text-sm text-start space-y-4 tracking-[0.03em]">
            <p className="text-[#5E566A] font-semibold">
              Sudha Hospital is recognised under the Tamil Nadu Chief Minister’s Chief Minister’s Comprehensive Health Insurance Scheme (CMCHIS – PMJAY) to provide treatments to the patients in the following specialities 
            </p>
            <ul className="list-none space-y-2">
              {items.slice(0, 4).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Image src={Check} alt="check" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[#5E566A] font-semibold">
              This scheme is applicable to the CMCHIS card holders. The following documents (originals) are necessary for the
            </p>

            <ul className="list-none space-y-2">
              {items.slice(4).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Image src={Check} alt="check" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[#5E566A] font-semibold">
              For further information regarding the CM scheme in Sudha Hospital,
              kindly contact the Liaison officer / staff in 'Tamil Nadu Chief
              Minister's Comprehensive Health Insurance Scheme
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={CMCHIS}
              alt="Discharge Process"
              className="rounded-xl w-full h-auto object-cover"
             
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 py-16">
        {/* Left - Contact Info */}
        <div className="bg-[#F5FAFF] rounded-2xl p-6 space-y-6">
          {/* Private Insurance Section */}
          <div>
            <h3 className="text-[#2B3990] text-[18px] mb-2">
              For Private Insurance / TPA
            </h3>
            <p className=" mt-2 mb-2">(Mon - Sat) 8:30 am - 10:00 pm</p>
            <p className=" mb-3">(Sun) 9:00 am - 5:00 pm</p>

            <div className="flex items-center gap-2 text-[14px] font-bold mt-6 text-[#2B3990]">
              <Image src={Phone} alt="Phone" width={32} height={32} />
              <span>+91 0422-4305676</span>
              <span>, 0422-4305207</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] font-bold  text-[#2B3990] mt-2">
              <Image src={Email} alt="Email" width={32} height={32} />
              <span>insurance@sudhahospital.com</span>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div>
            <h3 className="text-[#2B3990] text-[18px]">For CMCHIS</h3>
            <p className="mt-2 mb-2">(Mon - Sat) 8:30 am - 6:00 pm</p>
            <div className="flex items-center gap-2 text-[14px] font-bold  text-[#2B3990] mt-4">
              <Image src={Phone} alt="Phone" width={32} height={32} />
              <span>+91 0422-4305676</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
          <Image
            src={Contact}
            alt="Virtual Doctor"
            layout="fill"
            objectFit="cover" // Ensures image covers the whole area
            className="rounded-2xl"
          />
          <div className="absolute inset-0 bg-opacity-80 rounded-2xl flex flex-col justify-end p-6 text-white">
            <h3 className="text-[24px] font-semibold mb-2">
              Virtual Care from Every Where
            </h3>
            <p className="text-white text-sm mb-4">
              Experience the great virtual care from anywhere and connect with
              medical professionals for expert guidance.
            </p>
            <button className="bg-white text-[#2B3990] font-semibold text-sm pt-3 pb-3 pr-7 pl-7 rounded-full w-fit hover:bg-gray-100 transition">
              Call for More Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
