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
import organtransplantone from "@/assets/organtransplant/overview-liver.webp";
import Check from "@/assets/Insurance/check.svg";


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
        <div className="flex gap-3">What is the process of a liver transplant?  </div>
      </>
    ),
    content: (
      <p>
        A liver transplant involves replacing a damaged liver with a healthy donor liver. The process includes medical evaluation, matching with a suitable donor, surgery, and guided recovery. At Sudha Multispeciality Hospital, every step is carried out with expert care, advanced technology, and compassionate support, making it one of the best hospitals for liver transplants in Erode.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          Which hospital is best for liver transplant in India?
        </div>
      </>
    ),
    content: <p>Sudha Multispeciality Hospital in Erode is renowned as the best hospital for liver transplant in India, offering expert surgeons, advanced technology, ethical care, world-class treatments, high success rates, and comprehensive post-transplant support for patients across the country.  </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Which age is best for a liver transplant?
        </div>
      </>
    ),
    content: <p>There is no fixed “best” age for a liver transplant. What matters most is overall health and readiness for surgery. Children, young adults, and older patients have all benefitted from transplants at Sudha Multispeciality Hospital, where each case is carefully assessed to ensure the best possible outcome. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the leading indicator for liver transplant?
        </div>
      </>
    ),
    content: <p>Liver transplants are usually recommended when the liver cannot perform its functions properly. Conditions like cirrhosis or certain liver-related illnesses may be indicators. At Sudha Multispeciality Hospital, specialists use advanced diagnostic care to guide patients at the right time, ensuring they receive timely and effective treatment at the best hospital for organ transplants in Erode. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the signs of Fatty liver/Cirrhotic Liver?
        </div>
      </>
    ),
    content: <p>Some common signs include tiredness, mild swelling in the abdomen, or changes in appetite. Many people may not notice symptoms until tests reveal changes. At Sudha Multispeciality Hospital, early detection and specialized care help patients manage these conditions effectively, with the option of advanced treatment at the best hospital for liver transplant in Erode if needed.  </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What lifestyle habits cause liver damage?
        </div>
      </>
    ),
    content: <p>Unhealthy food choices, excessive alcohol, irregular sleep patterns, and lack of exercise can gradually affect liver health. The good news is that with guidance on healthy living, most risks can be reduced. At Sudha Multispeciality Hospital, patients receive lifestyle counseling along with medical care, making it a trusted center for long-term wellness and advanced transplant care.   </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the final stage of liver failure?
        </div>
      </>
    ),
    content: <p>When the liver is unable to function fully, doctors may recommend a transplant to restore good health. With modern medical advances, patients undergoing transplants can return to active and healthy lives. Sudha Multispeciality Hospital is known for providing safe, successful outcomes, making it the best hospital for liver transplant in Erode.   </p>,
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Expert liver transplant care with advanced protocols</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Dedicated ICU and modern surgical facilities</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Complete recovery support with diet, therapy, and follow-up</li>
            </ul>



            <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => setOpenModal(true)}>
              Book an Appointment <ArrowUpRight className="w-5 h-5" />
            </button>
            <BookAppointmentModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>

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
                    Liver Transplant at Sudha Multispeciality Hospital:
                  </h2>

                  <h3 className=" text-[18px] text-primary-blue mt-2">Registration Certificate Under the Transplantation of Human Organs Act 1994:</h3>


                  <div className="flex justify-between items-center">
                    <h5 className="text-[16px] mt-2 text-primary-blue">Registration No: <span className="text-black font-semibold ">631/80 Date: 02/09/2025</span> </h5>

                  </div>
                  <h5 className="text-[16px] mt-2 text-primary-blue" >Validity Period: <span className="text-black font-semibold">Five Years</span> </h5>

                  <h5 className="text-[16px] mt-2 text-primary-blue" >Issuing Authority: <span className="text-black font-semibold">Appropriate Authority, Human Organ Transplantation Act 1994 & Director of Medical and Rural Health Services Chennai, Tamilnadu - 600 006.</span> </h5>

                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row gap-6 items-center mb-10 mt-5">

                    <div className="md:w-1/2">

                      <p className="">
                        Sudha Multispeciality Hospital is recognized as one of the best hospitals for liver transplant in Erode, offering advanced care for patients with severe liver disease and failure. Our team of experienced transplant surgeons, hepatologists, anaesthetists, and intensive care specialists provide comprehensive treatment tailored to each patient’s needs.
                      </p>

                      <p className="mt-2">
                        Liver transplantation is a highly specialized procedure that requires world-class expertise, modern infrastructure, and continuous post-surgical care. At Sudha Multispeciality Hospital, we follow international protocols to ensure the highest success rates, faster recovery, and long-term wellness.
                      </p>


                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <Image
                        src={organtransplantone}
                        alt="Liver Transplant"
                        className="w-full  rounded-lg "
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="">
                      Being the best hospital for organ transplant in Erode, we are committed to saving lives through innovative medical technology, expert surgical techniques, and compassionate patient care. Our facilities are designed to support every stage of the transplant journey – from evaluation, donor matching, and surgery to rehabilitation and follow-up care.
                    </p>
                  </div>

                  {/* Types of Kidney Transplants */}

                  {/* Team Section */}

                </div>
              </>
            )}

            {id === "postsurgerycare" && (
              <>
                {/* Post-Surgery Care */}
                <div className="mb-8">
                  <h3 className="text-[24px] text-primary-blue mt-4  mb-3">
                    Post-Surgery Care at Sudha Multispeciality Hospital
                  </h3>
                  <div>
                    <p className=" mb-2">
                      Recovery after a liver transplant requires close monitoring and lifestyle adjustments to ensure long-term health. Our dedicated team supports patients with:
                    </p>
                    <ul className="list-disc list-inside  space-y-4 mb-4 mt-4">
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Regular monitoring of liver function and overall health
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Guidance on immunosuppressant medications to prevent organ rejection
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Infection control measures and hygiene practices
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Nutrition and diet counselling for faster recovery
                      </li>

                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Physiotherapy and gradual activity planning
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Psychological support and counselling for emotional well-being
                      </li>
                      <li className="flex gap-3 text-[15px] font-medium">
                        <Image src={Check} alt="tick" width={20} height={20} />
                        Scheduled follow-up visits for continuous care and monitoring
                      </li>
                    </ul>
                  </div>

                </div>
              </>
            )}
            <hr />
            {id === "facilities" && (
              <div className="mb-8 mt-4">
                <h3 className="text-[24px] mb-3">
                  Facilities for Liver Transplant at Sudha Multispeciality Hospital
                </h3>
                <ul className="space-y-4 mt-4">
                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={24} height={24} />
                      <div>

                        <p className="text-[#5F6368]">
                          Advanced modular operation theatres with cutting-edge technology
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={24} height={24} />
                      <div>

                        <p className="">
                          Dedicated liver transplant ICU with 24/7 monitoring
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={24} height={24} />
                      <div>

                        <p className="text-[#5F6368]">
                          Experienced team of liver transplant surgeons and hepatologists

                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={24} height={24} />
                      <div>

                        <p className="">
                          Comprehensive diagnostic and imaging services for accurate evaluation
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={24} height={24} />
                      <div>

                        <p className="">
                          Infection-controlled environment ensuring patient safety
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={24} height={24} />
                      <div>

                        <p className="">
                          Multidisciplinary team including dieticians, physiotherapists, and counsellors
                        </p>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={24} height={24} />
                      <div>

                        <p className="">
                          In-house blood bank and laboratory support for emergencies
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex md:items-center items-start gap-3">
                      <Image src={Check} alt="tick" width={24} height={24} />
                      <div>

                        <p className="">
                          Comfortable patient rooms and family support facilities
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Expert liver transplant care with advanced protocols</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Dedicated ICU and modern surgical facilities</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Complete recovery support with diet, therapy, and follow-up</li>
          </ul>



          <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => setOpenModal(true)}>
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
          <BookAppointmentModal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>

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
