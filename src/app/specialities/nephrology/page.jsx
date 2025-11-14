import Nephrology from '@/pages/Nephrology/Nephrology'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Nephrology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Best Nephrology Hospital in Erode offering expert nephrologists, advanced kidney treatments, and comprehensive care for all renal conditions.",

  keywords: "Best hospital for Kidney Treatment in Erode, - Best Nephrologist in Erode, Best Hospital for Nephrology in Erode",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/nephrology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/nephrology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/nephrology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/nephrology/"
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
            name: "Nephrology",
            url: "https://sudhahospitals.com/specialities/nephrology/",
            description:
              "Best Nephrology Hospital in Erode offering expert nephrologists, advanced kidney treatments, and comprehensive care for all renal conditions.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Core Nephrology & Kidney Disease Management",
              "Dialysis Services",
              "Advanced Therapeutic Procedures",
              "Renal Support & Patient Education",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Nephrology Consultation appointment",
            },
          }),
        }}
      />



      <Script
        id="faq-nephrology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which hospital is best for treating kidney disease?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Multispeciality Hospital is known as the best hospital for kidney treatment in Erode, providing advanced nephrology care led by the best nephrologist in Erode. We offer the world-class treatments at an affordable price in Erode."
                }
              },
              {
                "@type": "Question",
                "name": "What does stage 3 kidney disease mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Stage 3 kidney disease indicates a moderate decline in kidney function, where the kidneys are not filtering waste effectively. At this stage, timely treatment at the best hospital for nephrology in Erode helps manage symptoms and prevent further progression. Sudha Multispeciality Hospital offers advanced treatments for kidney with the best nephrologists in Erode."
                }
              },
              {
                "@type": "Question",
                "name": "How can kidney function be improved?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kidney function can be improved and maintained through lifestyle changes such as controlling diabetes, managing blood pressure, eating a balanced diet, and staying hydrated. Regular monitoring can help you identify the underlying medical conditions. Consult the best nephrologists in Erode at Sudha Multispeciality Hospital."
                }
              },
              {
                "@type": "Question",
                "name": "What are the early signs of kidney disease?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Early signs of kidney disease include swelling in legs, ankles, or face; frequent urination or foamy urine; blood in urine; poor appetite; and muscle cramping. It is important to consult a specialist immediately when noticing these symptoms. Consult the best doctors for kidney health in Erode at Sudha Multispeciality Hospital."
                }
              },
              {
                "@type": "Question",
                "name": "When should you consult a nephrologist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A nephrologist should be consulted in cases of persistent high blood pressure, blood in urine, swelling, or a family history of kidney disease. Sudha Multispeciality Hospital has the best nephrologist in Erode offering timely and expert care at an affordable price."
                }
              },
              {
                "@type": "Question",
                "name": "Can kidney disease be cured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kidney disease can be effectively managed with early diagnosis and timely treatment. Sudha Multispeciality Hospital, the best hospital for kidney treatment in Erode, provides advanced treatments and therapies to better the kidney health."
                }
              },
              {
                "@type": "Question",
                "name": "When is kidney surgery necessary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kidney surgery is necessary in conditions such as severe kidney stones, tumours, or advanced damage that cannot be managed with medications alone. With skilled surgeons and best nephrologists in Erode, Sudha Multispeciality Hospital offers expert surgical care with high success rates."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="nephrology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Nephrology – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/nephrology",
            "description":
              "Best Nephrology Hospital in Erode offering expert nephrologists, advanced kidney treatments, and comprehensive care for all renal conditions.",
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
                  "name": "Nephrology",
                  "item": "https://sudhahospitals.com/specialities/nephrology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Nephrology",
              "url": "https://sudhahospitals.com/specialities/nephrology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Nephrology"
              }
            }
          })
        }}
      />
      <Nephrology />
    </div>
  )
}

export default page
