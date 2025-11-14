"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/facilities/insurance-banner.webp";
import Image from "next/image";
import Patient from "@/assets/insurance/patient.jpg";
import Icici from "@/assets/insurance/icici.png";
import Sbi from "@/assets/insurance/sbi.png";
import Bajaj from "@/assets/insurance/bajaj.png";
import Niva from "@/assets/insurance/hdfc.png";
import Tata from "@/assets/insurance/tata.png";
import Hdfc from "@/assets/insurance/hdfc.png";
import Scheme from "@/assets/insurance/ex-serviceman.webp";
import Emergency from "@/assets/insurance/Scheme.jpg";
import hospitalize from "@/assets/insurance/hospital.webp";
import Preauth from "@/assets/insurance/employee-govt.webp";

import { ArrowUpRight } from "lucide-react";

import CMCHIS from "@/assets/insurance/CMCHIS.jpg";

import Check from "@/assets/insurance/check.svg";
import Contact from "@/assets/insurance/appointment.webp";

import Phone from "@/assets/insurance/phone.svg";
import Email from "@/assets/insurance/email.svg";
import Marquee from "react-fast-marquee";
import "../Insurance-hospital/Insurance.css"
import Breadcrumb from "@/components/Breadcrumb";


const faqData = [
  {
    question: "Does Sudha Hospital cover insurance?",
    answer: "Sudha Multispeciality Hospital in Erode offers insurance facilities. Patients can avail cashless or reimbursement options depending on their eligibility and policy terms. The insurance desk at the hospital will assist with the entire insurance process. ",
  },
  {
    question: "What insurance plans are accepted at Sudha Hospitals?",
    answer: "Sudha Multispeciality Hospital accepts a variety of national and private health insurance plans. The staff of insurance desk at the hospital will provide detailed guidance on eligibility and coverage.  ",
  },

  {
    question: "What is the time limit for health insurance claims?  ",
    answer: "The time limit for submitting claims depends on the terms of the individual insurance policy. Patients are advised to contact the insurance provider for specific claim timelines. ",
  },
  {
    question: "How to use health insurance in a hospital?  ",
    answer: "To use health insurance, patients must present valid insurance documents at the hospital. Sudha Multispeciality Hospital’s insurance desk assists with the process for both cashless and reimbursement options. ",
  },
  {
    question: "Is health insurance valid in all hospitals? ",
    answer: "Health insurance validity depends on whether the hospital is listed under the insurer’s network. Contact the helpline of Sudha Multispeciality hospital or insurance provider to confirm coverage. ",
  },
  {
    question: "Which illness is not covered by health insurance? ",
    answer: "Some pre-existing conditions, cosmetic procedures, and treatments not mentioned in the policy may not be covered. For detailed information, patients should consult the hospital’s insurance desk or their insurance provider.   ",
  },



];

const breadcrumbItems = [
  { label: "Home", href: "/" },

  { label: "Facilities", href: "" },

  { label: "Insurance", href: "/facilities/insurance" },
];

const Companies = [Icici, Sbi, Bajaj, Niva, Tata, Hdfc];

