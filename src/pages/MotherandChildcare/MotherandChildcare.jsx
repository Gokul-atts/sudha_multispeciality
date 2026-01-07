"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Bookappointment from "@/components/Bookappointment";
import BookAppointmentModal from "@/components/bookappointmentmodal";

import DoctorSlider from "../../components/Slicksliderdoctor";

import {
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import family from "@/assets/motherandchildcare/family.png";
import Sky from "@/assets/motherandchildcare/sky.svg";
import cardone from "@/assets/home/cards/1.svg";
import cardtwo from "@/assets/home/cards/2.svg";
import cardthree from "@/assets/home/cards/3.svg";
import cardfour from "@/assets/home/cards/4.svg";
import ServiceCard from "@/components/ServiceCard";
import Mother from "@/assets/motherandchildcare/mother.png";
import Arrow from "@/assets/motherandchildcare/arrow.svg";
import Background from "@/assets/motherandchildcare/bg.png";
import One from "@/assets/motherandchildcare/lactation-maternal.webp";
import Two from "@/assets/motherandchildcare/paediatrics.webp";
import Three from "@/assets/motherandchildcare/gynaecology.webp";
import Four from "@/assets/motherandchildcare/healthpackage.webp";
import Five from "@/assets/motherandchildcare/dietetics.webp";
import Six from "@/assets/motherandchildcare/post-partumcare.webp";
import Seven from "@/assets/motherandchildcare/paediatric-cardiology.webp";
import Eight from "@/assets/motherandchildcare/painless-delivery.webp";
import IconOne from "@/assets/motherandchildcare/iconh-one.svg";
import IconTwo from "@/assets/motherandchildcare/white/2.svg";
import IconThree from "@/assets/motherandchildcare/white/3.svg";
import IconFour from "@/assets/motherandchildcare/white/4.svg";
import IconFive from "@/assets/motherandchildcare/white/5.svg";
import Iconsix from "@/assets/motherandchildcare/white/6.svg";
import Iconseven from "@/assets/motherandchildcare/white/7.svg";
import Iconeight from "@/assets/motherandchildcare/white/8.svg";
import IconHoverOne from "@/assets/motherandchildcare/hover/1.svg";
import IconHoverTwo from "@/assets/motherandchildcare/hover/2.svg";
import IconHoverThree from "@/assets/motherandchildcare/hover/3.svg";
import IconHoverFour from "@/assets/motherandchildcare/hover/4.svg";
import IconHoverFive from "@/assets/motherandchildcare/hover/5.svg";
import IconHoversix from "@/assets/motherandchildcare/hover/6.svg";
import IconHoverseven from "@/assets/motherandchildcare/hover/7.svg";
import IconHovereight from "@/assets/motherandchildcare/hover/8.svg";
import Couple from "@/assets/motherandchildcare/couple.webp";
import Whychoicebg from "@/assets/motherandchildcare/whychoicebg.png";
import Whychoiceone from "@/assets/motherandchildcare/year-of-motherly-care.webp";
import Whychoicetwo from "@/assets/motherandchildcare/savedelivery.webp";
import Whychoicethree from "@/assets/motherandchildcare/yearofexperience.webp";
import Whychoiceiconone from "@/assets/motherandchildcare/whyicon1.svg";
import Whychoiceicontwo from "@/assets/motherandchildcare/whyicon2.svg";
import Whychoiceiconthree from "@/assets/motherandchildcare/whyicon3.svg";
import OurAchivementOne from "@/assets/motherandchildcare/our-achiement.webp";
import OurAchivementTwo from "@/assets/motherandchildcare/our-achiement-1.webp";
import Contact_us from "@/assets/motherandchildcare/contact_us.webp";
import Sudhacare from "@/assets/motherandchildcare/maternal-health-care.webp";
import Sudhacaretwo from "@/assets/motherandchildcare/paediatric-health-care.webp";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { doctorsData } from "@/constants/doctorDetails";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./motherandchildcare.css";
import Motherandchild from "@/assets/motherandchildcare/img.png";
import Breadcrumb from "@/components/Breadcrumb";
import { Nunito } from 'next/font/google';
import { Toaster } from "react-hot-toast";


const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700', '900'] });


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Mother & Child Care", href: "/mother-and-child-care" },
];
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
        Master <span className="text-[#2b3990] font-extrabold">Health  </span> <br />
        Check Up
      </p>
    ),
    link: "/facilities/health-package",
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
    link: "/find-a-doctor",
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
    link: "#contactus",
  },
];

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

