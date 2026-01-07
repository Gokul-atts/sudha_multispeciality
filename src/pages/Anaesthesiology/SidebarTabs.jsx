"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/Anaesthesia/anaesthesiology-inner.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import BookAppointmentModal from "@/components/bookappointmentmodal";

import Checklight from "@/assets/home/check-light.svg";
import Link from "next/link";
// ---------------- Accordion Data ----------------
const accordionData = [
  {
    title: <div className="flex gap-3">General Anaesthesia</div>,
    content: (
      <div className="space-y-4">
        <p>
          Our general anaesthesia services are designed to ensure complete
          patient safety, comfort, and optimal surgical conditions across a wide
          range of specialities. Recognised as one of the best anaesthesiology
          hospitals, our best anaesthesia doctors' team in Erode team delivers
          tailored care to patients undergoing complex and routine surgeries
          alike.
        </p>

        <h4 className="font-bold text-[16px] text-[#2B3990]">
          Our General Anaesthesia services are provided for:
        </h4>
        <ul className="space-y-4">
          {[
            "General and Laparoscopic Surgeries",
            "Orthopaedic and Joint Replacement Procedures  ",
            "Paediatric and Neonatal Surgeries",
            "Urological and Gynaecological Interventions  ",
            "Neurosurgical and Spine Procedures",
            "Oncological Surgeries  ",
            "Emergency and Trauma Care",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[14px] font-semibold"
            >
              <Image src={Checklight} alt="tick" width={24} height={24} />
              {item}
            </li>
          ))}
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
    title: <div className="flex gap-3">Cardiac Anaesthesia</div>,
    content: (
      <div className="space-y-4">
        <p>
          Sudha Multispeciality Hospital is a trusted name in Cardiac
          Anaesthesia, with a legacy of over 40 years in delivering safe and
          advanced anaesthetic care for a wide range of heart procedures. Our
          dedicated team of cardiac anaesthetists plays a critical role in the
          success of both adult and paediatric cardiac surgeries, working in
          close coordination with cardiologists and cardiothoracic surgeons.
        </p>

        <h4 className="font-bold text-[16px] text-[#2B3990]">
          We provide specialised anaesthesia services for:
        </h4>
        <ul className="space-y-4">
          {[
            "Coronary Artery Bypass Grafting (CABG)  ",
            "Valve Repair and Replacement Surgeries  ",
            "Congenital Heart Defect Corrections",
            "Aortic Aneurysm Repairs  ",
            "Minimally Invasive Cardiac Procedures",
            "Interventional Cardiology Support in Cath Labs  ",
            "Electrophysiology Procedures and Pacemaker Implantations ",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[14px] font-semibold"
            >
              <Image src={Checklight} alt="tick" width={24} height={24} />
              {item}
            </li>
          ))}
        </ul>

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

// ---------------- Sidebar Tabs ----------------
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "services", label: "Services" },
  { id: "doctors", label: "Doctors" },
];

