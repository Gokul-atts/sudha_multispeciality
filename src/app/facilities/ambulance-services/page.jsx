import Ambulanceservice from '@/pages/Ambulanceservice/Ambulanceservice'
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Best Ambulance Services in Erode | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality provides the Best Ambulance Services in Erode with expert staff, 24/7 response, and advanced emergency support.",

  keywords: "Best Ambulance Services in Erode",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/facilities/ambulance-services/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/ambulance-services/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/ambulance-services/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/ambulance-services/"
      hreflang="x-default"
    />
  </Head>


  return (
    <div>

      <Script
        id="ambulance-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Ambulance – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/facilities/ambulance-services",
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
                  "name": "Ambulance",
                  "item": "https://sudhahospitals.com/facilities/ambulance-services"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Ambulance",
              "url": "https://sudhahospitals.com/facilities/ambulance-services",
              "department": {
                "@type": "MedicalClinic",
                "name": "Ambulance"
              }
            }
          })
        }}
      />
      <Ambulanceservice />
    </div>
  )
}

export default page
