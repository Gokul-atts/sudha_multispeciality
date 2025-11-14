import Awards from '@/pages/awards/awards'
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Awards and Honors | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality Hospital in Erode has been recognized with prestigious awards and honours for excellence in healthcare, patient care, and medical innovation.",

  keywords: "",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/about-us/awards-and-honors/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/awards-and-honors/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/awards-and-honors/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/awards-and-honors/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>
      <Script
        id="awards-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Awards & Honors – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/about-us/awards-and-honors",
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
                  "name": "Awards & Honors",
                  "item": "https://sudhahospitals.com/about-us/awards-and-honors"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Awards & Honors",
              "url": "https://sudhahospitals.com/about-us/awards-and-honors",
              "department": {
                "@type": "MedicalClinic",
                "name": "Awards & Honors"
              }
            }
          })
        }}
      />

      <Awards />
    </div>
  )
}

export default page
