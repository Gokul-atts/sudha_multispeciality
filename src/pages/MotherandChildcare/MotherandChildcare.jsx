"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
import One from "@/assets/motherandchildcare/one.png";
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
import Couple from "@/assets/motherandchildcare/couple.png";
import Whychoicebg from "@/assets/motherandchildcare/whychoicebg.png";
import Whychoiceone from "@/assets/motherandchildcare/why1.jpg";
import Whychoicetwo from "@/assets/motherandchildcare/why2.jpg";
import Whychoicethree from "@/assets/motherandchildcare/why3.jpg";
import Whychoiceiconone from "@/assets/motherandchildcare/whyicon1.svg";
import Whychoiceicontwo from "@/assets/motherandchildcare/whyicon2.svg";
import Whychoiceiconthree from "@/assets/motherandchildcare/whyicon3.svg";
import OurAchivementOne from "@/assets/motherandchildcare/our_achivement_one.png";
import OurAchivementTwo from "@/assets/motherandchildcare/our_achivement_two.png";
import Contact_us from "@/assets/motherandchildcare/contact_us.png";
import Sudhacare from "@/assets/motherandchildcare/sudhacare_one.png";
import Sudhacaretwo from "@/assets/motherandchildcare/sudhacare_two.png";
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


const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700', '900'] });


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Mother & Child Care", href: "/mother-and-childcare" },
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
    link: "/op-centre",
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
    link: "/heart-care",
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
    link: "/heart-care",
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
  "Expert Gynaecologists And Paediatricians Dedicated To Your Care",
  "Personalised treatment plans for every mother and child",
  "Trusted experience in handling high-risk pregnancies",
  "Compassionate counselling and emotional support during postpartum recovery",
];

