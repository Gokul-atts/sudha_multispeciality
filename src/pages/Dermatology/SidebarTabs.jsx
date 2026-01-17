"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/dermatology/dermatology-4.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import Checklight from "@/assets/home/check-light.svg";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";



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
        <div className="flex gap-3">Which hospital in Erode is best for skin problems?   </div>
      </>
    ),
    content: (
      <p>
        Sudha Multispeciality Hospital is regarded as one of the best hospitals for skin problems, with the best dermatologists in Erode providing advanced diagnosis and treatments for a wide range of skin conditions.
      </p>

    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          Which vitamins are beneficial for healthy skin?
        </div>
      </>
    ),
    content: <p>Vitamins such as Vitamin C, Vitamin E, and Vitamin D are highly beneficial for maintaining healthy skin. The best doctors for skin issues in Erode at Sudha Multispeciality Hospital often recommend a balanced approach combining nutrition and clinical care for long-term skin health.   </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the best treatment for damaged skin?
        </div>
      </>
    ),
    content: <p>The best treatment for damaged skin depends on the cause and severity. At Sudha Multispeciality Hospital, the best dermatologists in Erode provide advanced treatments and medications for effective results.    </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Is it possible to treat severely damaged skin?
        </div>
      </>
    ),
    content: <p>Severely damaged skin can be treated with certain lifestyle changes, diet, and specialised skincare. he dermatology department at Sudha Multispeciality Hospital in Erode offers comprehensive treatments under the guidance of the best doctors for skin issues in Erode, helping restore skin health.   </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the common causes of poor skin quality?
        </div>
      </>
    ),
    content: <p>Poor skin quality is often caused by factors such as sun exposure, pollution, dehydration, nutritional deficiencies, and ageing. At Sudha Multispeciality Hospital, the best dermatologists in Erode provide preventive care and customised treatments to address these concerns. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Which skin diseases are treated by dermatologists?
        </div>
      </>
    ),
    content: <p>Dermatologists treat a wide range of skin diseases including acne, eczema, psoriasis, fungal infections, pigmentation disorders, and skin allergies. The dermatologists at Sudha Multispeciality Hospital in Erode ensure holistic care and effective treatment for all conditions.   </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Who is the best dermatologist in Erode, Tamil Nadu?
        </div>
      </>
    ),
    content: <p>The team of skilled and experienced doctors at Sudha Multispeciality Hospital are recognised as the best dermatologists in Erode, Tamil Nadu, offering advanced treatments, personalised care, and comprehensive solutions for all types of skin problems.   </p>,
  },
];

const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Cardiothoracic Surgery" />  */}
          Acne and Scar Treatment
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We offer personalised treatment plans for acne and post-acne scarring, focusing on prevention, control, and skin rejuvenation. Treatments include topical or oral medication, chemical peels, and laser therapy to reduce inflammation and enhance skin texture.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Chemical peels </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Laser scar reduction    </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Oral and topical medications  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Blackhead/whitehead extraction    </li>
          </ul>
        </div>

      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          Psoriasis and Eczema Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Our dermatologists manage chronic skin conditions like psoriasis and eczema with a balanced approach that includes lifestyle counselling, medication, and advanced therapies. We aim to reduce flare-ups and improve the quality of life.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Topical and systemic treatments  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Narrowband UVB therapy     </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Immunosuppressive therapy    </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Skin hydration and care routines     </li>
          </ul>
        </div>

      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          Hair & Scalp Disorders
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Hair loss, dandruff, and scalp infections are treated with scientifically backed procedures and trichology consultations. We offer diagnosis, customised regimens, and minimally invasive procedures.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> PRP therapy for hair regrowth</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Dandruff and scalp infection treatments     </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Hormonal hair loss management    </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Microneedling for hair follicles     </li>
          </ul>
        </div>

      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          Allergy Testing & Treatment
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We help identify triggers of skin allergies through patch testing and detailed assessments. Treatments are planned to minimise allergic reactions and manage associated symptoms.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Skin prick and patch tests</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Urticaria management     </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Treatment for contact dermatitis    </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Hypoallergenic skincare solutions  </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          Skin Infections & Fungal Diseases
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          From bacterial to fungal infections, we provide precise diagnosis and prompt treatment to avoid recurrence. Our team also handles resistant infections with targeted antifungal or antibiotic therapies.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Antifungal and antibacterial therapies</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Management of cellulitis and abscess     </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Viral skin infections (e.g., warts, molluscum)   </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Personalised hygiene counselling    </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          Skin Pigmentation & Whitening Treatments
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We offer solutions for melasma, hyperpigmentation, and uneven skin tone through safe and effective dermatological techniques that restore radiance and clarity to your skin.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Laser toning</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Glutathione-based therapies     </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Depigmentation peels  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Advanced topical formulations    </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          Anti-Aging & Aesthetic Dermatology
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our aesthetic dermatology services include skin tightening, wrinkle reduction, and non-surgical facial rejuvenation. We ensure visible results while maintaining natural expressions and safety.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Botox and fillers</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Skin resurfacing treatments     </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Anti-aging facials and peels      </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Radiofrequency and laser-based tightening    </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" /> */}
          Wart & Mole Removal
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Benign skin growths like warts, moles, and skin tags are removed with minimal discomfort using electrocautery or laser procedures, ensuring minimal scarring and quick healing.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} /> Electrocautery  </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> CO2 laser removal         </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Cryotherapy        </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Skin biopsy for suspicious growths     </li>
          </ul>
        </div>
      </div>
    ),
  },

];
// Dummy accordionData + faq omitted for brevity...

