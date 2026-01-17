"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";


// Assets
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/dental/dentist-doctor.webp";
import Checklight from "@/assets/home/check-light.svg";

// Components
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import BookAppointmentModal from "@/components/bookappointmentmodal";


// Sections for Sidebar
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "services", label: "Services" },
  { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];

// FAQ Data
const faq = [
  {
    title: "Which is the Best Dentistry and Oral Surgery Hospital in Erode?",
    content: (
      <p>
        The best dental and oral surgery hospital should offer advanced treatments, experienced dentists, and facilities for both routine care and complex surgeries. In Erode, Sudha Multispeciality Hospital is known as one of the best dental hospitals, providing comprehensive dental treatments and oral surgery with expert care from the best dentists in Erode.
      </p>
    ),
  },
  {
    title: "What does oral surgery mean in dentistry?",
    content: (
      <p>
        Oral surgery refers to surgical procedures performed in the mouth, such as wisdom tooth extraction, dental implants, jaw correction, or treatment of oral infections. At Sudha Multispeciality Hospital, patients receive specialized oral surgery services performed by skilled dental surgeons, ensuring safe and effective outcomes.
      </p>
    ),
  },
  {
    title: "How do I find the best dentist in Erode?",
    content: (
      <p>
        Finding the best dentist involves looking for qualifications, experience, modern facilities, and patient reviews. A good dentist provides personalized treatment and ensures comfort throughout the procedure. Sudha Multispeciality Hospital houses some of the best dentists in Erode, offering advanced dental care and treatments under one roof.
      </p>
    ),
  },
  {
    title: "What is the cost of cavity removal?",
    content: (
      <p>
        The cost of cavity removal depends on the size of the cavity, the material used for filling, and the overall treatment required. While prices may vary, at Sudha Multispeciality Hospital, the best dental hospital in Erode, patients receive the best dental treatments at affordable prices with expert guidance.
      </p>
    ),
  },
  {
    title: "What is root canal treatment?",
    content: (
      <p>
        A root canal treatment is a dental procedure used to treat infection or damage inside the tooth, saving it from extraction. It involves cleaning, disinfecting, and sealing the affected tooth. At Sudha Multispeciality Hospital, one of the best dental hospitals in Erode, root canal treatments are performed using advanced techniques to ensure long-term tooth health.
      </p>
    ),
  },
  {
    title: "Is root canal treatment a painful procedure?",
    content: (
      <p>
        With modern techniques and anesthesia, root canal treatment is generally not painful. Most patients feel only mild discomfort during or after the procedure. At Sudha Multispeciality Hospital, the best dentists in Erode ensure pain-free dental care, making root canal treatments comfortable and effective.
      </p>
    ),
  },
  {
    title: "What is the treatment for a tooth gap?",
    content: (
      <p>
        Tooth gaps can be treated with options such as braces, aligners, dental bonding, veneers, or implants, depending on the severity and patient’s preference. At Sudha Multispeciality Hospital, patients receive personalized advice and some of the best dental treatments in Erode for correcting tooth gaps and restoring confident smiles.
      </p>
    ),
  },
];

