
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checklight from "@/assets/home/check-light.svg";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/paediatrics/paediatrics-overview.webp";
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
        <div className="flex gap-3">Who is the Best Pediatrician in Erode? </div>
      </>
    ),
    content: (
      <p>
        Sudha Multispeciality Hospital is equipped with the team of the best paediatricians in Erode offering expert care for children across all age groups. The hospital provides comprehensive evaluations, preventive care, and treatment for a wide range of paediatric conditions.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          What is the maximum age to see a pediatrician?
        </div>
      </>
    ),
    content: <p>Paediatric care typically covers children from birth up to 18 years of age. Sudha Multispeciality Hospital, recognised as the best paediatrics hospital in Erode, provides expert guidance and treatment throughout this period to ensure healthy growth and development. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the common health problems of children?
        </div>
      </>
    ),
    content: <p>Common health issues in children include respiratory infections, nutritional deficiencies, allergies, skin problems, and developmental concerns. The best child specialists in Erode at Sudha Multispeciality Hospital offer accurate diagnosis and effective treatment for these conditions at an affordable price. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the best ways to improve child health?
        </div>
      </>
    ),
    content: <p>Child health can be improved through balanced nutrition, regular physical activity, adequate sleep, timely vaccinations, and routine health check-ups. At Sudha Multispeciality Hospital, the best paediatricians in Erode provide personalised care plans to promote overall well-being. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How can health problems be prevented in children?
        </div>
      </>
    ),
    content: <p>Preventive care includes vaccinations, hygiene practices, routine screenings, proper nutrition, and parental education. Sudha Multispeciality Hospital, recognised as the best paediatrics hospital in Erode, focuses on preventive strategies to ensure long-term health for children. </p>,
  },

];



const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Paediatrics and Neonatology"/>  */}
          Paediatric Emergency & Intensive Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our hospital provides 24x7 emergency services for infants and children with acute or life-threatening conditions. With full-time paediatric intensivists and specialised equipment, we ensure immediate intervention and expert care.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />24/7 paediatric emergency response</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Paediatric ICU (PICU) with advanced monitoring </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Neonatal ICU (NICU) for premature and critical newborns</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Specialised paediatric ventilators for respiratory support</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Paediatrics and Neonatology" /> */}
          Inpatient Paediatric Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          We offer safe, comfortable inpatient care with trained duty doctors and paediatric nurses. Both general and special wards are designed to meet the emotional and medical needs of young patients.
        </p>


        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />General and special paediatric wards</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Specially trained paediatric nurses and duty doctors </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Infection-controlled, child-friendly environments</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Continuous observation and family-friendly care</li>


          </ul>

        </div>
      </div>
    ),
  },

  // {
  //   title: (
  //     <>
  //       <div className="flex gap-3">
  //         {/* <Image src={one} alt="Paediatrics and Neonatology" /> */}
  //         Paediatric Cardiology
  //       </div>
  //     </>
  //   ),
  //   content: (
  //     <div className="text-sm space-y-3">
  //       <p>
  //         We specialise in diagnosis and offering treatments for heart conditions in newborns, children, and adolescents. With advanced diagnostic technologies and experienced specialists, we provide personalised care to ensure healthy heart function and overall well-being.
  //       </p>


  //       <div>
  //         <ul className="space-y-4">
  //           <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Diagnosis and management of congenital heart defects </li>
  //           <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Treatment of arrhythmias and heart rhythm disorders  </li>
  //           <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Echocardiography and ECG for detailed cardiac assessment </li>
  //           <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Medical and surgical management of paediatric heart diseases </li>


  //         </ul>

  //       </div>
  //     </div>
  //   ),
  // },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Paediatrics and Neonatology" /> */}
          Diagnostic & Supportive Services
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Accurate and timely diagnosis is at the core of our paediatric care. We also offer support services to assist recovery and growth, including lactation and nutrition support.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Bedside ultrasound and paediatric echocardiography</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Growth and developmental assessments </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Qualified lactation consultants for breastfeeding support</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />In-house nutritionist for diet-based guidance</li>


          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Paediatrics and Neonatology" /> */}
          Preventive & Developmental Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          We promote child wellness through routine health checks, immunisations, and parental guidance to ensure healthy development and disease prevention.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Routine vaccinations and immunisation programs</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Preventive screenings and wellness check-ups</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Developmental monitoring for infants and toddlers</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Counselling for parents on childcare and growth</li>


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
            Comprehensive Paediatric care
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 24/7 emergency and intensive paediatric care </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Dedicated NICU and PICU with advanced monitoring </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Experienced paediatricians and trained nursing staff </li>

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
                <Image src={aboutOverview} alt="aboutOverview" className="w-full h-[380px] rounded-2xl object-cover" />
                <h2 className="text-[24px] mb-2 mt-4">
                  Best Paediatric Care by the Best Paediatrician in<span className="text-[#2B3990]"> Erode</span>
                </h2>
                <p className="mb-3">
                  Sudha Multispeciality Hospital’s Paediatrics Department is built on clinical excellence, advanced infrastructure, and round-the-clock specialist support. As the best pediatric hospital in Erode, our dedicated team is equipped with the best child specialists, intensivists, and trained nursing staff provide expert care.
                </p>
                <p className="mb-3">
                  With dedicated NICU and PICU units, emergency response systems, and child-friendly facilities, we are equipped to handle a wide spectrum of paediatric conditions, ensuring timely, compassionate, and evidence-based treatment for every child.
                </p>

              </>
            )}



            {id === "facilities" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5 mb-3">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> 24x7 Emergency Services for paediatric emergencies  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Dedicated NICU with specially trained duty doctors and nurses </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>24x7 Paediatric Intensive Care Unit (PICU) with full-time paediatric intensivist coverage  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> General and Special Wards staffed with trained paediatric nurses and duty doctors  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Advanced Paediatric Ventilators and life-support systems   </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> In-house Paediatric Ultrasound and Echocardiography for timely diagnosis   </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Qualified Lactation Consultants for supporting new mothers </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Nutritionist Support to manage diet-based therapy and child growth plans  </li>

                </ul>
              </div>
            )}



            {id === "services" && (
              <div className="space-y-2">
                <h2 className="text-[24px]  mt-5">Services</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5">Doctors</h2>
                <DoctorSlider specialty="Paediatrician" max={4} counter={4} />
              </div>
            )}

            {id === "faqs" && (
              <div className="space-y-2">
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 24/7 emergency and intensive paediatric care </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Dedicated NICU and PICU with advanced monitoring </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Experienced paediatricians and trained nursing staff </li>

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
