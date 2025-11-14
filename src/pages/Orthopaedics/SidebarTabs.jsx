
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import Frame from "@/assets/about/frame.png";
import Checklight from "@/assets/home/check-light.svg";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/orthopaedic/ortho-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
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
        <div className="flex gap-3">Which is the best orthopedic hospital in Erode? </div>
      </>
    ),
    content: (
      <p>
        Sudha Multispeciality Hospital, recognized as the best ortho hospital in Erode, provides comprehensive orthopedic care with advanced facilities and treatment led by the best orthopaedic doctors in Erode.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          Which hospital is best for fractures and joint replacement in Erode?
        </div>
      </>
    ),
    content: <p>As the best ortho hospital in Erode, Sudha Multispeciality Hospital offers expert surgical and non-surgical treatments for fracture and joint replacements under the guidance of the best orthopaedic doctors in Erode. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the early symptoms of joint or bone disease?
        </div>
      </>
    ),
    content: <p>Early signs of joint or bone disease include persistent pain, swelling, stiffness, difficulty moving, or deformities. Consulting an orthopaedist is crucial when noticing the symptoms.  Sudha Multispeciality Hospital, the best ortho hospital in Erode, provides advanced diagnostics for early detection and treatment.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the fastest way to increase bone density?
        </div>
      </>
    ),
    content: <p>Bone density can be improved through a combination of calcium- and vitamin D-rich diet, regular weight-bearing exercises, and proper medical supervision. Orthopaedist at Sudha Multispeciality Hospital offers guidance and diet plans to strengthen bones effectively. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Under what circumstances is knee replacement surgery performed?
        </div>
      </>
    ),
    content: <p>Knee replacement surgery is recommended for severe arthritis, significant joint damage, or chronic pain that cannot be managed with medications or therapy. Sudha Multispeciality Hospital, the best ortho hospital in Erode, provides expert knee replacement procedures for optimal outcomes.</p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the recovery time after orthopedic surgery?
        </div>
      </>
    ),
    content: <p>Recovery time after orthopaedic surgery depends on the type of procedure, patient health, and adherence to rehabilitation. As the best hospital for orthopaedics, Sudha Multispeciality Hospital, ensures structured post-operative care to support smooth and safe recovery. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How painful is knee replacement surgery?
        </div>
      </>
    ),
    content: <p>The patient will not know the pain during the knee replacement surgery as they'll be under anaesthesia. Equipped with the best ortho doctors in Erode. Sudha Multispeciality Hospital offers advanced pain management and post-operative care for a comfortable recovery. </p>,
  },
];



const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Orthopaedics" />  */}
          Trauma & Joint Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Specialised in managing both simple and complex fractures, joint injuries, and emergency trauma cases with rapid response and advanced techniques. Our orthopaedic trauma team is available 24/7 to handle high-impact injuries with precision.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Polytrauma & fracture management  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Pelvic and acetabular fracture management  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Hip, knee, shoulder, spine, and elbow fracture surgeries </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Endoscopic and minimally invasive procedures </li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Orthopaedics" /> */}
          Joint Replacement & Reconstruction
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We provide advanced surgical solutions for degenerative joint diseases using durable implants and minimally invasive techniques to restore mobility. Post-operative rehab is also integrated into every treatment plan.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Total knee and hip replacement</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Partial joint replacements  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Revision surgeries </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Deformity correction and limb lengthening procedures  </li>
          </ul>

        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Orthopaedics" /> */}
          Spine Surgery & Conditions
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our spine specialists treat spinal disorders through both conventional and minimally invasive approaches, improving outcomes and reducing recovery time. We use advanced imaging to guide spinal decompression, fixation, and fusion surgeries.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Minimally Invasive Spine Surgery (MISS) </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Spinal decompression and fixation  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Surgery for spine fractures and tumours</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> ACDF, cervical corpectomy, and spinal fusion  </li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Orthopaedics" /> */}
          Specialised Orthopaedic Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Comprehensive services tailored to specific age groups and conditions, from children to elderly patients, including arthritis and tumour care. A multidisciplinary approach ensures optimal outcomes in bone tumour management and limb deformities.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Paediatric orthopaedics and deformity correction </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Geriatric orthopaedic care for ageing bones and joints  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Rheumatology and arthritis management </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Bone tumour evaluation and surgery</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Orthopaedics" /> */}
          Sports Injury Management
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Personalised care for sports injuries, with thorough analysis and advanced treatment options. This includes arthroscopic reconstruction of injured ligaments in the shoulder and knee joints, along with other specialised interventions to restore mobility and performance.
        </p>


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
            Specialised Orthopaedic Care
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  24/7 emergency orthopaedic and trauma care with advanced ICU support</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> State-of-the-art operation theatres and orthopaedic trauma units</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Comprehensive care from paediatric to geriatric orthopaedic needs</li>

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
                <Image src={aboutOverview} alt="aboutOverview" className="w-full h-[380px] rounded-2xl object-cover " />
                <h2 className="text-[24px] mb-2 mt-4">
                  Best Orthopaedic Care at the Best Ortho Hospital in   <span className="text-[#2B3990]"> Erode</span>
                </h2>
                <p className=" mb-3">
                  The Department of Orthopaedics at Sudha Multispeciality Hospital is recognized as one of the best orthopaedic hospitals in Erode, offering comprehensive treatment for trauma, bone, joint, and spine conditions. With the expertise of the best orthopaedic doctors in Erode, the department specializes in joint replacement, complex fracture management, spinal disorders, and paediatric orthopaedics. Equipped with advanced surgical techniques and world-class infrastructure, the team ensures precise diagnosis, personalised treatment, and faster recovery. From emergency trauma care to advanced reconstructive surgeries, every orthopaedic challenge is managed with excellence, compassion, and confidence.
                </p>

              </>
            )}



            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 ">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>24/7 Emergency & Trauma Services with immediate orthopaedic intervention
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>Hi-Tech SICU (Surgical ICU) with specialised orthopaedic care
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Dedicated Orthopaedic Trauma OT for emergency and complex trauma cases
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Advanced Orthopaedic Implants and Instruments for precision surgery
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    State-of-the-art OT Tables for joint, spine, and trauma procedures
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Comprehensive care for polytrauma and complex musculoskeletal injuries
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Expertise in Pelvic-Acetabular fracture management with interventional radiology
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    General & special wards with skilled duty doctors and orthopaedic nursing staff
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
                <DoctorSlider specialty="Orthopaedics" max={2} />
              </div>
            )}

            {id === "faqs" && (
              <div className="space-y-2 ">
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  24/7 emergency orthopaedic and trauma care with advanced ICU support</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> State-of-the-art operation theatres and orthopaedic trauma units</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Comprehensive care from paediatric to geriatric orthopaedic needs</li>

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
