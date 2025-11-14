"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/gastroenterology/gastro-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import Checklight from "@/assets/home/check-light.svg";
import one from "@/assets/about/1.svg";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";



const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "services", label: "Services" },
  // { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];

const faq = [
  {
    title: (
      <>
        <div className="flex gap-3">Which is the best hospital for gastroenterology?</div>
      </>
    ),
    content: (
      <p>
        The best gastroenterology hospital should provide advanced diagnostics, specialized care, and treatments for all digestive system conditions, including stomach, liver, and intestinal disorders. In Erode, Sudha Multispeciality Hospital is recognized as the best gastroenterology hospital, offering expert care from some of the best gastroenterologists in Erode.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          Does a gastroenterologist treat stomach problems?
        </div>
      </>
    ),
    content: <p>Gastroenterologists diagnose and treat a wide range of stomach and digestive issues such as acidity, gas, bloating, ulcers, and indigestion. At Sudha Multispeciality Hospital, patients receive care from the best gastroenterologists in Erode who provide personalized treatment plans for effective relief. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the signs of a stomach ulcer?
        </div>
      </>
    ),
    content: <p>Common signs of a stomach ulcer include burning stomach pain, bloating, nausea, vomiting, heartburn, and loss of appetite. Sudha Multispeciality Hospital, the best gastroenterology hospital in Erode, offers advanced diagnostics and treatment to detect and manage stomach ulcers early, ensuring better outcomes.  </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Is gastric trouble completely curable?
        </div>
      </>
    ),
    content: <p>Many gastric problems, including stomach gas, bloating, acidity, and indigestion, can be managed or cured with proper diagnosis, medication, and lifestyle changes. At Sudha Multispeciality Hospital, patients benefit from expert care by the best gastroenterologists in Erode, who provide comprehensive treatment for all digestive issues. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How to cure digestive and acidity problems?
        </div>
      </>
    ),
    content: <p>Digestive and acidity problems can often be treated with a combination of proper diet, lifestyle modifications, and medical treatment. Avoiding spicy foods, eating smaller meals, staying hydrated, and reducing stress help improve digestion. At Sudha Multispeciality Hospital, the best gastroenterology hospital in Erode, specialists provide personalized guidance along with advanced treatment for long-term digestive health.  </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Which doctor should I consult for stomach ulcers and digestive problems?
        </div>
      </>
    ),
    content: <p>Gastroenterologists are the specialists to consult for stomach ulcers, acidity, bloating, gas, and other digestive issues. At Sudha Multispeciality Hospital, patients can consult the best gastroenterologists in Erode who provide accurate diagnosis and effective treatment for all digestive concerns.  </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Can Diet and exercise help prevent gas trouble?
        </div>
      </>
    ),
    content: <p>Lifestyle changes such as a balanced diet, regular exercise, adequate hydration, and avoiding trigger foods can significantly reduce gas, bloating, and acidity. Sudha Multispeciality Hospital, the best gastroenterology hospital in Erode, offers guidance on diet, exercise, and lifestyle changes alongside medical treatment to prevent digestive problems.  </p>,
  },
];



const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Gastroenterology" /> */}
          Digestive Diagnostics & Endoscopy
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We offer advanced diagnostic tools, including endoscopy and colonoscopy, to detect and evaluate a wide range of gastrointestinal disorders. Our endoscopy and colonoscopy units are equipped for accurate visual diagnosis and early detection of GI conditions. We use minimally invasive procedures for patient safety and quick recovery.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Colonoscopy and upper GI endoscopy </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Advanced endoscopic imaging for diagnosis and screening </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> ERCP for bile duct and pancreatic issues </li>

          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Gastroenterology" /> */}
          Gastrointestinal Surgeries
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our surgical team performs a full spectrum of gastrointestinal surgeries with high precision. From colorectal and esophageal procedures to complex pancreatic and liver surgeries, we focus on minimally invasive techniques that ensure faster recovery, less pain, and better long-term outcomes.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Esophageal, stomach, and colorectal surgeries </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Pancreatic and hepatobiliary procedures </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Minimally invasive laparoscopic techniques </li>

          </ul>

        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Gastroenterology" /> */}
          Stomach and Intestinal Disorders
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We provide personalized care for conditions such as GERD, ulcers, Crohn's disease, and irritable bowel syndrome. Our gastro specialists diagnose and treat these disorders with a combination of medication, nutrition guidance, and, where needed, advanced surgical procedures to improve long-term digestive health.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> GERD (Acid Reflux) Management   </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Ulcer and Gastritis Treatment </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Crohn’s and IBD Care </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Irritable Bowel Syndrome (IBS) </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Intestinal Obstruction Management   </li>

          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Gastroenterology" /> */}
          Metabolic and Bariatric Support
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We offer medical and surgical support for patients dealing with obesity and metabolic disorders. Our weight loss programs include evaluation, counselling, and surgical procedures when needed, helping individuals achieve a healthier weight and reduce risks of diabetes, fatty liver, and heart conditions.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Weight Loss Programs </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Bariatric Surgery Options </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Nutritional and Lifestyle Counselling </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Fatty Liver Disease Management </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Diabetes and GI Disorder Support </li>

          </ul>

        </div>
      </div>
    ),
  },

];