export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState("");
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
      { rootMargin: "-20% 0px -60% 0px" }
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
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs Box */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
          <h3 className="text-[16px]  text-center font-bold  mb-5">
            Dermatology Care We Offer
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {serviceSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className="flex justify-between items-center group transition duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${isActive ? "bg-[#2b3990]" : "bg-gray-300"
                          }`}
                      />
                      <span
                        className={`text-sm sm:text-base md:text-[15px] font-bold transition-colors duration-300 ${isActive ? "text-[#2b3990]" : "text-black"
                          } group-hover:text-[#2A3D90]`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {isActive ? (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2A3D90] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2b3990] transition-all duration-300 transform group-hover:scale-110" />
                    )}
                  </a>
                  <hr className="my-2 sm:my-3 border-t border-gray-100" />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:block">
          {/* Sudha Hospital Box */}
          <div
            className="relative rounded-2xl overflow-hidden text-white text-center px-4 sm:px-6 py-8 sm:py-10"
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Expert
                dermatologists for both medical and cosmetic concerns.
              </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />
                Safe and effective skin rejuvenation and anti-aging solutions.
              </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />
                Personalized treatment plans for chronic and recurring skin issues.
              </li>
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
        {serviceSections.map(({ id }) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-32 rounded-xl"
          >
            {id === "overview" && (
              <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5">
                <Image
                  src={aboutOverview}
                  alt="aboutOverview"
                  className="w-full h-[380px] rounded-2xl object-cover"
                />
                <h2 className="text-[24px] mb-3 mt-5">
                  Comprehensive Dermatology Services from the Best Dermatologists in  {" "}
                  <span className="text-[#2B3990]">Erode</span>{" "}
                  at Sudha Multispeciality Hospital
                </h2>
                <p className="">
                  The Dermatology Department at Sudha Multispeciality Hospital provides expert diagnosis and advanced treatment for a wide spectrum of skin, hair, and nail conditions. Our team of skilled dermatologists combines clinical excellence with the latest technology to deliver comprehensive care for both medical and cosmetic concerns. Whether managing chronic skin disorders or offering aesthetic solutions, we provide patient-centred care with the best doctors for skin issues in Erode.
                </p>
              </div>
            )}
            {id === "facilities" && (
              <>
                <h2 className="text-[24px] mt-5 mb-3">
                  Facilities
                </h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Dedicated consultation suites for skin evaluation
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Minor procedure room for outpatient dermatological procedures
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Skin and hair analysis equipment
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    UV light therapy unit for treating chronic skin conditions
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Laser treatment setup for acne scars and pigmentation
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Trained nursing staff for patient care and post-procedure support
                  </li>
                </ul>

              </>
            )}
            {id === "treatmentsandprocedures" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5 ">
                  Treatments & Procedures
                </h2>
                <Accordion accordionData={accordionData} />
              </div>
            )}
            {id === "doctors" && (
              <div className="space-y-2">
                <h2 className="text-[24px]  mt-5 ">
                  Doctors
                </h2>
                <DoctorSlider specialty="Dermatologist" counter={1} />
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
          className="relative rounded-2xl overflow-hidden text-white text-center px-4 sm:px-6 py-8 sm:py-10"
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Expert
              dermatologists for both medical and cosmetic concerns.
            </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />
              Safe and effective skin rejuvenation and anti-aging solutions.
            </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />
              Personalized treatment plans for chronic and recurring skin issues.
            </li>
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
