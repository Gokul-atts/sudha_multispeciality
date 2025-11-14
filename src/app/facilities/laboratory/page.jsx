import Laboratory from '@/pages/Laboratory/Laboratory'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Hospital for Laboratory Facilities in Erode | Sudha Multispeciality Hospital",
  description: "Sudha Hospital Laboratory offers advanced and accurate laboratory tests and services at an affordable cost.",

  keywords: "Modern Laboratory facility in Erode, Best Laboratory Services in Erode, Laboratory Facilities at affordable cost, Sudha Hospital Laboratory",
};


function page() {


  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/facilities/laboratory/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/laboratory/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/laboratory/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/laboratory/"
      hreflang="x-default"
    />
  </Head>


  return (
    <div>


      <Script
        id="faq-schema-laboratory"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Which Hospital provides the best and most accurate laboratory services in Erode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Multispeciality Hospital is known for its modern laboratory facility in Erode. The hospital ensures accurate lab results with the support of advanced technology and trained professionals.",
                },
              },
              {
                "@type": "Question",
                name: "What are the laboratory services offered by Sudha Hospitals in Erode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Multispeciality Hospital in Erode offers a wide range of laboratory services including biochemistry, haematology, microbiology, pathology, and preventive health check-ups, all supported by advanced technology and expert staff.",
                },
              },
              {
                "@type": "Question",
                name: "What are the tests in master health checkup in Sudha Hospital Erode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The master health check-up at Sudha Multispeciality Hospital in Erode includes blood tests, urine tests, imaging scans, and other essential screenings designed to detect health issues early and promote preventive care.",
                },
              },
              {
                "@type": "Question",
                name: "Which Hospital provides affordable laboratory services in Erode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Multispeciality Hospital provides laboratory facilities at affordable cost in Erode while maintaining accuracy and high-quality standards in all its reports.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a doctor’s referral to get a laboratory test done?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "At Sudha Multispeciality Hospital in Erode, most routine laboratory tests can be done without a referral, but specialised tests may require a doctor’s advice for better evaluation.",
                },
              },
              {
                "@type": "Question",
                name: "Are emergency and 24/7 lab services available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Multispeciality Hospital in Erode provides 24/7 laboratory services, including emergency support, to ensure timely care whenever needed.",
                },
              },
              {
                "@type": "Question",
                name: "Are the laboratory tests accurate and reliable?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All laboratory tests at Sudha Multispeciality Hospital in Erode are carried out with strict quality protocols, ensuring accurate and reliable results for diagnosis and treatment.",
                },
              },
            ],
          }),
        }}
      />

      <Script
        id="laboratory-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Laboratory – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/facilities/laboratory",
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
                  "name": "Laboratory",
                  "item": "https://sudhahospitals.com/facilities/laboratory"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Laboratory",
              "url": "https://sudhahospitals.com/facilities/laboratory",
              "department": {
                "@type": "MedicalClinic",
                "name": "Laboratory"
              }
            }
          })
        }}
      />

      <Laboratory />
    </div>
  )
}

export default page
