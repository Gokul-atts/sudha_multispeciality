import MotherandChildcare from '@/pages/MotherandChildcare/MotherandChildcare'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Mother and Child Care Centre in Erode | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality Hospital, the best women care and mother & child care hospital in Erode, offers expert prenatal care, emergency child care, and comprehensive maternity services.",

  keywords: "Best Women Care Hospital in Erode, Best Baby care Hospital in Erode, Best Mother and Child Care Centre in Erode, Prenatal Care in Erode, Emergency Child Care Centre in Erode, Best Mother and Child Care Hospital in Erode",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/mother-and-child-care-centre/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/mother-and-child-care-centre/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/mother-and-child-care-centre/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/mother-and-child-care-centre/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>


      <Script
        id="faq-mother-child-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Mother and Child Care Hospital in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Sudha Multispeciality Hospital is recognised as the best Mother and Child Care Hospital in Erode, offering expert gynaecologists, advanced neonatal care, and dedicated facilities for women and children’s health."
                }
              },
              {
                "@type": "Question",
                "name": "When should I start prenatal care?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Prenatal care should ideally begin as soon as pregnancy is confirmed. Early care ensures regular monitoring, nutritional guidance, and the prevention of complications. Sudha Multispeciality Hospital provides trusted prenatal care in Erode with experienced specialists."
                }
              },
              {
                "@type": "Question",
                "name": "How important are vaccines for children’s health?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Vaccines are essential to protect children against life-threatening diseases and strengthen immunity. Sudha Multispeciality Hospital, the best baby care hospital in Erode, follows the recommended immunisation schedule to ensure children’s long-term health and safety."
                }
              },
              {
                "@type": "Question",
                "name": "What services are offered at a Sudha Mother and Child Care Centre?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Comprehensive services include antenatal and postnatal care, high-risk pregnancy management, advanced labour facilities, neonatal intensive care, paediatric care, and emergency childcare. Sudha Multispeciality Hospital is regarded as the best Mother and Child Care Centre in Erode for complete family care."
                }
              },
              {
                "@type": "Question",
                "name": "Why should I choose a specialized Mother and Child Care Centre?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Specialised centres provide focused care with expert obstetricians, neonatologists, and paediatricians. Sudha Multispeciality Hospital, the best women care hospital in Erode, ensures safe deliveries, holistic women’s health services, and dedicated childcare under one roof."
                }
              },
              {
                "@type": "Question",
                "name": "What neonatal services are available for newborn babies at Sudha Hospital?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Sudha Multispeciality Hospital, the best Mother and Child Care Centre in Erode, provides advanced NICU facilities, premature baby care, respiratory support, neonatal monitoring, and emergency childcare services for critically ill newborns."
                }
              },
              {
                "@type": "Question",
                "name": "How can I book an appointment at the Sudha Mother and Child Care Centre?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Appointments at Sudha Multispeciality Hospital can be booked through the official website using the 'Book Appointment' option, via the dedicated helpline at 0424 351 4545, or by visiting the hospital directly. The process is designed to be simple and accessible for families."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="mother-child-care-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Mother and Child Care – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/mother-and-child-care-centre",
            "description": "Sudha Multispeciality Hospital, the best women care and mother & child care hospital in Erode, offers expert prenatal care, emergency child care, and comprehensive maternity services.",
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
                  "name": "Mother and Child Care",
                  "item": "https://sudhahospitals.com/mother-and-child-care-centre"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Mother and Child Care",
              "url": "https://sudhahospitals.com/mother-and-child-care-centre",
              "department": {
                "@type": "MedicalClinic",
                "name": "Mother and Child Care"
              }
            }
          })
        }}
      />


      <MotherandChildcare />
    </div>
  )
}

export default page
