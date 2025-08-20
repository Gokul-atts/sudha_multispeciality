"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/icu/icu.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Checklight from "@/assets/home/check-light.svg";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "treatmentsandprocedures", label: "Treatments & Procedures" },
  { id: "specialities", label: "Specialities" },
  { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];

const faq = [
  {
    title: (
      <>
        <div className="flex gap-3">What is cardiology? </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          A branch of medicine dealing with disorders of heart and blood
          vessels. The work of our cardiologists for adults includes diagnosis
          and treatment of adult congenital heart disease, heart failure,
          coronary artery disease, valvular heart disease and arrhythmias. All
          the necessary investigations like ECG, Echocardiogram, Treadmill test,
          Holter monitoring, Ambulatory BP monitoring, tilt table testing,
          cardiac CT, cardiac MRI, and nuclear heart scanning are available to
          provide you with the best adult cardiology treatment at our
          multispeciality hospital in Erode.
        </p>
        <h4 className="font-semibold">
          Diagnostic Tests Available in our Cardiology Hospital:
        </h4>
        <h2 className="font-semibold text-[#2B3990]">ECG:</h2>
        <p>
          Cardiac problems such as heart attack, heart block, etc. can be
          detected by measuring the electrical activity of the heart, which is
          done by electrocardiogram (ECG).
        </p>
        <h2 className="font-semibold text-[#2B3990]">ECHOCARDIOGRAM:</h2>
        <p>
          The structure and function of the heart can be assessed by moving
          images produced by sound waves. Various heart diseases can be
          diagnosed by this readily available investigation.
        </p>
        <h2 className="font-semibold text-[#2B3990]">TREADMILL TEST:</h2>
        <p>
          Patients will walk on a treadmill at graded levels and their 12- lead
          ECG will be monitored for heart rate, ST-T segment changes. The
          presence or absence of changes will be interpreted accordingly to
          detect heart problems like coronary artery disease, heart block,
          etc..., that helps in determining the cardiology treatment that is to
          proceed further accordingly.
        </p>
        <h2 className="font-semibold text-[#2B3990]">
          STRESS ECHOCARDIOGRAPHY:
        </h2>
        <p>
          Heart is exerted by exercise or medicines and its activity is
          monitored by echocardiography. For those who are not able to walk to
          perform treadmill test, this is a very useful test to rule out
          coronary artery disease.
        </p>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
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
          Our dedicated isolation rooms are designed to care for patients
          requiring advanced support, including those on ventilators or
          undergoing dialysis. Each room features negative pressure technology
          to ensure a controlled and secure environment for managing
          droplet-spread infections.
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
          At Sudha Multispeciality Hospital, we offer compassionate and expert
          care for newborns who need intensive support. Our NICU is built to
          nurture even the tiniest lives with:
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Advanced
              life-support systems for premature and low-birth-weight babies</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Experienced
              neonatologists and paediatricians available 24/7 </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Continuous
              monitoring and specialized respiratory care</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Family-centred approach that supports parents every step of the
              way </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  A safe,
              sterile environment designed for delicate immune systems </li>

          </ul>

          <p className="mt-3">
            Every newborn deserves a healthy beginning and we’re here to make
            that happen with care, comfort, and hope.
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
          At Sudha Multispeciality Hospital, our PICU is a dedicated space for
          children requiring intensive medical attention. The unit is equipped
          to handle a wide range of paediatric emergencies with round-the-clock
          care.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Advanced
              life-support systems for premature and low-birth-weight babies</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Specialised
              care for life-threatening infections, neurological crises,
              hematologic-oncologic emergencies, respiratory distress, trauma,
              and complex post-operative recovery </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /><b>Procedural sedation provided for invasive procedures such as:</b> </li>


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



            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  ECMO support available in collaboration with the paediatric cardiothoracic team for referred cases </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Manned by an expert team of paediatric intensivists and specially trained PICU nurses </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  24/7 intensive monitoring and care tailored to the unique needs of children </li>

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
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Managed by a skilled team of cardiologists, intensivists, and critical care nurses </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Family-centred approach that supports parents every step of the
              way </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Immediate access to ECG, echocardiography, and emergency interventions </li>

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
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Equipped with advanced cardiac monitors, defibrillators, and ventilators </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Managed by experienced cardiothoracic surgeons, cardiac intensivists, and ICU-trained nurses </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Focus on pain control, infection prevention, and early recovery </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />  Round-the-clock care for optimum surgical outcomes and patient safet </li>

          </ul>

        </div>
      </div>
    ),
  },
];

