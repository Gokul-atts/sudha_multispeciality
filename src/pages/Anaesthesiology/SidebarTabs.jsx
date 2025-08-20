"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/anaesthesia/anaesthesiaoverview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Checklight from "@/assets/home/check-light.svg";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Adult Cardiology" />  */}
          General Anaesthesia
        </div>
      </>
    ),
    content: (
      <div className=" space-y-4">
        <p>
          Our general anaesthesia services are designed to ensure complete
          patient safety, comfort, and optimal surgical conditions across a wide
          range of specialities. Recognised as one of the best anaesthesiology
          hospitals in Erode, our expert anaesthesia team delivers tailored care
          to patients undergoing complex and routine surgeries alike.
        </p>

        <h4 className="font-bold text-[16px] text-[#2B3990]">
          {" "}
          Our General Anaesthesia services are provided for:{" "}
        </h4>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> General and Laparoscopic Surgeries </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Orthopaedic and Joint Replacement Procedures </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Paediatric and Neonatal Surgeries </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Urological and Gynaecological Interventions </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Neurosurgical and Spine Procedures </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} />Oncological Surgeries </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Emergency and Trauma Care </li>
          </ul>
        </div>

        <p className="mt-5">
          Each patient receives a comprehensive pre-anaesthetic assessment,
          where our anaesthetists review medical history, conduct necessary
          investigations, and plan the safest anaesthetic approach.
        </p>

        <p className="mt-5">
          During surgery, patients are continuously monitored using advanced
          haemodynamic and respiratory monitors, ensuring real-time tracking of
          vital parameters. Our modern anaesthesia workstations are equipped
          with precise gas delivery systems, integrated ventilation, and safety
          mechanisms to maintain a stable and controlled environment.
        </p>

        <p className="mt-5">
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
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Cardiac Anaesthesia
        </div>
      </>
    ),
    content: (
      <div className="space-y-4">
        <p>
          Sudha Multispeciality Hospital is a trusted name in Cardiac Anaesthesia, with a legacy of over 40 years in delivering safe and advanced anaesthetic care for a wide range of heart procedures. Our dedicated team of cardiac anaesthetists plays a critical role in the success of both adult and paediatric cardiac surgeries, working in close coordination with cardiologists and cardiothoracic surgeons.
        </p>

        <h4 className="font-bold text-[16px] text-[#2B3990]">
          We provide specialised anaesthesia services for:
        </h4>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Coronary Artery Bypass Grafting (CABG)  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Valve Repair and Replacement Surgeries  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Congenital Heart Defect Corrections  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Aortic Aneurysm Repairs </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Minimally Invasive Cardiac Procedures  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Interventional Cardiology Support in Cath Labs </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Electrophysiology Procedures and Pacemaker Implantations </li>
          </ul>
        </div>

        <p>
          Our cardiac operating theatres are equipped with advanced anaesthesia workstations, invasive monitoring systems, transoesophageal echocardiography (TOE), and real-time haemodynamic assessment tools to ensure precision and safety during surgery.
        </p>

        <p>
          From pre-operative optimisation and intraoperative management to intensive postoperative care in a specialised cardiac ICU, our team ensures every patient receives personalised and vigilant care throughout their surgical journey.
        </p>

        <p>
          With decades of experience and a commitment to excellence, Sudha Multispeciality Hospital continues to be recognised among the Best Cardiac Anaesthesia Centres in Erode, upholding the highest standards of clinical expertise and patient outcomes.
        </p>
      </div>
    ),
  },

];

const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "services", label: "Services" },
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
    <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs Box */}
        <div className="bg-white rounded-xl p-4 sm:p-6">
          <h3 className="text-[16px]  text-center font-bold  mb-5">
            Quality Anaesthetic Care
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
          className="relative rounded-2xl overflow-hidden text-white text-center px-8 py-10"
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Experienced anaesthesiologists for all surgical specialties </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />World-class equipment and advanced anaesthesia workstations</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />24/7 anaesthesia support across all specialities </li>
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
          <section
            key={id}
            id={id}
            className="scroll-mt-32 rounded-xl "
          >
            {id === "overview" && (
              <>
                <Image
                  src={aboutOverview}
                  alt="Anaesthesiology Overview"
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl object-cover"
                />

                <div className="mt-6 space-y-4">
                  <h2 className="text-[24px]">
                    Best Anaesthesiology Hospital in{" "}
                    <span className="text-[#2B3990]">Erode</span> with Four Decades of
                    Experience in Healing
                  </h2>

                  <p className="mb-4">
                    At Sudha Multispeciality Hospital, our Department of Anaesthesia
                    delivers round-the-clock perioperative care. This includes
                    thorough pre-anaesthetic evaluation, expert intraoperative
                    management, and attentive postoperative monitoring for a wide
                    range of surgical specialities.
                  </p>

                  <p className="mb-4">
                    Our anaesthesia team extends its expertise beyond the operating
                    theatre, providing safe and efficient anaesthetic support for
                    procedures such as interventional pulmonology, radiological
                    interventions, obstetric pain relief, and assisted reproductive
                    techniques.
                  </p>

                  <p className="mb-4">
                    The department comprises state-of-the-art operating theatres
                    catering to General Surgery, Paediatrics, Orthopaedics, Urology,
                    Oncology, Obstetrics, and Neurosurgery. Each theatre is equipped
                    with modern anaesthesia workstations, high-end haemodynamic
                    monitoring systems, and ultrasound guidance for vascular access
                    and regional nerve blocks.
                  </p>

                  <p className="mb-4">
                    With an unwavering commitment to patient safety and surgical
                    excellence, Sudha Multispeciality Hospital stands as the Best
                    Anesthesiology Hospital in Erode.
                  </p>
                </div>
              </>
            )}

            {id === "facilities" && (
              <>
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul>
                  {[
                    "Pre-Anaesthesia Evaluation Clinic (PAC) for assessing patients before surgery and minimising perioperative risks.",
                    "Well-equipped Operating Theatres (OTs) with modern anaesthesia machines, ventilators, and scavenging systems.",
                    "Post-Anaesthesia Care Unit (PACU) for close monitoring and recovery after anaesthesia.",
                    "Central Gas Supply System with uninterrupted supply of oxygen, nitrous oxide, compressed air, and suction.",
                    "Advanced Anaesthesia Workstations",
                    "Ultrasound Machines for regional anaesthesia and vascular access.",
                    "Anaesthesia Services for Non-Operating Room Procedures (NORA) for radiology, gastroenterology, pulmonology, and other required specialities.",
                  ].map((facility, index) => (
                    <li
                      key={index}
                      className="flex gap-2 items-start sm:items-center text-[#5E566A] text-[15px] font-semibold mt-3"
                    >
                      <div className="w-2 h-2 mt-1 sm:mt-0 rounded-lg bg-[#2B3990]"></div>
                      {facility}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {id === "services" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5">Services</h2>
                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <>
                <h2 className="text-[24px] mt-5 pb-3">Doctors</h2>
                <DoctorSlider />
              </>
            )}
          </section>
        ))}
      </div>

    </div>
  );
}
