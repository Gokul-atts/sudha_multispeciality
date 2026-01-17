
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checklight from "@/assets/home/check-light.svg";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/neurology/neurology-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";


import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
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
        <div className="flex gap-3">Can you recover from neurological issues?  </div>
      </>
    ),
    content: (
      <p>
        Recovery from neurological issues depends on the type and severity of the condition. With early diagnosis and appropriate interventions, patients can experience significant improvement. Sudha Multispeciality Hospital, recognised as one of the leading neurology hospitals in Erode, offers personalised treatment plans under the guidance of the best neurologists in Erode.
      </p>

    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          What are the serious symptoms of neurological disorders?
        </div>
      </>
    ),
    content: <p>Serious neurological symptoms include sudden weakness, numbness, severe headaches, loss of coordination, seizures, or difficulties in speech and vision. Sudha Multispeciality Hospital, the best hospital for brain, spinal cord, and nervous system treatment in Erode, provides comprehensive diagnostics and immediate care for such conditions. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Are neurological problems treatable?
        </div>
      </>
    ),
    content: <p>Many neurological problems are treatable with a combination of medications, therapies, and surgical interventions. Sudha Multispeciality Hospital, offering the best treatment for stroke in Erode and other neurological disorders, ensures advanced care by expert neurologists. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Which hospital in Erode is best for treating neurological problems?
        </div>
      </>
    ),
    content: <p>Sudha Multispeciality Hospital is regarded as one of the top neurology hospitals in Erode, equipped with state-of-the-art facilities and experienced neurologists for treating a wide range of brain, spinal cord, and nervous system disorders. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Can stress lead to neurological issues?
        </div>
      </>
    ),
    content: <p>Prolonged stress can contribute to neurological problems, including headaches, nerve pain, and sleep disturbances. The best neurologists in Erode at Sudha Multispeciality Hospital provide assessment and treatment to manage stress-related neurological conditions.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How do neurological problems begin?
        </div>
      </>
    ),
    content: <p>Neurological problems can begin due to genetic factors, infections, trauma, lifestyle-related issues, or age-related degeneration. Sudha Multispeciality Hospital, recognised as the best hospital for stroke treatment in Erode, offers early detection and intervention to prevent progression. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Can stress cause nerve pain?
        </div>
      </>
    ),
    content: <p>Chronic stress can aggravate nerve pain or trigger neuropathic symptoms. At Sudha Multispeciality Hospital, one of the leading neurology hospitals in Erode, patients receive comprehensive care and personalised treatment from the best neurologists in Erode. </p>,
  },
];



