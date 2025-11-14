
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checklight from "@/assets/home/check-light.svg";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/laryngology/laryngology-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";
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
        <div className="flex gap-3">Which hospital in Erode is best for laryngology?  </div>
      </>
    ),
    content: (
      <p>Equipped with the best laryngologists in Erode, Tamil Nadu, Sudha Multispeciality Hospital is considered as the best hospital for laryngology. Sudha offers advanced treatments for all larynx-related conditions with advanced diagnostic facilities and ENT specialists. </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          Is a laryngologist the same as an ENT specialist?
        </div>
      </>
    ),
    content: <p>A laryngologist is a specialist focusing on the larynx (voice box) and related disorders, while an ENT specialist manages a wider range of ear, nose, and throat conditions. At Sudha Multispeciality Hospital, experienced ENT specialists in Erode provide laryngology care with specialised expertise. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the common symptoms of a larynx infection?
        </div>
      </>
    ),
    content: <p>Common symptoms include hoarseness, sore throat, difficulty swallowing, persistent cough, and changes in voice. Sudha Multispeciality Hospital offers evaluation and treatment from the best laryngologist in Tamil Nadu to manage such conditions effectively. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the signs of a throat tumor?
        </div>
      </>
    ),
    content: <p>Signs of a throat tumour may include persistent throat pain, difficulty swallowing, unexplained weight loss, persistent hoarseness, and a lump in the neck. Early diagnosis by the best doctor for larynx-related issues at Sudha Multispeciality Hospital ensures timely intervention. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Why does my throat hurt when I swallow?
        </div>
      </>
    ),
    content: <p>Throat pain during swallowing can result from infections, inflammation, acid reflux, or vocal strain. ENT specialists in Erode at Sudha Multispeciality Hospital provide comprehensive assessment to identify and treat the underlying cause. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What should I do if I have a persistent sore throat but no fever?
        </div>
      </>
    ),
    content: <p>A persistent sore throat without fever should be evaluated by a specialist, as it may indicate underlying issues such as larynx inflammation, nodules, or early-stage tumours. Sudha Multispeciality Hospital offers expert consultation with the best laryngologist in Tamil Nadu for accurate diagnosis and treatment. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Can a sore throat cause changes in your voice?
        </div>
      </>
    ),
    content: <p>A sore throat or laryngeal infection can lead to hoarseness, weak voice, or temporary voice changes. At Sudha Multispeciality Hospital, ENT specialists in Erode provide targeted treatment to restore voice quality and overall throat health. </p>,
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
                  Radiological swallowing examination performed in collaboration with the Radiology department for detailed analysis of swallowing mechanics
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
                Treatment for spasmodic dysphonia and cricopharyngeal spasm is delivered awake or under general anaesthesia via specialised techniques.
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
                Procedures such as medialisation and reinnervation are used to restore vocal fold function.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-2 text-[14px] font-semibold">
            <Image src={Checklight} alt="tick" width={24} height={24} />
            <div className="">
              <h6>Thyroplasty & Laryngeal Reinnervation:   </h6>
              <p className="mt-2">
                Advanced surgeries aimed at voice restoration and airway improvement.
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Diagnosis and treatment of voice, throat, and airway disorders </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Advanced care for swallowing difficulties and chronic cough</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Minimally invasive procedures for vocal cord and laryngeal conditions </li>

            </ul>



            <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => setOpenModal(true)}>
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
                  Best Laryngology Treatments by the Best Laryngologist in    <span className="text-[#2B3990]"> Tamil Nadu.</span>
                </h2>
                <p className="mb-3">
                  The laryngology department in Sudha Multispeciality Hospital offers expert laryngology care with the best laryngologists in Erode. Our department specialises in diagnosing and treating disorders of the larynx (vocal cord), throat, and airway using cutting-edge diagnostic tools and advanced surgical and non-surgical therapies. We are committed to restoring voice, swallowing, and airway function with compassionate and personalised care.
                </p>

              </>
            )}



            {id === "facilities" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5 ">Facilities</h2>
                <p className="mb-3">Our world-class laryngology unit is equipped with the latest diagnostic and therapeutic technologies to provide comprehensive care for voice, swallowing, and airway disorders.     </p>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Olympus Nasopharyngolaryngoscope with Narrow Band Imaging (NBI) for early cancer detection    </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Mobile bedside nasopharyngolaryngoscopy for inpatient evaluations    </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Advanced video fluoroscopic swallowing study (VFSS) facilities in collaboration with Radiology </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Precision Coblation and Blue Laser micro laryngeal surgical systems    </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Specialised surgical instrumentation including Weerda cricopharyngoscope and paediatric rigid bronchoscope  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Dedicated voice analysis and stroboscopic equipment for vocal fold vibration evaluation  </li>



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
                <h2 className="text-[24px] mt-5 ">Doctors</h2>
                <DoctorSlider specialty="Laryngology" max={2} counter={1} />
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Diagnosis and treatment of voice, throat, and airway disorders </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Advanced care for swallowing difficulties and chronic cough</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Minimally invasive procedures for vocal cord and laryngeal conditions </li>

          </ul>



          <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => setOpenModal(true)}>
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

