import Plasticsurgery from '@/pages/Plasticsurgery/Plasticsurgery'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Hospital in Erode for Plastic Surgery | Sudha Multispeciality Hospital",
  description: "Best Hospital for Plastic Surgery delivering advanced cosmetic and reconstructive treatments with expert surgeons and patient-focused care.",

  keywords: "Best Hospital for Plastic Surgery, Cost of Plastic Surgery in Erode, Which Hospital Provide Plastic Surgery Treatment for Affordable Cost",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/plastic-surgery/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/plastic-surgery/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/plastic-surgery/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/plastic-surgery/"
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
            name: "Plastic Surgery",
            url: "https://sudhahospitals.com/specialities/plastic-surgery/",
            description:
              "Best Hospital for Plastic Surgery delivering advanced cosmetic and reconstructive treatments with expert surgeons and patient-focused care.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Reconstructive Surgery",
              "Cosmetic Surgery",
              "Burns Management",
              "Maxillofacial Surgery",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Plastic Surgery Consultation appointment",
            },
          }),
        }}
      />

      <Script
        id="plastic-surgery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Plastic Surgery – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/plastic-surgery",
            "description":
              "Best Hospital for Plastic Surgery delivering advanced cosmetic and reconstructive treatments with expert surgeons and patient-focused care.",
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
                  "name": "Plastic Surgery",
                  "item": "https://sudhahospitals.com/specialities/plastic-surgery"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Plastic Surgery",
              "url": "https://sudhahospitals.com/specialities/plastic-surgery",
              "department": {
                "@type": "MedicalClinic",
                "name": "Plastic Surgery"
              }
            }
          })
        }}
      />

      <Plasticsurgery />
    </div>
  )
}

export default page
