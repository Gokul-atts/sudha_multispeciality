
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checklight from "@/assets/home/check-light.svg";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/neurology/neurology.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
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
        <div className="flex gap-3">What is cardiology? </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          A branch of medicine dealing with disorders of heart and blood
          vessels. The work of our cardiologists for adults includes diagnosis
          and treatment of adult congenital heart disease, heart failure,
          coronary artery disease, valvular heart disease and arrhythmias. All
          the necessary investigations like ECG, Echocardiogram, Treadmill test,
          Holter monitoring, Ambulatory BP monitoring, tilt table testing,
          cardiac CT, cardiac MRI, and nuclear heart scanning are available to
          provide you with the best adult cardiology treatment at our
          multispeciality hospital in Erode.
        </p>
        <h4 className="font-semibold">
          Diagnostic Tests Available in our Cardiology Hospital:
        </h4>
        <h2 className="font-semibold text-[#2B3990]">ECG:</h2>
        <p>
          Cardiac problems such as heart attack, heart block, etc. can be
          detected by measuring the electrical activity of the heart, which is
          done by electrocardiogram (ECG).
        </p>
        <h2 className="font-semibold text-[#2B3990]">ECHOCARDIOGRAM:</h2>
        <p>
          The structure and function of the heart can be assessed by moving
          images produced by sound waves. Various heart diseases can be
          diagnosed by this readily available investigation.
        </p>
        <h2 className="font-semibold text-[#2B3990]">TREADMILL TEST:</h2>
        <p>
          Patients will walk on a treadmill at graded levels and their 12- lead
          ECG will be monitored for heart rate, ST-T segment changes. The
          presence or absence of changes will be interpreted accordingly to
          detect heart problems like coronary artery disease, heart block,
          etc..., that helps in determining the cardiology treatment that is to
          proceed further accordingly.
        </p>
        <h2 className="font-semibold text-[#2B3990]">
          STRESS ECHOCARDIOGRAPHY:
        </h2>
        <p>
          Heart is exerted by exercise or medicines and its activity is
          monitored by echocardiography. For those who are not able to walk to
          perform treadmill test, this is a very useful test to rule out
          coronary artery disease.
        </p>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the main cause of heart problems?
        </div>
      </>
    ),
    content: <p>Details coming soon.</p>,
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
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Interventional Neuroradiology for Subarachnoid Haemorrhage & AVM </li>
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
        <p className="mt-3 font-bold text-primary-blue">Key Treatments: </p>

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
    <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-8">

      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 lg:sticky top-24 h-fit space-y-6">
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



          <button className="btn-sidebar inline-flex items-center gap-2 bg-white text-[#2B3990] font-semibold px-7 py-3 rounded-full   mt-5 text-[14px] hover:-translate-y-[3px] transition-transform duration-200">
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

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
      <div className="flex-1 space-y-0">
        {serviceSections.map(({ id, label }) => (
          <section key={id} id={id} className="scroll-mt-32 rounded-xl">
            {id === "overview" && (
              <>
                <Image src={aboutOverview} alt="aboutOverview" className="w-full h-[400px] rounded-2xl object-cover" />
                <h2 className="text-[24px] mb-4 mt-4">
                  Expert Neurology & Neurosurgery Services at Sudha Multispeciality Hospital in <span className="text-[#2B3990]"> Erode</span>
                </h2>
                <p className=" mb-3">
                  At Sudha Multispeciality Hospital, our Neurology Department is a centre of excellence offering expert diagnosis, treatment, and surgical care for a wide range of neurological disorders. From acute stroke care to complex brain and spine surgeries, our multidisciplinary team of neurologists, neurosurgeons, and neuro-rehabilitation experts use the latest technology and research-backed approaches to deliver high-precision care. Whether it’s epilepsy, Parkinson’s, brain tumours, or spine conditions, we are equipped to offer comprehensive neuro care under one roof. Recognised as one of the best neurology hospitals, we strive to improve outcomes and quality of life for patients with complex neurological conditions.
                </p>

              </>
            )}



            {id === "facilities" && (
              <>
                <h2 className="text-[24px] mt-5 mb-3">Facilities</h2>
                <ul>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>24 x 7 Emergency Neurology Services</b></li>
                  <p className="ml-5"> Immediate care for stroke, seizures, head injuries, and neuro-emergencies. </p>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>General & Special Wards</b></li>
                  <p className="ml-5"> Dedicated neuro-care units with trained duty doctors and staff nurses for continuous patient monitoring.</p>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>State-of-the-Art Neuro Intensive Care Unit (Neuro-ICU)</b></li>
                  <p className="ml-5">Equipped with advanced monitoring systems and ventilator support for critical neurological patients.</p>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>Neurodiagnostic Lab</b></li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Electroencephalography (EEG) for seizure disorder diagnosis </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Nerve Conduction Studies (NCS), EMG & Evoked Potential Studies</li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Transcranial Doppler for stroke evaluation</li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Sleep Study & Video Telemetry for sleep and epilepsy disorders</li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Microelectrode Recording for Deep Brain Stimulation (DBS)</li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> <b>Advanced Surgical Tools </b></li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Vario Operative Microscope</li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>CRW Stereotactic System for pinhole neurosurgeries </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3 text-sm">
                    <div className="w-2 h-2 ml-6 rounded-lg bg-[#bcbfc2]"></div>Intraoperative Monitoring for high-risk surgeries </li>

                </ul>
              </>
            )}



            {id === "services" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 mb-3">Services</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <>
                <h2 className="text-[24px]  mt-5 pb-3">Doctors</h2>
                <DoctorSlider />
              </>
            )}

            {/* {id === "faqs" && (
              <div className="mt-8">
                <h2 className="text-[24px]  mt-5 pb-3">FAQ</h2>
                <Faq faq={faq} />
              </div>
            )} */}
          </section>
        ))}
      </div>
    </div>
  );
}
