import Ourgrowth from "../assets/home/header/growth-story.webp";
import Boarddirectors from "../assets/home/header/board-of-directors.webp";
import AboutUs from "../assets/home/header/hover1.png";
import Awards from "../assets/home/header/awards.webp";
import Infracstructure from "../assets/home/header/infracstructure.webp";
import Whysudha from "../assets/home/header/why-sudha.webp";

import Insurance from "../assets/menu/facilities/menu-insurance.webp";
import Ambulance from "../assets/menu/facilities/menu-ambulance.webp";
import Pharmacy from "../assets/menu/facilities/menu-pharmacy.webp";
import Laboratory from "../assets/menu/facilities/menu-lab.webp";
import Health from "../assets/menu/facilities/menu-health-packages.webp";
import Organ from "../assets/menu/facilities/organ-donation.webp";


import National from "../assets/menu/academics/national-board.webp";
import Diploma from "../assets/menu/academics/diploma-mbbs.webp";
import Academics from "../assets/menu/academics/academics.webp";
import Ethics from "../assets/menu/academics/academics.webp";



import Alied from "../assets/menu/resources/healthservice.webp";
import Doctor from "../assets/menu/resources/doctors.webp";
import Biomedical from "../assets/menu/resources/waste.webp";
import Blogs from "../assets/menu/resources/blog.webp";
import Contact from "../assets/menu/resources/contactus.webp";





