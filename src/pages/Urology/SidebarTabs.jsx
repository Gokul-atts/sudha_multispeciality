"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/urology/urology-overview.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Checklight from "@/assets/home/check-light.svg";
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
        <div className="flex gap-3">
          Which hospital in Erode is best for urology problems?{" "}
        </div>
      </>
    ),
    content: (
      <p>
        Sudha Multispeciality Hospital is regarded as the best urology hospital
        in Erode, offering expert consultations, advanced diagnostic facilities,
        and comprehensive treatment for all urology and kidney-related
        conditions.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          What are the most common urology problems?
        </div>
      </>
    ),
    content: (
      <p>
        Common urology problems include kidney stones, urinary tract infections,
        enlarged prostate, bladder issues, and urethral strictures. At Sudha
        Multispeciality Hospital, the best hospital for kidney-related treatment
        in Erode, specialised care is provided for both common and complex cases
        by the best urologists.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the most common procedure performed in urology?
        </div>
      </>
    ),
    content: (
      <p>
        One of the most common urology procedures is kidney stone removal, which
        may involve minimally invasive techniques such as ureteroscopy or laser
        treatment. Sudha Multispeciality Hospital in Erode offers advanced
        surgical and non-surgical options under expert urologists.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How long does a urology procedure usually take?
        </div>
      </>
    ),
    content: (
      <p>
        The duration of a urology procedure depends on the type of treatment.
        Minor procedures may take 30 to 60 minutes, while more complex surgeries
        may require several hours. Sudha Multispeciality Hospital ensures
        precision and safety with advanced facilities.
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          How long does it take for the urethra to heal after treatment?
        </div>
      </>
    ),
    content: (
      <p>
        Urethral healing after treatment typically takes a few weeks, depending
        on the type of procedure and overall health condition. At Sudha
        Multispeciality Hospital in Erode, patients receive continuous
        monitoring and guidance for faster recovery.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          Is urethroplasty considered a minor or major surgery?
        </div>
      </>
    ),
    content: (
      <p>
        Urethroplasty is considered a major surgery, as it involves
        reconstructing or repairing the urethra. The procedure is performed by
        experienced specialists at Sudha Multispeciality Hospital, the best
        urology hospital in Erode, ensuring safe outcomes and effective
        recovery.{" "}
      </p>
    ),
  },
  {
    title: (
      <>
        <div className="flex gap-3">
          {" "}
          What is the first stage of urethroplasty?
        </div>
      </>
    ),
    content: (
      <p>
        The first stage of urethroplasty involves assessing the damaged portion
        of the urethra and preparing the tissue for reconstruction. At Sudha
        Multispeciality Hospital in Erode, expert urologists carry out the
        procedure with advanced techniques for optimal results.{" "}
      </p>
    ),
  },
];