// ---------------- Component ----------------
export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState("");

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
      { rootMargin: "-20% 0px -60% 0px" }
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
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl p-4 sm:p-6">
          <h3 className="text-[16px] text-center font-bold mb-5">
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
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isActive ? "bg-[#2b3990]" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={`text-[15px] font-bold transition-colors ${
                          isActive ? "text-[#2b3990]" : "text-black"
                        } group-hover:text-[#2A3D90]`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {isActive ? (
                      <div className="w-8 h-8 rounded-full bg-[#2A3D90] flex items-center justify-center transition-all transform group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2b3990] transition-all transform group-hover:scale-110" />
                    )}
                  </a>
                  <hr className="my-3 border-t border-gray-100" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:block">
          {/* Hospital Info Box */}
          <div
            className="relative rounded-2xl overflow-hidden text-white text-center px-8 py-10"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(42,61,144,0.9), rgba(12,18,42,0.9)), url(${Frame.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-[20px] font-bold mb-2">
              Sudha Multispeciality Hospital
            </h3>
            <hr className="border-light" />
            <ul className="space-y-4 text-start mt-4">
              {[
                "Experienced anaesthesiologists for all surgical specialties",
                "World-class equipment and advanced anaesthesia workstations",
                "24/7 anaesthesia support across all specialties",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-1 text-[14px] font-semibold"
                >
                  <Image
                    className="mt-1"
                    src={Checklight}
                    alt="tick"
                    width={12}
                    height={10}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="btn-white mt-5 flex items-center gap-2 mx-auto"
               onClick={() => {
    window.location.href = "tel:+919042065454";
  }}
            >
              Book an Appointment <ArrowUpRight className="w-5 h-5" />
            </button>
            <BookAppointmentModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>

          {/* Find a Doctor */}
          <Link href="/find-a-doctor">
            <div
              className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
              style={{
                background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
              }}
            >
              {/* Text Section */}
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
                <h3 className="text-[24px] sm:text-xl  font-bold leading-snug">
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
        {serviceSections.map(({ id }) => (
          <section key={id} id={id} className="scroll-mt-32 rounded-xl">
            {id === "overview" && (
              <>
                <Image
                  src={aboutOverview}
                  alt="Anaesthesiology Overview"
                  className="w-full h-[380px] rounded-2xl object-cover"
                />
                <div className="mt-6 space-y-4">
                  <h2 className="text-[24px]">
                    Best Anaesthesiology Hospital in
                    <span className="text-[#2B3990]"> Erode</span> with Four
                    Decades of Experience in Healing
                  </h2>
                  <p>
                    At Sudha Multispeciality Hospital, our Department of
                    Anaesthesia delivers round-the-clock perioperative care.
                    This includes thorough pre-anaesthetic evaluation, expert
                    intraoperative management, and attentive postoperative
                    monitoring for a wide range of surgical specialities.
                  </p>
                  <p>
                    Our anaesthesia team extends its expertise beyond the
                    operating theatre, providing safe and efficient anaesthesia
                    treatment for procedures such as interventional pulmonology,
                    radiological interventions, obstetric pain relief, and
                    assisted reproductive techniques.
                  </p>
                  <p>
                    The department comprises state-of-the-art operating theatres
                    catering to General Surgery, Paediatrics, Orthopaedics,
                    Urology, Oncology, Obstetrics, and Neurosurgery. Each
                    theatre is equipped with modern anaesthesia workstations,
                    high-end haemodynamic monitoring systems, and ultrasound
                    guidance for vascular access and regional nerve blocks.
                  </p>
                  <p>
                    With an unwavering commitment to patient safety, surgical
                    excellence, and offering quality anaesthesia treatment in
                    Erode, Sudha Multispeciality Hospital stands as the Best
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
                    "Well-equipped Operating Theatres (OTs) with modern anaesthesia machines, ventilators, and scavenging systems. ",
                    "Post-Anaesthesia Care Unit (PACU) for close monitoring and recovery after anaesthesia. ",
                    "Central Gas Supply System with uninterrupted supply of oxygen, nitrous oxide, compressed air, and suction. ",
                    "Advanced Anaesthesia Workstations  ",
                    "Ultrasound Machines for regional anaesthesia and vascular access.  ",
                    "Anaesthesia Services for Non-Operating Room Procedures (NORA) for radiology, gastroenterology, pulmonology, and other required specialities.  ",
                  ].map((facility, i) => (
                    <li
                      key={i}
                      className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3"
                    >
                      <div className="w-2 h-2 mt-1 rounded-lg bg-[#2B3990]"></div>
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
              <div className="space-y-2 md:mb-0 mb-10">
                <h2 className="text-[24px] mt-5 ">Doctors</h2>
                <DoctorSlider specialty="Anaesthesia" max={4} counter={3} />
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="block md:hidden">
        {/* Hospital Info Box */}
        <div
          className="relative rounded-2xl overflow-hidden text-white text-center px-8 py-10"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(42,61,144,0.9), rgba(12,18,42,0.9)), url(${Frame.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-[20px] font-bold mb-2">
            Sudha Multispeciality Hospital
          </h3>
          <hr className="border-light" />
          <ul className="space-y-4 text-start mt-4">
            {[
              "Experienced anaesthesiologists for all surgical specialties",
              "World-class equipment and advanced anaesthesia workstations",
              "24/7 anaesthesia support across all specialties",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-1 text-[14px] font-semibold"
              >
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />
                {item}
              </li>
            ))}
          </ul>
          <button
            className="btn-white mt-5 flex items-center gap-2 mx-auto"
            onClick={() => {
              window.location.href = "tel:+919042065454";
            }}
          >
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
          <BookAppointmentModal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>

        {/* Find a Doctor */}
        <Link href="/find-a-doctor">
          <div
            className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
            style={{
              background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
            }}
          >
            {/* Text Section */}
            <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
              <h3 className="text-[24px] sm:text-xl  font-bold leading-snug">
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
