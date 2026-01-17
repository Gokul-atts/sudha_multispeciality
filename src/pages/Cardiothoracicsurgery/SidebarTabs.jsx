"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

// Assets
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/cardiology/cardiology.webp";
import Checklight from "@/assets/home/check-light.svg";

// Components
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
// import Faq from "../../components/Faq"; // Uncomment when FAQ is needed
import BookAppointmentModal from "@/components/bookappointmentmodal";

// Sidebar Section Tabs
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "treatmentsandprocedures", label: "Treatments & Procedures" },
  { id: "facilities", label: "Facilities" },
  { id: "services", label: "Services" },
  { id: "doctors", label: "Doctors" },
  // { id: "faqs", label: "FAQs" },
];

// FAQ Data (only unique entries kept)
const faq = [
  {
    title: <div className="flex gap-3">What is cardiology?</div>,
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          A branch of medicine dealing with disorders of the heart and blood
          vessels. The work of our cardiologists for adults includes diagnosis
          and treatment of adult congenital heart disease, heart failure,
          coronary artery disease, valvular heart disease and arrhythmias. All
          the necessary investigations like ECG, Echocardiogram, Treadmill test,
          Holter monitoring, Ambulatory BP monitoring, tilt table testing,
          cardiac CT, cardiac MRI, and nuclear heart scanning are available to
          provide you with the best adult cardiology treatment at our
          multispeciality hospital in Erode.
        </p>

        <h4 className="font-semibold">Diagnostic Tests Available:</h4>

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
          Patients walk on a treadmill at graded levels and their 12-lead ECG
          will be monitored for heart rate and ST-T segment changes. These
          findings help detect coronary artery disease, heart block, and more.
        </p>

        <h2 className="font-semibold text-[#2B3990]">
          STRESS ECHOCARDIOGRAPHY:
        </h2>
        <p>
          The heart is exerted by exercise or medicines and its activity is
          monitored by echocardiography. For those unable to perform a treadmill
          test, this is a very useful alternative to rule out coronary artery
          disease.
        </p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex gap-3">
        What is the main cause of heart problems?
      </div>
    ),
    content: <p>Details coming soon.</p>,
  },
];

// Accordion Data
const accordionData = [
  {
    title: <div className="flex gap-3">CABG Surgery</div>,
    content: (
      <div className="text-sm space-y-3">
        <p>
          Coronary Artery Bypass Surgery (CABG) is one of the most commonly
          performed procedures in adult cardiac care, often required to treat
          severe blockages in the heart. At Sudha Multispeciality Hospital, this
          life-saving surgery is carried out with exceptional precision and care
          by a dedicated team of experienced cardiac surgeons.
        </p>
        <p>
          Our cardiac department is recognized for its consistent outcomes and
          commitment to clinical excellence. With a strong foundation in
          research and active involvement in national and international studies,
          we continuously strive to set high standards in heart care and
          surgical innovation.
        </p>
      </div>
    ),
  },
  {
    title: <div className="flex gap-3">Paediatric Heart Surgery</div>,
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Our cardiac care team offers specialized surgical services for
          children and young adults, addressing a wide range of heart conditions
          from infancy through adolescence. With a focus on timely intervention
          and compassionate care, we are equipped to handle even the most
          delicate and urgent procedures in young patients.
        </p>
        <p>
          The paediatric cardiac unit is known for its commitment to quality,
          safety, and positive outcomes. Our approach is guided by international
          standards and best practices, ensuring every child receives expert
          care in a supportive environment tailored to their unique needs.
        </p>
      </div>
    ),
  },
  {
    title: <div className="flex gap-3">Hybrid Aortic Surgery</div>,
    content: (
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          Our cardiac surgery department at Sudha Multispeciality Hospital is
          equipped to handle a wide range of advanced aortic procedures,
          offering comprehensive care for conditions affecting the aorta. From
          complex surgeries involving the aortic root, arch, and descending
          segments to minimally invasive and hybrid techniques, our team ensures
          precise and timely interventions.
        </p>
        <p>
          Aortic emergencies such as dissections require immediate attention,
          and our centre is well-prepared to manage these critical cases with
          expertise. With a focus on safety, innovation, and patient outcomes,
          we are recognized for delivering high-quality care in complex aortic
          surgeries.
        </p>
      </div>
    ),
  },
  {
    title: <div className="flex gap-3">Valve Repair Surgery</div>,
    content: (
      <div className="text-sm space-y-3">
        <p>
          Since its inception, the Cardiac Surgery Department at Sudha
          Multispeciality Hospital has been dedicated to preserving the heart’s
          natural function through advanced valve repair procedures. Repairing
          heart valves is often preferred over replacement, especially for
          younger patients, as it helps maintain the integrity of the native
          valve and reduces the need for long-term medication.
        </p>
        <p>
          Our team is experienced in performing intricate repairs of mitral,
          aortic, and tricuspid valves, including those with congenital
          conditions. With a strong emphasis on skill enhancement and knowledge
          sharing, our cardiac surgeons have consistently engaged in
          collaborative learning, contributing to advancements in valve repair
          techniques and outcomes.
        </p>
      </div>
    ),
  },
];

