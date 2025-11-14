import Pulmonology from '@/pages/Pulmonology/Pulmonology'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Pulmonology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Best Pulmonology Hospital in Erode with expert lungs specialists providing advanced care and treatments for respiratory and lung conditions.",

  keywords: "Best Pulmonologists In Erode, Pulmonology Hospital in Erode, Lungs Specialist In Erode, Best Hospital for Lung Treatment in Erode",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/pulmonology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/pulmonology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/pulmonology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/pulmonology/"
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
            name: "Pulmonology",
            url: "https://sudhahospitals.com/specialities/specialities/pulmonology/",
            description:
              "Best Pulmonology Hospital in Erode with expert lungs specialists providing advanced care and treatments for respiratory and lung conditions.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Respiratory Care",
              "Infectious Lung Care",
              "Sleep & Breathing Disorders",
              "Pulmonary Oncology & Critical Care",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Pulmonology Consultation appointment",
            },
          }),
        }}
      />
      <Script
        id="faq-pulmonology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is the best lung specialist in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Multispeciality Hospital is recognized for its expert team of pulmonologists, with some of the best lung specialists in Erode providing advanced care for a wide range of respiratory conditions. The hospital is considered a leading pulmonology hospital in Erode."
                }
              },
              {
                "@type": "Question",
                "name": "How are lung diseases treated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lung diseases are treated using a combination of medications, respiratory therapy, lifestyle interventions, and, in some cases, surgical procedures. Sudha Multispeciality Hospital, the best hospital for lung treatment in Erode, offers comprehensive treatment plans led by the best pulmonologists in Erode."
                }
              },
              {
                "@type": "Question",
                "name": "How can lung health be improved?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lung health can be improved by avoiding smoking, maintaining good air quality, regular exercise, and timely medical checkups. Sudha Multispeciality Hospital provides guidance from the best lung specialists in Erode to help strengthen respiratory health and prevent complications."
                }
              },
              {
                "@type": "Question",
                "name": "What are the early warning signs of lung disease?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Early signs of lung disease may include persistent cough, shortness of breath, wheezing, chest discomfort, and recurrent respiratory infections. Sudha Multispeciality Hospital, a leading pulmonology hospital in Erode, provides early diagnosis and treatment to prevent progression."
                }
              },
              {
                "@type": "Question",
                "name": "Is lung disease curable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Some lung conditions can be effectively treated or managed, while chronic conditions require long-term care. Sudha Multispeciality Hospital, the best hospital for lung treatment in Erode, offers advanced therapies to control symptoms and improve quality of life."
                }
              },
              {
                "@type": "Question",
                "name": "What are the symptoms of lung disease in women?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In women, lung disease may present as chronic cough, breathlessness, fatigue, chest tightness, or recurrent infections. Sudha Multispeciality Hospital, equipped with the best pulmonologists in Erode, provides comprehensive care tailored to women’s respiratory health."
                }
              },
              {
                "@type": "Question",
                "name": "Which hospital in Erode provides advanced treatment for lung disease?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Multispeciality Hospital, recognized as a leading pulmonology hospital in Erode, provides advanced treatment for lung diseases. Equipped with the best pulmonologists in Erode, the hospital offers comprehensive care and personalized treatment plans for all respiratory conditions."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="pulmonology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pulmonology – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/pulmonology",
            "description":
              "Best Pulmonology Hospital in Erode with expert lungs specialists providing advanced care and treatments for respiratory and lung conditions.",
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
                  "name": "Pulmonology",
                  "item": "https://sudhahospitals.com/specialities/pulmonology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Pulmonology",
              "url": "https://sudhahospitals.com/specialities/pulmonology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Pulmonology"
              }
            }
          })
        }}
      />
      <Pulmonology />
    </div>
  )
}

export default page
