"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/generalmedicine/general.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
import Checklight from "@/assets/home/check-light.svg";
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "corestrengths", label: "Core Strengths" },
  { id: "medicalexpertise ", label: "Medical Expertise" },
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
          {/* <Image src={one} alt="Generalmedicine"/> */}
          Diagnosis and Management of Common Illnesses
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          We treat a wide range of routine and complex conditions, including fevers, infections, headaches, respiratory disorders, and digestive problems. Our physicians use detailed medical evaluations and advanced diagnostics to ensure effective treatment.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Fever, cold, cough & flu </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Allergies and infections </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Gastritis, acidity, and indigestion </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Headaches and migraines </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Body pain, weakness, and fatigue </li>

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
          Chronic Disease Management
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We provide long-term care for chronic conditions, ensuring regular monitoring and medication support to help patients lead stable, healthier lives.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Diabetes Mellitus </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Hypertension (High Blood Pressure) </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Asthma and COPD </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Thyroid disorders </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Heart disease </li>

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
          Preventive & Lifestyle Health
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We focus on identifying risk factors early through health screenings and promoting lifestyle modifications to prevent future complications.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Annual checkups and health screenings </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Diet and lifestyle counselling </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Vaccination support </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Stress and sleep management </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Obesity and weight   </li>

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
          In-Patient and Emergency Support
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our department works closely with the ICU and Emergency Medicine teams to provide timely diagnosis and stabilization for patients requiring admission or critical care.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Continuous patient monitoring </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Multidisciplinary rounds </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Pre-operative clearance and risk assessment </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> 24/7 availability of general physicians</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Coordinated care with other specialties   </li>

          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          Geriatric & Palliative Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          We provide sensitive and sustained care for elderly patients and those with terminal or long-term illnesses, ensuring comfort and quality of life.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Management of age-related illnesses </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Pain and symptom control </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Support for patients with reduced mobility</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> End-of-life care planning</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Family counselling  </li>

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
            General Healthcare Services
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  Expert physicians available for round-the-clock care and consultation.</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Personalized care plans based on patient history and medical conditions.</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Offers comprehensive diagnosis and treatment for acute and chronic illnesses.</li>
          </ul>
         


          <button className="inline-flex items-center gap-2 bg-white text-[#2B3990] font-semibold px-7 py-3 rounded-full   mt-5 text-[14px]">
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
                  Advanced General Medicine Treatment in
                  <span className="text-[#2B3990]"> Erode</span> at Sudha Multispeciality Hospital
                </h2>
                <p className="mb-4">
                  The Department of General Medicine offers round-the-clock, patient-centred care for a wide range of medical conditions. Equipped with modern diagnostic tools and a team of experienced physicians, our General Medicine unit serves as the first point of contact for all non-surgical health issues. We focus on early diagnosis, preventive care, and long-term disease management for both acute and chronic illnesses. Our physicians collaborate with various specialties within the hospital to ensure integrated and personalized treatment for every patient.
                </p>
              </>
            )}



            {id === "corestrengths" && (
              <>
                <h2 className="text-[24px] mt-5">Core Strengths</h2>
                <ul>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>Experienced physicians delivering evidence-based care
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>Early diagnosis and preventive screenings for lifestyle diseases
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Multisystem disease management and coordination with specialists
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    24/7 emergency and inpatient support
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Holistic approach to patient recovery and rehabilitation
                  </li>
                </ul>
              </>
            )}



            {id === "medicalexpertise " && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5">Medical Expertise </h2>

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
