import Paediatrics from '@/pages/Paediatrics/paediatrics'
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Best Paediatrics Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Best Paediatric Hospital in Erode with expert paediatricians and child specialists providing advanced care for children of all ages.",

  keywords: "Best Pediatric Hospital in Erode, Best Pediatrician in Erode, Best child specialist in Erode",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/paediatrics/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/paediatrics/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/paediatrics/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/paediatrics/"
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
            name: "Paediatrics",
            url: "https://sudhahospitals.com/specialities/paediatrics/",
            description:
              "Best Paediatric Hospital in Erode with expert paediatricians and child specialists providing advanced care for children of all ages",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Paediatric Emergency & Intensive Care",
              "Inpatient Paediatric Care",
              "Paediatric Cardiology",
              "Diagnostic & Supportive Services",
              "Preventive & Developmental Care",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Paediatrics Consultation appointment",
            },
          }),
        }}
      />
      <Script
        id="faq-pediatrics-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is the Best Pediatrician in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Multispeciality Hospital is equipped with the team of the best paediatricians in Erode offering expert care for children across all age groups. The hospital provides comprehensive evaluations, preventive care, and treatment for a wide range of paediatric conditions."
                }
              },
              {
                "@type": "Question",
                "name": "What is the maximum age to see a pediatrician?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Paediatric care typically covers children from birth up to 18 years of age. Sudha Multispeciality Hospital, recognised as the best paediatrics hospital in Erode, provides expert guidance and treatment throughout this period to ensure healthy growth and development."
                }
              },
              {
                "@type": "Question",
                "name": "What are the common health problems of children?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common health issues in children include respiratory infections, nutritional deficiencies, allergies, skin problems, and developmental concerns. The best child specialists in Erode at Sudha Multispeciality Hospital offer accurate diagnosis and effective treatment for these conditions at an affordable price."
                }
              },
              {
                "@type": "Question",
                "name": "What are the best ways to improve child health?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Child health can be improved through balanced nutrition, regular physical activity, adequate sleep, timely vaccinations, and routine health check-ups. At Sudha Multispeciality Hospital, the best paediatricians in Erode provide personalised care plans to promote overall well-being."
                }
              },
              {
                "@type": "Question",
                "name": "How can health problems be prevented in children?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Preventive care includes vaccinations, hygiene practices, routine screenings, proper nutrition, and parental education. Sudha Multispeciality Hospital, recognised as the best paediatrics hospital in Erode, focuses on preventive strategies to ensure long-term health for children."
                }
              }
            ]
          })
        }}
      />

      <Script
        id="paediatrics-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Paediatrics – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/paediatrics",
            "description":
              "Best Paediatric Hospital in Erode with expert paediatricians and child specialists providing advanced care for children of all ages",
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
                  "name": "Paediatrics",
                  "item": "https://sudhahospitals.com/specialities/paediatrics"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Paediatrics",
              "url": "https://sudhahospitals.com/specialities/paediatrics",
              "department": {
                "@type": "MedicalClinic",
                "name": "Paediatrics"
              }
            }
          })
        }}
      />
      <Paediatrics />
    </div>
  )
}

export default page
