import Aboutus from '@/pages/about/About'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Our Growth Story | Sudha Multispeciality Hospital",
  description: "Explore Sudha Multispeciality Hospital in Erode, known for its expert medical team, advanced facilities, and dedication to compassionate healthcare.",

  keywords: "",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/about-us/our-growth-story/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/our-growth-story/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/our-growth-story/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/our-growth-story/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>

      <Script
        id="growth-story-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Growth Story – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/about-us/our-growth-story",
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
                  "name": "Our Growth Story",
                  "item": "https://sudhahospitals.com/about-us/our-growth-story"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Our Growth Story",
              "url": "https://sudhahospitals.com/about-us/our-growth-story",
              "department": {
                "@type": "MedicalClinic",
                "name": "Our Growth Story"
              }
            }
          })
        }}
      />
      <Aboutus />
    </div>
  )
}

export default page
