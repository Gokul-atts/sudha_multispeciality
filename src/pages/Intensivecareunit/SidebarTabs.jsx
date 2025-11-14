"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/icu/icu-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Checklight from "@/assets/home/check-light.svg";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";


const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "treatmentsandprocedures", label: "Treatments & Procedures" },
  { id: "specialities", label: "Specialities" },
  // { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];

const faq = [
  {
    title: (
      <>
        <div className="flex gap-3">What is the highest level of intensive care?  </div>
      </>
    ),
    content: (
      <p>
        The highest level of intensive care is provided in a fully equipped ICU with continuous monitoring, advanced life support systems, and specialised critical care staff. Sudha Multispeciality Hospital, recognised as the best ICU hospital in Erode, provides a world-class ICU facility in Erode with 24/7 expert care for critically ill patients.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          Is ICU covered by insurance?
        </div>
      </>
    ),
    content: <p>Most health insurance policies cover ICU treatment, depending on the plan and hospital. At Sudha Multispeciality Hospital, the best hospital for ICU in Erode, we assist patients in insurance claims to make ICU care accessible and stress-free.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Which hospital in Erode provides a world-class ICU facility?
        </div>
      </>
    ),
    content: <p>Sudha Multispeciality Hospital provides a world-class ICU facility in Erode with modern monitoring equipment, ventilators, emergency care support, and a dedicated critical care team to manage serious and life-threatening conditions effectively.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the typical recovery period following discharge from the ICU?
        </div>
      </>
    ),
    content: <p>Recovery after ICU depends on the severity of illness, the patient’s overall health, and the treatment received. At Sudha Multispeciality Hospital, patients are guided through post-ICU care and follow-ups to ensure smooth recovery in a safe and monitored environment. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the difference between ICU and NCU?
        </div>
      </>
    ),
    content: <p>ICU (Intensive Care Unit) is for critically ill patients needing constant monitoring and advanced life support. NCU (Neonatal Care Unit) is specifically for newborns requiring special care. Sudha Multispeciality Hospital, with the best ICU hospital in Erode and advanced neonatal facilities, provides specialised care for all critical patients.</p>,
  },

];

