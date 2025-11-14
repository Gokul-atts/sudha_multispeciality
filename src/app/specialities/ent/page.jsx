import Ent from '@/pages/ent/Ent'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best ENT Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality Hospital is the Best ENT Hospital in Erode, offering expert care for ear, nose, and throat conditions with advanced treatments.",

  keywords: "Best ENT hospital in Erode, ENT specialist in Erode, Best Treatment for Ear, Nose, and Throat in Erode, Best Hospital for Ear Issues, Best Hospital for Nose issues, Best Hospital for Throat Issues",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/ent/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/ent/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/ent/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/ent/"
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
            name: "ENT",
            url: "https://sudhahospitals.com/specialities/ent/",
            description:
              "Sudha Multispeciality Hospital is the Best ENT Hospital in Erode, offering expert care for ear, nose, and throat conditions with advanced treatments.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Diagnostic & Therapeutic Audiology",
              "Endoscopic Nasal & Sinus Care",
              "Advanced Ear Surgery & Otology",
              "Voice, Throat & Sleep Apnea Treatments",
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
              serviceUrl:
                "https://sudhahospitals.com/#book-appointment",
              description: "Book an ent consultation appointment",
            },
          }),
        }}
      />


      <Script
        id="faq-ent-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the Best ENT Hospital in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The best ENT hospital should provide advanced diagnostic tools, expert specialists, and treatments for all ear, nose, and throat conditions. In Erode, Sudha Multispeciality Hospital is recognized as one of the best ENT hospitals, offering comprehensive care and the best treatment for ear, nose, and throat issues with experienced ENT specialists."
                }
              },
              {
                "@type": "Question",
                "name": "How much is an ENT check-up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The cost of an ENT check-up depends on the consultation fees and any diagnostic tests recommended. Sudha Multispeciality Hospital, the best ENT hospital in Erode, provides affordable ENT treatments and expert consultation with ENT specialists."
                }
              },
              {
                "@type": "Question",
                "name": "Which super-specialty hospital provides ENT Treatments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "A super-specialty hospital offering ENT treatments should cover medical and surgical care for ear, nose, and throat problems. Sudha Multispeciality Hospital is a trusted super-specialty hospital in Erode, providing the best treatment for ear, nose, and throat conditions, supported by advanced technology and skilled ENT specialists."
                }
              },
              {
                "@type": "Question",
                "name": "What conditions require surgery for ENT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Some ENT conditions that may require surgery include chronic sinusitis, nasal polyps, tonsillitis, adenoid problems, ear infections, hearing issues, and throat or voice disorders. At Sudha Multispeciality Hospital, the best ENT hospital in Erode, surgeries are performed by experienced ENT specialists, ensuring safe and effective outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "What is the recovery time for ENT surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Recovery time after ENT surgery depends on the type of procedure. Minor surgeries may require only a few days, while major ones like sinus or ear surgery may take a few weeks. At Sudha Multispeciality Hospital, ENT specialists provide personalized care plans to ensure faster recovery and complete follow-up support."
                }
              },
              {
                "@type": "Question",
                "name": "What is the most common surgery for ENT patients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Common ENT surgeries include tonsillectomy, adenoidectomy, sinus surgery, and ear tube insertion. These procedures are performed to relieve chronic infections, improve breathing, and restore hearing. Sudha Multispeciality Hospital, the best hospital for ear, nose, and throat issues in Erode, offers advanced surgical care with skilled ENT specialists."
                }
              },
              {
                "@type": "Question",
                "name": "How much does sinus surgery cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The cost of sinus surgery varies based on the severity of the condition, the surgical method, and hospital facilities. Sudha Multispeciality Hospital in Erode provides sinus treatment and surgery from expert ENT specialists with advanced care at an affordable price."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="ent-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ENT – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/ent",
            "description": "Sudha Multispeciality Hospital is the Best ENT Hospital in Erode, offering expert care for ear, nose, and throat conditions with advanced treatments.",
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
                  "name": "ENT",
                  "item": "https://sudhahospitals.com/specialities/ent"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – ENT",
              "url": "https://sudhahospitals.com/specialities/ent",
              "department": {
                "@type": "MedicalClinic",
                "name": "ENT"
              }
            }
          })
        }}
      />


      <Ent />
    </div>
  )
}

export default page