const services = [
  {
    title: "Lactation & Maternal Health",
    image: One,
    icon: IconOne,
    hoverIcon: IconHoverOne,
    link: "/lactation-and-maternal-health",
  },
  {
    title: "Paediatrics",
    image: Two,
    icon: IconHoverTwo,
    hoverIcon: IconTwo,
    link: "/paediatrics",
  },
  {
    title: "Gynaecology",
    image: Three,
    icon: IconHoverThree,
    hoverIcon: IconThree,
    link: "/obstetrics-and-gynaecology",
  },
  {
    title: "Health Package",
    image: Four,
    icon: IconHoverFour,
    hoverIcon: IconFour,
    link: "/health-packages",
  },
  {
    title: "Dietetics",
    image: Five,
    icon: IconHoverFive,
    hoverIcon: IconFive,
    link: "/dietetics",
  },
  {
    title: "Post-partum Care",
    image: Six,
    icon: IconHoversix,
    hoverIcon: Iconsix,
    link: "/post-partum-care",
  },
  {
    title: "Paediatric Cardiology",
    image: Seven,
    icon: IconHoverseven,
    hoverIcon: Iconseven,
    link: "/cardiology",
  },
  {
    title: "Painless Delivery",
    image: Eight,
    icon: IconHovereight,
    hoverIcon: Iconeight,
    link: "/pain-less-delivery",
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
    desc: "Comfortable and safe birthing environment designed for a smooth and healthy delivery.",
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
      "We provide emotional and medical support at every stage, making your journey easier and more joyful.",
  },
  {
    title: "Personalized Care For Every Patient",
    content:
      "Every parent is unique. We tailor our services to your specific needs with empathy and care.",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 
               right-24 lg:right-[130px]
               bottom-[-40px] md:bottom-[-10px] text-[#2B3990] 
               border border-[#2B3990]
               hover:bg-[#2B3990] hover:text-white 
               p-2 rounded-full"
  >
    <ChevronLeft className="w-4 h-4" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 
               right-14 lg:right-[40px]
               bottom-[-40px] md:bottom-[-10px]
               border border-white bg-[#2B3990] 
               hover:bg-[#1f2e6e] text-white 
               p-2 rounded-full"
  >
    <ChevronRight className="w-4 h-4" />
  </button>
);

const faqData = [
  {
    question: "What is the eligibility for the course?",
    answer: "Answer coming soon...",
  },
  {
    question: "How do I apply for the course?",
    answer: "Answer coming soon...",
  },
  { question: "Is there a registration fee?", answer: "Answer coming soon..." },
  {
    question: "Can I get a refund if I cancel?",
    answer: "Answer coming soon...",
  },
  {
    question: "Are there any placement opportunities?",
    answer: "Answer coming soon...",
  },
  {
    question: "What is the duration of the course?",
    answer: "Answer coming soon...",
  },
  { question: "Is attendance mandatory?", answer: "Answer coming soon..." },
  { question: "Is attendance mandatory?", answer: "Answer coming soon..." },
  { question: "Is attendance mandatory?", answer: "Answer coming soon..." },
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // default for desktop
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className={`${nunito.className} relative -mt-20 lg:-mt-[80px] bg-[#2A3D90] overflow-hidden`}
      >
        {/* Parallax Cloud Bottom */}
        <motion.div
          style={{ y: cloudY }}
          className="absolute bottom-11  lg:-bottom-16 w-full z-30"
        >
          <Image src={Sky} alt="sky" className="w-full h-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 mt-10 lg:mt-0 sm:py-28 grid md:grid-cols-2 gap-12">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center text-center md:text-left"
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
              Caring for mothers
              and their little ones, the <br></br>
              Sudha way.
            </h1>
            <p className="text-white font-nunito mb-6">
              Motherly Care for Mothers of Sudha
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" btn-sidebar inline-flex items-center whitespace-nowrap justify-center w-64 bg-white text-[#2C3790] px-6 py-3 rounded-full font-semibold text-sm transition mx-auto md:mx-0"
            >
              Book an Appointment <ArrowUpRight className="ml-2" />
            </motion.button>

          </motion.div>

          {/* Right Image with Parallax Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[90%] md:w-full max-w-md">
              <Image
                src={family}
                alt="Family"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
              {/* Parallax Animated Bubble */}
              <motion.div
                style={{ y: bubbleY }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-purple-200 rounded-full w-48 h-48 -z-10 blur-2xl opacity-30"
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

      <section className={`${nunito.className} bg-blue-50 py-12 px-4 sm:px-6 lg:px-16`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Section - Images and Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden ">
              <Image
                src={Mother}
                alt="Doctor and child"
                className="w-[85%] mx-auto object-cover"
              />
            </div>

            {/* 40+ Years Box */}
            <div className="absolute top-52 left-0 bg-white text-blue-700 text-sm font-bold p-6 rounded-2xl ">
              <p className="text-[30px] text-primary-blue font-extrabold font-nunito">40+</p>
              <p className=" text-black font-nunito">
                Years of Trusted
                <br />
                Expertise in <br />
                Healthcare
              </p>
            </div>

            {/* Small thumbnails */}
          </motion.div>

          {/* Right Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className=" bg-white text-[#2B3990] px-5  py-2 rounded-full text-sm font-semibold">
              About US
            </span>

            <h2 className=" text-[30px] ">
              The Best Mother &amp; Child Care
              <br className="hidden sm:block" />
              Hospital in Erode!
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
                Maternity and paediatric emergencies handled with speed, care,
                and expertise.
              </h3>

              <div className="flex gap-4 items-center mt-3">
                <a
                  href="#"
                  className=" text-primary-blue font-semibold inline-flex items-center gap-2 hover:underline"
                >
                  24/7 For Emergencies
                </a>

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
        className={`${nunito.className} max-w-7xl mx-auto py-16 rounded-3xl  bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url(${Background.src})`,
        }}
      >
        {/* Heading */}
        <div className=" max-w-7xl mx-auto px-8 text-start mb-10">
          <span className="bg-white text-[#2B3990] px-5  py-2 rounded-full text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-[30px] mt-4">
            Comprehensive Maternity Care
          </h2>
        </div>

        {/* Grid Cards */}

        <div className={`${nunito.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8`}>
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
                className={`rounded-2xl p-8 text-left transition-all duration-500 relative h-80 flex items-end overflow-hidden cursor-pointer 
          ${hoverIndex === index && service.image ? "text-white" : "bg-white text-gray-800"}`}
                style={
                  hoverIndex === index && service.image
                    ? {
                      backgroundImage: `url(${service.image.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                    : {}
                }
              >
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
                      className="transition-all duration-300"
                    />
                  </div>
                )}

                {/* Title */}
                <p
                  className={`absolute text-[16px] font-extrabold bottom-6 left-5 z-10 text-start ${hoverIndex === index && service.image
                    ? "text-white"
                    : "bg-white text-gray-800"
                    }`}
                >
                  {service.title}
                </p>

                {/* Gradient Overlay */}
                {hoverIndex === index && service.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B3990]/90 to-transparent rounded-2xl"></div>
                )}
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
          className={`${nunito.className} mt-10 text-center text-sm sm:text-base text-black`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="bg-blue  px-3 py-1 rounded-full text-xs mr-2">
            Free
          </span>
          <b>Dreaming of motherhood? Get the right support.</b>
          <a href="#" className="text-primary-blue font-semibold ml-1 underline">
            Book a Free Consultation
          </a>
        </motion.div>
      </section>

      <section className={`${nunito.className} px-4 sm:px-6  bg-[#f3f7fc] mt-7`}>
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
              Making Parenthood Journey as <br />
              Joyful as It Should Be
            </h2>
            <p className="mb-4">
              At Sudha, we're committed to turning your hopes into happiness
              with compassionate, personalised care at every step. From first
              scan to postnatal support, we walk with you through every stage of
              your journey, ensuring it’s filled with trust, comfort, and joy.
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
                    <span className="text-xl">
                      {openIndex === index ? (
                        <AiOutlineClose />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className=" pb-4 text-[#5E566A] mt-2 text-[15px]">
                      {item.content}
                    </div>
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
              className="w-full max-w-md object-contain"
            />
          </motion.div>
        </div>
      </section>

      <section
        className={`${nunito.className} max-w-7xl mx-auto rounded-3xl relative py-16 px-4 sm:px-6 lg:px-16 text-white`}
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
          className="max-w-5xl mb-10 text-start"
        >
          <div className="inline-block bg-white text-primary-blue px-5  py-2 rounded-full  text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-[30px]  text-white ">
            Trusted by Mothers at Every Stage <br className="hidden sm:block" />
            of Motherhood
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {whychoice.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow-md h-full flex flex-col"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.src}
                  className="w-full h-full object-cover"
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

      <section className={`${nunito.className} mt-16`}>
        <div
          className="max-w-7xl rounded-3xl mx-auto py-12 px-4 sm:px-6 lg:px-9 flex flex-col lg:flex-row items-center gap-10 bg-cover bg-no-repeat"
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
            <span className="inline-block bg-white text-primary-blue px-5  py-2 rounded-full  text-sm font-semibold mb-4">
              Our Achievements
            </span>
            <h2 className=" text-[30px]  mb-4">
              Driven by the trust of Mothers <br className="hidden sm:block" />
              Across Generations
            </h2>
            <p className="  mb-6">
              With over four decades of dedicated experience in mother and
              childcare, Sudha has been a part of countless parenthood journeys.
              Every baby born here reflects our commitment to expert care,
              compassion, and safety.
            </p>
            <div className="rounded-xl overflow-hidden w-full">
              <Image
                src={OurAchivementTwo}
                alt="Expecting Couple"
                className="w-[100%] mx-auto h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden">
              <Image
                src={OurAchivementOne}
                alt="Happy Family"
                className="w-[100%] mx-auto h-auto object-cover rounded-xl"
              />
            </div>

            <ul className="space-y-4 text-md">
              {[
                "Advanced Treatments For Mother And Childcare",
                "World-class equipment and infrastructure",
                "State-of-the-art Operation Theatres and ICUs",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-blue w-7 h-7 bg-white flex justify-center items-center p-1 rounded-2xl">
                    <TickCircle className="min-w-5 min-h-5" />
                  </div>
                  <p className="">{text}</p>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "40+", label: "Year of Experience" },
                { number: "98%", label: "Patient satisfaction" },
                { number: "1K+", label: "Happy families" },
              ].map((item, i) => (
                <div key={i} className="text-start">
                  <h3 className="text-primary-blue  text-[44px]">
                    {item.number}
                  </h3>
                  <p className="text-black mt-2">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        className={`${nunito.className} max-w-7xl mx-auto relative bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden mt-10`}
        style={{
          backgroundImage: `url(${Contact_us.src})`,
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-indigo-900 bg-opacity-70"></div> */}

        <div className="relative z-10 px-6 py-12 sm:px-10 lg:px-16">
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
                <div className="mt-3">
                  <p className="text-[#fff]">+91 42–424–54545</p>
                  <p className="mt-3 text-[#fff]">+91 76–7007–6006</p>
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
                  <p className="text-[#fff]">care@sudhahospitals.com</p>
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
              className="flex gap-10 flex-wrap"
            >
              <button className="btn-sidebar mt-4 bg-white text-indigo-900 font-semibold w-[200px] h-[44px] px-6 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition whitespace-nowrap">
                Start Your Journey
                <ArrowUpRight />
              </button>

              <motion.div
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.div
        className={`${nunito.className} py-16 `}
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
            <h2 className="text-[30px]  font-bold text-[#2A3D90] mt-4 mb-6">
              Maternal Health Care
            </h2>

            <ul className="space-y-4 text-[15px] text-[#5E566A]">
              {[
                "Postpartum Care",
                "Preconception Care",
                "Gestational Diabetes",
                "Pre-eclampsia and Hypertensive Disorders",
                "Gestational Hypertension",
                "Hyperemesis Gravidarum",
                "Placenta Previa and Placental Abruption",
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
          </motion.div>

          {/* Right Image Section */}
          <motion.div className="relative" variants={imageVariants}>
            <Image
              src={Sudhacare}
              alt="Mother and Baby"
              className="w-[100%] mx-auto rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className={`${nunito.className} py-16 `}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
              className="w-[100%] mx-auto rounded-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[30px]  font-bold text-[#2B3990] mt-4 mb-6">
              Paediatric Health Care
            </h2>
            <ul className="space-y-4 text-[15px] text-[#5E566A]">
              {[
                "Seasonal & Tropical Infections (Dengue, Malaria etc.)",
                "Chronic Infections",
                "Congenital Infections",
                "Vaccinations",
                "Paediatric Neurology",
                "Paediatric Pulmonology",
                "Paediatric Cardiology",
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
          </motion.div>
        </div>
      </div>

      <section className={`${nunito.className}`}>
        <div className="max-w-7xl mx-auto py-16 ">
          <div className="text-center">
            <div className="px-5   py-2 bg-white text-primary-blue inline-block font-semibold rounded-full ">
              <p className="text-[#2A3D90]"> Sudha Care</p>

            </div>
            <h2 className="text-[30px] text-center  font-bold text-[#2A3D90] mt-4 mb-6">
              Dedicated to your fertility <br /> journey success
            </h2>
          </div>



          <div className="relative mt-10">
            <Slider {...settings}>
              {doctorsData.map((doc, index) => (
                <div
                  key={index}
                  className="w-[160px] sm:w-[160px] md:w-[180px] h-[400px]  
             rounded-xl overflow-hidden text-center relative "
                >
                  <div className="ourteamcard_imgmother">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      className="mx-auto rounded-xl mb-2 w-[90%] h-auto gap-4 "
                    />
                  </div>
                  {/* Arrow Button */}
                  <Link
                    href=""
                    className="absolute bottom-36 right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center z-30 group "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-black transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
                  </Link>
                  <h3 className="text-[16px] text-start sm:text-[16px] mt-5 font-semibold text-[#2B3990]">
                    {doc.name}
                  </h3>
                  <p className="text-[14px] text-start font-semibold text-black mt-2">
                    {doc.degrees}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className={`${nunito.className}`}>
        <div>
          <div className="max-w-3xl mx-auto py-16">
            <h2 className="text-center text-[30px] mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqData.slice(0, showCount).map((item, index) => (
                <div
                  key={index}
                  className=" rounded-xl bg-white  transition duration-300"
                >
                  <button
                    onClick={() => handleAccordionToggle(index)}
                    className="w-full text-left px-4 py-3 flex justify-between items-center  font-bold text-[16px]"
                  >
                    {item.question}
                    <span className="text-xl">
                      {activeAccordion === index ? "−" : "+"}
                    </span>
                  </button>
                  {activeAccordion === index && (
                    <div className="px-4 pb-3 text-gray-600 text-[15px]">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {showCount < faqData.length && (
              <div className="text-center mt-6">
                <button
                  onClick={handleViewMore}
                  className="btn-diagonal bg-[#2B3990] hover:bg-[#1f2c6e] text-white font-medium px-6 py-2 rounded-full transition"
                >
                  View More <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={`${nunito.className}`}>
        <div
          className="max-w-7xl mx-auto py-0 px-4 rounded-3xl"
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col md:flex-row  w-full min-h-screen items-center justify-center px-4 py-10">
            {/* Left Image + Info */}
            <div
              className="w-full md:w-1/2 h-[500px] md:h-[600px] bg-cover bg-center rounded-2xl overflow-hidden relative mb-8 md:mb-0"
              style={{ backgroundImage: `url(${Motherandchild.src})` }}
            >
              <div className="absolute inset-0 bg-[#2B3990]/60 flex flex-col justify-end p-6 text-white space-y-4">
                <div className="flex gap-2">
                  <div>
                    <h2 className="text-[22px] font-bold">Medical Emergency</h2>
                    <p className="text-sm text-[#fff] mt-3">
                      If this is an medical emergency, call our emergency
                      services
                    </p>
                    <p className="text-[16px] font-bold mt-2 text-[#fff]">
                      +91 42–424–54545
                    </p>
                  </div>
                  <div className="border-l border-white/30 pl-4">
                    <h2 className="text-[22px] font-bold">Book an Ambulance</h2>
                    <p className="text-sm text-[#fff] mt-3">
                      24/7 Emergency Ambulance Services — Fast, Safe & Reliable
                    </p>
                    <p className="text-[16px] font-bold mt-2 text-[#fff]">
                      +91 90420 65454
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="w-full md:w-1/2 md:pl-10">
              <h2 className="text-[30px]   mb-2">
                Book An Appointment
                <span className="text-[#2B3990]"> Today</span>
              </h2>
              <p className=" mb-6">
                Scheduling your visit is quick and easy—connect with our team
                today and take the first step toward personalized care.
              </p>

              <form className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="text-sm font-medium block mb-1">
                      Preferred Date*
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        className="w-full rounded-md  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <CalendarDays
                        className="absolute right-3 top-2.5 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full rounded-md  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Mobile Number*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your mobile number"
                      className="w-full rounded-md  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      E-mail*
                    </label>
                    <input
                      type="email"
                      placeholder="Enter full name"
                      className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Department*
                    </label>
                    <select className="w-full rounded-md  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select a department</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Doctor*
                    </label>
                    <select className="w-full rounded-md  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select a doctor</option>
                    </select>
                  </div>
                </div>

                {/* Remarks */}
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Remarks*
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Enter your remarks..."
                    className="w-full rounded-md  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-diagonal bg-[#2B3990] hover:bg-[#1d2971] text-white font-semibold text-sm rounded-full px-6 py-2 mt-2"
                >
                  Book an Appointment <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MotherandChildcare;
