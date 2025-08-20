"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/dermatology/dermatology.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import Checklight from "@/assets/home/check-light.svg";

const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "treatmentsandprocedures", label: "Treatments and Procedures" },
  { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];

// Dummy accordionData + faq omitted for brevity...

export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState("");

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
    <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs Box */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-5">
            Dermatology Care We Offer
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {serviceSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className="flex justify-between items-center group transition duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-[#2b3990]" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={`text-sm sm:text-base md:text-[15px] font-bold transition-colors duration-300 ${
                          isActive ? "text-[#2b3990]" : "text-black"
                        } group-hover:text-[#2A3D90]`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {isActive ? (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2A3D90] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2b3990] transition-all duration-300 transform group-hover:scale-110" />
                    )}
                  </a>
                  <hr className="my-2 sm:my-3 border-t border-gray-100" />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sudha Hospital Box */}
        <div
          className="relative rounded-2xl overflow-hidden text-white text-center px-4 sm:px-6 py-8 sm:py-10"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(42, 61, 144, 0.9), rgba(12, 18, 42, 0.9)), url(${Frame.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
            Sudha Multispeciality Hospital
          </h3>
          <hr className="border-light" />
          <ul className="space-y-3 sm:space-y-4 text-left mt-4">
            <li className="flex items-start gap-2 text-sm sm:text-[15px] font-semibold">
              <Image src={Checklight} alt="tick" width={16} height={16} />Expert
              dermatologists for both medical and cosmetic concerns.
            </li>
            <li className="flex items-start gap-2 text-sm sm:text-[15px] font-semibold">
              <Image src={Checklight} alt="tick" width={16} height={16} />
              Safe and effective skin rejuvenation and anti-aging solutions.
            </li>
            <li className="flex items-start gap-2 text-sm sm:text-[15px] font-semibold">
              <Image src={Checklight} alt="tick" width={16} height={16} />
              Personalized treatment plans for chronic and recurring skin issues.
            </li>
          </ul>

          <button className="btn-sidebar inline-flex items-center gap-2 bg-white text-[#2B3990] font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full mt-6 text-sm sm:text-[14px] hover:-translate-y-[3px] transition-transform duration-200">
            Book an Appointment <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>

        {/* Find a Doctor Box */}
 


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
      <div className="flex-1 space-y-8 sm:space-y-10 md:space-y-12">
        {serviceSections.map(({ id }) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 rounded-xl"
          >
            {id === "overview" && (
              <div className="space-y-3 sm:space-y-4">
                <Image
                  src={aboutOverview}
                  alt="aboutOverview"
                  className="w-full h-[220px] sm:h-[300px] md:h-[400px] rounded-2xl object-cover"
                />
                <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold">
                  Dermatology Services and Skin Treatments at{" "}
                  <span className="text-[#2B3990]">Sudha</span>{" "}
                  Multispeciality Hospital
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  The Dermatology Department at Sudha Multispeciality Hospital
                  provides expert diagnosis and advanced treatment for a wide
                  spectrum of skin, hair, and nail conditions. Our team of
                  skilled dermatologists combines clinical excellence with the
                  latest technology to deliver comprehensive care for both
                  medical and cosmetic concerns. Whether managing chronic skin
                  disorders or offering aesthetic solutions, we ensure
                  patient-centred care with an emphasis on long-term skin health.
                </p>
              </div>
            )}

            {id === "facilities" && (
              <>
                <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold mt-4 sm:mt-5">
                  Facilities
                </h2>
                <ul className="mt-3 space-y-2 sm:space-y-3">
                  {[
                    "Dedicated consultation suites for skin evaluation",
                    "Minor procedure room for outpatient dermatological procedures",
                    "Skin and hair analysis equipment",
                    "UV light therapy unit for treating chronic skin conditions",
                    "Laser treatment setup for acne scars and pigmentation",
                    "Trained nursing staff for patient care and post-procedure support",
                  ].map((facility, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-center text-gray-700 text-sm sm:text-[15px] font-semibold"
                    >
                      <div className="w-2 h-2 rounded-lg bg-[#2B3990]" />
                      {facility}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {id === "treatmentsandprocedures" && (
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold mt-5 mb-3">
                  Treatments and Procedures
                </h2>
                <Accordion accordionData={[]} />
              </div>
            )}

            {id === "doctors" && (
              <>
                <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold mt-5 pb-3">
                  Doctors
                </h2>
                <DoctorSlider />
              </>
            )}

            {/* {id === "faqs" && (
              <div className="mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold pb-3">
                  FAQ
                </h2>
                <Faq faq={[]} />
              </div>
            )} */}
          </section>
        ))}
      </div>
    </div>
  );
}
