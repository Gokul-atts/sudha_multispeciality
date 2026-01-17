
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checklight from "@/assets/home/check-light.svg";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/nephrology/nephrology-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";

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
        <div className="flex gap-3">Which hospital is best for treating kidney disease? </div>
      </>
    ),
    content: (
      <p>
        Sudha Multispeciality Hospital is known as the best hospital for kidney treatment in Erode, providing advanced nephrology care led by the best nephrologist in Erode. We offer the world-class treatments at an affordable price in Erode
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          What does stage 3 kidney disease mean?
        </div>
      </>
    ),
    content: <p>Stage 3 kidney disease indicates a moderate decline in kidney function, where the kidneys are not filtering waste effectively. At this stage, timely treatment at the best hospital for nephrology in Erode helps manage symptoms and prevent further progression. Sudha Multispeciality Hospital offers advanced treatments for kidney with the best nephrologists in Erode. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How can kidney function be improved?
        </div>
      </>
    ),
    content: <p>Kidney function can be improved and maintained through lifestyle changes such as controlling diabetes, managing blood pressure, eating a balanced diet, and staying hydrated. Regular monitoring can help you identify the underlying medical conditions. Consult the best nephrologists in Erode at Sudha Multispeciality Hospital. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the early signs of kidney disease?
        </div>
      </>
    ),
    content: <div className="">
      <p>Early signs of kidney disease include, </p>
      <ul className="space-y-4">
        <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Swelling in legs, ankles, or face</li>
        <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Frequent urination / foamy urine</li>
        <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Blood in urine</li>
        <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Poor appetite</li>
        <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Muscle cramping</li>
      </ul>

      <p>It is important to consult a specialist immediately when noticing these symptoms. Consult the best doctors for kidney health in Erode at Sudha Multispeciality Hospital.  </p>
    </div>



  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          When should you consult a nephrologist?
        </div>
      </>
    ),
    content: <p>A nephrologist should be consulted in cases of persistent high blood pressure, blood in urine, swelling, or a family history of kidney disease. Sudha Multispeciality Hospital has the best nephrologist in Erode offering timely and expert care at an affordable price. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Can kidney disease be cured?
        </div>
      </>
    ),
    content: <p>Kidney disease can be effectively managed with early diagnosis and timely treatment. Sudha Multispeciality Hospital, the best hospital for kidney treatment in Erode, provides advanced treatments and therapies to better the kidney health. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          When is kidney surgery necessary?
        </div>
      </>
    ),
    content: <p>Kidney surgery is necessary in conditions such as severe kidney stones, tumours, or advanced damage that cannot be managed with medications alone. With skilled surgeons and best nephrologists in Erode, Sudha Multispeciality Hospital offers expert surgical care with high success rates. </p>,
  },
];



const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Nephrology" />  */}
          Core Nephrology & Kidney Disease Management
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We provide complete care for all types of kidney-related conditions in both adults and children. Our nephrology specialists are equipped to handle a wide range of diagnoses, ensuring accurate treatment at every stage.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Adult and Paediatric Nephrology under one roof</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Treatment for chronic and acute kidney diseases </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Personalised plans based on each patient’s condition</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Nephrology" /> */}
          Dialysis Services
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Our dialysis unit operates 24/7, delivering safe and efficient treatment under expert supervision. We offer a range of dialysis options to suit individual medical needs, including intensive care support.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Routine Haemodialysis and Peritoneal Dialysis</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> ICU-based dialysis including CAVH </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Monitored by trained dialysis technicians and nephrologists</li>
          </ul>

        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Nephrology" /> */}
          Advanced Therapeutic Procedures
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          We offer specialised treatments for complex renal disorders using advanced techniques that improve outcomes and provide better disease control.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Kidney biopsy for precise diagnosis</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Plasmapheresis for immune-related kidney diseases </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Expert handling of high-risk and emergency cases</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Nephrology" /> */}
          Renal Support & Patient Education
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          We go beyond treatment by offering continuous education and support for long-term kidney health. Our team ensures patients are well-informed and confident throughout their care journey.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Routine CAPD (Continuous Ambulatory Peritoneal Dialysis) programs</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Counselling for dialysis and transplant readiness</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Nutritional guidance and long-term kidney care planning</li>
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
            Advanced Nephrology Care
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  State-of-the-art dialysis unit with 24/7 monitoring</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Expert nephrologists and trained dialysis technicians</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Comprehensive kidney care for adults and children</li>

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
                <Image src={aboutOverview} alt="aboutOverview" className="w-full h-[380px] rounded-2xl object-cover" />
                <h2 className="text-[24px] mb-2 mt-4">
                  Best Hospital for Nephrology in<span className="text-[#2B3990]"> Erode</span> for Advanced Kidney Treatment
                </h2>
                <p className="mb-3">
                  At Sudha Multispeciality Hospital, our Nephrology Department is committed to providing advanced and compassionate care for patients with all types of kidney-related conditions. With over 40+ years of experience in healthcare, we offer round-the-clock emergency services, a dedicated team of best nephrologists in Erode, and the latest in renal care technology. Our expertise extends to both adult and paediatric nephrology, making us a trusted centre and the best hospital for kidney treatment in Erode.
                </p>

              </>
            )}



            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 ">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>24/7 Hi-Tech Dialysis Unit with state-of-the-art dialysis machines
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>Dedicated team of trained dialysis technicians and nephrologists
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Separate inpatient wards for general and special care requirements
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Specialised ICU support for dialysis and Continuous Arteriovenous Hemofiltration (CAVH)
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Emergency nephrology services available round the clock
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Sterile and secure environment for performing kidney biopsies and advanced renal procedures
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

            {id === "doctors" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 ">Doctors</h2>
                <DoctorSlider specialty="Nephrologist" counter={1} />
              </div>
            )}

            {id === "faqs" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px]  mt-5">Frequently Asked Questions</h2>
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  State-of-the-art dialysis unit with 24/7 monitoring</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Expert nephrologists and trained dialysis technicians</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Comprehensive kidney care for adults and children</li>

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
