"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/emergencycare/emergency-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Checklight from "@/assets/home/check-light.svg";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";

import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "treatmentsandprocedures", label: "Treatments & Procedures" },
  // { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];

const faq = [
  {
    title: (
      <>
        <div className="flex gap-3">
          Which is the Best Emergency Care Hospital in Erode?{" "}
        </div>
      </>
    ),
    content: (
      <p>
        The best emergency care hospital is one that provides 24/7 critical
        care, advanced life-saving facilities, and immediate trauma care
        services. It should have a trained emergency response team capable of
        handling accidents, strokes, cardiac arrests, and other life-threatening
        situations. In Erode, Sudha Multispeciality Hospital is widely regarded
        as the best emergency care hospital, trusted for its quick response,
        state-of-the-art critical care unit, and expert trauma care services.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">When to call emergency service?</div>
      </>
    ),
    content: (
      <p>
        You should call emergency services immediately if someone experiences
        chest pain, severe injury, breathing difficulty, unconsciousness, stroke
        symptoms, or heavy bleeding. Quick action in such cases saves lives.
        Sudha Multispeciality Hospital, the best emergency care hospital in
        Erode, provides 24/7 emergency response with highly trained doctors and
        nurses specializing in critical care and trauma care.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3"> How do you perform CPR on a casualty?</div>
      </>
    ),
    content: (
      <p>
        Cardiopulmonary Resuscitation (CPR) involves chest compressions and
        rescue breaths to maintain blood flow and oxygen supply when someone’s
        heart has stopped. The standard method includes 30 compressions followed
        by 2 rescue breaths, repeated until help arrives. At Sudha
        Multispeciality Hospital, the emergency team is trained in advanced life
        support and provides immediate CPR and critical care for cardiac arrest
        and trauma patients.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3"> How do we use CPR during emergencies?</div>
      </>
    ),
    content: (
      <p>
        During emergencies such as cardiac arrest, drowning, or sudden collapse,
        CPR is the first step in keeping the brain and vital organs alive until
        advanced treatment is given. Performing CPR quickly and correctly
        increases survival chances. Sudha Multispeciality Hospital, the best
        emergency care hospital in Erode, has specialists trained in advanced
        CPR techniques as part of their emergency and trauma care services.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3"> What are the steps of emergency care?</div>
      </>
    ),
    content: (
      <p>
        Emergency care begins with assessing the patient’s condition, securing
        the airway, supporting breathing and circulation, controlling bleeding,
        stabilizing vital signs, and shifting the patient to intensive or trauma
        care if required. Sudha Multispeciality, the best emergency care
        hospital in Erode follows global emergency protocols and provides
        seamless transition from first aid to advanced critical care.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are emergency services in a hospital?
        </div>
      </>
    ),
    content: (
      <p>
        Emergency services typically include accident and trauma care, cardiac
        emergency treatment, stroke management, poison and burn care, ventilator
        support, and 24/7 ambulance availability. As the best emergency care
        hospital, Sudha Multispeciality Hospital offers comprehensive emergency
        and critical care services, ensuring patients receive immediate and
        specialized treatment when every second counts.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the contact number for Erode emergency care?
        </div>
      </>
    ),
    content: (
      <p>
        Hospitals provide dedicated emergency contact numbers to ensure quick
        medical help when needed. Sudha Multispeciality Hospital, one of the
        leading emergency care hospitals in Erode, offers 24/7 critical and
        trauma care support. In case of an emergency, call 042-424-54545 for
        immediate assistance.{" "}
      </p>
    ),
  },
];

