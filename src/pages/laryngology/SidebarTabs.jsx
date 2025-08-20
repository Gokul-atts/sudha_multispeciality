
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checklight from "@/assets/home/check-light.svg";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/neonatology/neonatology-inner.webp";
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
          {/* <Image src={one} alt="Paediatrics and Neonatology"/>  */}
          Diagnostic Services
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our neonatology team in Erode specialises in caring for premature and low birth weight newborns who need extra medical support in the first days of life. We provide round-the-clock monitoring, temperature regulation, respiratory support, and nutritional management to help babies grow stronger. Our advanced NICU ensures they receive the safest, most comfortable care for a healthy start.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Nasopharyngolaryngoscopy with NBI: </h6>
                <p className="mt-2">
                   Early detection of laryngeal cancers using enhanced imaging techniques to improve treatment outcomes.
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Fibreoptic Endoscopic Evaluation of Swallowing (FEES): </h6>
                <p className="mt-2">
                   Real-time assessment of swallowing function to diagnose dysphagia and guide therapy.
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Video fluoroscopic Swallowing Study (VFSS):</h6>
                <p className="mt-2">
                   Radiological swallowing examination performed in collaboration with the Radiology department for detailed analysis of swallowing mechanics.
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Stroboscopy & Voice Analysis:  </h6>
                <p className="mt-2">
                   Specialist evaluation of vocal fold vibration to diagnose voice disorders precisely. 
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Airway & Laryngeal Function Tests:    </h6>
                <p className="mt-2">
                  Assess stridor and vocal cord mobility to determine airway patency and function. 
                </p>
              </div>
             </li>
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
          Therapeutic Procedures 
        </div>
      </>
    ),
    content: (
       <div>
          <ul className="space-y-4">
            <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Awake Biopsies: </h6>
                <p className="mt-2">
                   Minimally invasive biopsies of throat and voice box lesions without general anaesthesia. 
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Botox Injections:   </h6>
                <p className="mt-2">
                   Treatment for spasmodic dysphonia and cricopharyngeal spasm delivered awake or under general anaesthesia via specialised techniques. 
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Injection Laryngoplasty:  </h6>
                <p className="mt-2">
                   Vocal fold augmentation to improve voice quality in cases of vocal fold paralysis. 
                </p>
              </div>
             </li>

             
          </ul>
        </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Paediatrics and Neonatology" /> */}
          Surgical Treatments 
        </div>
      </>
    ),
    content: (
      <div>
          <ul className="space-y-4">
            <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Blue Laser Micro Laryngeal Surgery: </h6>
                <p className="mt-2">
                  Precision laser surgery for early cancers, laryngeal papillomas, and other lesions. 
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Micro laryngeal Excision:  </h6>
                <p className="mt-2">
                  Removal of polyps, nodules, and cysts with microsurgical techniques. 
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Vocal Fold Paralysis Surgeries:    </h6>
                <p className="mt-2">
                   Procedures such as medialisation and reinnervation to restore vocal fold function
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Thyroplasty & Laryngeal Reinnervation:   </h6>
                <p className="mt-2">
                   Procedures such as medialisation and reinnervation to restore vocal fold functionAdvanced surgeries aimed at voice restoration and airway improvement. 
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Voice Rehabilitation Post-Laryngectomy:   </h6>
                <p className="mt-2">
                  Techniques including tracheoesophageal puncture (TEP), electrolarynx use, and oesophageal speech training. 
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Paediatric Rigid Bronchoscopy:    </h6>
                <p className="mt-2">
                 Safe removal of airway foreign bodies using optical forceps and spontaneous ventilation protocols. 
                </p>
              </div>
             </li>

             
          </ul>
        </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Paediatrics and Neonatology" /> */}
          Swallowing & Airway Rehabilitation 
        </div>
      </>
    ),
    content: (
      <div>
          <ul className="space-y-4">
            <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Post Head & Neck Surgery Care:   </h6>
                <p className="mt-2">
                   Specialist speech and swallowing therapy for recovery after surgical interventions. 
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Neurogenic Dysphagia Management:  </h6>
                <p className="mt-2">
                   Rehabilitation for swallowing difficulties following traumatic brain injury and neurological conditions. 
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Post-Thyroid Surgery Swallowing Support:    </h6>
                <p className="mt-2">
                   Targeted care to improve swallowing function after thyroidectomy.  
                </p>
              </div>
             </li>

             <li className="flex items-start gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />
              <div className="">
                <h6>Tracheostomy Tube Care & Decannulation:    </h6>
                <p className="mt-2">
                   Expert management of tracheostomy tubes and safe removal when appropriate. 
                </p>
              </div>
             </li>

             
          </ul>
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
            Our Laryngology Services
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 24/7 emergency and intensive paediatric care</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Dedicated NICU and PICU with advanced monitoring</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Experienced paediatricians and trained nursing staff</li>

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
                  Best Laryngology Treatments in Sudha Multispeciality Hospital in   <span className="text-[#2B3990]"> Erode.</span>
                </h2>
                <p className="mb-3">
                  The laryngology department in Sudha Multispeciality Hospital offers expert laryngology care with the best laryngologists in Tamil Nadu. Our department specialises in diagnosing and treating disorders of the larynx (vocal cord), throat, and airway using cutting-edge diagnostic tools and advanced surgical and non-surgical therapies. We are committed to restoring voice, swallowing, and airway function with compassionate and personalised care.
                </p>

              </>
            )}



            {id === "facilities" && (
              <>
                <h2 className="text-[24px] mt-5 mb-3">Facilities</h2>
                <p className="mb-3">Our world-class laryngology unit is equipped with the latest diagnostic and therapeutic technologies to provide comprehensive care for voice, swallowing, and airway disorders.   </p>
                <ul>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Olympus Nasopharyngolaryngoscope with Narrow Band Imaging (NBI) for early cancer detection    </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Mobile bedside nasopharyngolaryngoscopy for inpatient evaluations    </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Advanced video fluoroscopic swallowing study (VFSS) facilities in collaboration with Radiology </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Precision Coblation and Blue Laser micro laryngeal surgical systems    </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Specialised surgical instrumentation including Weerda cricopharyngoscope and paediatric rigid bronchoscope  </li>
                  <li className="flex gap-2 items-center text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Dedicated voice analysis and stroboscopic equipment for vocal fold vibration evaluation  </li>



                </ul>
              </>
            )}



            {id === "services" && (
              <div className="space-y-2">
                <h2 className="text-[24px]  mt-5 pb-3">Services</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <>
                <h2 className="text-[24px]  mt-5 pb-3 pb-3">Doctors</h2>
                <DoctorSlider />
              </>
            )}

            {/* {id === "faqs" && (
              <div className="mt-8">
                <h2 className="text-[24px]  mt-5 pb-3 pb-3">FAQ</h2>
                <Faq faq={faq} />
              </div>
            )} */}
          </section>
        ))}
      </div>
    </div>
  );
}
