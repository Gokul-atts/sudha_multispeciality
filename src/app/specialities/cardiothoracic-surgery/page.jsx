import Cardiothoracicsurgery from '@/pages/Cardiothoracicsurgery/Cardiothoracicsurgery'
import React from 'react'
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Hospital in Erode for Cardiothoracic Surgery | Sudha Multispeciality Hospital",
  description: "Best hospital in Erode for cardiothoracic surgery, offering advanced heart care, expert surgeons, and compassionate treatment.",

  keywords: "Best cardiology hospital in Erode, Best Cardiothoracic Treatment in Erode",
};

function page() {
  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/cardiothoracic-surgery/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/cardiothoracic-surgery/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/cardiothoracic-surgery/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/cardiothoracic-surgery/"
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
            name: "Cardiothoracic Surgery",
            url: "https://sudhahospitals.com/specialities/cardiothoracic-surgery/",
            description:
              "Sudha Multispeciality Hospital is recognized as the best cardiology hospital in Erode, offering quality heart care with advanced technologies for over 40 years.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "CABG Surgery",
              "Paediatric Heart Surgery",
              "Hybrid Aortic Surgery",
              "Valve Repair Surgery",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description:
                "Book a cardiothoracic surgery consultation appointment",
            },
          }),
        }}
      />
      <Script
        id="cardiothoracic-surgery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cardiothoracic Surgery – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/cardiothoracic-surgery",
            "description": "Best hospital in Erode for cardiothoracic surgery, offering advanced heart care, expert surgeons, and compassionate treatment.",
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
                  "name": "Cardiothoracic Surgery",
                  "item": "https://sudhahospitals.com/specialities/cardiothoracic-surgery"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Cardiothoracic Surgery",
              "url": "https://sudhahospitals.com/specialities/cardiothoracic-surgery",
              "department": {
                "@type": "MedicalClinic",
                "name": "Cardiothoracic Surgery"
              }
            }
          })
        }}
      />

      <Cardiothoracicsurgery />
    </div>
  )
}

export default page
