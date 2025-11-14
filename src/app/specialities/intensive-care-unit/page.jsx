import Intensivecareunit from '@/pages/Intensivecareunit/Intensivecareunit'
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Best Intensive Care Unit (ICU) in Erode | Sudha Multispeciality Hospital",
  description: "Best ICU Hospital in Erode with world-class ICU facilities, expert critical care, and affordable treatment for emergency needs.",

  keywords: "best ICU hospital in Erode, World Class ICU Facility in Erode, Cost of ICU Facility in Erode, Best Hospital for ICU, Affordable ICU Facility in Erode",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/intensive-care-unit/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/intensive-care-unit/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/intensive-care-unit/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/intensive-care-unit/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Intensive Care Unit",
            url: "https://sudhahospitals.com/specialities/intensive-care-unit/",
            description:
              "Best ICU Hospital in Erode with world-class ICU facilities, expert critical care, and affordable treatment for emergency needs.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Isolation Unit",
              "Neonatal Intensive Care Unit Paediatrics",
              "Paediatric Intensive Care Unit",
              "Cardiac Intensive Coronary care Unit",
              "Cardiothoracic Surgery Intensive Care Unit",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book an appointment",
            },
          }),
        }}
      />

      <Script
        id="faq-icu-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the highest level of intensive care?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The highest level of intensive care is provided in a fully equipped ICU with continuous monitoring, advanced life support systems, and specialised critical care staff. Sudha Multispeciality Hospital, recognised as the best ICU hospital in Erode, provides a world-class ICU facility in Erode with 24/7 expert care for critically ill patients."
                }
              },
              {
                "@type": "Question",
                "name": "Is ICU covered by insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most health insurance policies cover ICU treatment, depending on the plan and hospital. At Sudha Multispeciality Hospital, the best hospital for ICU in Erode, we assist patients in insurance claims to make ICU care accessible and stress-free."
                }
              },
              {
                "@type": "Question",
                "name": "Which hospital in Erode provides a world-class ICU facility?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Multispeciality Hospital provides a world-class ICU facility in Erode with modern monitoring equipment, ventilators, emergency care support, and a dedicated critical care team to manage serious and life-threatening conditions effectively."
                }
              },
              {
                "@type": "Question",
                "name": "What is the typical recovery period following discharge from the ICU?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Recovery after ICU depends on the severity of illness, the patient’s overall health, and the treatment received. At Sudha Multispeciality Hospital, patients are guided through post-ICU care and follow-ups to ensure smooth recovery in a safe and monitored environment."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between ICU and NCU?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ICU (Intensive Care Unit) is for critically ill patients needing constant monitoring and advanced life support. NCU (Neonatal Care Unit) is specifically for newborns requiring special care. Sudha Multispeciality Hospital, with the best ICU hospital in Erode and advanced neonatal facilities, provides specialised care for all critical patients."
                }
              }
            ]
          })
        }}
      />
      import Script from "next/script";

      <Script
        id="icu-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Intensive Care Unit – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/intensive-care-unit",
            "description":
              "Best ICU Hospital in Erode with world-class ICU facilities, expert critical care, and affordable treatment for emergency needs.",
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
                  "name": "Specialities",
                  "item": "https://sudhahospitals.com/specialities"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Intensive Care Unit",
                  "item": "https://sudhahospitals.com/specialities/intensive-care-unit"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Intensive Care Unit",
              "url": "https://sudhahospitals.com/specialities/intensive-care-unit",
              "department": {
                "@type": "MedicalClinic",
                "name": "Intensive Care Unit"
              }
            }
          })
        }}
      />

      <Intensivecareunit />
    </div>
  )
}

export default page
