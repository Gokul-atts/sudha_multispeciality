import Ourgrowth from "../assets/home/header/growth-story.webp";
import Boarddirectors from "../assets/home/header/board-of-directors.webp";
import AboutUs from "../assets/home/header/hover1.png";
import Awards from "../assets/home/header/awards.webp";
import Infracstructure from "../assets/home/header/infracstructure.webp";
import Whysudha from "../assets/home/header/why-sudha.webp";

import Two from "../assets/home/header/two.png";
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
export const links = [
  {
    label: "Home",
    hrefs: "/",
  },
  {
    label: "About Us",
    hrefs: "/our-growth-story",
    type: "aboutus",
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
        header: "Board of Trustees",
        hrefs: "/board-of-trustees",
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
        header: "Paediatrics & Neonatology",
        image: s21,
        // hoverImage: AboutUs,
        hrefs: "/paediatrics-and-neonatology",
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

    ],
  },




  {
    label: "Facilities",
    hrefs: "/kids",
    type:"facilities",
    navImage: "/kids-snowboarding.jpg",
    caption: "Kids Snowboarding",
    subLinks: [
      {
        header: "Insurance",
        hrefs: "/insurance",
        image: AboutUs,
        hoverImage: AboutUs,
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
        image: Two,
        hoverImage: Two,
        subMenu: [
          {
            label: "ambulance",
            dec: "Emergency ambulance service, always ready to respond.",
          },
        ],
      },
      {
        header: "Pharmarcy",
        hrefs: "/pharmacy-services",
        subMenu: [
          {
            label: "Pharmarcy",
            dec: "Accessible in-house pharmacy for complete medical support.",
          },
        ],
      },
      {
        header: "Laboratory",
        hrefs: "/laboratory-services",
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
        subMenu: [
          {
            label: "Renal Transplant",
            dec: "Safe, timely blood services for critical care.",
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
    hrefs: "/kids",
    type:"academics",
    navImage: "/kids-snowboarding.jpg",
    caption: "Kids Snowboarding",
    subLinks: [
      // {
      //   header: "Alied Health Science",
      //   hrefs: "/insurance",
      //   image: AboutUs,
      //   hoverImage: AboutUs,
      //   subMenu: [
      //     {
      //       label: "Our Growth Story",
      //       dec: "Building skilled professionals for supportive healthcare services.",
      //     },
      //   ],
      // },
      {
        header: "Fellow of National Board (FNB) ",
        hrefs: "/fellow-of-national-board",
        image: Two,
        hoverImage: Two,
        subMenu: [
          {
            label: "Fellow of National Board (FNB) ",
            dec: "Advanced fellowship training for clinical career excellence.",
          },
        ],
      },
      {
        header: "Post MBBS Diploma Courses (DNB)",
        hrefs: "/pharmarcy",
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
    hrefs: "/kids",
    type:"academics",
    navImage: "/kids-snowboarding.jpg",
    caption: "Kids Snowboarding",
    subLinks: [
      {
        header: "Alied Health Service",
        hrefs: "/insurance",
        image: AboutUs,
        hoverImage: AboutUs,
        subMenu: [
          {
            label: "Our Growth Story",
            dec: "Essential clinical support improving treatment and recovery",
          },
        ],
      },
      {
        header: "Our Blogs ",
        hrefs: "/fellow-of-national-board",
        image: Two,
        hoverImage: Two,
        subMenu: [
          {
            label: "Fellow of National Board (FNB) ",
            dec: "Trusted hands delivering compassionate, expert patient care",
          },
        ],
      },
    
      {
        header: "Biomedical Report",
        hrefs: "/pharmarcy",
        subMenu: [
          {
            label: "Post MBBS Diploma Courses (DNB )",
            dec: "Detailed biomedical report ensuring hospital safety standards",
          },
        ],
      },
        {
        header: "Contact Us",
        hrefs: "/contact-us",
        subMenu: [
          {
            label: "Post MBBS Diploma Courses (DNB )",
            dec: "Advancing medical knowledge through focused clinical exploration",
          },
        ],
      },
             {
        header: "Our Doctors",
        hrefs: "/",
        subMenu: [
          {
            label: "Post MBBS Diploma Courses (DNB )",
            dec: "Advancing medical knowledge through focused clinical exploration",
          },
        ],
      },
    ],
  },



  // {
  //   label: "Facilities",
  //   hrefs: "/resorts",
  //   subLinks: [
  //     {
  //       subImages: [
  //         {
  //           label: "Bear Mountain",
  //           hrefs: "/",
  //           image: "/bear-mountain.jpg",
  //         },
  //         {
  //           label: "Lion's Peak",
  //           hrefs: "/",
  //           image: "/lions-peak.jpg",
  //         },
  //         {
  //           label: "Copper Mountain",
  //           hrefs: "/",
  //           image: "/copper-mountain.jpg",
  //         },
  //         {
  //           label: "Fallen Valley",
  //           hrefs: "/",
  //           image: "/fallen-valley.jpg",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
