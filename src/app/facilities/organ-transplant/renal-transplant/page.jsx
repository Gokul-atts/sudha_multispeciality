import Organtransplant from '@/pages/renaltransplant/renaltransplant'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Hospital for Renal Transplant in Erode | Sudha Multispeciality Hospital",
  description: "Best hospital for Renal and Organ Transplant in Erode delivering expert care, advanced technology, and comprehensive post-transplant support.",

  keywords: "Best hospital for Renal Transplant in Erode, Best hospital for Organ Transplant in Erode",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/facilities/renal-transplant/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/renal-transplant/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/renal-transplant/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/renal-transplant/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>


      <Script
        id="renal-transplant-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Renal Transplant – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/facilities/renal-transplant",
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
                  "name": "Renal Transplant",
                  "item": "https://sudhahospitals.com/facilities/renal-transplant"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Renal Transplant",
              "url": "https://sudhahospitals.com/facilities/renal-transplant",
              "department": {
                "@type": "MedicalClinic",
                "name": "Renal Transplant"
              }
            }
          })
        }}
      />
      <Organtransplant />
    </div>
  )
}

export default page
