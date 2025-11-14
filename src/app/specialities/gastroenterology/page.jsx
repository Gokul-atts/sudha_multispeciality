import Gastroenterology from '@/pages/Gastroenterology/Gastroenterology'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Gastroenterology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Trusted as the Best Gastroenterology Hospital in Erode with leading gastroenterologists and modern treatments for all GI conditions.",

  keywords: "Best Gastroenterologists in Erode",
};

function page() {
  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/gastroenterology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/gastroenterology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/gastroenterology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/gastroenterology/"
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
            name: "Gastroenterology",
            url: "https://sudhahospitals.com/specialities/gastroenterology/",
            description:
              "Trusted as the Best Gastroenterology Hospital in Erode with leading gastroenterologists and modern treatments for all GI conditions.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Digestive Diagnostics and Endoscopy",
              "Gastrointestinal Surgeries",
              "Stomach and Intestinal Disorders",
              "Metabolic and Bariatric Support",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Gastroenterology Consultation appointment",
            },
          }),
        }}
      />

      <Script
        id="faq-gastro-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best hospital for gastroenterology?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The best gastroenterology hospital should provide advanced diagnostics, specialized care, and treatments for all digestive system conditions, including stomach, liver, and intestinal disorders. In Erode, Sudha Multispeciality Hospital is recognized as the best gastroenterology hospital, offering expert care from some of the best gastroenterologists in Erode."
                }
              },
              {
                "@type": "Question",
                "name": "Does a gastroenterologist treat stomach problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Gastroenterologists diagnose and treat a wide range of stomach and digestive issues such as acidity, gas, bloating, ulcers, and indigestion. At Sudha Multispeciality Hospital, patients receive care from the best gastroenterologists in Erode who provide personalized treatment plans for effective relief."
                }
              },
              {
                "@type": "Question",
                "name": "What are the signs of a stomach ulcer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Common signs of a stomach ulcer include burning stomach pain, bloating, nausea, vomiting, heartburn, and loss of appetite. Sudha Multispeciality Hospital, the best gastroenterology hospital in Erode, offers advanced diagnostics and treatment to detect and manage stomach ulcers early, ensuring better outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "Is gastric trouble completely curable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Many gastric problems, including stomach gas, bloating, acidity, and indigestion, can be managed or cured with proper diagnosis, medication, and lifestyle changes. At Sudha Multispeciality Hospital, patients benefit from expert care by the best gastroenterologists in Erode, who provide comprehensive treatment for all digestive issues."
                }
              },
              {
                "@type": "Question",
                "name": "How to cure digestive and acidity problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Digestive and acidity problems can often be treated with a combination of proper diet, lifestyle modifications, and medical treatment. Avoiding spicy foods, eating smaller meals, staying hydrated, and reducing stress help improve digestion. At Sudha Multispeciality Hospital, the best gastroenterology hospital in Erode, specialists provide personalized guidance along with advanced treatment for long-term digestive health."
                }
              },
              {
                "@type": "Question",
                "name": "Which doctor should I consult for stomach ulcers and digestive problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Gastroenterologists are the specialists to consult for stomach ulcers, acidity, bloating, gas, and other digestive issues. At Sudha Multispeciality Hospital, patients can consult the best gastroenterologists in Erode who provide accurate diagnosis and effective treatment for all digestive concerns."
                }
              },
              {
                "@type": "Question",
                "name": "Can Diet and exercise help prevent gas trouble?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Lifestyle changes such as a balanced diet, regular exercise, adequate hydration, and avoiding trigger foods can significantly reduce gas, bloating, and acidity. Sudha Multispeciality Hospital, the best gastroenterology hospital in Erode, offers guidance on diet, exercise, and lifestyle changes alongside medical treatment to prevent digestive problems."
                }
              }
            ]
          })
        }}
      />


      <Script
        id="gastroenterology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Gastroenterology – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/gastroenterology",
            "description":
              "Trusted as the Best Gastroenterology Hospital in Erode with leading gastroenterologists and modern treatments for all GI conditions.",
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
                  "name": "Gastroenterology",
                  "item": "https://sudhahospitals.com/specialities/gastroenterology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Gastroenterology",
              "url": "https://sudhahospitals.com/specialities/gastroenterology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Gastroenterology"
              }
            }
          })
        }}
      />
      <Gastroenterology />
    </div>
  )
}

export default page
