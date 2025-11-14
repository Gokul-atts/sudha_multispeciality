import Radiology from '@/pages/Radiology/Radiology'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Radiology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Best Radiology Hospital in Erode offering accurate diagnosis, world-class imaging facilities, and expert radiologists for complete care.",

  keywords: "Best Radiology Hospital in Erode",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/radiology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/radiology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/radiology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/radiology/"
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
            name: "Radiology",
            url: "https://sudhahospitals.com/specialities/radiology/",
            description:
              "Best Radiology Hospital in Erode offering accurate diagnosis, world-class imaging facilities, and expert radiologists for complete care.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Diagnostic Imaging",
              "Emergency and Bedside Imaging",
              "Interventional Radiology Support",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Radiology Consultation appointment",
            },
          }),
        }}
      />

      <Script
        id="radiology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Radiology – Sudha Multispeciality Hospital",
            "headline": "Best Radiology Hospital in Erode",
            "url": "https://sudhahospitals.com/specialities/radiology",
            "inLanguage": "en-IN",
            "description":
              "Best Radiology Hospital in Erode offering accurate diagnosis, world-class imaging facilities, and expert radiologists for complete care.",
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
                  "name": "Radiology",
                  "item": "https://sudhahospitals.com/specialities/radiology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Radiology",
              "url": "https://sudhahospitals.com/specialities/radiology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Radiology"
              }
            }
          })
        }}
      />
      <Radiology />
    </div>
  )
}

export default page
