"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/about/about_overview.png";
import Accordion from "../../components/Accordion";
import Checklight from "@/assets/home/check-light.svg";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";


import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
import organtransplantone from "@/assets/organtransplant/one.png";
import Check from "@/assets/insurance/check.svg";


const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "postsurgerycare", label: "Post-surgery Care " },
  { id: "facilities", label: "Facilities" },
  { id: "faqs", label: "FAQs" },

];

const faq = [
  {
    title: (
      <>
        <div className="flex gap-3">What is the cost of a kidney transplant? </div>
      </>
    ),
    content: (
      <p>
        The cost of a kidney transplant varies depending on the hospital, type of procedure, and post-operative care required. Sudha Multispeciality Hospital, recognised as the best hospital for renal transplant in Erode, offers transparent and comprehensive cost estimates for patients.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          Which Hospital is best for Kidney Transplant in India?
        </div>
      </>
    ),
    content: <p>Several hospitals in India provide advanced kidney transplant services. For patients in Erode, Sudha Multispeciality Hospital is regarded as the best hospital for organ transplant in Erode, providing expert surgical care and post-transplant support. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Who pays for the medical bill when donating a kidney?
        </div>
      </>
    ),
    content: <p>Medical expenses for the donor are typically covered by the recipient or as per hospital policy and applicable regulations. Sudha Multispeciality Hospital ensures that all transplant-related procedures follow legal and ethical guidelines while providing support for both donor and recipient.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Can a person live with one kidney?
        </div>
      </>
    ),
    content: <p>It is possible to live a healthy life with one kidney. Regular medical monitoring is essential, and Sudha Multispeciality Hospital, the best hospital for renal transplants in Erode, provides guidance and follow-up care for safe long-term outcomes. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What's the recovery time after donating a kidney?
        </div>
      </>
    ),
    content: <p>Recovery after kidney donation usually takes 4 to 6 weeks, depending on overall health and adherence to post-operative care. At Sudha Multispeciality Hospital, recognised as the best hospital for organ transplant in Erode, both donors and recipients receive comprehensive care to ensure safe recovery. </p>,
  },

];

