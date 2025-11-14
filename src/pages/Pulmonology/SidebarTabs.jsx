
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checklight from "@/assets/home/check-light.svg";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/pulmonology/pulmonology-overview.webp";
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
        <div className="flex gap-3">Who is the best lung specialist in Erode? </div>
      </>
    ),
    content: (
      <p>
        Sudha Multispeciality Hospital is recognized for its expert team of pulmonologists, with some of the best lung specialists in Erode providing advanced care for a wide range of respiratory conditions. The hospital is considered a leading pulmonology hospital in Erode.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          How are lung diseases treated?
        </div>
      </>
    ),
    content: <p>Lung diseases are treated using a combination of medications, respiratory therapy, lifestyle interventions, and, in some cases, surgical procedures. Sudha Multispeciality Hospital, the best hospital for lung treatment in Erode, offers comprehensive treatment plans led by the best pulmonologists in Erode. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How can lung health be improved?
        </div>
      </>
    ),
    content: <p>Lung health can be improved by avoiding smoking, maintaining good air quality, regular exercise, and timely medical checkups. Sudha Multispeciality Hospital provides guidance from the best lung specialists in Erode to help strengthen respiratory health and prevent complications. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the early warning signs of lung disease?
        </div>
      </>
    ),
    content: <p>Early signs of lung disease may include persistent cough, shortness of breath, wheezing, chest discomfort, and recurrent respiratory infections. Sudha Multispeciality Hospital, a leading pulmonology hospital in Erode, provides early diagnosis and treatment to prevent progression. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Is lung disease curable?
        </div>
      </>
    ),
    content: <p>Some lung conditions can be effectively treated or managed, while chronic conditions require long-term care. Sudha Multispeciality Hospital, the best hospital for lung treatment in Erode, offers advanced therapies to control symptoms and improve quality of life. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the symptoms of lung disease in women?
        </div>
      </>
    ),
    content: <p>In women, lung disease may present as chronic cough, breathlessness, fatigue, chest tightness, or recurrent infections. Sudha Multispeciality Hospital, equipped with the best pulmonologists in Erode, provides comprehensive care tailored to women’s respiratory health.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Which hospital in Erode provides advanced treatment for lung disease?
        </div>
      </>
    ),
    content: <p>Sudha Multispeciality Hospital, recognized as a leading pulmonology hospital in Erode, provides advanced treatment for lung diseases. Equipped with the best pulmonologists in Erode, the hospital offers comprehensive care and personalized treatment plans for all respiratory conditions.</p>,
  },
];



const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Pulmonology" /> */}
          Respiratory Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our pulmonology experts provide advanced, personalised treatment for a wide range of respiratory conditions, from common allergies to chronic and progressive lung diseases. We focus on early diagnosis, long-term disease management, and improving lung function to enhance quality of life. Our approach combines medical expertise, modern diagnostics, and evidence-based therapies.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Asthma</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Chronic Obstructive Pulmonary Disease (COPD) </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Interstitial Lung Disease</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Pulmonary arterial hypertension </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Lung cancer </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Occupational lung disease</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Pulmonology" /> */}
          Infectious Lung Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our experienced pulmonologists are well-equipped to detect, isolate, and treat complex respiratory infections. With dedicated infection control protocols and precise diagnostic tools, we manage both acute and chronic infectious diseases efficiently. Our team ensures timely intervention to prevent complications and improve recovery outcomes.
        </p>


        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Tuberculosis (TB)</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Pneumonia </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Fungal and bacterial lung infections </li>
          </ul>

        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Pulmonology" /> */}
          Sleep & Breathing Disorders
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          We offer complete care for patients struggling with sleep-related breathing disorders. Our team uses advanced diagnostics like polysomnography and provides treatment plans tailored to each patient. With CPAP/BiPAP therapy and lifestyle guidance, we aim to restore restful sleep and improve daytime function and respiratory health.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Obstructive Sleep Apnoea</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Snoring and sleep-related breathing issues  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Polysomnography and CPAP/BiPAP support  </li>

          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Pulmonology" /> */}
          Pulmonary Oncology & Critical Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          For patients with severe respiratory conditions, we offer specialised critical care in collaboration with ICU and oncology teams. From advanced diagnostic procedures to emergency respiratory support, our unit is fully equipped to handle life-threatening cases. We also provide compassionate, multidisciplinary care for patients battling lung cancer.
        </p>

        <div>

          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Pulmonary cancers and lung tumour management</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> ICU-based respiratory support </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Emergency care for acute respiratory failure </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Thoracentesis, bronchoscopy, and other procedures </li>
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
            Pulmonary Wellness Care
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 24x7 emergency and ICU support for critical lung conditions</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Multidisciplinary team of experienced pulmonologists and trained respiratory therapists</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />World-class respiratory diagnostic and treatment facilities</li>

            </ul>



            <button className="btn-white mt-5">
              Book an Appointment <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
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
                  Best Pulmonary and Respiratory Care at the Best Pulmonology Hospital in <span className="text-[#2B3990]"> Erode</span>
                </h2>
                <p className="mb-3">
                  Sudha Multispeciality Hospital is recognized as the best hospital for lung treatment in Erode, offering expert care for a wide range of respiratory and pulmonary conditions. With the expertise of the best pulmonologists in Erode and highly skilled lung specialists, the department combines advanced diagnostic tools with round-the-clock intensive care to ensure accurate diagnosis and effective treatment.
                </p>

                <p className="mb-3">
                  From asthma, COPD, and sleep disorders to lung infections and cancer, comprehensive and evidence-based care is delivered through a multidisciplinary approach, ensuring better outcomes and improved quality of life for patients.
                </p>

              </>
            )}



            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 mb-3">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> 24x7 Intensive Medical Care Units with specially trained pulmonology nurses and doctors  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> State-of-the-art Operation Theatres equipped for thoracic and emergency respiratory procedures  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Advanced Radiology & Hi-Tech Laboratory Support for diagnostic accuracy  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> On-site Physiotherapy Services to support pulmonary rehabilitation  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Emergency & Trauma Care Services available 24/7  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Dedicated General & Special Wards with continuous specialist monitoring  </li>

                </ul>
              </div>
            )}



            {id === "services" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px]  mt-5">Services</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5">Doctors</h2>
                <DoctorSlider specialty="Pulmonology" max={2} counter={1} />
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 24x7 emergency and ICU support for critical lung conditions</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Multidisciplinary team of experienced pulmonologists and trained respiratory therapists</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />World-class respiratory diagnostic and treatment facilities</li>

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
