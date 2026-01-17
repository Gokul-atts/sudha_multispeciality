"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checklight from "@/assets/home/check-light.svg";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";

import Accordion from "../../components/Accordion";
import aboutOverview from "@/assets/alliedhealthservice/maternal/maternal-inner.webp";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
import Link from "next/link";



const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "services", label: "Services" },
  // { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];
const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Adult Cardiology" />  */}
          Antenatal Counselling

        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Preparing for childbirth begins with the right knowledge. Our antenatal counselling provides mothers and their families with information on pregnancy health, birth planning, nutrition, and emotional wellbeing. This helps reduce anxiety and prepares women for a safe delivery and smooth transition into motherhood.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Personalised birth planning sessions </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Education on pregnancy nutrition and exercise   </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Mental health guidance during pregnancy  </li>



          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Lactation Support & Breastfeeding Assistance

        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our expert lactation consultants provide support for all breastfeeding-related challenges, including latching issues, milk supply concerns, and breastfeeding positions. We also help mothers who choose to pump or mix-feed with confidence and comfort.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />One-on-one breastfeeding consultations
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Latching technique guidance   </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Breastfeeding education and pump usage support  </li>


          </ul>

        </div>


      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Postnatal Recovery Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p className="mt-2">
          Recovery after childbirth is vital for a mother’s physical and mental wellbeing. Our postnatal programs focus on uterine recovery, pain management, lactation support, and emotional health through regular monitoring and tailored advice.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Post-delivery health check-ups   </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} />Nutritional guidance for lactating mothers </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Support for postpartum depression and anxiety   </li>




          </ul>

        </div>

      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          Maternal Nutrition & Wellness Programs
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p className="mt-2">
          Good nutrition is essential before, during, and after pregnancy. Our maternal nutritionists create customised diet plans for expecting and new mothers, supporting their strength, immunity, and milk production.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Balanced meal plans for each stage of motherhood    </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} />Anaemia and gestational diabetes management </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Support for healthy weight gain/loss    </li>




          </ul>

        </div>

      </div>
    ),
  },


  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Interventional Cardiology" />  */}
          High-Risk Pregnancy Monitoring
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p className="mt-2">
          We provide advanced care and continuous monitoring for high-risk pregnancies including cases with hypertension, gestational diabetes, or other complications, ensuring a safe delivery and reduced risk for both mother and baby.
        </p>
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Foetal wellbeing assessments    </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} />Collaborative care with specialists </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Emergency readiness for critical cases  </li>




          </ul>

        </div>

      </div>
    ),
  },



];
const faq = [
  {
    title: (
      <>
        <div className="flex gap-3">How to feed breastmilk to a newborn baby?  </div>
      </>
    ),
    content: (
      <p>
        Breastmilk should be fed directly from the breast, ensuring proper latching for effective feeding and comfort. In cases where direct breastfeeding is not possible, expressed milk can be given using a sterilized spoon, cup, or bottle. Sudha Multispeciality Hospital, a trusted Mother and Child Care Hospital in Erode, has lactation & maternal health consultants and specialists who guide new mothers in correct feeding techniques.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          What is the first stage of lactation?
        </div>
      </>
    ),
    content: <p>The first stage of lactation is colostrum production, beginning during pregnancy and continuing after delivery. Colostrum is thick, yellowish milk rich in antibodies and nutrients vital for the newborn’s immunity. Experts at Sudha Multispeciality Hospital, the leading centre with lactation & maternal health consultants in Erode, support mothers through every stage of lactation. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the normal color of breast milk?
        </div>
      </>
    ),
    content: <p>Breast milk can appear white, bluish, or slightly yellow depending on its stage (foremilk or hindmilk) and maternal nutrition. All these variations are considered normal. Specialists at Sudha Multispeciality Hospital, the best Mother and Child Care Hospital in Erode, provide reassurance and guidance to mothers about healthy lactation. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What food to avoid when breastfeeding?
        </div>
      </>
    ),
    content: <p>Breastfeeding mothers are advised to limit caffeine, alcohol, spicy foods, and highly processed items that may affect digestion in infants. Sudha Multispeciality Hospital has expert lactation & maternal health consultants in Erode who provide personalised dietary advice for safe breastfeeding. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What food to eat when breastfeeding?
        </div>
      </>
    ),
    content: <p>A balanced diet rich in proteins, whole grains, fruits, vegetables, and plenty of fluids is recommended to maintain milk supply and maternal health. The team of specialists at Sudha Multispeciality Hospital, the best Mother and Child Care Hospital in Erode, ensures mothers receive tailored nutrition plans during breastfeeding. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How to increase maternal nutrition?
        </div>
      </>
    ),
    content: <p>Maternal nutrition can be improved with a diet rich in iron, calcium, folic acid, and protein, along with supplements prescribed by healthcare providers. Lactation & maternal health consultants in Erode at Sudha Multispeciality Hospital offer continuous monitoring and expert guidance for optimal nutrition. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the major health concerns during pregnancy?
        </div>
      </>
    ),
    content: <p>Common concerns include anaemia, gestational diabetes, hypertension, thyroid disorders, and nutritional deficiencies. Early diagnosis and timely care are essential for maternal and foetal health. Sudha Multispeciality Hospital, the best Mother and Child Care Hospital in Erode, has experienced specialists to manage high-risk pregnancies and maternal health concerns effectively. </p>,
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
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8">

      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs Box */}
        <div className="bg-white  rounded-2xl p-4 sm:p-6">
          <h3 className="text-[16px]  text-center font-bold  mb-5">
            Specialised Mother & Child Care Services
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
            <ul className="space-y-4 text-start mt-4">
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  Holistic care for mothers from pregnancy to postpartum recovery. </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Supportive environment for lactation education and nutritional planning.   </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Personalized maternal health monitoring and wellness assessments.
              </li>

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
                <Image src={aboutOverview} alt="aboutOverview" className="w-full h-[400px] rounded-2xl object-cover" />

                <div className="mt-6 space-y-4">
                  <h2 className="text-[24px]">
                    Comprehensive Care for New Mothers by Lactation & Maternal Health Consultants in
                    <span className="text-[#2B3990]"> Erode</span>
                  </h2>
                  <p className="mb-4">
                    At Sudha Multispeciality Hospital, we understand that maternal and infant health is a delicate journey that requires expert care and compassionate support. Our Lactation and Maternal Health department is dedicated to guiding mothers through every stage of pregnancy, childbirth, and breastfeeding.
                  </p>

                  <p className="mt-4 mb-4">
                    As the best Mother and Child Care Hospital in Erode, our hospital is equipped with a team of certified lactation consultants, obstetricians, and maternal care specialists, we offer personalised, evidence-based support to ensure the wellbeing of both mother and baby. Whether it’s prenatal counselling, delivery support, postnatal recovery, or breastfeeding guidance, we are here every step of the way.
                  </p>
                </div>
              </>
            )}

            {id === "facilities" && (
              <>
                <h3 className="text-[24px] mt-5">Facilities</h3>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>Dedicated Breastfeeding Counselling Room
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Private Maternal Care Suites
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Nutritional & Dietetic Support for Mothers
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Antenatal & Postnatal Education Programs
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Breast Pump Guidance and Support
                  </li>

                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    24x7 Emergency Obstetric Support
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

            {/* {id === "doctors" && (
              <>
                <h2 className="text-[24px]  mt-5 pb-3">Doctors</h2>
                <DoctorSlider />
              </>
            )} */}

            {id === "faqs" && (
              <div className="mt-8">
                <h2 className="text-[24px]  mt-5 pb-3">Frequently Asked Questions</h2>
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
          <ul className="space-y-4 text-start mt-4">
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />  Specialised Mother & Child Care Services  </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Supportive environment for lactation education and nutritional planning.   </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />Personalized maternal health monitoring and wellness assessments.  </li>

          </ul>

          <Link href="tel:04242454545">
          <button className="btn-white mt-5">
            Book an Appointment <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
          </Link>
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
