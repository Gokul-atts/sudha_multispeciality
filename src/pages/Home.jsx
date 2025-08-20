"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import cardone from "@/assets/home/cards/1.svg";
import cardtwo from "@/assets/home/cards/2.svg";
import cardthree from "@/assets/home/cards/3.svg";
import cardfour from "@/assets/home/cards/4.svg";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import ServiceCard from "../components/ServiceCard";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import play from "../assets/home/play.png";
import HospitalCard from "../components/Hospital";
import inter from "../assets/home/inter.svg";
import patient from "../assets/home/patient.svg";
import stethoscopeTool from "../assets/home/stethoscope-tool.svg";
import healthCheck from "../assets/home/patient-first-approach.svg";
import empathy from "../assets/home/empathy.svg";
import parental from "../assets/home/parental.svg";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import experienced from "../assets/home/pharmacy.svg";
import holistic from "../assets/home/quality.svg";
import modern from "../assets/home/blood-bank.svg";
import review from "../assets/home/review-patient.svg";
import './Home.css';
import banner from "../assets/home/home-banner.svg";
import heartIcon from "../assets/home/medical/1.svg";
import Expect from "../assets/home/expert-care.svg";
import FacilitySlider from "../components/FacilitySlider";
import OurTeamSlider from "../components/OurTeamSlider";
import InfiniteMovingReviews from "../components/InfiniteMovingReviews";
import SpecialitySection from "@/components/SpecialitySection";
import CentreOfExcellence from "@/components/centreofexcellence";
import Bookappointment from "@/components/Bookappointment";
import BannerSlider from "@/components/BannerSlider";
import BookAppointmentModal from "@/components/bookappointmentmodal";

const cards = [
  {
    icon: cardone,
    title: (
      <p className="text-md font-extrabold text-black">
        <span className="text-[#2b3990] font-extrabold">24/7</span> <br />
        Emergency Care
      </p>
    ),
    link: "/contact-us",
  },
  {
    icon: cardtwo,
    title: (
      <p className="text-md font-extrabold text-black">
        <span className="text-[#2b3990] font-extrabold"> Sudha </span> <br />
        Master Health Check Up
      </p>
    ),
    link: "/maternity",
  },
  {
    icon: cardfour,
    title: (
      <p className="text-md font-extrabold text-black">
        {" "}
        <br />
        Find a<span className="text-[#2b3990] font-extrabold "> Doctor</span>
      </p>
    ),
    link: "/find-doctor",
  },
  {
    icon: cardthree,
    title: (
      <p className="text-md font-extrabold text-black">
        <br />
        Book an
        <span className="text-[#2b3990] font-extrabold"> Appointment </span>
      </p>
    ),
    link: "/#book-appointment",
  },
];

const hospitalscards = [
  {
    number: <h3 className="text-[48px] text-[#2B3990]">40+</h3>,
    title: <p className="text-md font-bold text-black">Years of Experience</p>,
    link: "/op-centre",
    icon: hospitalOne,
  },
  {
    number: <h3 className="text-[48px] text-[#2B3990]">300+</h3>,
    title: <p className="text-md font-bold text-black">Patient Beds</p>,
    link: "/maternity",
    icon: hospitalTwo,
  },
  {
    number: <h3 className="text-[48px] text-[#2B3990]">30+</h3>,
    title: <p className="text-md font-bold text-black">Departments</p>,
    link: "/heart-care",
    icon: hospitalThree,
  },
  {
    number: <h3 className="text-[48px] text-[#2B3990]">100+</h3>,
    title: <p className="text-md font-bold text-black">Doctor's</p>,
    link: "/heart-care",
    icon: hospitalFour,
  },
];

const specialties = [
  "Cardiology",
  "Neurology",
  "Pulmonology",
  "Gastroenterology",
  "Orthopaedics",
  "HPB Surgery",
  "Urogynecology",
  "Hepatology",
  "Nephrology",
  "Orthopaedics",
  "Orthopaedics",
  "Orthopaedics",
  "Orthopaedics",
  "Orthopaedics",
  "Orthopaedics",
  "Orthopaedics",
  "Orthopaedics",
  "Orthopaedics",
];

const features = [
  {
    icon: stethoscopeTool,
    title: "Experienced Doctors ",
    desc: "Our team comprises highly skilled specialists dedicated to delivering compassionate and expert care to every patient.",
  },
  {
    icon: healthCheck,
    title: "Patient-First Approach ",
    desc: "We are committed to providing patient-centric support and care for your complete recovery and well-being. ",
  },
  {
    icon: empathy,
    title: "Personalized  Treatments",
    desc: "Customized healthcare treatments and plans for everyone's specific health journey for prompt recovery. ",
  },
  {
    icon: parental,
    title: "24/7 Emergency & Trauma Care ",
    desc: "Immediate, expert medical attention is available around the clock for all critical and emergency situations. ",
  },
];

