import LiverTransplant from '@/pages/livertransplant/livertransplant'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Hospital for Liver Transplant in Erode | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality Hospital, the best hospital for Liver Transplant and Organ Transplant in Erode, offers expert surgeons, advanced facilities, and comprehensive care.",

  keywords: "Best hospital for Liver Transplant in Erode, Best hospital for Organ Transplant in Erode",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/facilities/liver-transplant/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/liver-transplant/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/liver-transplant/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/liver-transplant/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>


      <Script
        id="faq-schema-liver-transplant"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the process of a liver transplant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A liver transplant involves replacing a damaged liver with a healthy donor liver. The process includes medical evaluation, matching with a suitable donor, surgery, and guided recovery. At Sudha Multispeciality Hospital, every step is carried out with expert care, advanced technology, and compassionate support, making it one of the best hospitals for liver transplants in Erode.",
                },
              },
              {
                "@type": "Question",
                name: "Which hospital is best for liver transplant in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Multispeciality Hospital in Erode is renowned as the best hospital for liver transplant in India, offering expert surgeons, advanced technology, ethical care, world-class treatments, high success rates, and comprehensive post-transplant support for patients across the country.",
                },
              },
              {
                "@type": "Question",
                name: "Which age is best for a liver transplant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no fixed “best” age for a liver transplant. What matters most is overall health and readiness for surgery. Children, young adults, and older patients have all benefitted from transplants at Sudha Multispeciality Hospital, where each case is carefully assessed to ensure the best possible outcome.",
                },
              },
              {
                "@type": "Question",
                name: "What is the leading indicator for liver transplant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Liver transplants are usually recommended when the liver cannot perform its functions properly. Conditions like cirrhosis or certain liver-related illnesses may be indicators. At Sudha Multispeciality Hospital, specialists use advanced diagnostic care to guide patients at the right time, ensuring they receive timely and effective treatment at the best hospital for organ transplants in Erode.",
                },
              },
              {
                "@type": "Question",
                name: "What are the signs of Fatty liver/Cirrhotic Liver?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Some common signs include tiredness, mild swelling in the abdomen, or changes in appetite. Many people may not notice symptoms until tests reveal changes. At Sudha Multispeciality Hospital, early detection and specialized care help patients manage these conditions effectively, with the option of advanced treatment at the best hospital for liver transplant in Erode if needed.",
                },
              },
              {
                "@type": "Question",
                name: "What lifestyle habits cause liver damage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Unhealthy food choices, excessive alcohol, irregular sleep patterns, and lack of exercise can gradually affect liver health. The good news is that with guidance on healthy living, most risks can be reduced. At Sudha Multispeciality Hospital, patients receive lifestyle counseling along with medical care, making it a trusted center for long-term wellness and advanced transplant care.",
                },
              },
              {
                "@type": "Question",
                name: "What is the final stage of liver failure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When the liver is unable to function fully, doctors may recommend a transplant to restore good health. With modern medical advances, patients undergoing transplants can return to active and healthy lives. Sudha Multispeciality Hospital is known for providing safe, successful outcomes, making it the best hospital for liver transplant in Erode.",
                },
              },
            ],
          }),
        }}
      />

      <Script
        id="liver-transplant-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Liver Transplant – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/facilities/liver-transplant",
            "description": "Explore Sudha Multispeciality Hospital in Erode, known for its expert medical team, advanced facilities, and dedication to compassionate healthcare.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sudhahospitals.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Facilities",
                  "item": "https://sudhahospitals.com/#facilities"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Organ Transplant",
                  "item": "https://sudhahospitals.com/facilities/organ-transplant"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Liver Transplant",
                  "item": "https://sudhahospitals.com/facilities/liver-transplant"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Liver Transplant",
              "url": "https://sudhahospitals.com/facilities/liver-transplant",
              "department": {
                "@type": "MedicalClinic",
                "name": "Liver Transplant"
              }
            }
          })
        }}
      />

      <LiverTransplant />
    </div>
  )
}

export default page