const Insurance = () => {
  const [active, setActive] = useState("ECHS");

  const buttons = [
    "ECHS",
    "Railway Scheme",
    "ESI ",
    "Government Employees/Pensioners",

  ];


  const sectionRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(0); // open first by default
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // when element enters and exits viewport
  });

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [showCount, setShowCount] = useState(5);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleViewMore = () => {
    setShowCount(faqData.length);
  };

  const Content = [
    {
      image: Scheme,
      description:
        (
          <>
            <h3 className="text-[26px] text-black mb-3"> ECHS </h3>
            <p className="mb-3">ECHS patients must come with a valid referral form issued by their respective polyclinic. It is compulsory to carry their ECHS medical ID card at the time of consultation or treatment. The referral and ID card together confirm their eligibility under the scheme. Without these, services cannot be extended. Patients are advised to ensure all documents are up to date and presented for smooth and uninterrupted medical care at the hospital.  </p>

          </>
        ),
    },
    {
      image: Emergency, description: (
        <>
          <h3 className="text-[26px] text-black mb-3"> Railway Scheme</h3>
          <p className="mb-3">Patients under the Railway Scheme need a referral form provided by their designated railway hospital before visiting. Along with the referral, they must bring their official railway medical ID card for verification. This process ensures proper eligibility under the scheme and allows timely access to healthcare services. Patients should verify that both documents are valid and up to date to avoid delays, making their hospital visits easier and hassle-free for treatment.  </p>
        </>
      ),
    },
    {
      image: hospitalize, description: (
        <>
          <h3 className="text-[26px] text-black mb-3"> ESI </h3>
          <p className="mb-3">ESI patients are required to present their official medical ID card whenever they visit the hospital for treatment. This card serves as proof of enrollment under the Employees’ State Insurance scheme and confirms their entitlement to healthcare benefits. Without this ID card, patients may face delays in availing services. They are advised to carry the card at every visit, ensuring smooth verification and quick access to the necessary consultations, procedures, or treatments provided under ESI.  </p>
        </>
      ),
    },
    {
      image: Preauth, description: (
        <>
          <h3 className="text-[26px] text-black mb-3"> Government Employees/Pensioners </h3>
          <p className="mb-3">Government employees and pensioners should carry either their medical ID card or Annexure form during their hospital visit. Along with this, the Aadhaar card of the primary insured person is mandatory. Employees still in service must also submit their last two months’ payslips to validate eligibility. These documents are essential for availing benefits under the scheme. Carrying all required papers ensures smooth processing, faster verification, and access to entitled medical care without unnecessary delays or rejections.    </p>
        </>
      ),
    },
    // {
    //   image: Discharge, description: (
    //     <>
    //       <h3 className="text-[26px] text-black mb-3">Discharge Process</h3>
    //       <p className="mb-3">After the successful completion of treatment, the discharge process begins. The medical team prepares a discharge summary, including post-treatment instructions.   </p>
    //       <p className="mb-3">After the successful completion of treatment, the discharge process begins. The medical team prepares a discharge summary, including post-treatment instructions.   </p>
    //       <p className="mb-3">Once the approval is received, the patient is discharged. Any follow-up advice or medication details are clearly explained to ensure a smooth transition from hospital to home.   </p>
    //     </>
    //   ),
    // },
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
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        {/* Banner Container */}
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-3 text-white">

              <Breadcrumb items={breadcrumbItems} />

            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px]  mb-4"
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

          <div className="absolute bottom-0 right-0  z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <p className="text-[16px] text-black font-bold mb-2">
                  Quality healthcare   <br />
                  backed by superior <br /> facilities
                </p>
                <h3 className="text-[20px] font-extrabold text-[#2B3990]">Since 1985</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 h-full">
        <div className="flex flex-col md:flex-row items-center justify-center py-16">

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
            <h2 className="text-[30px] pb-5">
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
          <div className="flex flex-col justify-center items-center text-center pb-10">
            {/* Heading */}
            <h6 className="font-semibold bg-blue text-[14px] inline-block px-6 py-3 rounded-full mb-4">
              Government Scheme
            </h6>
            <h2 className="text-[30px] pb-5">
              Cashless Treatment Process Under <br /> Sudha
            </h2>

            {/* Buttons */}
            <div className="flex justify-center w-full px-4">
              <div className="flex flex-wrap justify-center gap-3 bg-[#F0F7FD] p-3 max-w-7xl rounded-2xl">
                {buttons.map((label) => (
                  <button
                    key={label}
                    onClick={() => setActive(label)}
                    className={`px-4 py-2 text-sm rounded-xl font-semibold whitespace-nowrap transition ${active === label
                      ? "bg-[#2B3990] text-white"
                      : "text-black hover:bg-blue-100"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 rounded-xl px-6 mt-12 w-full max-w-7xl">
              {/* Left: Image */}
              <div className="flex w-full md:w-1/2">
                <Image
                  src={Activecontent.image}
                  alt="Discharge Process"
                  className="rounded-xl w-full h-[340px] object-cover"
                />
              </div>

              {/* Right: Text */}
              <div className="w-full md:w-1/2 text-start space-y-4 text-[#444] text-sm tracking-[0.03em]">
                <div>{Activecontent.description}</div>
              </div>
            </div>
          </div>
        </section>



        {/* Comprehensive Health Insurance Scheme (CMCHIS - PMJAY) */}

        {/* <div className=" flex flex-col justify-center items-center text-center p-5 rounded-lg pt-16">
          <div className="px-5  py-2 font-semibold text-primary-blue bg-white inline-block rounded-full mb-3">
            Health Insurance Scheme
          </div>
          <h2 className="text-[30px] font-bold pb-2">
            Chief Minister’s Comprehensive Health Insurance Scheme <br /> (CMCHIS – PMJAY)
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
        </div> */}
      </div>


      <section className="" ref={sectionRef}>
        <div>
          <div className="max-w-3xl mx-auto py-16 px-0 px-4">
            <h2 className="text-center text-[30px] mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqData.slice(0, showCount).map((item, index) => (
                <div
                  key={index}
                  className=" rounded-2xl bg-white  transition duration-300"
                >
                  <button
                    onClick={() => handleAccordionToggle(index)}
                    className="w-full text-left px-4 py-3 flex justify-between items-center  font-bold text-[16px]"
                  >
                    {item.question}
                    <h4 className="text-[16px] text-[#2b3990] ">
                      {activeAccordion === index ? "−" : "+"}
                    </h4>
                  </button>
                  {activeAccordion === index && (
                    <p className="p-4 pb-3 ">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {showCount < faqData.length && (
              <div className="text-center mt-6">
                <button
                  onClick={handleViewMore}
                  className="btn-diagonal "
                >
                  View More <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

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
            <h3 className="text-[#2B3990] text-[18px]">For Government Scheme</h3>
            <p className="mt-2 mb-2">(Mon - Sat) 8:30 am - 6:00 pm</p>
            <div className="flex items-center gap-2 text-[14px] font-bold  text-[#2B3990] mt-4">
              <Image src={Phone} alt="Phone" width={32} height={32} />
              <span>0424-245-4545</span>
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
            <h3 className="text-[24px] mb-2">
              Virtual Care from Every Where
            </h3>
            <p className="text-white text-sm mb-4">
              Experience the great virtual care from anywhere and connect with
              medical professionals for expert guidance.
            </p>
            <div>
              <button className="btn-white ">
                Call for More Information <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