const cardData = [
  {
    title: (
      <h3 className="text-[18px] font-bold text-black">In-House Pharmacy</h3>
    ),
    desc: "Round-the-clock pharmacy for immediate access to essential medications, ensuring support for your recovery. ",
    bg: "bg-[#F0E5FF]",
    icon: experienced, // replace with your image path
  },
  {

    title: (
      <h3 className="text-[18px] font-bold text-black">
        Safety & Quality Standards
      </h3>
    ),

    desc: "Highest global safety and quality standards, ensuring excellence and building trust for your complete well-being. ",
    bg: "bg-[#DDEEFF]",
    icon: holistic, // replace with your image path
  },
  {

    title: (
      <h3 className="text-[18px] font-bold text-black">Blood Bank Facility</h3>
    ),

    desc: "Dedicated in-house blood bank, providing immediate access to life-saving support for every critical need.",
    bg: "bg-[#DFFFF3]",
    icon: modern, // replace with your image path
  },
];

const reviews = [
  {
    quote:
      "My grandfather had cardiac issue. Met Dr. RAJASEKAR sir. Post ECG without creating any panic he suggested Angio and Stent placement. All done with complete care. Hearty thanks to Dr. RAJASEKAR sir from our family. He is so calm and understands patients and the BEST THING IS HE LISTENS TO WHAT A PATIENT speaks, questions and responds so groundly. I haven't seen Doctors explaining that much calm n composed. To me if it's for CARDIO the only option is Dr. RAJASEKAR sir. The hospital facilities also noteworthy. The way all staffs especially nurses and supporting staffs from insurance team are all polite and good enough and supporting. Again a thanks to Dr. RAJASEKAR sir.",
    name: "Saravana Kumar R D",
    title: "Patient",
  },
  {
    quote:
      "My grandmother named kamalam has been affected by cancer and she get treatment in the sudha multi-speciality hospital really the hospital management very neet and co operative we need to thank dr sugashwaran sir and preetha mam they help us to make this operation succesfull and they supported us financially thank you for the service provided by the sudha hospital management thank you for all the service we are great ful to sudha hospital management and doctors and nurses",
    name: "Suganya Sreejith",
    title: "Patient",
  },
  {
    quote:
      "இங்கு சிறப்பாக மருத்துவம் பார்க்கிறார்கள். அனைத்து வகையான நோய்களுக்கும் இங்கே மருத்துவம் பார்க்கிறார்கள். செலவுதான் மிகவும் அதிகம். ஆனாலும் நோயாளிகளை நன்கு கவனிக்கிறார்கள். இங்கேயே செயற்கை கருத்தரிப்பு மையமும் உள்ளது. எனது உறவினருக்கு கூட இங்கு செயற்கை கருத்தரிப்பு மூலம் இரு அழகான குழந்தை பிறந்தது.",
    name: "Karthi Keyan",
    title: "Patient",
  },
  {
    quote:
      "I got admitted in 4th floor....Dr.Mohan sir neuro surgeon, Dr. Janarthanan sir ortho surgeon and Dr. Gnanasekaran sir plastic surgeon - Thanks for the best treatment provided... Special thanks for all the sisters who took care of me very well... Good hospitality... Even the housekeeping staffs were so good...",
    name: "Priya Karthi",
    title: "Patient",
  },
  {
    quote:
      "We had a very positive experience at Sudha Hospital, Erode. The staff, nurses, and doctor were polite, supportive, and guided us well throughout the recovery process. The ward was clean and comfortable, and the food provided was hygienic and satisfactory. The only minor disappointment was the tea, which could be improved. Overall, everything else was excellent and we are grateful for the care received.",
    name: "Periyasami Palanisamy",
    title: "Patient",
  },
  {
    quote:
      "ஈரோடு மாவட்டத்தில் அனைத்து விதமான நோய்களுக்கும் மிகத் துல்லியமான மருத்துவம் வேண்டுமெனில் சுதா மருத்துவமனையை அணுகவும்",
    name: "Kumar Agni",
    title: "Patient",
  },
  {
    quote:
      "I had a very positive experience at this hospital, especially in the emergency ward. The response time was incredibly fast, which was a huge relief during a stressful situation. I want to specifically commend Dr. Rajasekar for his kind and caring approach. He made a difficult time much easier to manage.",
    name: "Sai Tayanand",
    title: "Patient",
  },
  {
    quote:
      "Good service and good hospitality shown during treatment and surgery. Myself very thankful to Doctor Mr. Gopinath personally taking care of each patient and medical advise given to each patient. Such gem and thanks to wonderful personality.☺️☺️☺️",
    name: "Vignesh M",
    title: "Patient",
  },
  {
    quote:
      "Good care by the nurses provided... thanks tp Dr. vikram sir for the utmost treatment given... overall recommended.",
    name: "T.shanthi T.shanthi",
    title: "Patient",
  },
  {
    quote:
      "Hospitality and treatment is excellent. Hospital staff is very polite. Doctors are explaining the treatment step by step. Dr.Vikramraj Consultant Neurologist is well experienced.The nurses were taking good care of us.They were being polite and were clearing the doubts .The overall experience was excellent",
    name: "Mayukha",
    title: "Patient",
  },
];

