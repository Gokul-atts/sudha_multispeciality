import Laryngology from '@/pages/laryngology/laryngology'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Laryngology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Best Laryngology Hospital in Erode with skilled ENT specialists and expert laryngologists offering advanced care for throat and voice issues.",

  keywords: "Laryngologist in Erode, best Laryngologist in Tamil Nadu, Best Doctor for Larynx related issues, ENT Specialits in Erode",
};

function page() {


  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/laryngology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/laryngology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/laryngology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/laryngology/"
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
            name: "Laryngology",
            url: "https://sudhahospitals.com/specialities/laryngology/",
            description:
              "Best Laryngology Hospital in Erode with skilled ENT specialists and expert laryngologists offering advanced care for throat and voice issues.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Diagnostic Services",
              "Therapeutic Procedures",
              "Surgical Treatments",
              "Swallowing & Airway Rehabilitation",
              "Post-operative and Injury-Related Pain",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Laryngology Consultation appointment",
            },
          }),
        }}
      />

      <Script
        id="faq-laryngology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which hospital in Erode is best for laryngology?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Equipped with the best laryngologists in Erode, Tamil Nadu, Sudha Multispeciality Hospital is considered as the best hospital for laryngology. Sudha offers advanced treatments for all larynx-related conditions with advanced diagnostic facilities and ENT specialists."
                }
              },
              {
                "@type": "Question",
                "name": "Is a laryngologist the same as an ENT specialist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A laryngologist is a specialist focusing on the larynx (voice box) and related disorders, while an ENT specialist manages a wider range of ear, nose, and throat conditions. At Sudha Multispeciality Hospital, experienced ENT specialists in Erode provide laryngology care with specialised expertise."
                }
              },
              {
                "@type": "Question",
                "name": "What are the common symptoms of a larynx infection?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common symptoms include hoarseness, sore throat, difficulty swallowing, persistent cough, and changes in voice. Sudha Multispeciality Hospital offers evaluation and treatment from the best laryngologist in Tamil Nadu to manage such conditions effectively."
                }
              },
              {
                "@type": "Question",
                "name": "What are the signs of a throat tumor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Signs of a throat tumour may include persistent throat pain, difficulty swallowing, unexplained weight loss, persistent hoarseness, and a lump in the neck. Early diagnosis by the best doctor for larynx-related issues at Sudha Multispeciality Hospital ensures timely intervention."
                }
              },
              {
                "@type": "Question",
                "name": "Why does my throat hurt when I swallow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Throat pain during swallowing can result from infections, inflammation, acid reflux, or vocal strain. ENT specialists in Erode at Sudha Multispeciality Hospital provide comprehensive assessment to identify and treat the underlying cause."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do if I have a persistent sore throat but no fever?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A persistent sore throat without fever should be evaluated by a specialist, as it may indicate underlying issues such as larynx inflammation, nodules, or early-stage tumours. Sudha Multispeciality Hospital offers expert consultation with the best laryngologist in Tamil Nadu for accurate diagnosis and treatment."
                }
              },
              {
                "@type": "Question",
                "name": "Can a sore throat cause changes in your voice?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A sore throat or laryngeal infection can lead to hoarseness, weak voice, or temporary voice changes. At Sudha Multispeciality Hospital, ENT specialists in Erode provide targeted treatment to restore voice quality and overall throat health."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="laryngology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Laryngology – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/laryngology",
            "description":
              "Best Laryngology Hospital in Erode with skilled ENT specialists and expert laryngologists offering advanced care for throat and voice issues.",
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
                  "name": "Laryngology",
                  "item": "https://sudhahospitals.com/specialities/laryngology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Laryngology",
              "url": "https://sudhahospitals.com/specialities/laryngology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Laryngology"
              }
            }
          })
        }}
      />
      <Laryngology />
    </div>
  )
}

export default page