export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState("");
  const [openModal, setOpenModal] = useState(false);

  console.log("openModal", openModal);
  const [isOpen, setIsOpen] = useState(false);

  // Section observer to track active
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
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs */}
        <div className="bg-white rounded-2xl p-4 sm:p-6">
          <h3 className="text-[16px] text-center font-bold mb-5">
            Comprehensive Cardiothoracic Services
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
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-[#2b3990]" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={`text-[15px] font-bold transition-colors duration-300 ${
                          isActive ? "text-[#2b3990]" : "text-black"
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
              <li className="flex items-start gap-1 text-[14px] font-semibold">
                <Image
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                  className="mt-1"
                />
                24/7 cardiac intensive care and monitoring specialties
              </li>
              <li className="flex items-start gap-1 text-[14px] font-semibold">
                <Image
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                  className="mt-1"
                />
                Expert team for adult and paediatric cardiac care
              </li>
              <li className="flex items-start gap-1 text-[14px] font-semibold">
                <Image
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                  className="mt-1"
                />
                Comprehensive facilities ensuring the best outcomes
              </li>
            </ul>

            <button
              className="btn-white mt-5 flex items-center gap-2 mx-auto"
              onClick={() => {
                window.location.href = "tel:04242454545";
              }}
            >
              Book an Appointment <ArrowUpRight className="w-5 h-5" />
            </button>
            <BookAppointmentModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>

          {/* Find a Doctor Box */}
          <Link href="/find-a-doctor">
            <div
              className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
              style={{
                background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
              }}
            >
              {/* Text Section */}
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
                <h3 className="text-[24px] sm:text-xl  font-bold leading-snug">
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

      {/* Main Content Sections */}
      <div className="flex-1 space-y-0">
        {serviceSections.map(({ id }) => (
          <section key={id} id={id} className="scroll-mt-32 rounded-xl">
            {id === "overview" && (
              <>
                <Image
                  src={aboutOverview}
                  alt="aboutOverview"
                  className="w-full h-[380px] rounded-2xl object-cover"
                />
                <div className="mt-6 space-y-2">
                  <h2 className="text-[24px]">
                    Best Cardiothoracic Treatment in{" "}
                    <span className="text-[#2B3990]">Erode</span> for Complex
                    Cardiac Surgeries
                  </h2>
                  <p className="mb-4">
                    The Cardiothoracic Surgery Department at Sudha
                    Multispeciality Hospital provides the best cardiothoracic
                    treatments in Erode and has an impressive track record with
                    high success rate surgeries performed by the most
                    experienced cardiothoracic surgeons in the region. The
                    department is well-prepared to manage a full range of
                    cardiac and thoracic conditions, from intricate neonatal
                    surgeries to advanced treatments for heart failure,
                    including heart transplantation.
                  </p>
                  <p className="mb-4">
                    With cutting-edge infrastructure and modern surgical
                    technology, the centre is committed to delivering
                    high-quality cardiac care, including bypass surgeries, at
                    cost-effective rates. Sudha Multispeciality Hospital is
                    known as the best cardiology hospital in Erode, for its
                    expertise in valve repair, aortic surgeries, complex
                    paediatric heart procedures, and surgical management of
                    heart failure, including transplantation.
                  </p>
                  <p className="mb-4">
                    In addition to its cardiac services, this comprehensive unit
                    is also equipped to perform thoracic surgeries such as
                    video-assisted thoracic surgery (VATS) and advanced vascular
                    procedures, including endovascular interventions like
                    stenting for complex aortic aneurysms.
                  </p>
                </div>
              </>
            )}

            {id === "treatmentsandprocedures" && (
              <>
                <h2 className="text-[24px] mt-5">Treatments & Procedures</h2>
                <p className="mt-3">
                  The department performs a full range of cardiac surgeries for
                  patients of all ages, from newborns to the elderly. The
                  paediatric unit handles complex procedures like arterial
                  switch operations, while the adult unit specialises in
                  coronary artery bypass grafting, including beating heart
                  surgery, arterial grafts, and minimally invasive harvesting.
                  Known for excellence in valve repair and aortic surgery, the
                  centre is equipped with advanced facilities to manage both
                  simple and complex heart conditions.
                </p>
              </>
            )}

            {id === "facilities" && (
              <>
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul>
                  {[
                    "Dedicated Cardiothoracic Operating Theatres",
                    "Cardiopulmonary Bypass Machine (Heart-Lung Machine)",
                    "Advanced Monitoring Systems",
                    "Intraoperative Transoesophageal Echocardiography (TEE)",
                    "Cardiothoracic Intensive Care Unit (CTICU)",
                    "Mechanical Ventilation and ECMO Support",
                    "Dedicated Recovery Room / High Dependency Unit (HDU)",
                    "Cardiac Catheterisation Lab (Cath Lab)",
                  ].map((facility, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3"
                    >
                      <div className="w-2 h-2 rounded-lg bg-[#2B3990]" />
                      {facility}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {id === "services" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5 ">Services</h2>
                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5">Doctors</h2>
                <DoctorSlider specialty="Cardiothoracic" counter={2} />
              </div>
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
            <li className="flex items-start gap-1 text-[14px] font-semibold">
              <Image
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
                className="mt-1"
              />
              24/7 cardiac intensive care and monitoring specialties
            </li>
            <li className="flex items-start gap-1 text-[14px] font-semibold">
              <Image
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
                className="mt-1"
              />
              Expert team for adult and paediatric cardiac care
            </li>
            <li className="flex items-start gap-1 text-[14px] font-semibold">
              <Image
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
                className="mt-1"
              />
              Comprehensive facilities ensuring the best outcomes
            </li>
          </ul>

          <button
            className="btn-white mt-5 flex items-center gap-2 mx-auto"
            onClick={() => {
              window.location.href = "tel:04242454545";
            }}
          >
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
          <BookAppointmentModal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>

        {/* Find a Doctor Box */}
        <Link href="/find-a-doctor">
          <div
            className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
            style={{
              background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
            }}
          >
            {/* Text Section */}
            <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
              <h3 className="text-[24px] sm:text-xl  font-bold leading-snug">
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
