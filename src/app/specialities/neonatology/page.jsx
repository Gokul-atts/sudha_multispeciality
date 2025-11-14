import Neonatology from '@/pages/neonatology/neonatology'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Neonatology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Best Neonatology Hospital in Erode offering expert care, advanced treatments, and compassionate support for newborn babies.",

  keywords: "Neonatology Hospital in Erode, Treatment for newborn babies in Erode, Best hospital for newborn baby treatment in Erode",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/neonatology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/neonatology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/neonatology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/neonatology/"
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
            name: "Neonatology",
            url: "https://sudhahospitals.com/specialities/neonatology/",
            description:
              "Best Neonatology Hospital in Erode offering expert care, advanced treatments, and compassionate support for newborn babies.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Care for Premature and Low Birth Weight Babies",
              "Management of Neonatal Respiratory Distress",
              "Treatment for Neonatal Infections",
              "Care for Congenital Anomalies and Birth Defects",
              "Feeding Support and Nutrition Management",
              "Follow-Up and Developmental Care",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Neonatology Consultation appointment",
            },
          }),
        }}
      />


      <Script
        id="faq-neonatology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the difference between a neonatologist and a pediatrician?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A paediatrician provides healthcare for children from infancy to adolescence, while a neonatologist specialises in the care of newborns, particularly those who are premature, critically ill, or require specialised treatment. Sudha Multispeciality Hospital, recognised as a leading neonatology hospital in Erode, has expert neonatologists providing advanced newborn care."
                }
              },
              {
                "@type": "Question",
                "name": "What age group does neonatology cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Neonatology primarily covers newborns from birth up to 28 days of age. Sudha Multispeciality Hospital, the best neonatology hospital in Erode, offers specialised treatment for all newborns during this critical period with the best neonatologists."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between a newborn and a neonate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A newborn refers to any baby recently born, while a neonate specifically refers to a baby within the first 28 days of life. Sudha Multispeciality Hospital provides comprehensive treatment for newborn and neonate with advanced NICU and expert neonatologists, ensuring specialised monitoring and care."
                }
              },
              {
                "@type": "Question",
                "name": "What is the life expectancy of a baby under neonatal care?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With expert care, modern NICU facilities, and early interventions, babies under neonatal care have excellent survival prospects. Sudha Multispeciality Hospital, the best hospital for newborn baby treatment in Erode, has a high success rate and maintains 24/7 monitoring and support for all neonates."
                }
              },
              {
                "@type": "Question",
                "name": "Is the NICU only for premature babies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NICU is for any newborn requiring specialised medical attention, including those with birth complications, low birth weight, infections, or congenital issues. Sudha Multispeciality Hospital, a top neonatology hospital in Erode, provides round-the-clock care in its advanced NICU."
                }
              },
              {
                "@type": "Question",
                "name": "Can a baby born at 7 months survive?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With specialised neonatal care and advanced NICU support, babies born at 7 months can survive and thrive. Sudha Multispeciality Hospital, the best neonatology hospital in Erode, offers expert treatment and continuous monitoring for premature and critically ill newborns."
                }
              },
              {
                "@type": "Question",
                "name": "How much does NICU cost per day?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NICU costs vary depending on the level of care required. At Sudha Multispeciality Hospital in Erode, the NICU provides transparent, affordable treatment options while maintaining high standards of care for newborn babies."
                }
              }
            ]
          })
        }}
      />

      <Script
        id="neonatology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Neonatology – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/neonatology",
            "description":
              "Best Neonatology Hospital in Erode offering expert care, advanced treatments, and compassionate support for newborn babies.",
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
                  "name": "Neonatology",
                  "item": "https://sudhahospitals.com/specialities/neonatology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Neonatology",
              "url": "https://sudhahospitals.com/specialities/neonatology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Neonatology"
              }
            }
          })
        }}
      />
      <Neonatology />
    </div>
  )
}

export default page
