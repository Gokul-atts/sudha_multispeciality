import Physiotherapy from '@/pages/physiotherapy/physiotherapy';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Hospital in Erode for Physiotherapy | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality Hospital is the best hospital in Erode for physiotherapy, offering advanced treatments by expert physiotherapists at affordable cost.",

  keywords: "Best Mutlispeciality Hospital for Physiotherpay, Best Physiotherapist in Erode, Cost of Physiotherpay in Erode",
};


const Page = () => {


  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/allied-health-services/physiotherapy/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/allied-health-services/physiotherapy/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/allied-health-services/physiotherapy/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/allied-health-services/physiotherapy/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>


      <Script
        id="physiotherapy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Physiotherapy – Sudha Multispeciality Hospital",
            "headline": "Physiotherapy – Allied Health Services",
            "url": "https://sudhahospitals.com/allied-health-services/physiotherapy",
            "inLanguage": "en-IN",
            "description":
              "Explore Sudha Multispeciality Hospital in Erode, known for its expert medical team, advanced facilities, and dedication to compassionate healthcare.",
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
                  "name": "Resources",
                  "item": "https://sudhahospitals.com/#resources"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Allied Health Services",
                  "item": "https://sudhahospitals.com/allied-health-services"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Physiotherapy",
                  "item": "https://sudhahospitals.com/allied-health-services/physiotherapy"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Physiotherapy",
              "url": "https://sudhahospitals.com/allied-health-services/physiotherapy",
              "department": {
                "@type": "MedicalClinic",
                "name": "Physiotherapy",
                "medicalSpecialty": "Physiotherapy"
              }
            }
          })
        }}
      />
      <Physiotherapy />
    </div>
  );
}

export default Page;
