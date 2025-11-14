import Nursing from '@/pages/nursingservices/nursingservices';
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Nursing Services | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality Hospital in Erode offers professional nursing services, providing compassionate, round-the-clock care for patients of all ages.",

  keywords: "",
};




const Page = () => {


  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/allied-health-services/nursing-services/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/allied-health-services/nursing-services/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/allied-health-services/nursing-services/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/allied-health-services/nursing-services/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>


      <Script
        id="nursing-services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Nursing Services – Sudha Multispeciality Hospital",
            "headline": "Nursing Services – Allied Health Services",
            "url": "https://sudhahospitals.com/allied-health-services/nursing-services",
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
                  "name": "Nursing Services",
                  "item":
                    "https://sudhahospitals.com/allied-health-services/nursing-services"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Nursing Services",
              "url": "https://sudhahospitals.com/allied-health-services/nursing-services",
              "department": {
                "@type": "MedicalClinic",
                "name": "Nursing Services"
              }
            }
          })
        }}
      />
      <Nursing />
    </div>
  );
}

export default Page;