const accordionData = [
  {
    title: (
      <>
        <div className="flex gap-3">
          {/* <Image src={one} alt="Urology"/>  */}
          Kidney & Urinary Stone Management
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          We provide comprehensive treatment for kidney and ureteric stones
          using advanced, minimally invasive techniques that ensure faster
          recovery and minimal discomfort, tailored for each patient's condition
          and stone size.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Lithotripsy (ESWL) for non-invasive stone removal
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Ureteroscopy (URS) for small ureteric stones{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> PCNL
              for large or complex kidney stones{" "}
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
          {/* <Image src={one} alt="Radiology" />  */}
          Male Reproductive & Fertility Surgery
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          Specialised microsurgeries are offered to treat conditions like
          varicocele and azoospermia, enhancing male fertility potential through
          safe, effective, and fertility-preserving methods.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Microscopic Varicocele Repair
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Micro-TESE for sperm retrieval
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> Male
              infertility evaluation and counselling{" "}
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Collaboration with fertility specialists{" "}
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
          {/* <Image src={one} alt="Radiology" />  */}
          Prostate & Bladder Health
        </div>
      </>
    ),
    content: (
      <div className="text-sm space-y-3">
        <p>
          We offer expert care for prostate enlargement, haematuria, urinary
          incontinence, and bladder dysfunction with both medical and surgical
          treatment options tailored for age and severity.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Treatment for Benign Prostatic Hyperplasia (BPH)
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Urinary incontinence management
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Cystoscopy for diagnosis of bladder issues
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Medical and surgical therapy for haematuria{" "}
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
          {/* <Image src={one} alt="Radiology" />  */}
          Urological Cancer & Reconstructive Surgery
        </div>
      </>
    ),
    content: (
      <div className="text-sm  space-y-3">
        <p>
          From diagnosis to surgery and post-operative care, we manage cancers
          of the urinary tract and perform reconstructive procedures to restore
          function and improve patient outcomes.
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Kidney, prostate, bladder, and testicular cancer surgeries
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              {" "}
              <Image src={Checklight} alt="tick" width={24} height={24} />
              Reconstructive procedures like pyeloplasty
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} />{" "}
              Oncology care coordination
            </li>
            <li className="flex items-center gap-2 text-[14px] font-semibold">
              <Image src={Checklight} alt="tick" width={24} height={24} /> Pre-
              and post-surgical cancer support
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

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
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs Box */}
        <div className="bg-white  rounded-2xl p-4 sm:p-6">
          <h3 className="text-[16px]  text-center font-bold  mb-5">
            Personalised Urological Care
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
                        className={`text-[15px]  font-bold transition-colors duration-300 ${
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
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />{" "}
                24/7 emergency care for all urological conditions
              </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />{" "}
                Complete urological care for all age groups
              </li>
              <li className="flex items-start  gap-1 text-[14px] font-semibold">
                {" "}
                <Image
                  className="mt-1"
                  src={Checklight}
                  alt="tick"
                  width={12}
                  height={10}
                />
                Expert urology team with patient-centred approach
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

      {/* Content Sections */}
      <div className="flex-1 space-y-0">
        {serviceSections.map(({ id, label }) => (
          <section key={id} id={id} className="scroll-mt-32 rounded-xl">
            {id === "overview" && (
              <>
                <Image
                  src={aboutOverview}
                  alt="aboutOverview"
                  className="w-full h-[400px] rounded-2xl object-cover "
                />
                <h2 className="text-[24px] mb-2 mt-4">
                  Advanced Urology Treatments at the Best Urology Hospital in{" "}
                  <span className="text-[#2B3990]"> Erode </span>
                </h2>
                <p className="mb-4">
                  At Sudha Multispeciality Hospital, we offer comprehensive and
                  compassionate care for all types of urological conditions
                  affecting men, women, and children. As one of the best
                  hospitals for kidney-related treatments in Erode, our
                  department is equipped with state-of-the-art technology and
                  led by experienced urologists committed to delivering precise
                  diagnosis and minimally invasive treatments. Whether it's
                  kidney stones, prostate issues, or advanced urological
                  cancers, our patient-centric approach ensures high success
                  rates and faster recovery.
                </p>
                <p className="mb-4">
                  We specialise in both routine and complex urological
                  procedures, including renal stone management, prostate
                  surgery, incontinence treatment, and fertility-related
                  microsurgeries. With advanced tools like Lithotripsy and
                  Micro-TESE, we bring together innovation and care for your
                  complete urinary health.
                </p>
              </>
            )}

            {id === "facilities" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px] mt-5 mb-3">Facilities</h2>
                <ul>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>24x7
                    Emergency Urological Services : Immediate care for urinary
                    obstructions, trauma, and renal colic emergencies.
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>
                    Specialised Wards & Skilled Staff : General and private
                    wards staffed with trained duty doctors and urology-trained
                    nurses.
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    C-Arm Fluoroscopy Unit : Real-time imaging support for
                    accurate surgical procedures.
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Advanced Lithotripsy Equipment : Non-invasive stone-breaking
                    technology for kidney and ureteric stones.
                  </li>
                  <li className="flex gap-2 md:items-center items-start text-[#5E566A] text-[15px] font-semibold mt-3">
                    <div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{" "}
                    Microsurgical Fertility Equipment : Tools for high-precision
                    procedures like Micro-TESE and Varicocele repair.
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
                <DoctorSlider specialty="Urologist" max={2} counter={2} />
              </div>
            )}

            {id === "faqs" && (
              <div className="space-y-2 ">
                <h2 className="text-[24px]  mt-5 ">
                  Frequently Asked Questions
                </h2>
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
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />{" "}
              24/7 emergency care for all urological conditions
            </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />{" "}
              Complete urological care for all age groups
            </li>
            <li className="flex items-start  gap-1 text-[14px] font-semibold">
              {" "}
              <Image
                className="mt-1"
                src={Checklight}
                alt="tick"
                width={12}
                height={10}
              />
              Expert urology team with patient-centred approach
            </li>
          </ul>

          <Link href="tel:04242454545">
            <button className="btn-white mt-5">
              Book an Appointment{" "}
              <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </Link>
        </div>

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
