"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/generalsurgery/generalsurgery-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";

import Checklight from "@/assets/home/check-light.svg";
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
        <div className="flex gap-3">
          What is the most common general surgery?{" "}
        </div>
      </>
    ),
    content: (
      <p>
        The most common general surgeries include appendectomy (removal of the
        appendix), hernia repair, gallbladder removal, and minor abdominal
        procedures. At Sudha Multispeciality Hospital, considered one of the
        best hospitals in Erode for general surgery, these procedures are
        performed by the best general surgeons with safe and effective care.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          What organs are involved in general surgery?
        </div>
      </>
    ),
    content: (
      <p>
        General surgery mainly involves organs in the abdomen, including the
        stomach, intestines, appendix, liver, gallbladder, and hernia-affected
        areas. Equipped with experienced general surgeons in Erode, Sudha
        Multispeciality Hospital offers advanced treatments and a personalized
        recovery plan to every patient.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What disease is under general surgery?
        </div>
      </>
    ),
    content: (
      <p>
        General surgeons treat conditions such as appendicitis, hernias,
        gallstones, intestinal blockages, tumors, and injuries requiring
        surgical care. Sudha Multispeciality Hospital, recognized as one of the
        best hospitals in Erode for general surgery, offers effective surgical
        management for these conditions with the best surgeons.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the major surgery in general surgery?
        </div>
      </>
    ),
    content: (
      <p>
        Major surgeries include abdominal operations, tumor removals,
        gallbladder and liver surgeries, and other complex procedures. At Sudha
        Multispeciality Hospital, one of the best hospitals in Erode for general
        surgery, major surgeries are performed by skilled surgeons with proper
        pre- and post-operative care.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What pre-operative preparations are needed — fasting, medications?
        </div>
      </>
    ),
    content: (
      <p>
        Before surgery, patients may need to fast for a few hours, avoid certain
        medications, and undergo basic investigations like blood tests and
        imaging. At Sudha Multispeciality Hospital, the best hospital for
        general surgery in Erode, doctors guide patients through all
        pre-operative steps to ensure safety and smooth recovery.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How long will the surgery take and what is the expected recovery time?
        </div>
      </>
    ),
    content: (
      <p>
        The duration of surgery depends on the type and complexity of the
        procedure. Minor surgeries may take less than an hour, while major
        procedures can take several hours. Recovery can range from a few days to
        several weeks. Sudha Multispeciality Hospital, recognized as one of the
        best hospitals in Erode for general surgery, ensures proper
        post-operative care and follow-up for faster recovery.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Who is the Best General Surgeon in Erode?
        </div>
      </>
    ),
    content: (
      <p>
        The team of experienced and highly skilled general surgeons at Sudha
        Multispeciality Hospital is recognised as the best general surgeons in
        Erode, offering advanced treatments, modern surgical techniques, and
        personalised care for every patient.{" "}
      </p>
    ),
  },
];

const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Generalsurgery"/> */}
          Laparoscopic and Minimally Invasive Surgeries
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our team performs a wide range of laparoscopic surgeries that offer
          faster recovery, reduced pain, and smaller scars. Using
          high-definition imaging and precision instruments, our surgeons ensure
          better outcomes and minimal hospital stay for patients across all age
          groups.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Gallbladder removal (Laparoscopic cholecystectomy){" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Appendectomy{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Hernia repair (Laparoscopic hysterectomy){" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Laparoscopic diagnostic procedures{" "}
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
          {/* <Image src={one} alt="Generalsurgery" /> */}
          Gastrointestinal and Abdominal Surgeries
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Comprehensive surgical management for conditions related to the
          stomach, intestines, liver, and abdominal organs. These surgeries are
          carried out using both open and laparoscopic techniques, ensuring
          effective care tailored to each patient's condition and severity.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Intestinal obstruction{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Perforation repair{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> Liver
              abscess drainage{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> Bowel
              resection surgeries{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Laparoscopic hemicolectomy{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Laparoscopic fundoplication{" "}
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
          {/* <Image src={one} alt="Generalsurgery" /> */}
          Emergency and Trauma Surgeries
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Our department handles all forms of surgical emergencies
          round-the-clock. Backed by intensive care and rapid diagnostics, we
          provide timely intervention for life-threatening conditions with a
          multidisciplinary team approach.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Abdominal trauma
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Peritonitis{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Internal bleeding{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Emergency exploratory laparotomy{" "}
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
          {/* <Image src={one} alt="Generalmedicine" /> */}
          Oncology-Related Surgeries
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          We perform cancer-related surgeries involving the gastrointestinal
          tract, breast, thyroid, and soft tissues, in coordination with
          oncology teams. These procedures are done with utmost precision to aid
          further treatment and recovery.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Breast lump removal (Modified Radical Mastectomy)
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Thyroidectomy{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> GI
              tumour excision{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Biopsy and staging procedures{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> Soft
              tissue tumors removal{" "}
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
            Comprehensive Surgical Services
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
                Round-the-clock surgical and post-operative care
              </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />{" "}
                Advanced operation theatres with infection control systems
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
                Specialised surgical team for routine and emergency cases
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
                  className="w-full h-[400px] rounded-2xl object-cover"
                />
                <h2 className="text-[24px] mb-2 mt-4">
                  Best General Surgeons at the Best Hospital in
                  <span className="text-[#2B3990]"> Erode</span> for General
                  Surgery
                </h2>
                <p className="mb-4">
                  The General Surgery Department at Sudha Multispeciality
                  Hospital in Erode is equipped to manage a wide spectrum of
                  surgical needs with advanced technology and a team of best
                  general surgeons in Erode. From routine procedures to complex
                  operations, every patient receives personalised and
                  evidence-based care. The department operates 24/7 with fully
                  equipped operating rooms, modern tools like CUSA and Harmonic
                  Scalpel, and dedicated ICU support to ensure optimal outcomes
                  and faster recovery.
                </p>
              </>
            )}

            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>Fully
                    equipped operating theatres with laminar airflow for
                    infection control
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>
                    Advanced high-definition laparoscopic systems and surgical
                    instruments
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> 24/7
                    Surgical Intensive Care Unit with trained doctors and nurses
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> 24/7
                    general and special wards with round-the-clock support staff
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    In-house diagnostic lab and pharmacy available at all times
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Phoenix instant radiant warmer for post-surgical thermal
                    support
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> CUSA
                    technology for complex liver surgeries
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Harmonic Scalpel for precision tissue dissection and
                    coagulation
                  </li>
                </ul>
              </div>
            )}

            {id === "services" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 ">Services</h2>

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
              Round-the-clock surgical and post-operative care
            </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />{" "}
              Advanced operation theatres with infection control systems
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
              Specialised surgical team for routine and emergency cases
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
