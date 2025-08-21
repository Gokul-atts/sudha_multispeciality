"use client";
import React, { useState } from "react";
import Banner from "@/assets/facilities/lab-banner.webp";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./Laboratory.css";
import one from "@/assets/laboratory/lab-test.svg";
import Image from "next/image";
import clsx from "clsx"; // optional, or use tailwind manually
import { MdArrowOutward } from "react-icons/md";
import CampusFacilitySlider from "@/components/FacilitySlider/CampusFacilitySlider";
import ATM from "@/assets/whysudha/atm.png";
import Check from "@/assets/Insurance/check.svg";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowUpRight } from "lucide-react";


const breadcrumbItems = [
  { label: "Home", href: "/" },

  { label: "Facilities", href: "" },

  { label: "Laboratory", href: "/laboratory-services" },
];
const facilities = [
  {
    image: ATM,
    title: (
      <p className="text-primary-blue">
        Gift Shop for <br />
        the New born
      </p>
    ),
  },
  { image: ATM, title: "Canteen" },
  { image: ATM, title: "ATM" },
  { image: ATM, title: "ATM" },
  { image: ATM, title: "ATM" },
  { image: ATM, title: "ATM" },
];
const checklist = [
  "Bacterial, viral, fungal, and parasitic detection",
  "Culture and antimicrobial susceptibility testing ",
  " Molecular diagnostic techniques ",
  "Quality and authenticity assured ",
  "Supports hospital-wide infection control"
];
const checklist1 = [
  "Histopathology, cytopathology, hematopathology services",
  "Accurate disease staging and monitoring ",
  " International diagnostic protocols ",
  "Timely reports for multidisciplinary use",

];
const checklist2 = [
  "Microscopic tissue analysis for early disease detection ",
  "Focus on cancer, inflammation, degeneration",
  " Advanced tissue processing equipment ",
  "Critical for early diagnosis and planning ",

]; const checklist3 = [
  "Glucose, liver, renal, and electrolyte analysis ",
  "Lipid profile and metabolic screenin",
  " Fully automated, high-accuracy analysers",
  "Aids in monitoring chronic conditions ",

];

