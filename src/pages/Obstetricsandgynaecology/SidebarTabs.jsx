
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checklight from "@/assets/home/check-light.svg";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/obstetrics/obstetrics-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Faq from "../../components/Faq";
import one from "@/assets/about/1.svg";
import Link from "next/link";
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
        <div className="flex gap-3">What is the difference between an OB and a gynecologist?  </div>
      </>
    ),
    content: (
      <p>
        An obstetrician (OB) specializes in pregnancy, childbirth, and postnatal care, while a gynecologist focuses on women’s reproductive health, including the uterus, ovaries, and hormonal concerns. Many doctors are trained in both, offering comprehensive care. Sudha Multispeciality Hospital is equipped with both obstetrician and gynaecologist who are highly skilled and experienced.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">

          Which hospital in Erode is best for obstetrics and gynecology?
        </div>
      </>
    ),
    content: <p>Sudha Multispeciality Hospital is recognized as the best obstetrics & gynaecology hospital in Erode, offering expert care for women’s health, pregnancy, fertility, and advanced gynaecological treatments.  </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How to choose the right gynecologist in Erode?
        </div>
      </>
    ),
    content: <p>When choosing the best gynaecologist in Erode, it is important to consider the doctor’s experience, patient care approach, availability, and the hospital’s facilities for diagnostics and treatment. Sudha Multispeciality Hospital is equipped with a team of best gynaecologists in Erode providing comprehensive care and advanced treatments to patients.  </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How to select the best hospital for pregnancy in Erode?
        </div>
      </>
    ),
    content: <p>The best hospital for pregnancy should provide comprehensive antenatal care, advanced labour facilities, neonatal intensive care, and experienced obstetricians. Sudha Multispeciality Hospital is trusted for safe deliveries and holistic pregnancy care in Erode. As the best hospital for pregnancy in Erode, Sudha has a proven track record of delivering healthy babies, including successful outcomes in high-risk pregnancies. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Which is more painful, a C-section or natural childbirth?
        </div>
      </>
    ),
    content: <p>Pain levels vary for every individual. Natural childbirth involves intense labour pain, while a C-section is painless during surgery due to anaesthesia but requires a longer post-surgical recovery. Both procedures are effectively managed with advanced pain relief methods. Sudha Multispeciality Hospital in Erode offers painless normal delivery options and has a high success rate in ensuring safe and comfortable childbirth experiences. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the recovery time after a cesarean section?
        </div>
      </>
    ),
    content: <p>Recovery from a C-section usually takes 4 to 6 weeks. With expert postnatal care, proper rest, and follow-up, most women regain strength and return to normal activities within this period. As the best obstetrics & gynaecology hospital in Erode, Sudha Multispeciality Hospital offers guidance for postnatal and postpartum care to support physical healing, emotional well-being, and a smooth transition into motherhood. </p>,
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What are the common signs of labor pain?
        </div>
      </>
    ),
    content: <p>Common signs include regular contractions, lower back pain, abdominal cramps, breaking of water (amniotic fluid leakage), and a sensation of pelvic pressure. If you notice any of these signs during pregnancy, it is important to seek medical attention without delay. Sudha Multispeciality Hospital in Erode provides 24/7 emergency support for expectant mothers. Call 0424 351 4545 for immediate assistance. </p>,
  },
];