const features = [
  "Expert gynaecologists and paediatricians dedicated to your care",
  "Personalised treatment plans for every mother and child",
  "Trusted experience in handling high-risk pregnancies ",
  "Compassionate counselling and emotional support during postpartum recovery ",
];

const services = [
  {
    title: "Lactation & Maternal Health",
    image: One,
    icon: IconOne,
    hoverIcon: IconHoverOne,
    link: "/resources/allied-health-services/lactation-and-maternal-health",
  },
  {
    title: "Paediatrics",
    image: Two,
    icon: IconHoverTwo,
    hoverIcon: IconTwo,
    link: "/specialities/paediatrics",
  },
  {
    title: "Gynaecology",
    image: Three,
    icon: IconHoverThree,
    hoverIcon: IconThree,
    link: "/specialities/obstetrics-and-gynaecology",
  },
  {
    title: "Health Package",
    image: Four,
    icon: IconHoverFour,
    hoverIcon: IconFour,
    link: "/facilities/health-package",
  },
  {
    title: "Dietetics",
    image: Five,
    icon: IconHoverFive,
    hoverIcon: IconFive,
    link: "/resources/allied-health-services/dietetics",
  },
  {
    title: "Post-partum Care",
    image: Six,
    icon: IconHoversix,
    hoverIcon: Iconsix,
    link: "/mother-and-child-care/post-partum-care",
  },
  // {
  //   title: "Paediatric Cardiology",
  //   image: Seven,
  //   icon: IconHoverseven,
  //   hoverIcon: Iconseven,
  //   link: "/cardiology",
  // },
  {
    title: "Painless Delivery",
    image: Eight,
    icon: IconHovereight,
    hoverIcon: Iconeight,
    link: "/mother-and-child-care/painless-delivery",
  },
];

const whychoice = [
  {
    type: "image",
    src: Whychoiceone,
  },
  {
    type: "text",
    icon: Whychoiceiconone,
    title: "40+ Years of Experience",
    desc: "Experienced gynaecologists and paediatricians with unwavering dedication to mother and childcare.",
  },
  {
    type: "image",
    src: Whychoicetwo,
  },
  {
    type: "text",
    icon: Whychoiceicontwo,
    title: "Personalised Care",
    desc: "From treatments to diet, every patient receives personalised care for positive outcomes.",
  },
  {
    type: "image",
    src: Whychoicethree,
  },
  {
    type: "text",
    icon: Whychoiceiconthree,
    title: "Safe Delivery",
    desc: "Comfortable and safe birthing environment designed for a smooth and healthy delivery.",
  },
];

const ourcommitment = [
  {
    title: "Patient-Centred Approach",
    content:
      "For us at Sudha, the patient comes first always. Providing the healthcare you deserve is our purpose. ",
  },
  {
    title: "Compassionate Support",
    content:
      "We believe care is not complete without compassion. At Sudha, we support you with empathy at every step. ",
  },
  {
    title: "Personalized Care For Every Patient",
    content:
      "At Sudha, we understand your concerns and personalise treatments to suit your healthcare needs. ",
  },
];