const checklist4 = [
  "CBC, clotting tests, and peripheral smears ",
  "Early detection of anaemia and blood cancers",
  " Microscopic blood cell morphology studies",
  "Fast and reliable reporting ",

];
const checklist5 = [
  "Autoimmune and allergy testing  ",
  " ELISA and immunofluorescence-based diagnostics ",
  " ANA, RF, and immunoglobulin level analysis ",
  "Early identification of immune disorders ",

];
const checklist6 = [
  "Pap smear screening for cervical cancer ",
  " FNAC for lumps, swellings, and lesions ",
  " Early cancer and infection detection  ",
  "Reviewed by expert cytologists",

];
const checklist7 = [
  "Thyroid, reproductive, and adrenal hormone testing ",
  " Diagnosis of endocrine and metabolic disorders  ",
  " High-sensitivity, accurate assays  ",
  "Essential for fertility and hormonal health",

];
const checklist8 = [
  "Semen analysis for fertility evaluation ",
  " Sperm count, motility, and morphology checks ",
  " Urinary and salivary stone analysis  ",
  "Diagnosis of urological and metabolic issues",

];
const checklist9 = [
  "IVF and ICSI procedures for infertility treatment ",
  "Advanced embryo and sperm handling techniques ",
  "Sterile, high-tech lab infrastructure ",
  "Trained embryologists ensuring high success rates ",

];
const tabs = [
  {
    title: "Microbiology",
    content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">Microbiology </h3>
        <p className="mt-5">
          Our Microbiology lab specializes in identifying bacterial, viral, fungal, and parasitic infections using culture techniques, antimicrobial susceptibility testing, and 
          molecular diagnostics. The lab plays a vital role in infection control by detecting pathogens and guiding targeted treatment. Stringent quality control and 
          rapid turnaround make our microbiology services critical to patient recovery and hospital-wide infection prevention.
        </p>
        <p className="mt-5">
          Our lab adheres to national and international standards in microbiological practices, ensuring accuracy in detecting infectious organisms. 
          Continuous surveillance and antimicrobial resistance monitoring help clinicians choose the most effective therapy, reducing complications and 
          hospital-acquired infections. 
          </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Pathology ", content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">Pathology </h3>
        <p className="mt-5">
          The Pathology unit provides comprehensive diagnostic services including histopathology, cytopathology, and hematopathology. By analysing tissue samples, 
          biopsies, and body fluids, we aid in accurate disease diagnosis, staging, and monitoring. Our pathology lab follows international protocols to ensure high-quality 
          reports that support clinical decision-making across specialities.
        </p>
        <p className="mt-5">
          With a multidisciplinary approach, our pathology team collaborates closely with surgeons, oncologists, and physicians to provide diagnostic clarity. 
          Digital pathology tools and second-opinion reviews strengthen the reliability of reports and enhance diagnostic precision for complex cases. 
          </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist1.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Histopathology  ", content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">Histopathology </h3>
        <p className="mt-5">
          Our Histopathology section focuses on the microscopic examination of tissues to detect abnormalities like cancer, inflammatory diseases, 
          and degenerative conditions. With expert pathologists and advanced tissue processing systems, we ensure precise interpretation and timely diagnosis, 
          critical for early intervention and effective treatment planning.
        </p>
        <p className="mt-5">
          Tissue samples are processed using state-of-the-art staining and embedding methods, enabling detailed visualization of cellular structures. 
          Our histopathologists also participate in tumour boards and case discussions, ensuring that pathology findings align with clinical management strategies. </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist2.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Biochemistry ", content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">Biochemistry </h3>
        <p className="mt-5">
          The Biochemistry lab supports patient care through detailed analysis of blood and body fluids for glucose, liver enzymes, kidney function, electrolytes, lipid profile, 
          and more. Using fully automated analysers, we deliver fast, reliable results that help clinicians in diagnosing metabolic and systemic conditions such as diabetes, 
          renal failure, and liver disorders.
        </p>
        <p className="mt-5">
          All biochemical tests are regularly calibrated and validated to meet stringent accuracy standards. The lab operates round-the-clock, enabling emergency and critical 
          care departments to receive real-time biochemical support, especially in acute conditions like heart attacks and diabetic crises. </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist3.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>


      </div>
    ),
  },
  {
    title: "Haematology ", content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">Haematology  </h3>
        <p className="mt-5">
          Our Haematology lab performs a wide range of tests including complete blood count (CBC), coagulation profiles, peripheral smears, and blood cell morphology studies. 
          These tests help detect anaemia, blood cancers, infections, and clotting disorders. The lab ensures accuracy and prompt reporting, aiding in quick clinical decisions.
        </p>
        <p className="mt-5">
          Our haematology services play a pivotal role in diagnosing bone marrow disorders and hematologic malignancies through advanced techniques like flow cytometry 
          and bone marrow aspiration analysis. The integration of manual and automated methods ensures thorough evaluation of blood-related conditions. 
          </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist4.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>


      </div>
    ),
  },
  {
    title: "Immunology ", content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">Immunology  </h3>
        <p className="mt-5">
          The Immunology section offers specialized diagnostic tests for autoimmune diseases, allergic reactions, and immune deficiencies. With ELISA, immunofluorescence, 
          and other advanced testing methods, we provide accurate detection of markers such as ANA, RF, and immunoglobulin levels to guide treatment in immune-related conditions.
        </p>
        <p className="mt-5">The immunology department also supports immunotherapy and vaccine effectiveness studies by evaluating immune responses over time. 
          Our expertise is particularly beneficial in diagnosing complex autoimmune conditions such as lupus, rheumatoid arthritis, and immune thrombocytopenia. 
          </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist5.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>


      </div>
    ),
  },
  {
    title: "Cytology ", content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">Cytology  </h3>
        <p className="mt-5">
          Our Cytology unit focuses on the study of individual cells for early detection of malignancy and infections. From Pap smears to FNAC (Fine Needle Aspiration Cytology), 
          our tests are performed with precision and reviewed by expert cytologists to aid in preventive and diagnostic healthcare.
        </p>
        <p className="mt-5">
          Cytological evaluations are conducted with high attention to detail using advanced staining techniques like PAP and Giemsa. Whether for cancer screening or infectious 
          diseases, our cytology lab ensures early, non-invasive diagnosis that improves patient outcomes significantly. 
          </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist6.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>


      </div>
    ),
  },
  {
    title: "Hormonal Assay", content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">Hormonal Assay  </h3>
        <p className="mt-5">
          We offer an extensive range of hormonal assays to assess thyroid, adrenal, pituitary, reproductive, and metabolic functions. These tests are essential for diagnosing hormonal imbalances, infertility, and endocrine disorders. With high-sensitivity analysers, we ensure quick and accurate hormone level assessments.


        </p>
        <p className="mt-5">We also offer dynamic hormonal testing panels and stimulation/suppression tests that aid in diagnosing rare endocrine syndromes. Regular quality checks and internal controls are maintained to ensure reproducibility and sensitivity in each assay. </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist7.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>


      </div>
    ),
  },
  {
    title: "Sperm Analysis & Calculus ", content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">Sperm Analysis & Calculus</h3>
        <p className="mt-5">
          Our andrology services include semen analysis to evaluate male fertility and detect abnormalities in sperm count, motility, and morphology. We also analyze urinary 
          and salivary calculi for mineral content, aiding in the diagnosis and management of stone formation and urological conditions.
        </p>
        <p className="mt-5">
          Our laboratory follows WHO standards for semen evaluation, ensuring globally accepted fertility parameters. For calculus analysis, advanced spectroscopy and 
          crystallography methods are used to pinpoint stone composition, helping clinicians tailor preventive treatment plans. 
          </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist8.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>


      </div>
    ),
  },
  {
    title: "IVF / ICSI Lab ", content: (
      <div>
        <h3 className="text-[22px] text-black mb-2">IVF / ICSI Lab</h3>
        <p className="mt-5">
          The IVF/ICSI Lab is a critical part of our reproductive medicine services, offering advanced embryo culture, sperm processing, oocyte retrieval, and 
          microinjection techniques. With a sterile, high-tech environment and embryologists trained in precision handling, we ensure optimal success rates in fertility 
          treatments like In-Vitro Fertilization (IVF) and Intracytoplasmic Sperm Injection (ICSI).
        </p>
        <p className="mt-5">
          In addition to clinical precision, we maintain a controlled lab environment with HEPA filters, laminar flow stations, and constant temperature and humidity 
          to ensure gamete and embryo viability. Our success rates are continually audited to maintain transparency and improve performance outcomes.  
          </p>
        <ul className="flex flex-col list-none space-y-4 mt-4">
          {checklist9.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5E566A] font-semibold text-sm">
              <Image
                src={Check}
                alt="tick"
                width={20}
                height={20}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>


      </div>
    ),
  },
];
function Laboratory() {
  const [activeIndex, setActiveIndex] = useState(0);
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white mb-3"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[44px] mb-4"
            >
              Laboratory
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              Accuracy in Testing, Excellence in Healing
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="#"
                className="btn-white inline-flex text-sm items-center px-6 py-3 bg-white text-[#2B3990] font-semibold rounded-full shadow-md hover:-translate-y-[3px] transition-transform duration-200 "
              >
                Book an Appointment <ArrowUpRight className=" ml-2 w-5 h-5" />
              </Link>
            </motion.div>
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

      <section className=" py-16 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="px-5  py-2 bg-white text-primary-blue inline-block font-semibold rounded-full mb-3">
              Sudha Laboratory
            </span>
            <h2 className="text-[30px] mb-4">
              Laboratory Overview
            </h2>
            <p className="">
              The Laboratory Services at Sudha Multispeciality Hospital are equipped with advanced diagnostic technologies to ensure precision and reliability in every test. 
              Our lab operates round the clock, supporting all clinical departments with timely reports and accurate results. From routine investigations to complex diagnostic 
              procedures, we maintain high standards of hygiene, accuracy, and efficiency. All tests are conducted by trained specialists, ensuring the best diagnostic outcomes for patient care.
            </p>

          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full justify-end"
          >
            <Image
              src={one}
              alt="Sudha Hospital Overview"
              className="rounded-2xl w-[100%] object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto py-16 bg-white rounded-3xl">
          <div className="text-center">
            <p className="px-5  py-2 bg-blue inline-block font-semibold rounded-full mb-3">
              Sudha Laboratory
            </p>
            <h2 className=" text-[30px] ">Laboratory Service</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 p-8 w-full max-w-7xl mx-auto mt-7">
            {/* Tabs */}
            <div className="flex flex-col border-b-2 border-[#f5f5f5]  w-full md:w-1/4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={clsx(
                    "text-left w-full px-4 bg-white font-semibold py-3 text-sm transition",
                    activeIndex === index
                      ? "text-[#2B3990] bg-white border-b-2 "
                      : "bg-white  border-b-2 border-[#f5f5f5] hover:bg-blue-100"
                  )}
                >
                  <div className="flex justify-between items-center flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#2B3990] rounded-xl"></div>
                      <p>{tab.title}</p>
                    </div>
                    {activeIndex === index ? (
                      <div className="bg-[#2B3990] text-[#fff] p-2 rounded-2xl">
                        <MdArrowOutward />
                      </div>
                    ) : (
                      <MdArrowOutward />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="w-full md:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-5 "
                >
                  <div>{tabs[activeIndex].content}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto text-center  py-16">
          <span className="px-5  py-2 bg-white text-primary-blue text-center inline-block font-semibold rounded-full mb-3">
            Laboratory
          </span>
          <h2 className="text-[30px]  text-center">
            Advanced Diagnostic Laboratory with <br /> World-Class Equipment
          </h2>

          <div>
            <CampusFacilitySlider data={facilities} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Laboratory;