const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Obstetrics and Gynaecology" />  */}
          Fertility Treatments
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Our fertility centre offers advanced reproductive solutions with state-of-the-art technology and a compassionate approach. From basic testing to complex ART procedures, we’re committed to helping couples fulfil their dreams of parenthood with the best fertility treatments available.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Intrauterine Insemination (IUI), IVF, ICSI, and Blastocyst Transfer</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> IMSI, TESA, PESA, MESA technologies </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Laser Hatching, Assisted Hatching & Cryopreservation</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Donor Programs – Gamete, Embryo, Sperm</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Surrogacy & Fertility Counselling</li>

          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Obstetrics and Gynaecology" /> */}
          Fetal Monitoring & Prenatal Testing
        </div>
      </>
    ),
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          We ensure the health of both mother and baby through precise monitoring and diagnostic screening. Our prenatal testing detects potential genetic and growth-related concerns early, helping us manage high-risk pregnancies with confidence and care.
        </p>


        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Early anomaly scans and detailed fetal scans</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Non-Invasive Prenatal Testing (NIPT) </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Amniocentesis & Fetal Echo</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Genetic counselling & maternal-fetal Doppler</li>


          </ul>

        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Obstetrics and Gynaecology" /> */}
          Women’s Health Treatments
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          We provide complete care for women at every age, focusing on menstrual disorders, hormonal imbalances, PCOS, and menopause management. Our holistic approach combines modern medicine with lifestyle support for lasting reproductive health.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Treatment for PCOS, fibroids & endometriosis</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Menstrual irregularities & menopause care </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Hormonal therapy & reproductive counselling</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Ultrasound & diagnostic hysteroscopy</li>


          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Obstetrics and Gynaecology" /> */}
          Emergency & High-Risk Obstetrics
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          We specialise in managing complex pregnancies and emergencies with 24x7 care. From eclampsia to haemorrhage, our expert team ensures safe delivery and recovery, even in the most critical scenarios.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />High-risk pregnancy management</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Antepartum & intrapartum haemorrhage care </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Eclampsia, preeclampsia & gestational diabetes monitoring </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Immediate surgical & NICU support</li>


          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Obstetrics and Gynaecology" /> */}
          Minimally Invasive Gynaec Surgeries
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          We perform advanced laparoscopic and hysteroscopic surgeries for a wide range of gynaecological conditions. These techniques are safer, less painful, and promote quicker recovery for women of all ages.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Laparoscopic hysterectomy, myomectomy & cyst removal</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Hysteroscopic polyp & fibroid removal</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Tubal recanalization & endometriosis surgery </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Minimally invasive infertility treatments</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Obstetrics and Gynaecology" /> */}
          Antenatal & Postnatal Care
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          We offer complete care during and after pregnancy, focusing on the health of the mother and baby. Regular check-ups, counselling, and personalised guidance help ensure a safe and stress-free journey into motherhood.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Routine antenatal visits & trimester tracking</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} /> Nutritional support & vaccination planning</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Postnatal check-ups & emotional well-being care </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Lactation counselling & recovery guidance</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Obstetrics and Gynaecology" /> */}
          Labour & Delivery Services
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          With modern birthing suites and 24x7 staff, we provide safe and memorable delivery experiences. Whether it’s a normal delivery or a painless delivery, our team ensures optimal outcomes for both mother and newborn.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Labour suites with Phoenix delivery beds</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} />Painless delivery (epidural) options</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Emergency LSCS (C-section) readiness </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Immediate newborn care & NICU support</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Obstetrics and Gynaecology" /> */}
          Gynaecological Surgeries
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          Our expert surgeons perform essential procedures with precision, focusing on safety and reproductive health. Surgeries are carried out using advanced techniques to reduce downtime and complications.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">  <Image src={Checklight} alt="tick" width={24} height={24} />Hysterectomy – abdominal, vaginal & laparoscopic</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"> <Image src={Checklight} alt="tick" width={24} height={24} />Tubal ligation & recanalization procedures</li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} /> Myomectomy & polyp removal </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold"><Image src={Checklight} alt="tick" width={24} height={24} />Diagnostic and operative laparoscopy</li>
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
            Specialised Women’s Health Care
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Trusted care from conception to childbirth and beyond</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 3.5 lakh+ Infertile Couples Counselled</li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />1 lakh+ Laparoscopic Surgeries</li>

            </ul>



            <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => {
    window.location.href = "tel:+919042065454";
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
                <Image src={aboutOverview} alt="aboutOverview" className="w-full h-[360px] rounded-2xl object-cover" />
                <h2 className="text-[24px] mb-2 mt-4">
                  Advanced Women’s Health Care by the Best Gynaecologist in  <span className="text-[#2B3990]"> Erode</span>
                </h2>
                <p className=" mb-3">
                  Recognized as the best Obstetrics & Gynaecology hospital in Erode, Sudha Multispeciality Hospital offers advanced and compassionate care for women at every stage of life. With the expertise of the best gynecologist in Erode, the department provides a complete range of services, including high-risk pregnancy management, advanced fertility treatments, minimally invasive surgeries, and gynaecological care for complex conditions.
                </p>
                <p className=" mb-3">Equipped with cutting-edge technology and modern facilities, the hospital ensures safe normal deliveries, painless labour, and specialised treatments tailored to individual needs. A patient-centric approach, clinical excellence, and personalised support make it a trusted destination for comprehensive women’s healthcare in Erode. </p>

              </>
            )}



            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 mb-3">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> 24x7 Emergency Obstetric & Gynaec Care </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Dedicated Labour Suites with Phoenix Delivery Table </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> 4D Scan for Advanced Prenatal Imaging  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Maternal & Fetal Doppler Monitoring </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Fetal Echo Cardiography </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Centralised Oxygen System & Philips Monitor  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Phoenix Instant Radiant Warmer for Newborns </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Ce Luminex L-500 LED Focus Light </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Accura Aspirator & Philips Defibrillator </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Operation Theatres with Laminar Airflow </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> ICU with specially trained nurses and obstetricians </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> IMSI, TESA, PESA, MESA & ICSI Technologies </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Surrogacy Support & Cryopreservation Labs </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Advanced Equipment for Laparoscopic & Hysteroscopic Surgeries </li>

                </ul>
              </div>
            )}



            {id === "services" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px]  mt-5 ">Services</h2>

                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5">Doctors</h2>
                <DoctorSlider specialty="Gynecologist" max={4} counter={3} />
              </div>
            )}

            {id === "faqs" && (
              <div className="space-y-2 md:pt-0 pt-10">
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> Trusted care from conception to childbirth and beyond</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} /> 3.5 lakh+ Infertile Couples Counselled</li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">  <Image className="mt-1" src={Checklight} alt="tick" width={12} height={10} />1 lakh+ Laparoscopic Surgeries</li>

          </ul>



          <button className="btn-white mt-5 flex items-center gap-2 mx-auto" onClick={() => {
    window.location.href = "tel:+919042065454";
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
