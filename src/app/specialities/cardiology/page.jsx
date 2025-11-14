import Cardiology from '@/pages/cardiology/Cardiology'
import React from 'react'
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Cardiology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality Hospital is recognized as the best cardiology hospital in Erode, offering quality heart care with advanced technologies for over 40 years.",

  keywords: "Best cardiology hospital in Erode, best heart care hospital in Erode, Best Heart specialist in Erode, Best Treatment for Heart and related issues in Erode, Best Hospital in Erode for Heart Treatment",
};



function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/cardiology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/cardiology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/cardiology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/cardiology/"
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
            name: "Cardiology",
            url: "https://sudhahospitals.com/specialities/cardiology/",
            description:
              "Sudha Multispeciality Hospital is recognized as the best cardiology hospital in Erode, offering quality heart care with advanced technologies for over 40 years.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Adult Cardiology",
              "Paediatric Cardiology",
              "Interventional Cardiology",
              "Non-Invasive Cardiology",
              "Electrophysiology",
              "Cardiac Rehabilitation",
              "Preventive Cardiology",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a cardiology consultation appointment",
            },
          }),
        }}
      />
      <Script
        id="faq-heart-care-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the Best Heart specialist Hospital in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The best heart specialist hospital should have advanced technology, experienced cardiologists, and comprehensive emergency care to handle critical cases. In Erode, Sudha Multispeciality Hospital is recognized as the best cardiology hospital, trusted for providing world-class cardiac care. With its reputation as the best heart care hospital in Erode, Sudha ensures accurate diagnosis and the best treatment for heart and related issues."
                }
              },
              {
                "@type": "Question",
                "name": "When to see a heart doctor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "You should see a heart doctor if you experience chest pain, irregular heartbeat, shortness of breath, dizziness, or unexplained fatigue. People with diabetes, high cholesterol, obesity, or a family history of heart disease should also undergo regular check-ups. At Sudha Multispeciality Hospital, the best hospital in Erode for heart treatment, expert cardiologists offer timely diagnosis and the best heart care for long-term wellness."
                }
              },
              {
                "@type": "Question",
                "name": "How can I improve my heart health quickly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Quick ways to improve heart health include eating a balanced diet, exercising regularly, reducing stress, and avoiding smoking or alcohol. Regular monitoring is also essential to track heart performance. At Sudha Multispeciality Hospital, the best cardiology hospital in Erode, patients are guided by the best heart specialists to adopt healthy habits while receiving advanced treatment for heart and related issues."
                }
              },
              {
                "@type": "Question",
                "name": "How can I prevent heart attacks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Heart attack prevention relies on lifestyle changes such as controlling blood pressure, managing diabetes, exercising, and following a heart-healthy diet. Regular screenings help detect risks early and prevent complications. Sudha Multispeciality Hospital, known as the best heart care hospital in Erode, offers preventive cardiology programs and advanced treatment, making it the best hospital in Erode for heart treatment."
                }
              },
              {
                "@type": "Question",
                "name": "Can heart diseases be cured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Some heart diseases can be managed or reversed with lifestyle changes and modern treatments, while others may need lifelong care. Medical advancements such as angioplasty, bypass surgery, and valve repair help patients live longer and healthier lives. At Sudha Multispeciality Hospital, the best cardiology hospital in Erode, patients receive world-class care from the best heart specialists, ensuring the best treatment for heart and related issues."
                }
              },
              {
                "@type": "Question",
                "name": "What is a normal heart rate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "For most adults, a normal resting heart rate is between 60 and 100 beats per minute, though athletes may have a lower rate. If your heart rate is consistently outside this range, medical consultation is advised. Sudha Multispeciality Hospital, the best heart care hospital in Erode, provides expert evaluation and treatment by the best heart specialists in Erode."
                }
              },
              {
                "@type": "Question",
                "name": "What is the normal BP for heart patients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "A normal blood pressure for heart patients is usually around 120/80 mmHg, though the exact target may differ based on individual conditions. Regular monitoring helps control risks and prevent complications. At Sudha Multispeciality Hospital, the best hospital in Erode for heart treatment, cardiologists provide personalized guidance to maintain healthy blood pressure and ensure the best treatment for heart and related issues."
                }
              }
            ]
          })
        }}
      />


    

      <Script
        id="cardiology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cardiology – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/cardiology",
            "description": "Sudha Multispeciality Hospital is recognized as the best cardiology hospital in Erode, offering quality heart care with advanced technologies for over 40 years.",
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
                  "name": "Cardiology",
                  "item": "https://sudhahospitals.com/specialities/cardiology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Cardiology",
              "url": "https://sudhahospitals.com/specialities/cardiology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Cardiology"
              }
            }
          })
        }}
      />

      <Cardiology />
    </div>

  )
}

export default page
