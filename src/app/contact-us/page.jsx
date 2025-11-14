
import Contactus from '@/pages/contactus'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Contact Us | Sudha Multispeciality Hospital",
  description: "Contact Sudha Multispecialty Hospital in Erode and book an appointment easily with our expert doctors for quality care and timely consultations.",

  keywords: "How to contact Sudha Multispecialty Hospital in Erode, How to get Appointment in Sudha Multispecialty Hospital in Erode",
};


function page() {

  <Head>
    {/* Canonical */}
    <link rel="canonical" href="https://sudhahospitals.com/contact-us/" />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/contact-us/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/contact-us/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/contact-us/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>

      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Contact Us – Sudha Multispeciality Hospital",
            "headline": "Contact Us",
            "url": "https://sudhahospitals.com/contact-us",
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
                  "name": "Contact Us",
                  "item": "https://sudhahospitals.com/contact-us"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Contact Us",
              "url": "https://sudhahospitals.com/contact-us",
              "department": {
                "@type": "MedicalClinic",
                "name": "Contact Us"
              }
            }
          })
        }}
      />
      <Contactus />
    </div>
  )
}

export default page
