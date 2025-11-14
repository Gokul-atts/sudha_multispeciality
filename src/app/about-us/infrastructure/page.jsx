import Gallery from '@/pages/gallery/Gallery'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Infrastructure  | Sudha Multispeciality Hospital",
  description: "Explore Sudha Multispeciality Hospital’s advanced infrastructure in Erode, featuring modern equipment, world-class facilities, and patient-focused design.",

  keywords: "Which Hospital has Modern Lab Facility, Affordable Cost for Tests and Scannings in Erode, Worldclass Labs and Equipments in Erode",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/about-us/infrastructure/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/infrastructure/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/infrastructure/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/infrastructure/"
      hreflang="x-default"
    />
  </Head>



  return (
    <div>
      <Script
        id="infrastructure-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Infrastructure – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/about-us/infrastructure",
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
                  "name": "Infrastructure",
                  "item": "https://sudhahospitals.com/about-us/infrastructure"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Infrastructure",
              "url": "https://sudhahospitals.com/about-us/infrastructure",
              "department": {
                "@type": "MedicalClinic",
                "name": "Infrastructure"
              }
            }
          })
        }}
      />
      <Gallery />
    </div>
  )
}

export default page