export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState('');

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
    <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 lg:sticky top-24 h-fit space-y-6">
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
          

          <button className="btn-sidebar inline-flex items-center gap-2 bg-white text-[#2B3990] font-semibold px-7 py-3 rounded-full   mt-5 text-[14px] hover:-translate-y-[3px] transition-transform duration-200">
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Find a Doctor Box */}
        <div
          className="mt-2 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-white"
          style={{
            background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
          }}
        >
          <div className="text-left mb-4 sm:mb-0 sm:mr-4">
            <h3 className="text-[26px]  font-bold">
              Find a<br />
              Doctor?
            </h3>
          </div>

          <div className="w-24 sm:w-32 md:w-40">
            <Image
              src={doctorImg}
              alt="Doctor"
              className="rounded-lg w-full customposition h-auto object-cover"
            />
          </div>
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
                  className="w-full h-[400px] rounded-2xl object-cover"
                />
                <h2 className="text-[24px] mb-4 mt-4">
                  Advanced Intensive Care Units in
                  <span className="text-[#2B3990]"> Erode</span>with World-Class
                  Equipment
                </h2>
                <p className="mb-4">
                  The Intensive Care Units at Sudha Multispeciality Hospital in
                  Erode are built to deliver timely, high-quality care to
                  patients facing critical and life-threatening conditions. Our
                  facility is equipped with advanced critical care
                  infrastructure and the latest medical technology to support
                  rapid response and effective treatment.
                </p>

                <p className="mb-4 ">
                  A dedicated team of intensivists, doctors, and specially
                  trained nurses ensures round-the-clock monitoring and expert
                  care. Patient vitals and conditions are consistently tracked,
                  allowing for immediate medical intervention whenever needed.
                </p>

                <p className="mb-4 ">
                  The ICU layout at Sudha Multispeciality Hospital is
                  strategically designed to allow quick access for doctors and
                  surgeons during emergencies, helping save crucial time. With
                  expert staff, modern equipment, and a patient-first approach,
                  we are committed to offering the highest standard of critical
                  care when every second counts.
                </p>

                <p className="font-bold text-primary-blue mb-4">
                  The department of critical care medicine holds the following
                  units:
                </p>

                <ul className="space-y-4 text-start mt-4">
                            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />   Critical Care Unit 1(Beds)</li>
                            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} /> Critical Care Unit 2 (Beds)</li>
                            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Isolation Rooms (Rooms)</li>



                            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Paediatric Intensive Care Unit (beds)</li>

                            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Medical Intensive Care Unit (Beds)</li>

                            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Cardiac Intensive Coronary Care Unit (beds)</li>

                            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} />Cardiothoracic Surgery Intensive Care Unit (beds)</li>
                             <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={20} height={20} /> Neonatal Intensive Care Unit (Beds)</li>
                          </ul>
                
              </>
            )}

            {id === "treatmentsandprocedures" && (
              <>
                <h2 className="text-[24px] mt-5 mb-3">
                  Treatments & Procedures
                </h2>
                <p className="mb-3">
                  A wide range of critical procedures are routinely carried out,
                  including but not limited to the following interventions:
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
              </>
            )}

            {id === "specialities" && (
              <div className="space-y-2 text-gray-700">
                <h2 className="text-[24px] mt-5 mb-3">Specialities</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <>
                <h2 className="text-[24px]  mt-5 pb-3">Doctors</h2>
                <DoctorSlider />
              </>
            )}

            {/* {id === "faqs" && (
              <div className="mt-8">
                <h2 className="text-[24px]  mt-5 pb-3">FAQ</h2>
                <Faq faq={faq} />
              </div>
            )} */}
          </section>
        ))}
      </div>
    </div>
  );
}
