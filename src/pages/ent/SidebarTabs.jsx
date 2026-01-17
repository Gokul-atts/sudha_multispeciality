"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/ent/ent-overview.webp";
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
  { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];

const faq = [
  {
    title: (
      <>
        <div className="flex gap-3">
          Which is the Best ENT Hospital in Erode?{" "}
        </div>
      </>
    ),
    content: (
      <p>
        The best ENT hospital should provide advanced diagnostic tools, expert
        specialists, and treatments for all ear, nose, and throat conditions. In
        Erode, Sudha Multispeciality Hospital is recognized as one of the best
        ENT hospitals, offering comprehensive care and the best treatment for
        ear, nose, and throat issues with experienced ENT specialists.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">How much is an ENT check-up?</div>
      </>
    ),
    content: (
      <p>
        The cost of an ENT check-up depends on the consultation fees and any
        diagnostic tests recommended. Sudha Multispeciality Hospital, the best
        ENT hospital in Erode, provides affordable ENT treatments and expert
        consultation with ENT specialists.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Which super-specialty hospital provides ENT Treatments?
        </div>
      </>
    ),
    content: (
      <p>
        A super-specialty hospital offering ENT treatments should cover medical
        and surgical care for ear, nose, and throat problems. Sudha
        Multispeciality Hospital is a trusted super-specialty hospital in Erode,
        providing the best treatment for ear, nose, and throat conditions,
        supported by advanced technology and skilled ENT specialists.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What conditions require surgery for ENT?
        </div>
      </>
    ),
    content: (
      <p>
        Some ENT conditions that may require surgery include chronic sinusitis,
        nasal polyps, tonsillitis, adenoid problems, ear infections, hearing
        issues, and throat or voice disorders. At Sudha Multispeciality
        Hospital, the best ENT hospital in Erode, surgeries are performed by
        experienced ENT specialists, ensuring safe and effective outcomes.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the recovery time for ENT surgery?
        </div>
      </>
    ),
    content: (
      <p>
        Recovery time after ENT surgery depends on the type of procedure. Minor
        surgeries may require only a few days, while major ones like sinus or
        ear surgery may take a few weeks. At Sudha Multispeciality Hospital, ENT
        specialists provide personalized care plans to ensure faster recovery
        and complete follow-up support.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the most common surgery for ENT patients?
        </div>
      </>
    ),
    content: (
      <p>
        Common ENT surgeries include tonsillectomy, adenoidectomy, sinus
        surgery, and ear tube insertion. These procedures are performed to
        relieve chronic infections, improve breathing, and restore hearing.
        Sudha Multispeciality Hospital, the best hospital for ear, nose, and
        throat issues in Erode, offers advanced surgical care with skilled ENT
        specialists.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3"> How much does sinus surgery cost?</div>
      </>
    ),
    content: (
      <p>
        The cost of sinus surgery varies based on the severity of the condition,
        the surgical method, and hospital facilities. Sudha Multispeciality
        Hospital in Erode provides sinus treatment and surgery from expert ENT
        specialists with advanced care at an affordable price.{" "}
      </p>
    ),
  },
];

const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Dentistry and Oral Surgery" />  */}
          Diagnostic & Therapeutic Audiology
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Our audiology unit offers advanced diagnostic tools to evaluate
          hearing loss, balance issues, and auditory disorders. We cater to all
          age groups and ensure early detection and personalized treatment plans
          to improve hearing outcomes and quality of life.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Hearing loss evaluation{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Audiometry for children and adults{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Tinnitus and vertigo assessments{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Newborn hearing screening{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Customized hearing rehabilitation {" "}
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
          {/* <Image src={one} alt="ENT" />  */}
          Endoscopic Nasal & Sinus Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We specialize in minimally invasive endoscopic procedures for nasal
          blockages, sinusitis, polyps, and more. Our ENT surgeons use
          cutting-edge equipment for faster recovery, minimal discomfort, and
          better precision in treating nasal and sinus conditions.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Functional Endoscopic Sinus Surgery (FESS){" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Diagnostic Nasal Endoscopy{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> Sinus
              and skull-base surgeries{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Surgery for a deviated nasal septum{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Management of CSF leak {" "}
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
          {/* <Image src={one} alt="ENT" /> */}
          Advanced Ear Surgery & Otology
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          From chronic infections to complex inner ear issues, our ENT
          specialists provide a range of treatments for ear conditions.
          Surgeries are performed using microscopes and endoscopes for improved
          outcomes, especially in delicate middle and inner ear procedures.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Microscopic and endoscopic ear surgeries
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Mastoidectomy and tympanoplasty{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Acoustic neuroma surgery{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Paediatric otology care{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} /> Ear
              trauma and infection management {" "}
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
          {/* <Image src={one} alt="ENT" /> */}
          Voice, Throat & Sleep Apnea Treatments
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          We address a wide range of throat conditions, including voice
          disorders, snoring, and sleep-related issues. Our team ensures
          accurate diagnosis and offers surgical or therapeutic options for
          restoring voice quality and improving breathing during sleep.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Laryngoscopy and speech therapy
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Surgery for voice disorders{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Snoring and sleep apnea treatment{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} /> Vocal
              cord polyp/nodule removal{" "}
            </li>

            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Laryngology care{" "}
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function SidebarTabs() {
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Missing state added here
  const [activeSection, setActiveSection] = useState("overview");

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

  return (
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs Box */}
        <div className="bg-white  rounded-2xl p-4 sm:p-6">
          <h3 className="text-[16px]  text-center font-bold  mb-5">
            Our ENT Care
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
                Comprehensive ENT care for patients of all age groups
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
                24/7 emergency ENT support with experienced specialists
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
                Advanced diagnostic tools for hearing, balance, and voice
                disorders
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
                  className="w-full h-[430px] rounded-2xl object-cover"
                />
                <h2 className="text-[24px]  mt-4">
                  Best ENT Hospital in
                  <span className="text-[#2B3990]"> Erode </span> offering
                  Expert Care for Ear, Nose, and Throat.
                </h2>
                <p className="mb-4">
                  Our ENT department offers expert diagnosis and treatment for a
                  wide spectrum of ENT disorders in both adults and children.
                  Our department is equipped with advanced diagnostic and
                  surgical technologies and highly skilled ENT specialists in
                  Erode. As the best ENT hospital in Erode, Sudha
                  Multispeciality Hospital offers best treatment for ear, nose
                  and throat in the Erode region from common infections to
                  complex surgeries.
                </p>
              </>
            )}

            {id === "facilities" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>24/7
                    emergency services for ENT emergencies
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>
                    Dedicated general and special wards with skilled ENT-trained
                    staff
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Advanced Operation Theatre for ENT microsurgeries
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    State-of-the-art ICU for post-surgical and critical ENT care
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Otoendoscopy and Diagnostic Nasal Endoscopy
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Vido
                    laryngoscopy for voice and laryngeal evaluation
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Specialised Allergy, Sinus, and Headache Clinic
                  </li>
                </ul>
              </div>
            )}

            {id === "services" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5">Services</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5 ">Doctors</h2>
                <DoctorSlider specialty="ENT Surgeon" max={2} counter={1} />
              </div>
            )}

            {id === "faqs" && (
              <div className="space-y-2">
                <h2 className="text-[24px]  mt-5">
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
              Comprehensive ENT care for patients of all age groups
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
              24/7 emergency ENT support with experienced specialists
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
              Advanced diagnostic tools for hearing, balance, and voice
              disorders
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