const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Neurology" />  */}
          Stroke and Neurovascular Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Specialised in rapid stroke diagnosis, clot removal, and vascular surgeries to restore blood flow and prevent disability. Our multidisciplinary approach ensures timely intervention during the golden hour for better outcomes. We also provide rehabilitation support for post-stroke recovery.
        </p>
        <p className="mt-3 font-bold text-primary-blue">Key Procedures: </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Interventional Neuroradiology for Subarachnoid Haemorrhage & AVM  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Carotid Angioplasty for Carotid Artery Stenosis </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Neurovascular Surgery including Aneurysm and AVM clipping </li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Neurology" /> */}
          Movement Disorders & Parkinson’s Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We offer advanced treatments for Parkinson’s, tremors, and dystonia using non-invasive and surgical options. Treatment plans are tailored based on the stage of the disease and patient needs. Our care focuses on improving motor control and enhancing life quality.
        </p>


        {/* <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Botox Injections for Movement Disorders, Cerebral Palsy & Post-Stroke Status</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Deep Brain Stimulation (DBS) </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Microelectrode Recording for DBS Targeting</li>
          </ul>

        </div> */}
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Neurology" /> */}
          Epilepsy & Seizure Disorder Management
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Comprehensive epilepsy care for uncontrolled seizures including surgical options for drug-resistant cases. Our diagnostic tools allow for pinpointing seizure origin for effective management. We also support long-term lifestyle and medication guidance for patients.
        </p>

        {/* <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Video EEG Monitoring</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Epilepsy Surgeries</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Intraoperative Monitoring for Seizure Focus Removal</li>
          </ul>

        </div> */}
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Neurology" /> */}
          Neurosurgery & Brain Tumour Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Highly precise microsurgical and stereotactic surgeries for brain tumours and cranial conditions. Our expert team ensures minimal invasion and preservation of brain functions. We use intraoperative guidance and nerve monitoring to enhance surgical safety.
        </p>
        <p className="mt-3 font-bold text-primary-blue">Advanced Surgeries: </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Micro Neurosurgical Tumour Removal </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Endoscopic Skull based works </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Surgery for vascular lesions </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Cranial Nerve & Motor Cortex Monitoring </li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Neurology" /> */}
          Spinal Disorders & Spine Tumour Surgery
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Expert diagnosis and surgery for spine tumours, scoliosis, and spinal cord compression. We use neuro-navigation and intraoperative testing for precision. Our post-op rehab focuses on restoring mobility and relieving nerve-related pain.
        </p>
        <p className="mt-3 font-bold text-primary-blue">Spine Care Includes:</p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Surgery for Spinal Cord Tumours</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Intraoperative Monitoring for Complex Surgeries</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Sphincter EMG for Urinary & Sexual Dysfunction </li>

          </ul>


        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Neurology" /> */}
          Advanced Neurophysiological Testing
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Accurate diagnostics to assist in treatment planning for complex neurological and neuromuscular disorders. These tests help identify nerve damage, monitor treatment progress, and guide surgical planning. We ensure patient comfort and clarity throughout the testing process.
        </p>
        <p className="mt-3 font-bold text-primary-blue">Key Diagnostics: </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />NCS, EMG, Single Fibre EMG</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Evoked Potential Testing</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Sleep Studies and Multiple Sleep Latency Tests</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Motor Cortex & Sphincter Mapping</li>

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
            Neurology Care
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  Neurology care for all ages – from children to seniors</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 24/7 emergency response for stroke and neurotrauma cases</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> World-class neurological care under one roof</li>

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
                  Expert Neurology & Neurosurgery Services at the Best Neurology Hospital in   <span className="text-[#2B3990]"> Erode</span>
                </h2>
                <p className=" mb-3">
                  At Sudha Multispeciality Hospital, one of the leading Neurology hospitals in Erode, our Neurology Department is a centre of excellence offering expert diagnosis, treatment, and surgical care for a wide range of neurological disorders. From acute stroke care to complex brain and spine surgeries, our team of best neurologists, neurosurgeons, and neuro-rehabilitation experts in Erode use the latest technology and research-backed approaches to deliver high-precision care. Whether it’s epilepsy, Parkinson’s, brain tumours, or spine conditions, we as the best hospital for brain. Spinal cord, and nervous system, are equipped to offer comprehensive neuro care under one roof. Recognised as one of the best hospitals for stroke treatment in Erode, we strive to improve outcomes and quality of life for patients with complex neurological conditions.
                </p>

              </>
            )}



            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 ">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>24 x 7 Emergency Neurology Services
                    </b></li>
                  <p className="ml-5"> Immediate care for stroke, seizures, head injuries, and neuro-emergencies. </p>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>General & Special Wards</b></li>
                  <p className="ml-5"> Dedicated neuro-care units with trained duty doctors and staff nurses for continuous patient monitoring. </p>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>State-of-the-Art Neuro Intensive Care Unit (Neuro-ICU)
                    </b></li>
                  <p className="ml-5">Equipped with advanced monitoring systems and ventilator support for critical neurological patients. </p>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>Neurodiagnostic Lab</b></li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Electroencephalography (EEG) for seizure disorder diagnosis  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Nerve Conduction Studies (NCS), EMG & Evoked Potential Studies </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Transcranial Doppler for stroke evaluation </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Sleep Study & Video Telemetry for sleep and epilepsy disorders</li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Microelectrode Recording for Deep Brain Stimulation (DBS)</li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>Advanced Surgical Tools </b></li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Vario Operative Microscope</li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>CRW Stereotactic System for pinhole neurosurgeries </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Intraoperative Monitoring for high-risk surgeries </li>

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
                <DoctorSlider specialty="Neurology" max={2} counter={2} />
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  Neurology care for all ages – from children to seniors</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 24/7 emergency response for stroke and neurotrauma cases</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> World-class neurological care under one roof</li>

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
