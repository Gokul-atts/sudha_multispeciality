import Psychology from '@/pages/psychology/psychology';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Hospital in Erode for Psychology | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality Hospital, the best hospital in Erode for psychology, offers expert psychologists, personalized mental health care, and affordable treatment options.",

  keywords: "Best Multispeciality Hospital in Erode for Psychology, Best Psychologist in Erode, Cost of Treatment for Psychology",
};



const Page = () => {


  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/allied-health-services/psychology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/allied-health-services/psychology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/allied-health-services/psychology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/allied-health-services/psychology/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>


      <Script
        id="psychology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Psychology – Sudha Multispeciality Hospital",
            "headline": "Psychology – Allied Health Services",
            "url": "https://sudhahospitals.com/allied-health-services/psychology",
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
                  "name": "Psychology",
                  "item": "https://sudhahospitals.com/allied-health-services/psychology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Psychology",
              "url": "https://sudhahospitals.com/allied-health-services/psychology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Psychology",
                "medicalSpecialty": "Psychology"
              }
            }
          })
        }}
      />
      <Psychology />
    </div>
  );
}

export default Page;