// motion animation start

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Our Specialities start
  // Set items per page based on screen width
  useEffect(() => {
    const updateItems = () => {
      const isMobile = window.innerWidth < 768;
      setItemsPerPage(isMobile ? 6 : 10);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxPage = Math.ceil(specialties.length / itemsPerPage) - 1;



  // Our Specialities end

  return (
    <>


      <section className="relative -mt-20 m-10 z-index">
        <BannerSlider />
      </section>

      <section>
        <div className="max-w-7xl mx-auto py-8 h-full">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            {cards.map((card, idx) => (
              <motion.div key={idx} variants={item}>
                <div className="cursor-pointer  duration-300">

                  <ServiceCard
                    icon={card.icon}
                    title={card.title}
                    link={card.link}
                  />

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto  pt-16 pb-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <Image
              src={play}
              alt="hospital building"
              className="w-full custom-h-380 object-cover rounded-2xl"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Content Block */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[30px] mb-4 leading-[1.4]">
                Welcome to <span className="text-primary-blue">Sudha</span> —
                Where we care for you from the heart like family.
              </h2>

              <p className=" mb-4">
                Sudha Hospital began its journey in 1985 in the turmeric city of
                Tamil Nadu. From its beginnings, this hospital has played a
                significant role and has become an integral part of the
                healthcare evolution in the Kongu region.
              </p>

              <p className=" mb-6">
                Established in 1985, Sudha Hospital has become an integral part
                of providing quality healthcare in the Kongu region since its
                inception. With the dedication and commitment to provide
                advanced international standard healthcare, we make sure every
                patient is treated with compassion and care. Equipped with the
                best team of doctors, nurses, technicians, and other staff, we
                offer world-class treatments at an affordable price.
              </p>

              <p className=" mb-6">
                This unwavering allegiance to healthcare has made us the trusted
                choice and the best hospital in Erode.
              </p>

              <Link href="#">
                <motion.div
                  className="btn-diagonal inline-flex items-center gap-2 px-6 sm:px-7 py-3 text-sm sm:text-base bg-[#253990] font-semibold text-white rounded-full transition-transform duration-200 hover:-translate-y-[3px]"
                >
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 7L7 17M7 7h10v10"
                    />
                  </svg>
                </motion.div>
              </Link>

            </motion.div>
          </section>
        </div>

        {/* Video Modal */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-red-600"
              >
                &times;
              </button>

              {/* YouTube Video Embed */}
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rBWU5-3m0GI"
                  title="Sudha Hospital Intro"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {hospitalscards.map((card, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <HospitalCard
                  number={card.number}
                  icon={card.icon}
                  title={card.title}
                  link={card.link}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <SpecialitySection />
      </section>

      <section className="py-16">
        <CentreOfExcellence />
      </section>

      <section className="max-w-7xl mx-auto h-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <h2 className="bg-white text-[#2B3990] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold">
            Cutting-Edge Facilities
          </h2>
        </div>

        <h2 className="text-center text-[30px]  mt-4 sm:mt-6 ">
          Advanced Medical Devices and <br className="hidden sm:block" />
          International Technology
        </h2>
      </section>

      <div>
        <FacilitySlider />
      </div>

      <section className="py-8">
        <OurTeamSlider />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#FFFFFF] mt-10 rounded-2xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Block */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden relative">
              <Image
                src={Expect}
                alt="Pregnant Woman"
                className="rounded-2xl w-full h-auto object-cover"
              />

              {/* Floating Info Badges */}
              <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 bg-white shadow-lg rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 px-6 py-6 text-sm sm:text-md font-semibold text-[#2B3990] max-w-[90%] sm:max-w-none">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={inter}
                    alt="icon"
                    width={35}
                    height={35}
                    className="sm:w-[40px] sm:h-[40px]"
                  />
                  <span className="text-black font-bold leading-tight">
                    World Class <br /> Health Care
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={patient}
                    alt="icon"
                    width={35}
                    height={35}
                    className="sm:w-[40px] sm:h-[40px]"
                  />
                  <span className="text-black font-bold leading-tight">
                    100% Patient <br /> Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F0F7FD] p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 mb-2"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="custom-h3 text-black">{feature.title}</h3>
                  <p className="text-[14px] mt-2">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="py-16"
        >
          <span className="mx-4 text-[#D5DAE5] font-extrabold text-[76px]">
            Quality Health Care Beyond Generations
          </span>
        </Marquee>

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto  pb-16">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${item.bg} p-8 rounded-2xl flex flex-col items-start justify-between min-h-[280px]`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <div className="">{item.title}</div>
                <p className="text-[#000000] mt-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full bg-[#fff] rounded-[30px]">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-center">
              <Image src={review} alt="review" className="w-[80%] text-left" />
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <div>
                <h3 className=" text-[30px]">
                  Testimonials of Trust From <br /> Those We've Served.
                </h3>

                <button className="btn-diagonal bg-[#2B3990] mt-4 text-[#fff] text-[15px] pt-3 pb-3 pr-7 pl-7 rounded-full trnasition flex gap-2 hover:-translate-y-[3px] transition-transform duration-200">
                  Book your Appointment <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>

          <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingReviews
              items={reviews}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </section>

      <div id="book-appointment" className="py-16">
        <Bookappointment />
      </div>
    </>
  );
}

export default Home;
