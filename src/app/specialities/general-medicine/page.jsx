import Generalmedicine from '@/pages/Generalmedicine/Generalmedicine'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Hospital in Erode for General Medicine | Sudha Multispeciality Hospital",
  description: "Best Hospital in Erode for General Medicine, providing expert general physicians and comprehensive treatments with patient-focused care.",

  keywords: "Best General Physicians in Erode, Best Hospital for General Treatments and Consultations",
};


function page() {
  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/general-medicine/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/general-medicine/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/general-medicine/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/general-medicine/"
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
            name: "General Medicine",
            url: "https://sudhahospitals.com/specialities/general-medicine/",
            description:
              "Best Hospital in Erode for General Medicine, providing expert general physicians and comprehensive treatments with patient-focused care.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Diagnosis and Management of Common Illness",
              "Chronic Disease Management",
              "Preventive and Lifestyle Health",
              "In Patient and Emergency Support",
              "Geriatric and Palliative Care",
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
        id="faq-general-medicine-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "When to consult a general medicine doctor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "A general medicine doctor, or general physician, should be consulted for routine check-ups, persistent symptoms, or early signs of illness such as fever, fatigue, infections, or digestive issues. They provide preventive care, diagnosis, and management of common health problems. At Sudha Multispeciality Hospital, the best hospital in Erode for general medicine, patients receive care from some of the best general physicians in Erode, ensuring accurate diagnosis and effective treatment."
                }
              },
              {
                "@type": "Question",
                "name": "Best General Doctor in Erode",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The team of general physicians at Sudha Multispeciality Hospital are among the best in Erode, backed by years of expertise. They focus on delivering accurate diagnosis, effective treatment, and compassionate care, ensuring patients receive trusted medical support for overall well-being."
                }
              },
              {
                "@type": "Question",
                "name": "What is the major surgery in general surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Major surgeries in general surgery typically include procedures involving the abdomen, digestive organs, gallbladder, appendix, hernia repair, and certain tumor removals. At Sudha Multispeciality Hospital, experienced general surgeons provide advanced surgical care with high success rates, making it a leading center in Erode for surgical interventions."
                }
              },
              {
                "@type": "Question",
                "name": "What conditions are treated by general surgeons?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "General surgeons manage conditions such as appendicitis, hernias, gallstones, bowel obstruction, certain cancers, and trauma injuries. Sudha Multispeciality Hospital, the best hospital in Erode for general treatments, offers surgical expertise and comprehensive care for these conditions."
                }
              },
              {
                "@type": "Question",
                "name": "What problems can a general physician deal with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "General physicians at Sudha Multispeciality Hospital handle a wide range of health issues, including infections, cold and cough, diabetes, high blood pressure, digestive problems, minor injuries, and preventive care. They also guide patients on lifestyle, diet, and exercise to maintain overall health. This makes Sudha one of the best hospitals in Erode for general treatments and consultations."
                }
              },
              {
                "@type": "Question",
                "name": "Can a general doctor treat serious health conditions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "General physicians at Sudha Multispeciality Hospital manage chronic and serious health conditions like diabetes, hypertension, infections, and other illnesses. They provide early intervention, coordinate with specialists when necessary, and ensure continuous monitoring. The hospital is considered among the best in Erode for general medicine."
                }
              },
              {
                "@type": "Question",
                "name": "Can I consult a general doctor online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "At Sudha Multispeciality Hospital, book your appointment online at your convenient time and have a personalised consultation and check-up at the hospital. As one of the best hospitals in Erode for general consultations and treatments, we offer personalised care with the best general physicians."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="general-medicine-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "General Medicine – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/general-medicine",
            "description":
              "Best Hospital in Erode for General Medicine, providing expert general physicians and comprehensive treatments with patient-focused care.",
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
                  "name": "General Medicine",
                  "item": "https://sudhahospitals.com/specialities/general-medicine"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – General Medicine",
              "url": "https://sudhahospitals.com/specialities/general-medicine",
              "department": {
                "@type": "MedicalClinic",
                "name": "General Medicine"
              }
            }
          })
        }}
      />

      <Generalmedicine />
    </div>
  )
}

export default page