// Accordion Data
const accordionData = [
  {
    title: "Restorative & Preventive Dentistry",
    content: (
      <>
        <p>
          Comprehensive care to preserve natural teeth, restore functionality,
          and prevent further decay or damage. Every treatment plan is tailored
          to individual dental needs and comfort. Early intervention and regular
          check-ups are key to maintaining oral health.
        </p>
        <ul className="space-y-3 mt-3">
          {[
            "Dental crowns and bridges",
            "Tooth-coloured fillings",
            "Fluoride treatments and dental sealants",
            "Routine dental cleanings and oral exams",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm font-semibold">
              <Image src={Checklight} alt="tick" width={20} height={20} />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    content: (
      <>
        <p>
          We offer smile-enhancing procedures designed to improve the appearance,
          alignment, and brightness of your teeth. Using modern tools and
          materials, our cosmetic dentistry ensures natural-looking, durable
          results.
        </p>
        <ul className="space-y-3 mt-3">
          {[
            "Teeth whitening and polishing",
            "Dental veneers",
            "Smile correction and alignment",
            "Cosmetic reshaping and contouring",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm font-semibold">
              <Image src={Checklight} alt="tick" width={20} height={20} />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Oral Surgery & Implants",
    content: (
      <>
        <p>
          Dental implants offer permanent tooth replacement, restoring both appearance and chewing function. We also address facial and jaw corrections. Our oral surgery unit handles everything from simple extractions to complex implant placements with precision and care. With sedation support and sterile surgical protocols, we ensure safety and patient comfort throughout.
        </p>
        <ul className="space-y-3 mt-3">
          {[
            "Dental implants",
            "Tooth extractions and minor oral surgeries",
            "Bone grafting",
            "Rhinoplasty and maxillofacial procedures",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm font-semibold">
              <Image src={Checklight} alt="tick" width={20} height={20} />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Specialised Dental Care",
    content: (
      <>
        <p>
          We bring together specialists from various dental disciplines to offer targeted and age-appropriate care. Each specialist follows an integrated treatment approach for optimal results and long-term oral health maintenance.
        </p>
        <ul className="space-y-3 mt-3">
          {[
            "Prosthodontics – Replacing missing teeth with crowns, dentures, and bridges",
            "Orthodontics – Braces and aligners for teeth alignment",
            "Pedodontics – Paediatric dental care",
            "Endodontics – Root canal treatment",
            "Periodontics – Gum disease treatment and maintenance",
            "Laser Dentistry – Minimally invasive treatments for soft tissue and gum procedures",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm font-semibold">
              <Image src={Checklight} alt="tick" width={20} height={20} />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState("");
  const [openModal, setOpenModal] = useState(false);

  console.log("openModal", openModal);
  const [isOpen, setIsOpen] = useState(false);

  // Observe active section
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

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs */}
        <div className="bg-white rounded-2xl p-4 sm:p-6">
          <h3 className="text-lg text-center font-bold mb-5">
            Advanced Dentistry Solutions
          </h3>
          <ul className="space-y-3">
            {serviceSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className="flex justify-between items-center group transition"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full ${isActive ? "bg-[#2B3990]" : "bg-gray-300"
                          }`}
                      />
                      <span
                        className={`text-sm font-bold ${isActive ? "text-[#2B3990]" : "text-black"
                          } group-hover:text-[#2A3D90]`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {isActive ? (
                      <div className="w-8 h-8 rounded-full bg-[#2A3D90] flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2B3990]" />
                    )}
                  </a>
                  <hr className="my-3 border-t border-gray-100" />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:block">
          {/* Hospital Info */}
          <div
            className="relative rounded-2xl overflow-hidden text-white text-center px-6 py-10"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(42,61,144,0.9), rgba(12,18,42,0.9)), url(${Frame.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-xl font-bold mb-2">
              Sudha Multispeciality Hospital
            </h3>
            <hr />
            <ul className="space-y-3 text-left mt-4">
              {[
                "Child-friendly environment with expert paediatric dental care",
                "Painless root canal and laser-assisted dental procedures",
                "Skilled dental surgeons offering comprehensive treatments under one roof",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-semibold">
                  <Image src={Checklight} alt="tick" width={14} height={14} />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => {
    window.location.href = "tel:04242454545";
  }}>
              Book an Appointment <ArrowUpRight className="w-5 h-5" />
            </button>
            <BookAppointmentModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>

          {/* Find a Doctor */}
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

      {/* Main Content */}
      <div className="flex-1 space-y-10">
        {serviceSections.map(({ id, label }) => (
          <section key={id} id={id} className="scroll-mt-32 rounded-xl">
            {id === "overview" && (
              <>
                <Image
                  src={aboutOverview}
                  alt="Dentistry Overview"
                  className="w-full h-[380px] rounded-2xl object-cover"
                />
                <div className="mt-6 space-y-2">
                  <h2 className="text-[24px] mb-3">
                    Best Dental Hospital in Erode Providing{" "}
                    <span className="text-[#2B3990]">Advanced Care</span> for
                    Dental Problems
                  </h2>
                  <p>
                    The Department of Dentistry and Oral Surgery at Sudha Multispeciality Hospital provides advanced dental care through modern technology and a team of the best dentists and dental surgeons in Erode. From routine dental check-ups to complex oral surgeries, our services cover preventive, restorative, cosmetic, and surgical dental solutions. We ensure a painless and comfortable experience for patients of all ages with strict hygiene protocols and patient-focused care. Whether it's cosmetic enhancement, tooth restoration, or oral rehabilitation, we offer th best dental treatments in Erode under one roof.
                  </p>
                </div>
              </>
            )}

            {id === "facilities" && (
              <div className="space-y-2">
                <h2 className="text-[24px] ">Facilities</h2>
                <ul className="space-y-4">
                  {[
                    "Advanced Inspection Chair with ergonomic design for comfort and accessibility",
                    "OPG (Orthopantomography): Complete digital dental X-ray for panoramic view of teeth and jaw",
                    "RVG (Radio Visuographic): High-resolution imaging for root canal therapy, implants, and bone density analysis",
                    "Intraoral Camera: Real-time visualisation for precise diagnosis and patient education",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 md:items-center items-start text-[#5E566A] text-sm font-semibold"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#2B3990]" />
                      {item}
                    </li>
                  ))}
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
                <h2 className="text-[24px] mt-5">Doctors</h2>
                <DoctorSlider specialty="Dental" max={2} counter={2} />
              </div>
            )}

            {id === "faqs" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5">Frequently Asked Questions</h2>
                <Faq faq={faq} />
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="block md:hidden">
        {/* Hospital Info */}
        <div
          className="relative rounded-2xl overflow-hidden text-white text-center px-6 py-10"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(42,61,144,0.9), rgba(12,18,42,0.9)), url(${Frame.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-xl font-bold mb-2">
            Sudha Multispeciality Hospital
          </h3>
          <hr />
          <ul className="space-y-3 text-left mt-4">
            {[
              "Child-friendly environment with expert paediatric dental care",
              "Painless root canal and laser-assisted dental procedures",
              "Skilled dental surgeons offering comprehensive treatments under one roof",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-semibold">
                <Image src={Checklight} alt="tick" width={14} height={14} />
                {item}
              </li>
            ))}
          </ul>
          <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => {
    window.location.href = "tel:04242454545";
  }}>
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
          <BookAppointmentModal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>

        {/* Find a Doctor */}
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