const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Intensivecareunit" />  */}
          Isolation Units
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Our dedicated isolation rooms are designed to care for patients requiring advanced support, including those on ventilators or undergoing dialysis. Each room features negative pressure technology to ensure a controlled and secure environment for managing droplet-spread infections.
        </p>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Intensivecareunit" /> */}
          Neonatal Intensive Care Unit Paediatrics
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          At Sudha Multispeciality Hospital, we offer compassionate and expert care for newborns who need intensive support. Our NICU is built to nurture even the tiniest lives with:
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Advanced life-support systems for premature and low-birth-weight babies  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Experienced neonatologists and paediatricians available 24/7    </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Continuous monitoring and specialized respiratory care</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Family-centred approach that supports parents every step of the way </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  A safe, sterile environment designed for delicate immune systems   </li>

          </ul>

          <p className="mt-3">
            Every newborn deserves a healthy beginning, and we’re here to make that happen with care, comfort, and hope.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Intensivecareunit" /> */}
          Paediatric Intensive Care Unit
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          At Sudha Multispeciality Hospital, our PICU is a dedicated space for children requiring intensive medical attention. The unit is equipped to handle a wide range of paediatric emergencies with round-the-clock care.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Equipped with ventilators, multiparameter monitors, dialysis units, infusion and syringe pumps for advanced life support </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Specialised care for life-threatening infections, neurological crises, hematologic-oncologic emergencies, respiratory distress, trauma, and complex post-operative recovery  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /><b>Procedural sedation is provided for invasive procedures such as:  </b> </li>


            <ul className="ml-10">
              <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Lumbar puncture
              </li>
              <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Intrathecal chemotherapy
              </li>
              <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Bone marrow aspiration and biopsy
              </li>
              <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Intercostal drainage
              </li>
              <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Peritoneal dialysis catheter insertion
              </li>
              <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Central and dialysis catheter placement
              </li>



            </ul>



            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  ECMO support is available in collaboration with the paediatric cardiothoracic team for referred cases </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Manned by an expert team of paediatric intensivists and specially trained PICU nurses </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  24/7 intensive monitoring and care tailored to the unique needs of children   </li>

          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Intensivecareunit" /> */}
          Cardiac Intensive Coronary Care Unit
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Our ICCU is designed to provide advanced, lifesaving care for patients with severe cardiac conditions. Combining state-of-the-art technology with expert cardiac care, we ensure timely intervention and continuous monitoring for heart emergencies.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />24/7 care for heart attacks, arrhythmias, and cardiac arrest</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Equipped with advanced cardiac monitors, defibrillators, and ventilators</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Support for post-cardiac surgery and high-risk cardiac patients </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Managed by a skilled team of cardiologists, intensivists, and critical care nurses </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Immediate access to ECG, echocardiography, and emergency interventions   </li>

          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Intensivecareunit" /> */}
          Cardiothoracic Surgery Intensive Care Unit
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Our CT-ICU is a specialised unit designed to provide intensive post-operative care for patients undergoing complex heart and lung surgeries. With a multidisciplinary team and advanced monitoring systems, we ensure safe recovery in the most critical hours following surgery.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Continuous monitoring for patients after bypass surgery, valve replacement, thoracic procedures, and more</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Equipped with ventilators, cardiac monitors, infusion pumps, and defibrillators</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Managed by experienced cardiothoracic surgeons, cardiac intensivists, and ICU-trained nurses </li>
            
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Focus on pain control, infection prevention, and early recovery   </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Round-the-clock care for optimum surgical outcomes and patient safety  </li>

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
            Our Advanced ICU Services
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  World-Class ICU Infrastructure</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 40+ Years of Critical Care Excellence</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />24/7 On-Site Intensivists and Critical Care Specialists</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Advanced Support for High-Risk Surgeries and ECMO</li>
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
                <Image
                  src={aboutOverview}
                  alt="aboutOverview"
                  className="w-full h-[380px] rounded-2xl object-cover"
                />
                <h2 className="text-[24px] mb-2 mt-4">
                  Advanced Intensive Care in the Best ICU Hospital in
                  <span className="text-[#2B3990]"> Erode</span>

                </h2>
                <p className="mb-4">
                  The Intensive Care Units at Sudha Multispeciality Hospital in Erode are built to deliver timely, high-quality care to patients facing critical and life-threatening conditions. Our hospital has the world class ICU facility in Erode equipped with advanced critical care infrastructure and the latest medical technology to support rapid response and effective treatment.
                </p>



                <p className="mb-4 ">
                  A dedicated team of intensivists, doctors, and specially trained nurses ensures round-the-clock monitoring and expert care. Patient vitals and conditions are consistently tracked, allowing for immediate medical intervention whenever needed.
                </p>

                <p className="mb-4 ">
                  As the best hospital for ICU the critical care layout at Sudha Multispeciality Hospital is strategically designed to allow quick access for doctors and surgeons during emergencies, helping save crucial time. With expert staff, modern equipment, and a patient-first approach, we are committed to offering the highest standard of critical care when every second counts
                </p>

                <p className="font-extrabold text-black  mb-4">
                  The Department of Critical Care Medicine holds the following units
                </p>

                <ul className="space-y-4 text-start mt-4">
                  <li className="flex md:items-center items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />   Critical Care Unit 1</li>
                  <li className="flex md:items-center items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} /> Critical Care Unit 2</li>
                  <li className="flex md:items-center items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Isolation Rooms</li>



                  <li className="flex md:items-center items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Paediatric Intensive Care Unit   </li>

                  <li className="flex md:items-center items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Medical Intensive Care Unit</li>

                  <li className="flex md:items-center items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Cardiac Intensive Coronary Care Unit </li>

                  <li className="flex md:items-center items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Cardiothoracic Surgery Intensive Care Unit</li>
                  <li className="flex md:items-center items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} /> Neonatal Intensive Care Unit </li>
                </ul>

              </>
            )}

            {id === "treatmentsandprocedures" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5">
                  Treatments & Procedures
                </h2>
                <p className="mb-3">
                  A wide range of critical procedures are routinely carried out, including but not limited to the following interventions:
                </p>
                <ul>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>
                    Intubation
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>
                    Percutaneous Tracheostomy
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Suprapubic Cystostomy
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Central Venous Cannulation
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Pleural Tapping
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Percutaneous Ecmo Cannulation
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Arterial Cannulation
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Ascitic Tapping
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Lumbar Puncture
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Pericardiocentesis
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Dialysis Cannulation
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Tracheostomy
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Intercostal Drainage
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Epidural Analgesia
                  </li>
                </ul>
              </div>
            )}

            {id === "specialities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 ">Specialities</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {/* {id === "doctors" && (
              <>
                <h2 className="text-[24px] mt-5 pb-3">Doctors</h2>
                <DoctorSlider specialty="General Medicine" counter={3} />
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  World-Class ICU Infrastructure</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 40+ Years of Critical Care Excellence</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />24/7 On-Site Intensivists and Critical Care Specialists</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Advanced Support for High-Risk Surgeries and ECMO</li>
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
