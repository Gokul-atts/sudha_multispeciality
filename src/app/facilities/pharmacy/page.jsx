import Pharmacyservice from '@/pages/Pharmacyservice/Pharmacyservice'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Pharmacy | Sudha Multispeciality Hospital",
  description: "Best Pharmacy in Erode at Sudha Hospital offering trusted, affordable medicines, 24/7 availability, and expert pharmacy guidance.",

  keywords: "Best Pharmacy in Erode, Sudha Hospital Pharmacy",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/facilities/pharmacy/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/pharmacy/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/pharmacy/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/pharmacy/"
      hreflang="x-default"
    />
  </Head>


  return (
    <div>
      <Script
        id="pharmacy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pharmacy – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/facilities/pharmacy",
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
                  "name": "Pharmacy",
                  "item": "https://sudhahospitals.com/facilities/pharmacy"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Pharmacy",
              "url": "https://sudhahospitals.com/facilities/pharmacy",
              "department": {
                "@type": "MedicalClinic",
                "name": "Pharmacy"
              }
            }
          })
        }}
      />
      <Pharmacyservice />
    </div>
  )
}

export default page
