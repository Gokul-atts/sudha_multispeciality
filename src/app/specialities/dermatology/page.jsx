import Dermatology from '@/pages/Dermatology/Dermatology'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Dermatology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Best Dermatology Hospital in Erode with expert dermatologists providing advanced skin treatments and trusted care for all skin issues.",

  keywords: "Best Dermatologists In Erode, Best Doctors for Skin Issues in Erode",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/dermatology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/dermatology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/dermatology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/dermatology/"
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
            name: "Dermatology",
            url: "https://sudhahospitals.com/specialities/dermatology/",
            description:
              "Best Dermatology Hospital in Erode with expert dermatologists providing advanced skin treatments and trusted care for all skin issues.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Acne and Scar Treatment",
              "Psoriasis and Eczema Care",
              "Hair & Scalp Disorders",
              "Allergy Testing & Treatment",
              "Skin Infections & Fungal Diseases",
              "Skin Pigmentation & Whitening Treatments",
              "Anti-Aging & Aesthetic Dermatology",
              "Wart & Mole Removal",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a dermatology consultation appointment",
            },
          }),
        }}
      />
      <Script
        id="faq-dermatology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which hospital in Erode is best for skin problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Sudha Multispeciality Hospital is regarded as one of the best hospitals for skin problems, with the best dermatologists in Erode providing advanced diagnosis and treatments for a wide range of skin conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Which vitamins are beneficial for healthy skin?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Vitamins such as Vitamin C, Vitamin E, and Vitamin D are highly beneficial for maintaining healthy skin. The best doctors for skin issues in Erode at Sudha Multispeciality Hospital often recommend a balanced approach combining nutrition and clinical care for long-term skin health."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best treatment for damaged skin?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The best treatment for damaged skin depends on the cause and severity. At Sudha Multispeciality Hospital, the best dermatologists in Erode provide advanced treatments and medications for effective results."
                }
              },
              {
                "@type": "Question",
                "name": "Is it possible to treat severely damaged skin?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Severely damaged skin can be treated with certain lifestyle changes, diet, and specialised skincare. The dermatology department at Sudha Multispeciality Hospital in Erode offers comprehensive treatments under the guidance of the best doctors for skin issues in Erode, helping restore skin health."
                }
              },
              {
                "@type": "Question",
                "name": "What are the common causes of poor skin quality?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Poor skin quality is often caused by factors such as sun exposure, pollution, dehydration, nutritional deficiencies, and ageing. At Sudha Multispeciality Hospital, the best dermatologists in Erode provide preventive care and customised treatments to address these concerns."
                }
              },
              {
                "@type": "Question",
                "name": "Who is the best dermatologist in Erode, Tamil Nadu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The team of skilled and experienced doctors at Sudha Multispeciality Hospital are recognised as the best dermatologists in Erode, Tamil Nadu, offering advanced treatments, personalised care, and comprehensive solutions for all types of skin problems."
                }
              },
              {
                "@type": "Question",
                "name": "Which skin diseases are treated by dermatologists?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Dermatologists treat a wide range of skin diseases including acne, eczema, psoriasis, fungal infections, pigmentation disorders, and skin allergies. The dermatologists at Sudha Multispeciality Hospital in Erode ensure holistic care and effective treatment for all conditions."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="dermatology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Dermatology – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/dermatology",
            "description": "Best Dermatology Hospital in Erode with expert dermatologists providing advanced skin treatments and trusted care for all skin issues.",
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
                  "name": "Dermatology",
                  "item": "https://sudhahospitals.com/specialities/dermatology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Dermatology",
              "url": "https://sudhahospitals.com/specialities/dermatology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Dermatology"
              }
            }
          })
        }}
      />
      <Dermatology />
    </div>
  )
}

export default page