const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care"/> */}
          Cardiology Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Our emergency team is trained to respond swiftly to cardiac events,
          including heart attacks, arrhythmias, and heart failure. With rapid
          diagnostics and interventional support, every second counts towards
          saving a life.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Emergency ECG and cardiac enzyme analysis
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Pre-hospital thrombolysis{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Cardiac monitoring and resuscitation{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Immediate referral to the Cath lab when needed{" "}
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Nephrology Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Kidney-related emergencies like acute renal failure or dialysis access
          issues are managed with expertise.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Emergency dialysis initiation{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Electrolyte imbalance management{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> Fluid
              overload or dehydration stabilization{" "}
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Pulmonology Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Acute respiratory conditions such as severe asthma, COPD
          exacerbations, and pulmonary embolisms are managed with ventilator
          support and swift diagnosis.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Non-invasive and invasive ventilator support
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Arterial blood gas analysis{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Pulmonary Edema and Embolism Care {" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Asthma and COPD crisis management{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Bronchoscopy{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Traumatic Rib & Lung Injuries {" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Emergency ICD{" "}
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Gastroenterology Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Conditions like gastrointestinal bleeding, severe blood vomiting,
          abdominal distension or liver complications are treated promptly to
          prevent further complications.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} /> GI
              bleeding stabilization
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} /> Acute
              abdominal injuries{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> Acute
              liver failure monitoring{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Emergency endoscopic procedure{" "}
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Vascular Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Time-sensitive vascular conditions such as stroke, deep vein
          thrombosis, or arterial blockages are handled with coordinated care.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Stroke protocol activation
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Doppler imaging for vascular flow{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Anticoagulation therapy administration {" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Emergency vascular surgery coordination
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Radiology Support
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Integrated diagnostic imaging allows rapid assessment of internal
          injuries or illnesses without delay.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Emergency CT, X-ray, MRI and ultrasound
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Bedside portable imaging{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Radiologist-guided intervention coordination{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} /> 24/7
              imaging access
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Orthopaedic Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Trauma care, fractures, and dislocations are handled efficiently to
          reduce pain and restore mobility quickly.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Fracture immobilization and splinting
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} /> Joint
              dislocation reduction{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Trauma surgery coordination{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Post-accident evaluation and imaging{" "}
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          General Emergency Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          For any undifferentiated emergency, including high fever, seizures,
          snake bites, dog bites, infections, or collapse, our multidisciplinary
          team ensures timely and appropriate care.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} /> Rapid
              triage and evaluation{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Immediate stabilization{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Critical care support{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Multispeciality coordination for admission or discharge{" "}
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

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
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs Box */}
        <div className="bg-white  rounded-2xl p-4 sm:p-6">
          <h3 className="text-[16px]  text-center font-bold  mb-5">
            Critical Care Services
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
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-[#2b3990]" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={`text-[15px]  font-bold transition-colors duration-300 ${
                          isActive ? "text-[#2b3990]" : "text-black"
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />{" "}
                Dedicated team of emergency physicians, nurses, and paramedics
              </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />
                Fully equipped ambulance service with advanced life support
              </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />
                24/7 access to diagnostic services and critical care units
              </li>
            </ul>

            <button
              className="btn-white mt-5 flex items-center gap-2 mx-auto"
              onClick={() => {
                window.location.href = "tel:04242454545";
              }}
            >
              Book an Appointment <ArrowUpRight className="w-5 h-5" />
            </button>
            <BookAppointmentModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>

          {/* Find a Doctor Box */}
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
                  24/7 Critical Care at the Best Emergency Care hospital in
                  <span className="text-[#2B3990]"> Erode</span>
                </h2>
                <p className="mb-4">
                  Sudha Multispeciality Hospital, with its Advanced Emergency
                  Complex, is recognised as the best emergency care hospital in
                  Erode for handling medical emergencies with speed, expertise,
                  and compassion. Equipped with advanced infrastructure, trained
                  personnel, and round-the-clock availability, our emergency
                  department ensures every critical moment is managed with
                  precision. Whether it’s a trauma case, cardiac emergency, or
                  acute illness, we are prepared to provide rapid assessment,
                  accurate diagnosis, and immediate intervention to save lives
                  and stabilise patients effectively.
                </p>
              </>
            )}

            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Fully equipped emergency beds
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Counselling room for families and support{" "}
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> 24/7
                    ambulance services with advanced life support{" "}
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Regular staff training for rapid response and updated
                    protocols{" "}
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>
                    Dedicated adult immunisation for emergency preventive care{" "}
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Home
                    care support for palliative and chronic emergency patients{" "}
                  </li>
                </ul>
              </div>
            )}

            {id === "treatmentsandprocedures" && (
              <div className="space-y-2 ">
                <h3 className="text-[24px]  mt-5 ">Treatments & Procedures</h3>

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
                <h2 className="text-[24px]  mt-5 ">
                  Frequently Asked Questions
                </h2>
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />{" "}
              Dedicated team of emergency physicians, nurses, and paramedics
            </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />
              Fully equipped ambulance service with advanced life support
            </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />
              24/7 access to diagnostic services and critical care units
            </li>
          </ul>

          <button
            className="btn-white mt-5 flex items-center gap-2 mx-auto"
            onClick={() => {
              window.location.href = "tel:04242454545";
            }}
          >
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
          <BookAppointmentModal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>

        {/* Find a Doctor Box */}
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
