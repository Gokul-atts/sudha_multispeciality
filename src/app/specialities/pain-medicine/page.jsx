import Painmedicine from '@/pages/Painmedicine/Painmedicine'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Hospital in Erode for Pain Medicine | Sudha Multispeciality Hospital",
  description: "As the Best Hospital in Erode for Pain Medicine, Sudha Multispeciality provides expert care, modern therapies, and effective pain relief.",

  keywords: "",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/pain-medicine/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/pain-medicine/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/pain-medicine/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/pain-medicine/"
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
            name: "Pain Medicine",
            url: "https://sudhahospitals.com/specialities/pain-medicine/",
            description:
              "As the Best Hospital in Erode for Pain Medicine, Sudha Multispeciality provides expert care, modern therapies, and effective pain relief.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Chronic Back & Neck Pain Management",
              "Neuropathic Pain Treatments",
              "Joint & Arthritis Pain",
              "Cancer Pain Management",
              "Post-operative and Injury-Related Pain",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book an appointment",
            },
          }),
        }}
      />

      <Script
        id="pain-medicine-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pain Medicine – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/pain-medicine",
            "description":
              "As the Best Hospital in Erode for Pain Medicine, Sudha Multispeciality provides expert care, modern therapies, and effective pain relief.",
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
                  "name": "Pain Medicine",
                  "item": "https://sudhahospitals.com/specialities/pain-medicine"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Pain Medicine",
              "url": "https://sudhahospitals.com/specialities/pain-medicine",
              "department": {
                "@type": "MedicalClinic",
                "name": "Pain Medicine"
              }
            }
          })
        }}
      />
      <Painmedicine />
    </div>
  )
}

export default page
