import Imaginganddiagnosticservices from '@/pages/Imaginganddiagnosticservices/Imaginganddiagnosticservices'
import React from 'react'
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Imaging and Diagnostic Services in Erode | Sudha Multispeciality Hospital",
  description: "Best Imaging & Diagnostic Services in Erode offering comprehensive scans, expert radiologists, and reliable diagnostics for all patients.",

  keywords: "",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/imaging-and-diagnostic-services/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/imaging-and-diagnostic-services/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/imaging-and-diagnostic-services/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/imaging-and-diagnostic-services/"
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
            name: "Imaging and Diagnostic Services",
            url: "https://sudhahospitals.com/specialities/imaging-and-diagnostic-services/",
            description:
              "Best Imaging & Diagnostic Services in Erode offering comprehensive scans, expert radiologists, and reliable diagnostics for all patients.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "CT scan",
              "Ultrasound 2D/3D/4D",
              "Digital X-Rays",
              "Echocardiography",
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
        id="imaging-diagnostic-services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Imaging & Diagnostic Services – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/imaging-and-diagnostic-services",
            "description":
              "Best Imaging & Diagnostic Services in Erode offering comprehensive scans, expert radiologists, and reliable diagnostics for all patients.",
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
                  "name": "Imaging & Diagnostic Services",
                  "item": "https://sudhahospitals.com/specialities/imaging-and-diagnostic-services"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Imaging & Diagnostic Services",
              "url": "https://sudhahospitals.com/specialities/imaging-and-diagnostic-services",
              "department": {
                "@type": "MedicalClinic",
                "name": "Imaging & Diagnostic Services"
              }
            }
          })
        }}
      />

      <Imaginganddiagnosticservices />
    </div>
  )
}

export default page