const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          <Image src={one} alt="Adult Cardiology" /> General Anaesthesia
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Our general anaesthesia services are designed to ensure complete
          patient safety, comfort, and optimal surgical conditions across a wide
          range of specialities. Recognised as one of the best anaesthesiology
          hospitals in Erode, our expert anaesthesia team delivers tailored care
          to patients undergoing complex and routine surgeries alike.
        </p>

        <h2 className="font-semibold text-[#2B3990]">
          Our General Anaesthesia services are provided for:
        </h2>
        <ul>
          <li>General and Laparoscopic Surgeries </li>
          <li>Orthopaedic and Joint Replacement Procedures </li>
          <li>Paediatric and Neonatal Surgeries </li>
          <li>Urological and Gynaecological Interventions </li>
          <li>Neurosurgical and Spine Procedures </li>
          <li>Oncological Surgeries </li>
          <li>Emergency and Trauma Care </li>
        </ul>

        <p>
          Each patient receives a comprehensive pre-anaesthetic assessment,
          where our anaesthetists review medical history, conduct necessary
          investigations, and plan the safest anaesthetic approach.
        </p>

        <p>
          During surgery, patients are continuously monitored using advanced
          haemodynamic and respiratory monitors, ensuring real-time tracking of
          vital parameters. Our modern anaesthesia workstations are equipped
          with precise gas delivery systems, integrated ventilation, and safety
          mechanisms to maintain a stable and controlled environment.
        </p>

        <p>
          Postoperatively, patients are transferred to a well-equipped
          Post-Anaesthesia Care Unit (PACU), where recovery from anaesthesia is
          carefully managed by our trained staff.
        </p>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          <Image src={one} alt="Interventional Cardiology" />
          Cardiac Anaesthesia
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Sudha Multispeciality Hospital is a trusted name in Cardiac
          Anaesthesia, with a legacy of over 40 years in delivering safe and
          advanced anaesthetic care for a wide range of heart procedures. Our
          dedicated team of cardiac anaesthetists plays a critical role in the
          success of both adult and paediatric cardiac surgeries, working in
          close coordination with cardiologists and cardiothoracic surgeons.
        </p>

        <h2 className="font-semibold text-[#2B3990]">
          We provide specialised anaesthesia services for:
        </h2>
        <div>
          <ul>
            <li>Coronary Artery Bypass Grafting (CABG) </li>
            <li>Valve Repair and Replacement Surgeries </li>
            <li>Congenital Heart Defect Corrections </li>
            <li>Aortic Aneurysm Repairs </li>
            <li>Minimally Invasive Cardiac Procedures </li>
            <li>Interventional Cardiology Support in Cath Labs </li>
            <li>Electrophysiology Procedures and Pacemaker Implantations </li>
          </ul>
        </div>

        <p>
          Our cardiac operating theatres are equipped with advanced anaesthesia
          workstations, invasive monitoring systems, transoesophageal
          echocardiography (TOE), and real-time haemodynamic assessment tools to
          ensure precision and safety during surgery.
        </p>

        <p>
          From pre-operative optimisation and intraoperative management to
          intensive postoperative care in a specialised cardiac ICU, our team
          ensures every patient receives personalised and vigilant care
          throughout their surgical journey.
        </p>

        <p>
          With decades of experience and a commitment to excellence, Sudha
          Multispeciality Hospital continues to be recognised among the Best
          Cardiac Anaesthesia Centres in Erode, upholding the highest standards
          of clinical expertise and patient outcomes.
        </p>
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
            Advanced Renal Transplant Care
          </h3>
          <ul className="space-y-4 ">
            {serviceSections.map((item, index) => {
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

                  {/* Horizontal line except after the last item */}
                  {index !== serviceSections.length - 1 && (
                    <hr className="my-3 border-t border-gray-100" />
                  )}
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
            <h3 className="text-[20px] font-bold mb-2 ">
              Sudha Multispeciality Hospital
            </h3>
            <hr className="border-light" />





            <ul className="space-y-4 text-start mt-4">
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Comprehensive kidney transplant care before, during, and after surgery</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Experienced multidisciplinary team with advanced facilities</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Holistic support through counselling, nutrition, and long-term follow-up</li>
            </ul>
            <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => setOpenModal(true)}>
              Book an Appointment <ArrowUpRight className="w-5 h-5" />
            </button>
            <BookAppointmentModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>

          {/* find a doctor */}
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
                <div className=" ">

                  <h2 className="text-[30px]  mb-4">
                    Renal Transplant at Sudha Multispeciality Hospital:
                  </h2>

                  <h3 className=" text-[18px] text-primary-blue mt-2">Registration Certificate Under the Transplantation of Human Organs Act 1994:</h3>


                  <div className="flex justify-between items-center">
                    <h5 className="text-[16px] mt-2 text-primary-blue">Registration No: <span className="text-black font-semibold ">457, Date:01/12/2021</span> </h5>

                  </div>
                  <h5 className="text-[16px] mt-2 text-primary-blue" >Validity Period: <span className="text-black font-semibold">Five Years</span> </h5>

                  <h5 className="text-[16px] mt-2 text-primary-blue" >Issuing Authority: <span className="text-black font-semibold">Appropriate Authority, Human Organ Transplantation Act 1994 & Director of Medical and Rural Health Services Chennai, Tamilnadu - 600 006.</span> </h5>

                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row gap-6 items-center mb-10 mt-5">

                    <div className="md:w-1/2">

                      <p className="">
                       At Sudha Multispeciality Hospital, the best hospital for renal transplant in Erode, our dedicated renal transplant unit is equipped to deliver comprehensive, patient-centric care before, during, and after the procedure. Our transplant care team includes nurses specifically trained in post-operative recovery to ensure every recipient gets the attentive and expert support needed for a successful recovery. We specialize in various types of kidney transplants using advanced protocols and proven methodologies. 
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <Image
                        src={organtransplantone}
                        alt="Kidney Transplant"
                        className="w-full  rounded-lg "
                      />
                    </div>
                  </div>

                  {/* Types of Kidney Transplants */}
                  <div className="mb-8">
                    <h3 className="text-[20px] mb-3">
                      Types of Kidney Transplants Performed:
                    </h3>
                    <ul className="space-y-4 mt-3">
                      <li>
                        <div className="flex items-start gap-3">
                          <Image src={Check} alt="tick" width={24} height={24} />
                          <div>
                            <h6 className="text-[15px] text-black mb-2">
                              Deceased Donor Transplant:
                            </h6>
                            <p className="text-[#5F6368]">
                              Kidneys retrieved from brain-dead donors under strict ethical and medical guidelines.
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="flex items-start gap-3">
                          <Image src={Check} alt="tick" width={24} height={24} />
                          <div>
                            <h6 className="text-[15px] text-black mb-2">
                              Living Donor Transplant:
                            </h6>
                            <p className="">
                              From a healthy, compatible relative or close family member.
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="flex items-start gap-3">
                          <Image src={Check} alt="tick" width={24} height={24} />
                          <div>
                            <h6 className="text-[15px] text-black mb-2">
                              Paired Kidney Exchange (SWAP):
                            </h6>
                            <p className="text-[#5F6368]">
                              Involving two or more donor-recipient pairs from different families.

                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="flex items-start gap-3">
                          <Image src={Check} alt="tick" width={24} height={24} />
                          <div>
                            <h6 className="text-[15px] text-black mb-2">
                              ABO Incompatible Transplant:
                            </h6>
                            <p className="">
                              Performed between donors and recipients with mismatched blood groups using specialized treatment approaches.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Team Section */}
                  <div className="mb-8">
                    <h3 className="text-[22px]  mb-3">
                      Our kidney transplant program is supported by an experienced and collaborative team of:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-2 text-gray-700">
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Kidney Transplant Surgeons
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Nephrologists
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Urologists
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Vascular Surgeons
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Pathologists
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Anesthetists
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Cardiologists
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Gastroenterologists
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Haemato-Oncologists
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Microbiologists
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Dental Surgeons
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Gynaecologists
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Clinical Dieticians
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Transplant Nurses
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Transplant Coordinators
                      </span>
                      <span className="flex gap-3 text-[14px] font-semibold">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Other skilled support staff
                      </span>
                    </div>
                  </div>

                  {/* Process and Approach */}
                  <div className="mb-8 text-gray-700">
                    <p className="mb-4">
                      Every transplant at Sudha Multispeciality Hospital is approached with precision, compassion, and a commitment to long-term health.
                    </p>
                    <p className="mb-4">
                      Before undergoing a kidney transplant, patients and their families are guided through every stage of the process by our experienced transplant coordinators. This includes personalized counselling sessions to help them understand the procedure, expectations, and post-operative care. Each patient is then thoroughly assessed by a panel of specialists to minimize risks and increase the chances of a smooth and successful transplant.
                    </p>
                    <p>
                      We also follow an organized system for organ allocation. Patients waiting for deceased donor kidneys are registered through TRANSTAN, the authorized state-level coordination body. Allocation is done transparently, based on availability, medical urgency, and compatibility, in coordination with other approved hospitals across the network.
                    </p>
                  </div>
                </div>
              </>
            )}

            {id === "postsurgerycare" && (
              <>
                {/* Post-Surgery Care */}
                <div className="mb-8">
                  <h3 className="text-[20px] text-primary-blue mt-4  mb-3">
                    Post–Surgery Care
                  </h3>
                  <div>
                    <h4 className="text-[18px] mb-2">
                      Timely Recovery Monitoring
                    </h4>
                    <ul className="list-disc list-inside  space-y-4 mb-4 mt-4">
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Patients are shifted to a dedicated Renal Transplant ICU immediately after surgery.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Continuous monitoring of vital signs, fluid balance, urine output, and graft function.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Early detection and management of infection or organ rejection.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Individualized adjustment of immunosuppressive medications based on patient response.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[18px] mb-2">
                      Specialist-Led Monitoring
                    </h4>
                    <ul className="list-disc list-inside  space-y-4 mb-4 mt-4">
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Daily rounds by nephrologists, transplant surgeons, and intensivists
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Regular assessment of recovery progress and overall health status.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Prompt action taken for any unexpected changes or complications.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[18px] mb-2">
                      Psychological Care
                    </h4>
                    <ul className="list-disc list-inside  space-y-4 mb-4 mt-4">
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Emotional support provided by trained counsellors throughout the recovery process.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Mental health care to help patients manage anxiety, fear, and lifestyle adjustments.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Family members are also counselled to ensure a supportive home environment.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[18px] mb-2">
                      Informed Care Support
                    </h4>
                    <ul className="list-disc list-inside  space-y-4 mb-4 mt-4">
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Pre-discharge sessions to educate patients and caregivers on post-transplant care.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Instructions on medication schedules, hygiene practices, and infection signs.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Guidance on physical activity levels and lifestyle modifications.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Emphasis on long-term graft protection and health maintenance.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[18px] mb-2">
                      Nutritional Guidance
                    </h4>
                    <ul className="list-disc list-inside space-y-4 mb-4 mt-4">
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Personalized diet plans prepared by renal dieticians.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Focus on kidney-friendly meals that promote healing and reduce complications.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Continued dietary counselling during follow-up visits.
                      </li>
                    </ul>
                  </div>


                  <div>
                    <h4 className="text-[18px] mb-2">
                      Discharge Planning
                    </h4>
                    <ul className="list-disc list-inside space-y-4 mb-4 mt-4">
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Detailed discharge instructions with daily care routines clearly explained.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Scheduled follow-up visits for ongoing medical supervision.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Continuous support provided by the transplant team after discharge.
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Easy access to care team for doubts, medication concerns, or urgent issues.
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            <hr />
            {id === "facilities" && (
              <div className="space-y-2 text-black">
                <h2 className="text-[26px]  mt-5">Facilities</h2>

                <ul className="space-y-4">
                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Dedicated Kidney Transplant Operating Theatres

                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Renal Transplant Intensive Care Unit (ICU)
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Pre-Transplant Evaluation Clinics

                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Transplant Counselling & Coordination Unit

                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Advanced Diagnostic & Imaging Facilities

                        </p>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Dialysis Unit

                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Immunology & Tissue Typing Lab

                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          24x7 Laboratory and Pharmacy Support

                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Sterile Inpatient Wards for Transplant Patients

                        </p>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Organ Transplant Registry & Waiting List Management

                        </p>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Post-Transplant Follow-Up Clinics

                        </p>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={20} height={20} />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">
                          Nutritional & Psychological Support Services


                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {id === "faqs" && (
              <div className="mt-8">
                <h2 className="text-[24px]  mt-5 pb-3">Frequently Asked Questions</h2>
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
          <h3 className="text-[20px] font-bold mb-2 ">
            Sudha Multispeciality Hospital
          </h3>
          <hr className="border-light" />





          <ul className="space-y-4 text-start mt-4">
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Comprehensive kidney transplant care before, during, and after surgery</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Experienced multidisciplinary team with advanced facilities</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Holistic support through counselling, nutrition, and long-term follow-up</li>
          </ul>
          <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => setOpenModal(true)}>
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
          <BookAppointmentModal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>

        {/* find a doctor */}
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