const faqData = [
  {
    question: "Which is the best Mother and Child Care Hospital in Erode?",
    answer: "Sudha Multispeciality Hospital is recognised as the best Mother and Child Care Hospital in Erode, offering expert gynaecologists, advanced neonatal care, and dedicated facilities for women and children’s health. ",
  },
  {
    question: "When should I start prenatal care? ",
    answer: "Prenatal care should ideally begin as soon as pregnancy is confirmed. Early care ensures regular monitoring, nutritional guidance, and the prevention of complications. Sudha Multispeciality Hospital provides trusted prenatal care in Erode with experienced specialists. ",
  },

  {
    question: "How important are vaccines for children’s health?",
    answer: "Vaccines are essential to protect children against life-threatening diseases and strengthen immunity. Sudha Multispeciality Hospital, the best baby care hospital in Erode, follows the recommended immunisation schedule to ensure children’s long-term health and safety.",
  },
  {
    question: "What services are offered at a Sudha Mother and Child Care Centre? ",
    answer: "Comprehensive services include antenatal and postnatal care, high-risk pregnancy management, advanced labour facilities, neonatal intensive care, paediatric care, and emergency childcare. Sudha Multispeciality Hospital is regarded as the best Mother and Child Care Centre in Erode for complete family care. ",
  },
  {
    question: "Why should I choose a specialized Mother and Child Care Centre?",
    answer: "Specialised centres provide focused care with expert obstetricians, neonatologists, and paediatricians. Sudha Multispeciality Hospital, the best women care hospital in Erode, ensures safe deliveries, holistic women’s health services, and dedicated childcare under one roof. ",
  },
  {
    question: "What neonatal services are available for newborn babies at Sudha Hospital? ",
    answer: "Sudha Multispeciality Hospital, the best Mother and Child Care Centre in Erode, provides advanced NICU facilities, premature baby care, respiratory support, neonatal monitoring, and emergency childcare services for critically ill newborns. ",
  },
  {
    question: "How can I book an appointment at the Sudha Mother and Child Care Centre?  ",
    answer: "Appointments at Sudha Multispeciality Hospital can be booked through the official website using the Book Appointment option, via the dedicated helpline at 0424 351 4545, or by visiting the hospital directly. The process is designed to be simple and accessible for families.  ",
  },


];

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const TickCircle = () => (
  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white-100">
    <svg
      className="w-6 h-4 text-[#2B3990]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

function MotherandChildcare() {
  const sectionRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(0); // open first by default
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // when element enters and exits viewport
  });

  const [openModal, setOpenModal] = useState(false);

  console.log("openModal", openModal);
  const [isOpen, setIsOpen] = useState(false);


     const [formData, setFormData] = useState({
    date: "",
    name: "",
    mobile: "",
    email: "",
    department: "",
    doctor: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});

  // Department → Doctors mapping
  const doctorsList = {

    Anaesthesiology: ["Dr.Kumaravel Pandiyan","Dr.P.Nithiyanandhan","Dr.V.Amutha","Dr.Balaji Mani","Dr.Aarthi Sasivarnan","Dr.V.Sountharajan"],
    BariatricMetabolic: ["Dr.S.Balamurugan"],
    Cardiology: ["Dr.N.Rajasekar","Dr.D.Kandaswamy","Dr.K.Sudhakar"],
    CardiothoracicSurgery: ["Dr.Minnathulla"],
    Dentistry: ["Dr.A.Aafia Parveen","Dr.Sharath Ashokan"],
    Dermatology: ["Dr.M.Chakravarthi"],
    DMO: ["Dr.C.Senthur Raj","Dr.K.E.Sakthi Saravanan","Dr.K.V.Lakshmanan","Dr.V.Kamall","Dr.A.Krishna kumar","Dr.D.Thriuvenkata Lakshmanan"],
    ENT: ["Dr.M.P.Kavin Kumar"],
    FetalMedicine: ["Dr.Sathiya Lakshmi"],
    GeneralMedicine: ["Dr.K.Sudhakar","Dr.S.N.Ganesha Moorthy","Dr.G.Sathish Kumar"],
    Gynecology: ["Dr.P.Vanitha","Dr.Deepika","Dr.S.Pradeepa","Dr.S.Dhanabagyam"],
    Nephrology: ["Dr.V.Nagendran"],
    Neurology: ["Dr.G.Vikram Raj","Dr.S.Mohan"],
    NuclearMedicine: ["Dr.Prathap"],
    Oncology: ["Dr.J.Sugeshwaran"],
    Orthopedic : ["Dr.K.Attiyanan","Dr.T.Janarthanan"],
    Pediatrics: ["Dr.S.Rangesh","Dr.N.Gowrishankar"],
    Pathology: ["Dr.R.Renuga"],
    PlasticSurgery: ["Dr.Gnanasekaran"],
    Psychiatry: ["Dr.S.Anand"],
    Pulmonology: ["Dr.P.Duraikannan"],
    Radiology: ["Dr.Subhashree Ramasamy","Dr.M.Thirunavukarasu"],
    Urology: ["Dr.M.Gopinath"],
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.date) newErrors.date = "Preferred date is required";
    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.doctor) newErrors.doctor = "Doctor is required";
    if (!formData.remarks) newErrors.remarks = "Remarks are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const form = new FormData();
      form.append("date", formData.date);
      form.append("name", formData.name);
      form.append("mobile", formData.mobile);
      form.append("email", formData.email);
      form.append("department", formData.department);
      form.append("doctor", formData.doctor);
      form.append("remarks", formData.remarks);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyfAqPmwT117o8qJ2U_hEaSfh9cBlB6CjHbxtGUq7EnVQM9HzfNCen_d0JWq1Et5rVB/exec",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await res.json();

      if (result.result === "success") {
        toast.success("Appointment booked successfully!");
        setFormData({
          date: "",
          name: "",
          mobile: "",
          email: "",
          department: "",
          doctor: "",
          remarks: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Error connecting to server!");
    }
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [showCount, setShowCount] = useState(5);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleViewMore = () => {
    setShowCount(faqData.length);
  };



  // Parallax movement for cloud background and bubble
  const cloudY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bubbleY = useTransform(scrollYProgress, [0, 1], [0, -80]);


  return (
    <div>
      <section
        ref={sectionRef}
        className={`${nunito.className} relative -mt-20 lg:-mt-[80px] bg-[#2A3D90] overflow-hidden`}
      >
        {/* Parallax Cloud Bottom */}
        <motion.div
          style={{ y: cloudY }}
          className="absolute bottom-12  lg:-bottom-24 w-full z-30"
        >
          <Image src={Sky} alt="sky" className="w-full h-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:py-16 pb-0 pt-16 md:mt-10 mt-24  grid md:grid-cols-2 gap-12">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center  md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className=" mb-3 text-white"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>
            <h1 className=" text-[44px] text-white font-extrabold">
              The Best Mother & Child Care
              Hospital in Erode!

            </h1>
            <p className="text-white font-nunito mb-6">
              Motherly Care for Mothers of Sudha
            </p>
            <div>
              <Link
               href="tel:+919042065454"
                className="btn-outline-white"
              >
                Book an Appointment <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>

          </motion.div>

          {/* Right Image with Parallax Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full md:max-w-md">
              <Image
                src={family}
                alt="Family"

                className="w-full  object-cover"
                priority
              />
              {/* Parallax Animated Bubble */}
              <motion.div
                style={{ y: bubbleY }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-10 -left-6 bg-purple-200 rounded-full w-50 h-50 -z-10 blur-2xl opacity-30"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`${nunito.className} `}>
        <div className="max-w-7xl mx-auto  py-8 h-full">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            {cards.map((card, idx) => (
              <motion.div key={idx} variants={item}>
                <ServiceCard
                  icon={card.icon}
                  title={card.title}
                  link={card.link}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={`${nunito.className} bg-blue-50 py-12 md:px-0 px-4`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center flex-col-reverse">
          {/* Left Section - Images and Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden ">
              <Image
                src={Mother}
                alt="Doctor and child"
                className="md:w-[85%] w-full mx-auto object-cover"
              />
            </div>

            {/* 40+ Years Box */}


            {/* Small thumbnails */}
          </motion.div>

          {/* Right Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 "
          >
            <span className=" bg-white text-[#2B3990] px-5  py-2 rounded-full text-sm font-semibold">
              About US
            </span>

            <h2 className=" text-[30px] ">
              Caring for mothers and their
              <br className="hidden sm:block" />
              little ones, the Sudha way.
            </h2>

            <ul className={`${nunito.className} space-y-3 text-gray-700 text-base sm:text-lg`}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`${nunito.className}text-primary-blue w-7 h-7 bg-white  flex justify-center items-center p-1 rounded-2xl`}>
                    <TickCircle className="min-w-5 min-h-5" />
                  </div>
                  <p className="">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="bg-white p-6 rounded-3xl ">
              <h3 className=" text-[22px] text-black">
                Maternity and paediatric emergencies handled with speed, care, and expertise.
              </h3>

              <div className="flex gap-4 items-center mt-3">
                <Link
                  href="/contact-us"
                  className=" text-primary-blue font-semibold inline-flex items-center gap-2 hover:underline"
                >
                  24/7 Emergency Care
                </Link>

                {/* Animated arrow image */}
                <motion.div
                  animate={{
                    x: [0, 5, 0], // move right and back
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                >
                  <Image src={Arrow} alt="Arrow" width={90} height={90} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className={`${nunito.className} max-w-7xl mx-auto py-16 rounded-3xl   bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url(${Background.src})`,
        }}
      >
        {/* Heading */}
        <div className=" max-w-7xl mx-auto md:px-8 px-4 text-start mb-10">
          <span className="bg-white text-[#2B3990] px-5  py-2 rounded-full text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-[30px] mt-4">
            Comprehensive Maternity Care
          </h2>
        </div>

        {/* Grid Cards */}

        <div className={`${nunito.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:px-8 px-4`}>
          {services.map((service, index) => {
            const cardContent = (
              <motion.div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl p-8 text-left transition-all duration-500 relative h-80 flex items-end overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${service.image?.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#2B3990]/90 via-[#2B3990]/60 to-transparent transition-all duration-500"
                ></div>

                {/* Icon */}
                {(service.icon || service.hoverIcon) && (
                  <div className="absolute top-4 left-4 z-10">
                    <Image
                      src={
                        hoverIndex === index && service.hoverIcon
                          ? service.hoverIcon
                          : service.icon
                      }
                      alt={service.title}
                      width={60}
                      height={60}
                      className="transition-all duration-300 brightness-0 invert"
                    />
                  </div>
                )}

                {/* Title */}
                <p className="absolute text-[16px] font-extrabold bottom-6 left-5 z-10 text-white">
                  {service.title}
                </p>
              </motion.div>
            );

            return service.link ? (
              <Link key={index} href={service.link} passHref>
                {cardContent}
              </Link>
            ) : (
              cardContent
            );
          })}
        </div>






        {/* CTA */}
        <motion.div
          className={`${nunito.className} mt-10 md:px-0 px-4 text-center text-sm sm:text-base text-black`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="bg-blue  md:px-3 px-4 py-1 rounded-full text-xs mr-2">
            Free
          </span>
          <b>Dreaming of motherhood? Get the right support.  </b>

          <button className="text-primary-blue font-semibold ml-1 underline" onClick={() => {
    window.location.href = "tel:+919042065454";
  }}>
            Book your free consultation
          </button>
          <BookAppointmentModal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />

        </motion.div>
      </section>

      <section className={`${nunito.className} md:px-0 px-4  bg-[#f3f7fc] mt-7`}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left content with animation */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white text-primary-blue px-5  py-2 rounded-full  text-sm font-semibold mb-4">
              Our Commitment
            </span>
            <h2 className="text-[30px] text-primary-blue  mb-4">
              Making Parenthood Journey as   <br />
              Joyful as It Should Be
            </h2>
            <p className="mb-4">
             As the best Mother and Child Care Hospital in Erode, we’re committed to turning your hopes into happiness with compassionate, personalised care at every step. From first scan to postnatal support, we walk with you through every stage of your journey, ensuring it’s filled with trust, comfort, and joy. 

            </p>

            {/* Accordion */}
            <div className="space-y-3">
              {ourcommitment.map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full flex justify-between font-bold items-center pb-3 border-b text-left"
                    onClick={() => toggle(index)}
                  >
                    {item.title}
                    <h3 className="text-[20px] ">
                      {openIndex === index ? (
                        <AiOutlineClose />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </h3>
                  </button>
                  {openIndex === index && (
                    <p className=" pb-4 text-[#5E566A] mt-2 ">
                      {item.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image with animation */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={Couple}
              alt="Happy Couple"
              className="w-full max-w-lg h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      <section
        className={`${nunito.className} max-w-7xl mx-auto rounded-3xl relative py-16 md:px-0 px-4 text-white`}
        style={{
          backgroundImage: `url(${Whychoicebg.src})`,
          backgroundColor: "#2B3990",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mb-10 md:px-8 px-4 text-start"
        >
          <div className="inline-block bg-white text-primary-blue px-5  py-2 rounded-full  text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-[30px]  text-white ">
            Trusted by Mothers at Every Stage   <br className="hidden sm:block" />
            of Motherhood.
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto md:px-8 px-4">
          {whychoice.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow-md h-[220px] flex flex-col"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.src}
                  className="w-full h-[220px] object-cover"
                />
              ) : (
                <div className="p-6 flex flex-col gap-3 h-full justify-center">
                  <Image src={item.icon} alt="" className="w-15 h-15" />
                  <h3 className="font-extrabold text-[22px]">{item.title}</h3>
                  <p className="text-md ">{item.desc}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className={`${nunito.className} mt-10 sm:mt-16 `}>
        <div
          className="max-w-7xl rounded-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-9 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${Background.src})` }}
        >
          {/* Left Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white text-primary-blue px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Our Achievements
            </span>

            <h2 className="text-[22px] sm:text-[30px]  mb-3 sm:mb-4">
              Driven by the trust of Mothers
              <br className="hidden sm:block" />
              Across Generations
            </h2>

            <p className="text-sm sm:text-base mb-5 sm:mb-6">
              With over four decades of dedicated experience in mother and childcare,
              Sudha has been a part of countless parenthood journeys. Every baby born
              here reflects our commitment to expert care, compassion, and safety.
            </p>

            <div className="rounded-2xl sm:rounded-3xl overflow-hidden w-full">
              <Image
                src={OurAchivementTwo}
                alt="Expecting Couple"
                className="w-full h-[220px] sm:h-[352px] object-cover rounded-2xl sm:rounded-3xl"
              />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="w-full lg:w-1/2 space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src={OurAchivementOne}
                alt="Happy Family"
                className="w-full h-[220px] sm:h-[352px] object-cover rounded-2xl sm:rounded-3xl"
              />
            </div>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-md">
              {[
                "Advanced treatments for mother and childcare ",
                "World-class equipment and infrastructure ",
                "State-of-the-art Operation Theatres and ICUs ",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-blue w-6 h-6 sm:w-7 sm:h-7 bg-white flex justify-center items-center rounded-xl sm:rounded-2xl">
                    <TickCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p>{text}</p>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "40+", label: "Year of Experience" },
                { number: "98%", label: "Patient satisfaction" },
                { number: "1L+", label: "Happy families" },
              ].map((item, i) => (
                <div key={i} className="text-start">
                  <h3 className="text-primary-blue text-[26px] md:text-[28px] ">
                    {item.number}
                  </h3>
                  <p className="text-black text-xs sm:text-sm mt-1 sm:mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      <section
        className={`${nunito.className} max-w-7xl mx-auto relative bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden mt-10 `}
        style={{
          backgroundImage: `url(${Contact_us.src})`,
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-indigo-900 bg-opacity-70"></div> */}

        <div className="relative z-10  px-6 py-12 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-8"
          >
            <div>
              <motion.h4
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm font-semibold uppercase mb-2 text-white"
              >
                Contact Us
              </motion.h4>
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[30px]  mt-1"
              >
                Let us help you in your parenthood
                <br /> journey
              </motion.h2>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-start gap-3 border-r-2 border-gray-600">
                  <PhoneIcon className="h-6 w-6 text-white flex-shrink-0" />
                  <h5 className="font-bold">Call Us:</h5>
                </div>
                <div className="mt-3 ">
                  <Link href="tel:+914242454545" className="text-[#fff] font-bold">0424-245-4545</Link>

                </div>
                <div className="mt-3 ">
                  <Link href="tel:+917670076006" className="mt-3 text-[#fff] font-bold">+91 76–7007–6006</Link>
                </div>

              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-start gap-3 border-r-2 border-gray-600">
                  <MailIcon className="h-6 w-6 text-white flex-shrink-0" />
                  <h5 className="font-semibold">E-mail Us:</h5>
                </div>
                <div className="mt-2">
                  <Link href="mailto:care@sudhahospitals.com" className="text-[#fff] font-bold">care@sudhahospitals.com</Link>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <MdLocationPin className="h-6 w-6 text-white flex-shrink-0" />
                  <h5 className="font-semibold">Visit Us:</h5>
                </div>
                <div>
                  <p className="text-[#fff]">
                    No.162, 181, Perundurai Rd,
                    <br />
                    Edayankattuvalasu, Erode, Tamil Nadu 638011
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Button + Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className=""
            >
              <button className="btn-white  flex items-center gap-2 mx-auto" onClick={() => {
    window.location.href = "tel:+919042065454";
  }}>
                Book an Appointment <ArrowUpRight className="w-5 h-5" />
              </button>
              <BookAppointmentModal
                open={openModal}
                onClose={() => setOpenModal(false)}
              />

              {/* <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                <Image src={Arrow} alt="Arrow" width={90} height={90} />
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.div
        className={`${nunito.className} py-16 md:px-0 px-4`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <motion.div variants={textVariants}>
            <span className="bg-[#fff] text-[#2A3D90] text-sm font-semibold px-3 py-2 rounded-full">
              Sudha Care
            </span>
            <h2 className="text-[30px]  text-[#2A3D90] mt-4 mb-6">
              Maternal Health Care
            </h2>
            <div className="block md:flex md:justify-between">
              <ul className="space-y-4 text-[14px] font-semibold text-[#5E566A]">
                {[
                  "Postpartum Care",
                  "Preconception Care",
                  "Gestational Diabetes",
                  "Pre-eclampsia and Hypertensive Disorders",
                  "Gestational Hypertension",
                  "Hyperemesis Gravidarum",
                  "Placenta Previa and Placental Abruption",

                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="text-primary-blue w-7 h-7 bg-white  flex justify-center items-center p-1 rounded-2xl">
                      <TickCircle className="min-w-5 min-h-5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-4 text-[15px] font-semibold text-[#5E566A]">
                {[
                  "Ectopic Pregnancy",
                  "Miscarriage",
                  "Preterm Labor and Birth",
                  "Multiple Gestations (Twins, Triplets)",
                  "Maternal Infections (e.g., Group B Streptococcus)",
                  "Maternal Anaemia",
                  "Maternal Diet",

                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="text-primary-blue w-7 h-7 bg-white  flex justify-center items-center p-1 rounded-2xl">
                      <TickCircle className="min-w-5 min-h-5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>


            </div>





          </motion.div>

          {/* Right Image Section */}
          <motion.div className="relative" variants={imageVariants}>
            <Image
              src={Sudhacare}
              alt="Mother and Baby"
              className="w-[100%] mx-auto h-[440px] rounded-3xl object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className={`${nunito.className} md:py-16 pt-0 md:px-0 px-4 `}>
        <div className="max-w-7xl mx-auto grid  grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={Sudhacaretwo}
              alt="Child Care"
              className="w-[100%] mx-auto h-[440px] rounded-3xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[30px]   text-[#2B3990] mt-4 mb-6">
              Paediatric Health Care
            </h2>

            <div className="block md:flex md:justify-between">
              <ul className="space-y-4 text-[15px] font-semibold text-[#5E566A]">
                {[
                  "Seasonal & Tropical Infections (Dengue, Malaria etc.)",
                  "Chronic Infections",
                  "Congenital Infections",
                  "Vaccinations",
                  "Paediatric Neurology",
                  "Paediatric Pulmonology",
                  "Paediatric Cardiology",

                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="text-primary-blue w-6 h-6 bg-white shadow-sm flex justify-center items-center p-1 rounded-2xl">
                      <TickCircle className="min-w-4 min-h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4 text-[15px] font-semibold text-[#5E566A]">
                {[
                  "Paediatric Surgery",
                  "Paediatric Diet",
                  "Paediatric Diabetes",
                  "Paediatric Thyroid",
                  "Preterm Baby Care",
                  "Jaundice Management in Newborns",
                  "Feeding & Lactation Support for Infants",
                  "Child Psychology",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="text-primary-blue w-7 h-7 bg-white shadow-sm flex justify-center items-center p-1 rounded-2xl">
                      <TickCircle className="min-w-5 min-h-5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>
      </div>

      <section className={`${nunito.className}`}>
        <div className="max-w-7xl mx-auto py-16 md:px-0 px-4">
          {/* Heading */}
          <div className="text-center">
            <div className="px-5 py-2 bg-white text-primary-blue inline-block font-semibold rounded-full ">
              <p className="text-[#2A3D90]">Our Doctors</p>
            </div>
            <h2 className="text-[30px] text-center text-[#2A3D90] mt-4 mb-6">
             Dedicated Doctors To Help You in <br/>Every Healthcare Need. 
            </h2>
          </div>

          {/* Doctors Slider */}
          <div className="relative mt-10">
            <div className="max-w-7xl mx-auto  md:px-0 px-4">
              <DoctorSlider specialty="Gynecologist"/>
            </div>

            {/* <Slider {...settings}>
              {doctorsData.map((doc) => (
                <div key={doc.id} className="px-3">
              
                  <div className="bg-white h-[500px] max-w-[300px] mx-auto rounded-2xl text-start flex flex-col overflow-hidden ">
                    
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover rounded-t-2xl"
                      />
                    </div>

                    
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-[16px] text-[#2b3990] font-bold mb-2">
                          {doc.name}
                        </h3>
                        <p className="text-[12px] mt-2">{doc.degrees}</p>
                        <p className="text-[12px] mt-2">{doc.qualification}</p>
                      </div>

                      
                      <Link
                        href={`/doctor-detail/${doc.id}`}
                        className="btn-diagonal-outline px-8 w-full mt-6 flex items-center justify-center gap-2"
                      >
                        View Profile <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider> */}
          </div>
        </div>
      </section>


      <section className={`${nunito.className}`}>
        <div>
          <div className="max-w-3xl mx-auto py-16 md:px-0 px-4">
            <h2 className="text-center text-[30px] mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqData.slice(0, showCount).map((item, index) => (
                <div
                  key={index}
                  className=" rounded-2xl bg-white  transition duration-300"
                >
                  <button
                    onClick={() => handleAccordionToggle(index)}
                    className="w-full text-left px-4 py-3 flex justify-between items-center  font-bold text-[16px]"
                  >
                    {item.question}
                    <h4 className="text-[18px]">
                      {activeAccordion === index ? "−" : "+"}
                    </h4>
                  </button>
                  {activeAccordion === index && (
                    <p className="px-4 pb-3 ">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {showCount < faqData.length && (
              <div className="text-center mt-6">
                <button
                  onClick={handleViewMore}
                  className="btn-diagonal "
                >
                  View More <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={`${nunito.className}`} id="contactus">
        <div
          className="max-w-7xl mx-auto py-8 rounded-3xl px-8"
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col md:flex-row  w-full md:py-16 py-6   justify-center md:px-0 px-4 ">
            {/* Left Image + Info */}
            <div
              className="w-full md:w-1/2 h-[500px] md:h-[600px] bg-cover bg-center rounded-3xl overflow-hidden relative md:mb-0"
              style={{ backgroundImage: `url(${Motherandchild.src})` }}
            >
              <div className="absolute inset-0 bg-[#2B3990]/60 flex flex-col justify-end p-6 text-white space-y-4">
                <div className="flex gap-2">
                  <div>
                    <h2 className="text-[20px] font-bold">Helpline Number:</h2>
                    <p className="text-sm text-[#fff] mt-3">
                      For Immediate Medical Assistance, contact our helpline number.

                    </p>
                    <Link href="tel:+914242454545" className="text-[16px] font-bold mt-4 text-[#fff]">
                      0424-245-4545
                    </Link>
                  </div>
                  <div className="border-l border-white/30 pl-4">
                    <h2 className="text-[20px] font-bold">Emergency Ambulance:</h2>
                    <p className="text-sm text-[#fff] mt-3">
                      24/7 Ambulance Services for Medical Emergencies.
                    </p>
                    <Link  href="tel:+919042065454" className="text-[16px] font-bold mt-4 text-[#fff]">
                      +91 9042-065-454
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="w-full md:w-1/2 md:pl-10 md:py-0 py-4">
              <h2 className="text-[30px]   mb-2">
                Book An Appointment
                <span className="text-[#2B3990]"> Today</span>
              </h2>
              <p className=" mb-6">
                Scheduling your visit is quick and easy—connect with our team
                today and take the first step toward personalized care.
              </p>

               <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
                >
                  <Toaster />

                  {/* Date */}
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm"
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs">{errors.date}</p>
                    )}
                  </div>

                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">Name *</label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border border-gray-200 rounded-lg px-4 h-11 py-2 text-sm"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">
                      Mobile *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      className="border border-gray-200 rounded-lg px-4 h-11 py-2 text-sm"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs">{errors.mobile}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border border-gray-200 rounded-lg px-4 h-11 py-2 text-sm"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>

                  {/* Department */}
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">
                      Department *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          department: e.target.value,
                          doctor: "",
                        })
                      }
                      className="border border-gray-200 rounded-lg px-4 h-11 text-sm"
                    >
                      <option value="">Select a department</option>
                      {Object.keys(doctorsList).map((dept) => (
                        <option key={dept}>{dept}</option>
                      ))}
                    </select>
                    {errors.department && (
                      <p className="text-red-500 text-xs">
                        {errors.department}
                      </p>
                    )}
                  </div>

                  {/* Doctor */}
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">
                      Doctor *
                    </label>
                    <select
                      value={formData.doctor}
                      onChange={(e) =>
                        setFormData({ ...formData, doctor: e.target.value })
                      }
                      disabled={!formData.department}
                      className="border border-gray-200 rounded-lg px-4 h-11 text-sm"
                    >
                      <option value="">Select a doctor</option>
                      {formData.department &&
                        doctorsList[formData.department]?.map((doc) => (
                          <option key={doc}>{doc}</option>
                        ))}
                    </select>
                    {errors.doctor && (
                      <p className="text-red-500 text-xs">{errors.doctor}</p>
                    )}
                  </div>

                  {/* Remarks */}
                  <div className="md:col-span-2 flex flex-col">
                    <label className="text-sm font-semibold mb-1">
                      Remarks *
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Enter remarks"
                      value={formData.remarks}
                      onChange={(e) =>
                        setFormData({ ...formData, remarks: e.target.value })
                      }
                      className="border border-gray-200 rounded-lg px-4 py-2 text-sm"
                    />
                    {errors.remarks && (
                      <p className="text-red-500 text-xs">{errors.remarks}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-1 mt-2">
                    <button
                      type="submit"
                      className="btn-diagonal flex items-center gap-2"
                    >
                      Book an Appointment <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default MotherandChildcare;