import s1 from "../assets/home/header/specialites/s1.svg";
import s2 from "../assets/home/medical/anesthesia.svg";
import s3 from "../assets/home/medical/cardiology.svg";
import s4 from "../assets/home/medical/cardiothoracic-surgery.svg";
import s5 from "../assets/home/medical/dentistry.svg";
import s6 from "../assets/home/medical/demertology.svg";
import s7 from "../assets/home/medical/ent.svg";
import s8 from "../assets/home/medical/emergency-care.svg";
import s9 from "../assets/home/medical/gastroenterology.svg";
import s10 from "../assets/home/medical/diagnostic-radiology.svg";
import s11 from "../assets/home/medical/general-medicine.svg";
import s12 from "../assets/home/medical/surgery-room.svg";
import s13 from "../assets/home/medical/icu.svg";
import s14 from "../assets/home/medical/urogynecology.svg";
import s15 from "../assets/home/medical/orthopaedics.svg";
import s16 from "../assets/home/medical/nephrology.svg";
import s17 from "../assets/home/medical/neurology.svg";
import s18 from "../assets/home/medical/imaging.svg";
import s19 from "../assets/home/medical/pregnant.svg";
import s20 from "../assets/home/medical/pulmonology.svg";
import s21 from "../assets/home/medical/pediatrics.svg";
import s22 from "../assets/home/medical/pain-medicine.svg";
import s23 from "../assets/home/medical/plastic-surgery.svg";
import s24 from "../assets/home/medical/oncology.svg";
import s25 from "../assets/home/medical/neonatology.svg";
import s26 from "../assets/home/medical/laryngology.svg";
export const links = [
  {
    label: "Home",
    hrefs: "/",
  },
  {
    label: "About Us",
    hrefs: "/our-growth-story",
    type: "aboutus",
    imagestatic: Ourgrowth,
    caption: "Women's Snowboarding",
    subLinks: [
      {
        header: "Our Growth Story",
        hrefs: "/our-growth-story",
        image: Ourgrowth,
        hoverImage: Ourgrowth,
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Board of Management",
        hrefs: "/board-of-management",
        image: Boarddirectors,
        hoverImage: Boarddirectors,
        subMenu: [
          {
            label: "Board of Trustees",
            dec: "Visionaries behind the legacy of healthcare service",
          },
        ],
      },
      {
        header: "Awards & Honors",
        hrefs: "/awards-and-honors",
        image: Awards,
        hoverImage: Awards,
        subMenu: [
          {
            label: "Awards & Honors",
            dec: "Excellence in healthcare service for decades",
          },
        ],
      },
      {
        header: "Infrastructure",
        hrefs: "/infrastructure",
        image: Infracstructure,
        hoverImage: Infracstructure,
        subMenu: [
          {
            label: "Infrastructure",
            dec: "Cutting-edge facilities. International standards",
          },
        ],
      },
      {
        header: "Why Sudha?",
        hrefs: "/why-sudha",
        image: Whysudha,
        hoverImage: Whysudha,
        subMenu: [
          {
            label: "Why Sudha?",
            dec: "Trusted healthcare with a 40-year legacy.",
          },
        ],
      },
      {
        header: "News & Events",
        hrefs: "/news-and-events",

        image: Whysudha,
        hoverImage: Whysudha,
        subMenu: [
          {
            label: "Why Sudha?",
            dec: "Trusted healthcare with a 40-year legacy.",
          },
        ],
      },
    ],
  },

  {
    label: "Specialites",
    hrefs: "/centre-of-excellence",
    type: "specialites",
    navImage: "/kids-snowboarding.jpg",
    caption: "Kids Snowboarding",
    subLinks: [
      {
        header: "Centre of Excellence",
        image: s1,
        // hoverImage: AboutUs,
        hrefs: "/centre-of-excellence",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Anaesthesiology",
        image: s2,
        // hoverImage: AboutUs,
        hrefs: "/anaesthesiology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Cardiology",
        image: s3,
        // hoverImage: AboutUs,
        hrefs: "/cardiology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Cardiothoracic Surgery",
        image: s4,
        // hoverImage: AboutUs,
        hrefs: "/cardiothoracic-surgery",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Dentistry and Oral Surgery",
        image: s5,
        // hoverImage: AboutUs,
        hrefs: "/dentistry-and-oral-surgery",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Dermatology Aesthetics and Lasers",
        image: s6,
        // hoverImage: AboutUs,
        hrefs: "/dermatology-aesthetics-and-lasers",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "ENT",
        image: s7,
        // hoverImage: AboutUs,
        hrefs: "/ent",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Emergency Care",
        image: s8,
        // hoverImage: AboutUs,
        hrefs: "/emergency-care",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Gastroenterology",
        image: s9,
        // hoverImage: AboutUs,
        hrefs: "/gastroenterology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Radiology",
        image: s10,
        // hoverImage: AboutUs,
        hrefs: "/radiology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "General Medicine",
        image: s11,
        // hoverImage: AboutUs,
        hrefs: "/general-medicine",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "General Surgery",
        image: s12,
        // hoverImage: AboutUs,
        hrefs: "/general-surgery",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Intensive Care Unit",
        image: s13,
        // hoverImage: AboutUs,
        hrefs: "/intensive-care-unit",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Urology",
        image: s14,
        // hoverImage: AboutUs,
        hrefs: "/urology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Orthopaedics",
        image: s15,
        // hoverImage: AboutUs,
        hrefs: "/orthopaedics",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Nephrology",
        image: s16,
        // hoverImage: AboutUs,
        hrefs: "/nephrology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Neurology",
        image: s17,
        // hoverImage: AboutUs,
        hrefs: "/neurology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Imaging & Diagnostic Services",
        image: s18,
        // hoverImage: AboutUs,
        hrefs: "/imaging-and-diagnostic-services",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Obstetrics & Gynaecology",
        image: s19,
        // hoverImage: AboutUs,
        hrefs: "/obstetrics-and-gynaecology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Pulmonology",
        image: s20,
        // hoverImage: AboutUs,
        hrefs: "/pulmonology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Paediatrics",
        image: s21,
        // hoverImage: AboutUs,
        hrefs: "/paediatrics",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Neonatology",
        image: s25,
        // hoverImage: AboutUs,
        hrefs: "/neonatology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Pain Medicine",
        image: s22,
        // hoverImage: AboutUs,
        hrefs: "/pain-medicine",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Plastic Surgery",
        image: s23,
        // hoverImage: AboutUs,
        hrefs: "/plastic-surgery",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Oncology",
        image: s24,
        // hoverImage: AboutUs,
        hrefs: "https://sudhacancercentre.com/",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },
      {
        header: "Laryngology",
        image: s26,
        // hoverImage: AboutUs,
        hrefs: "/laryngology",
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Discover our mission, vision, and values.",
          },
        ],
      },

    ],
  },

  {
    label: "Facilities",
    hrefs: "/insurance",
    type: "facilities",
    navImage: "",
    caption: "Facilities",
    imagestatic: Insurance,
    subLinks: [
      {
        header: "Insurance",
        hrefs: "/insurance",
        image: Insurance,
        hoverImage: Insurance,
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Insurance assistance made easy for every patient.",
          },
        ],
      },
      {
        header: "Ambulance",
        hrefs: "/ambulance-services",
        image: Ambulance,
        hoverImage: Ambulance,
        subMenu: [
          {
            label: "ambulance",
            dec: "Emergency ambulance service, always ready to respond.",
          },
        ],
      },
      {
        header: "Pharmacy",
        hrefs: "/pharmacy-services",
        image: Pharmacy,
        hoverImage: Pharmacy,
        subMenu: [
          {
            label: "Pharmacy",
            dec: "Accessible in-house pharmacy for complete medical support.",
          },
        ],
      },
      {
        header: "Laboratory",
        hrefs: "/laboratory-services",
        image: Laboratory,
        hoverImage: Laboratory,
        subMenu: [
          {
            label: "Laboratory",
            dec: "Precise testing and reports with advanced diagnostics.",
          },
        ],
      },

      {
        header: "Health Package",
        hrefs: "/health-packages",
         image: Health,
        hoverImage: Health,
        subMenu: [
          {
            label: "Blood Centre",
            dec: "Comprehensive health packages for preventive medical care.",
          },
        ],
      },
      {
        header: "Organ Transplant",
        hrefs: "/renal-transplant",
        image: Organ,
        hoverImage: Organ,
        subMenu: [
          {
            label: "Renal Transplant",
            dec: "Restoring lives through expert transplant care.",
          },
        ],
      },
    ],
  },

  {
    label: "Mother & Child Care",
    hrefs: "/mother-and-childcare",
  },



  {
    label: "Academics",
    hrefs: "/fellow-of-national-board",
    type: "academics",
    imagestatic: Academics,
    navImage: "",
    caption: "Kids Snowboarding",
   
    subLinks: [
      
      {
        header: "Fellow of National Board (FNB) ",
        hrefs: "/fellow-national-board",
        image: National,
        hoverImage: National,
        subMenu: [
          {
            label: "Fellow of National Board (FNB) ",
            dec: "Advanced fellowship training for clinical career excellence.",
          },
        ],
      },
      {
        header: "Post MBBS Diploma Courses (DNB)",
        hrefs: "/diploma-course",
        image: Diploma,
        hoverImage: Diploma,
        subMenu: [
          {
            label: "Post MBBS Diploma Courses (DNB )",
            dec: "Postgraduate diploma programs for future medical leaders.",
          },
        ],
      },
      {
        header: " Ethics Committee",
        hrefs: "/ethics-committee",
        image: Ethics,
        hoverImage: Ethics,
        subMenu: [
          {
            label: "Ethics Committee",
            dec: "Postgraduate diploma programs for future medical leaders.",
          },
        ],
      },
      {
        header: "Vocational Degree Courses",
        hrefs: "/vocational-degree",
        image: Diploma,
        hoverImage: Diploma,
        subMenu: [
          {
            label: "Vocational Degree Courses",
            dec: "Postgraduate diploma programs for future medical leaders.",
          },
        ],
      },
      {
        header: "BSS Vocational Courses",
        hrefs: "/bss-course",
        image: Diploma,
        hoverImage: Diploma,
        subMenu: [
          {
            label: "Post MBBS Diploma Courses (DNB )",
            dec: "Postgraduate diploma programs for future medical leaders.",
          },
        ],
      },
    ],
  },


  {
    label: "Resources",
    hrefs: "/allied-health-services",
    type: "academics",
    imagestatic: Alied,
    navImage: "",
    caption: "Resources",
    subLinks: [
      {
        header: "Alied Health Service",
        hrefs: "/allied-health-services",
        image: Alied,
        hoverImage: Alied,
        subMenu: [
          {
            label: "Alied Health Service",
            dec: "Essential clinical support improving treatment and recovery",
          },
        ],
      },
      {
        header: "Find a Doctor",
        hrefs: "/doctorlist",
        image: Doctor,
        hoverImage: Doctor,
        subMenu: [
          {
            label: "Find a Doctor",
            dec: "Trusted doctors for every health concern and need.",
          },
        ],
      },
     

      {
        header: "Bio-medical Report",
        hrefs: "/bio-medical-report",
        image: Biomedical,
        hoverImage: Biomedical,
        subMenu: [
          {
            label: "Bio-medical Report",
            dec: "Trusted health insights and tips from our experts",
          },
        ],
      },
       {
        header: "Blogs ",
        hrefs: "/",
        image: Blogs,
        hoverImage: Blogs,
        subMenu: [
          {
            label: "Blogs ",
            dec: "Trusted health insights and tips from our experts.",
          },
        ],
      },
      {
        header: "Contact Us",
        hrefs: "/contact-us",
        image: Contact,
        hoverImage: Contact,
        subMenu: [
          {
            label: "Contact Us",
            dec: "Connect with us for expert care, always available",
          },
        ],
      },
      
    ],
  },

];