export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState('');
  const [openModal, setOpenModal] = useState(false);

  console.log("openModal", openModal);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    serviceSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8">

      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs Box */}
        <div className="bg-white  rounded-2xl p-4 sm:p-6">
          <h3 className="text-[16px]  text-center font-bold  mb-5">
            Expert Digestive Care
          </h3>
          <ul className="space-y-3">
            {serviceSections.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className="flex justify-between items-center group transition duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#2b3990]' : 'bg-gray-300'
                          }`}
                      />
                      <span
                        className={`text-[15px]  font-bold transition-colors duration-300 ${isActive ? 'text-[#2b3990]' : 'text-black'
                          } group-hover:text-[#2A3D90]`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {isActive ? (
                      <div className="w-8 h-8 rounded-full bg-[#2A3D90] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-white transition" />
                      </div>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2b3990] transition-all duration-300 transform group-hover:scale-110" />
                    )}
                  </a>
                  <hr className="my-3 border-t border-gray-100" />
                </li>
              );
            })}
          </ul>
        </div>


        <div className="hidden md:block">
          {/* Sudha Hospital Box */}
          <div
            className="relative rounded-2xl overflow-hidden text-white text-center px-6 py-10"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(42, 61, 144, 0.9), rgba(12, 18, 42, 0.9)), url(${Frame.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-[20px] font-bold mb-2">
              Sudha Multispeciality Hospital
            </h3>
            <hr className="border-light" />

            <ul className="space-y-4 text-start mt-4">
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Comprehensive care for all digestive system disorders</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 24/7 emergency support for gastrointestinal emergencies</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Expertise in surgical and non-surgical gastrointestinal treatments</li>
            </ul>



            <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => setOpenModal(true)}>
              Book an Appointment <ArrowUpRight className="w-5 h-5" />
            </button>
            <BookAppointmentModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>

          {/* Find a Doctor Box */}
          <Link href="/find-a-doctor" >

            <div
              className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
              style={{
                background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
              }}
            >
              {/* Text Section */}
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
                <h3

                  className="text-[24px] sm:text-xl  font-bold leading-snug"
                >
                  Find a <br className="hidden sm:block" /> Doctor?
                </h3>
              </div>

              {/* Image Section */}
              <div className="">
                <Image
                  src={doctorImg}
                  alt="Doctor"
                  className="rounded-lg w-full customposition  h-auto object-cover"
                />
              </div>
            </div>
          </Link>
        </div>

      </aside>

      {/* Content Sections */}
      <div className="flex-1 space-y-0">
        {serviceSections.map(({ id, label }) => (
          <section key={id} id={id} className="scroll-mt-32 rounded-xl">
            {id === "overview" && (
              <>
                <Image src={aboutOverview} alt="aboutOverview" className="w-full h-[380px] rounded-2xl object-cover " />
                <h2 className="text-[24px] mb-2 mt-4">
                  Advanced Gastroenterology Care with The Best Gastroenterologists in
                  <span className="text-[#2B3990]"> Erode</span>
                </h2>
                <p className="mb-4">
                  Sudha Multispeciality Hospital, the best gastroenterology hospital in Erode provides comprehensive gastroenterology care for a wide range of digestive system conditions. Our team is equipped with the best gastroenterologists in Erode, highly skilled surgeons, and advanced diagnostic and therapeutic tools to manage diseases affecting the esophagus, stomach, intestines, liver, pancreas, and gallbladder. From endoscopic procedures to minimally invasive surgeries, we ensure precise and effective care for both acute and chronic gastrointestinal issues. Our dedicated approach emphasizes early detection, accurate diagnosis, and personalised treatment to improve the quality of life for every patient.
                </p>
              </>
            )}



            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>24 x 7 Emergency Services
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>General & Special Wards with Specially Trained Duty Doctors & Staff Nurses
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Hi-Tech Surgical ICU with Experienced Surgical and Critical Care Team
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    State-of-the-Art Operation Theatre Equipped for GI Procedures
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Advanced Diagnostic Endoscopy and Imaging Setup
                  </li>
                </ul>
              </div>
            )}



            {id === "services" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5">Services</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {/* {id === "doctors" && (
              <>
                <h2 className="text-[24px] mt-5 pb-3">Doctors</h2>
                <DoctorSlider specialty="ENT Surgeon" counter={3} />
              </>
            )} */}

            {id === "faqs" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px]  mt-5 ">Frequently Asked Questions</h2>
                <Faq faq={faq} />
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="block md:hidden">
        {/* Sudha Hospital Box */}
        <div
          className="relative rounded-2xl overflow-hidden text-white text-center px-6 py-10"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(42, 61, 144, 0.9), rgba(12, 18, 42, 0.9)), url(${Frame.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-[20px] font-bold mb-2">
            Sudha Multispeciality Hospital
          </h3>
          <hr className="border-light" />

          <ul className="space-y-4 text-start mt-4">
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Comprehensive care for all digestive system disorders</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 24/7 emergency support for gastrointestinal emergencies</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Expertise in surgical and non-surgical gastrointestinal treatments</li>
          </ul>



          <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => setOpenModal(true)}>
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
          <BookAppointmentModal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>

        {/* Find a Doctor Box */}
        <Link href="/find-a-doctor" >

          <div
            className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
            style={{
              background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
            }}
          >
            {/* Text Section */}
            <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
              <h3

                className="text-[24px] sm:text-xl  font-bold leading-snug"
              >
                Find a <br className="hidden sm:block" /> Doctor?
              </h3>
            </div>

            {/* Image Section */}
            <div className="">
              <Image
                src={doctorImg}
                alt="Doctor"
                className="rounded-lg w-full customposition  h-auto object-cover"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
