"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";

import Accordion from "../../components/Accordion";
import aboutOverview from "@/assets/specialites/cardiology/cardiology.webp";
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
const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Adult Cardiology" />  */}
          Adult Cardiology
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          A branch of cardiology focused on diagnosing and treating heart and blood vessel disorders in adults. Our expert cardiologists provide comprehensive care for a range of conditions, including adult congenital heart disease, heart failure, coronary artery disease, valvular heart disease, and arrhythmias.
        </p>

        <p>
          Our multispeciality hospital offers a complete range of advanced diagnostic tests, including ECG, Echocardiogram, Treadmill Test, Holter Monitoring, Ambulatory Blood Pressure Monitoring, Tilt Table Testing, Cardiac CT, Cardiac MRI, and Nuclear Heart Scanning to ensure the best possible care in adult cardiology.
        </p>




      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Interventional Cardiology
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our Interventional Cardiology Centre is renowned for its Primary Angioplasty Program, the gold standard in the treatment of heart attacks. Coronary angiograms and elective coronary artery stenting are performed daily in high volumes by our team of experienced specialists.
        </p>



        <p className="text-[15px]">
          We also offer advanced structural heart disease interventions, including Transcatheter Aortic Valve Implantation (TAVI), along with other catheter-based procedures such as Balloon Mitral Valvotomy (BMV), Thoracic Endovascular Aortic Repair (TEVAR), Endovascular Aneurysm Repair (EVAR), renal artery stenting, and subclavian artery stenting. These procedures are carried out with high success rates, enabling most patients to return home within a day or two without complications.
        </p>
        <div className="">
          <h4 className="font-bold text-[16px] text-[#2B3990] mb-3">
            Fractional Flow Reserve (FFR) / Instantaneous Wave-Free Ratio (iFR)
          </h4>
          <p>
            These techniques are used in the cardiac catheterization laboratory to assess the pressure difference across narrowed coronary arteries. They help determine whether a particular narrowing requires stenting, avoiding unnecessary interventions. 
          </p>
        </div>

        <div className="">
          <h4 className="font-bold text-[16px] text-[#2B3990] mb-3">
            Intravascular Ultrasound (IVUS) and Optical Coherence Tomography (OCT) 
          </h4>
          <p>
            These imaging technologies provide clear visualization of the inner walls of blood vessels, allowing accurate identification and assessment of atherosclerotic plaques. They play a crucial role in ensuring high-precision angioplasty. 
          </p>
        </div>

        <div className="">
          <h4 className="font-bold text-[16px] text-[#2B3990] mb-3">
            TEVAR – Thoracic Endovascular Aortic Repair
          </h4>
          <p>
            TEVAR is a minimally invasive percutaneous procedure in which a metal stent is placed across a weakened section (aneurysm) of the thoracic aorta. As it avoids open surgery, patients typically recover faster and are discharged within three to four days.
          </p>
        </div>

        <div className="">
          <h4 className="font-bold text-[16px] text-[#2B3990] mb-3">
            EVAR – Endovascular Aneurysm Repair
          </h4>
          <p>
            EVAR is a similar percutaneous procedure used to treat aneurysms or dissections in the lower portion of the aorta. It requires no large abdominal incisions and offers shorter procedure times and quicker recovery. 
          </p>
        </div>

        <div className="">
          <h4 className="font-bold text-[16px] text-[#2B3990] mb-3">
            TAVI – Transcatheter Aortic Valve Implantation
          </h4>
          <p>
            TAVI is a state-of-the-art procedure where a bioprosthetic valve is placed across the aortic valve using specialised equipment, eliminating the need for open-heart surgery. Patients usually recover well and are discharged within a few days.   
          </p>
        </div>


        <div className="">
          <h4 className="font-bold text-[16px] text-[#2B3990] mb-3">
            BMV – Balloon Mitral Valvotomy 
          </h4>
          <p>
            BMV is a safe and effective catheter-based procedure for treating severe mitral valve stenosis. Patients are selected based on clinical evaluation and echocardiographic findings. Given the prevalence of rheumatic fever in our country, which can lead to mitral stenosis, BMV offers significant benefits.Shape 
          </p>
        </div>


        
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Electrophysiology 
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p className="mt-2">
          Cardiac Electrophysiology is a subspecialty of cardiology focused on diagnosing and treating abnormal heart rhythms, whether too fast or too slow. Our Cardiac Electrophysiology centre is well-established and offers advanced treatments including electrophysiological studies with 3D mapping, radiofrequency ablation, pacemaker implantation, Implantable Cardioverter Defibrillator (ICD), and cardiac resynchronization therapy. These procedures are carried out by highly skilled electrophysiologists to help manage arrhythmias and improve symptoms of heart failure effectively. 
        </p>
        
      </div>
    ),
  },

 {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Paediatric Cardiology 
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p className="mt-2">
          Paediatric Cardiology is an emerging subspecialty of cardiology that focuses on diagnosing and managing a wide range of heart conditions in children, including birth defects, heart failure, and rhythm disturbances. As one of the leading Paediatric Cardiology Hospitals, we offer state-of-the-art cardiac care for children through both interventional procedures and non-interventional approaches.  
        </p>
        
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Non-Invasive Cardiology 
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p className="mt-2">
          This branch of cardiology provides thorough and essential care through diagnostic services such as electrocardiogram, echocardiogram, treadmill test, Holter monitoring, ambulatory blood pressure monitoring, Dobutamine stress echocardiogram, transesophageal echocardiogram, tilt table testing, and more, all under the expert supervision of qualified cardiologists. 
        </p>
        
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Cardiac Rehabilitation 
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p className="mt-2">
          The primary aim of this unit is to support cardiac patients in regaining strength and independence before leaving the hospital. By encouraging movement and physical activity during their stay, patients are better prepared to manage daily routines confidently after discharge.  
        </p>
        
      </div>
    ),
  },

   {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Preventive Cardiology
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p className="mt-2">
          Preventive Cardiology focuses on reducing the risk of heart disease before it develops and managing existing risk factors to prevent complications. At Sudha Multispeciality Hospital, we help patients identify and control issues such as high blood pressure, diabetes, high cholesterol, obesity, and a family history of heart problems.  
        </p>

        <p className="mt-2">
          Our expert team offers lifestyle guidance, including personalised diet plans, exercise routines, and stress management support. Regular screenings and heart health check-ups are conducted to ensure early detection and intervention.
        </p>

        <p className="mt-2">
          Whether you're at risk or recovering from a cardiac event, our preventive care services are designed to support long-term heart health and improve quality of life. Prevention is the first step toward a healthier heart. 
        </p>
        
      </div>
    ),
  },

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
            Comprehensive Cardiology Care
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
          <h3 className="text-[20px] font-bold mb-2 ">
            Sudha Multispeciality Hospital
          </h3>
          <hr className="border-light" />

          <p className="text-center text-white mb-3 text-[14px] mt-3"> Performed 1,00,000+ successful cardiology surgeries with the best heart surgeons, world-class medical equipment, and international facilities.</p>

          <p className="text-center text-white mb-3 text-[14px] mt-3"> Your dedicated health partner for every medical requirement. </p>

          <button className="inline-flex items-center gap-2 bg-white text-[#2B3990] font-semibold px-7 py-3 rounded-full   mt-5 text-[14px]">
            Book Your Appointment  <ArrowUpRight className="w-5 h-5" />
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
              Find a <br />
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

                <div className="mt-6 space-y-4">
                  <h2 className="text-[24px]">
                    Best Cardiology Hospital in {" "}
                    <span className="text-[#2B3990]">Erode</span> for The Best Heart Care
                  </h2>
                  <p className="mb-4">
                    The cardiology department of Sudha Multispeciality Hospital is well-recognised for its trusted name in diagnosing and treating heart-related conditions. Beginning the journey as a hospital focusing on cardiology by Dr.D.Kandaswamy, the cardiology department has helped lakhs of patients recover from heart conditions. Backed by the best cardiology doctors and well-skilled surgeons, Sudha Multispeciality Hospitals remains the best multispeciality hospital and the leading cardiology hospital in Erode.
                  </p>

                  <p className="mt-4 mb-4">
                    We are one of the best cardiology hospitals in Tamil Nadu with the best cardiologists in Erode. We are driven by the motto to serve people with heartfelt care, offering the best healthcare solutions with the best doctors and international facilities. We are specialized in treating from pediatric heart conditions to coronary heart diseases and other heart-related conditions. Our dedication and excellence have made us a pioneer in cardiology healthcare services.
                  </p>
                </div>
              </>
            )}

            {id === "facilities" && (
              <>
                <h3 className="text-[24px] mt-5">Facilities</h3>
                <ul>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> World-class ICCUs
                    Cardiac catheterization laboratories with advanced facilities and equipment for 24/7 emergency cardiovascular procedures.
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Best non-invasive diagnostic setup with (number) latest ECHO machines, Treadmill tests, Holter monitoring, ambulatory BP monitoring
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Nuclear Cardiac Imaging with myocardial perfusion imaging and Cardiac PET-CT
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Advanced electrophysiology lab with 3D mapping
                  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Advanced pediatric interventions
                  </li>
                </ul>
              </>
            )}

            {id === "services" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5">Services</h2>

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
                <h2 className="text-[30px] font-semibold mt-5 pb-3">FAQ</h2>
                <Faq faq={faq} />
              </div>
            )} */}
          </section>
        ))}
      </div>
    </div>
  );
}
