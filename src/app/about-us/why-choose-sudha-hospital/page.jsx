import Whysudha from '@/pages/Whysudha/whysudha'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Why Sudha  | Sudha Multispeciality Hospital",
  description: "Discover why choose Sudha Multispecialty Hospital in Erode, offering expert doctors, advanced treatments, modern facilities, and compassionate patient care.",

  keywords: "Why Choose Sudha Multispecialty Hospital",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/about-us/why-choose-sudha-hospital/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/why-choose-sudha-hospital/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/why-choose-sudha-hospital/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/about-us/why-choose-sudha-hospital/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why choose Sudha Multispecialty Hospital Erode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Multispeciality Hospital is recognised as the best multispeciality hospital in Erode, offering advanced medical care across multiple specialties, at an affordable cost, supported by expert consultants, modern infrastructure, and a strong commitment to patient well-being.",
                },
              },
              {
                "@type": "Question",
                name: "How is Sudha Hospital Different from other Hospitals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "What sets Sudha Multispeciality Hospital apart is its combination of clinical excellence, affordable treatments, and personalised care. With specialised departments, advanced technology, and highly skilled doctors, it provides comprehensive healthcare under one roof.",
                },
              },
              {
                "@type": "Question",
                name: "How can I book an appointment at Sudha Hospitals in Erode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Appointments at Sudha Multispeciality Hospital in Erode can be booked easily through the “Book Appointment” button on the official website, by calling the helpline at 0424-2454545, or by visiting the hospital directly. The process is designed to be simple and accessible for patients’ convenience.",
                },
              },
              {
                "@type": "Question",
                name: "How do Sudha Hospitals ensure patient care and comfort?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Multispeciality Hospital focuses on patient-centred care, with personalised treatment plans, modern facilities, and dedicated support staff. Comfort is prioritised through well-equipped rooms, 24/7 assistance, and compassionate medical services.",
                },
              },
              {
                "@type": "Question",
                name: "Which hospital is accredited or certified in Erode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Multispeciality Hospital is a government-accredited hospital in Erode, recognised for maintaining the highest standards of patient safety, medical quality, and ethical healthcare practices. This accreditation highlights the hospital’s commitment to delivering reliable and trusted medical care.",
                },
              },
              {
                "@type": "Question",
                name: "Does Sudha Multispecialty Hospital have advanced facilities and technology?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Multispeciality Hospital in Erode is equipped with state-of-the-art diagnostic tools, modern surgical theatres, intensive care units, and advanced treatment technologies, ensuring precision and excellence in patient care.",
                },
              },
            ],
          }),
        }}
      />

      <Script
        id="why-choose-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Why Choose Sudha Hospital? – Sudha Multispeciality Hospital",
            "headline": "Why Choose Sudha Hospital?",
            "url": "https://sudhahospitals.com/about-us/why-choose-sudha-hospital",
            "inLanguage": "en-IN",
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
                  "name": "Why Choose Sudha Hospital?",
                  "item": "https://sudhahospitals.com/about-us/why-choose-sudha-hospital"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Why Choose Sudha Hospital?",
              "url": "https://sudhahospitals.com/about-us/why-choose-sudha-hospital",
              "department": {
                "@type": "MedicalClinic",
                "name": "Why Choose Sudha Hospital?"
              }
            }
          })
        }}
      />


      <Whysudha />
    </div>
  )
}

export default page
