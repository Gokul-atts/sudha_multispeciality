import Ourmanagement from '@/pages/ourmanagement/ourmanagement'
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Board of Management | Sudha Multispeciality Hospital",
  description: "Meet the Board of Management at Sudha Multispeciality Hospital in Erode, guiding the hospital with expertise, vision, and commitment to quality healthcare.",

  keywords: "",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/about-us/board-of-management/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/board-of-management/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/board-of-management/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/board-of-management/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>

 
      <Script
        id="board-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Board of Management – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/about-us/board-of-management",
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
                  "name": "About Us",
                  "item": "https://sudhahospitals.com/#about-us"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Board of Management",
                  "item": "https://sudhahospitals.com/about-us/board-of-management"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Board of Management",
              "url": "https://sudhahospitals.com/about-us/board-of-management",
              "department": {
                "@type": "MedicalClinic",
                "name": "Board of Management"
              }
            }
          })
        }}
      />

      <Ourmanagement />
    </div>
  )
}

export default page;
