
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/emergencycare/emergency-care.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Checklight from "@/assets/home/check-light.svg";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "treatmentsandprocedures", label: "Treatments & Procedures" },
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
          {/* <Image src={one} alt="Emergency Care"/> */}
          Cardiology Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Our emergency team is trained to respond swiftly to cardiac events, including heart attacks, arrhythmias, and heart failure. With rapid diagnostics and interventional support, every second counts towards saving a life.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Emergency ECG and cardiac enzyme analysis</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Pre-hospital thrombolysis </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Cardiac monitoring and resuscitation </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Immediate referral to Cath lab when needed </li>
          </ul>


        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Nephrology Emergencies

        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Kidney-related emergencies like acute renal failure or dialysis access issues are managed with expertise. The department is well-equipped for timely fluid management and coordination with nephrologists.
        </p>


        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Emergency dialysis initiation</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Electrolyte imbalance management </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Fluid overload or dehydration stabilization </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Renal trauma care </li>
          </ul>

        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Pulmonology Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Acute respiratory conditions such as severe asthma, COPD exacerbations, and pulmonary embolisms are managed with ventilator support and swift diagnosis.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Non-invasive and invasive ventilator support</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Arterial blood gas analysis </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Pulmonary Edema and embolism care </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Asthma and COPD crisis management  </li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Gastroenterology Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Conditions like gastrointestinal bleeding, severe vomiting, or liver complications are treated promptly to prevent further complications.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> GI bleeding stabilization</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Management of severe dehydration </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Liver failure monitoring and referral </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Emergency endoscopic referral</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Vascular Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Time-sensitive vascular conditions such as stroke, deep vein thrombosis, or arterial blockages are handled with coordinated care.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Stroke protocol activation</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Doppler imaging for vascular flow </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Anticoagulation therapy administration </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Emergency vascular surgery coordination</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Radiology Support
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Integrated diagnostic imaging allows rapid assessment of internal injuries or illnesses without delay.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Emergency CT, X-ray, and ultrasound</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Bedside portable imaging </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Radiologist-guided intervention coordination </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> 24/7 imaging access</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          Orthopaedic Emergencies
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Trauma care, fractures, and dislocations are handled efficiently to reduce pain and restore mobility quickly.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Fracture immobilization and splinting</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Bedside portable imaging </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Trauma surgery coordination </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Post-accident evaluation and imaging </li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Emergency Care" /> */}
          General Emergency Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          For any undifferentiated emergency, including high fever, seizures, snake bites, dog bites, infections, or collapse, our multidisciplinary team ensures timely and appropriate care.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Rapid triage and evaluation </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Immediate stabilization </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Critical care support </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Multispeciality coordination for admission or discharge </li>
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
            Critical Care Services
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Dedicated team of emergency physicians, nurses, and paramedics</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Fully equipped ambulance service with advanced life support</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />24/7 access to diagnostic services and critical care units</li>
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
                  Best Emergency Care in <span className="text-[#2B3990]"> Erode</span> at Sudha Multispeciality Hospital
                </h2>
                <p className="mb-4">
                  The Advanced Emergency Complex at Sudha Multispeciality Hospital is designed to handle all medical emergencies with speed, expertise, and compassion. Equipped with advanced infrastructure, trained personnel, and round-the-clock availability, our emergency department ensures every critical moment is managed with precision. Whether it’s a trauma case, cardiac emergency, or acute illness, we are prepared to provide rapid assessment, accurate diagnosis, and immediate intervention to save lives and stabilise patients effectively.
                </p>

              </>
            )}



            {id === "facilities" && (
              <>
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Fully equipped emergency beds </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Counselling room for families and support  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> 24/7 ambulance services with advanced life support </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Regular staff training for rapid response and updated protocols  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Dedicated adult immunisation for emergency preventive care </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Home care support for palliative and chronic emergency patients </li>

                </ul>
              </>
            )}



            {id === "treatmentsandprocedures" && (
              <div className="space-y-2 ">
                <h3 className="text-[24px]  mt-5 pb-3">Treatments & Procedures</h3>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <>
                <h3 className="text-[24px]  mt-5 pb-3">Doctors</h3>
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
