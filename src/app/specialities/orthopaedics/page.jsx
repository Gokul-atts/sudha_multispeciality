import Orthopaedics from '@/pages/Orthopaedics/Orthopaedics'
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Best Orthopaedics Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Best Orthopaedics Hospital in Erode with expert orthopaedic doctors offering advanced treatments for bones, joints, and musculoskeletal care.",

  keywords: "Best Ortho Hospital in Erode, Best Orthopaedic Doctors in Erode",
};



function page() {


  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/orthopaedics/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/orthopaedics/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/orthopaedics/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/orthopaedics/"
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
            name: "Orthopaedics",
            url: "https://sudhahospitals.com/specialities/orthopaedics/",
            description:
              "Best Orthopaedics Hospital in Erode with expert orthopaedic doctors offering advanced treatments for bones, joints, and musculoskeletal care.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Trauma and Joint Care",
              "Joint Replacement and Reconstruction",
              "Spine Surgery and Conditions",
              "Specialised Orthopaedic Care",
              "Sports Injury Management",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book an Orthopaedic Consultation appointment",
            },
          }),
        }}
      />



      <Script
        id="faq-ortho-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best orthopedic hospital in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Multispeciality Hospital, recognized as the best ortho hospital in Erode, provides comprehensive orthopedic care with advanced facilities and treatment led by the best orthopaedic doctors in Erode."
                }
              },
              {
                "@type": "Question",
                "name": "Which hospital is best for fractures and joint replacement in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the best ortho hospital in Erode, Sudha Multispeciality Hospital offers expert surgical and non-surgical treatments for fracture and joint replacements under the guidance of the best orthopaedic doctors in Erode."
                }
              },
              {
                "@type": "Question",
                "name": "What are the early symptoms of joint or bone disease?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Early signs of joint or bone disease include persistent pain, swelling, stiffness, difficulty moving, or deformities. Consulting an orthopaedist is crucial when noticing the symptoms. Sudha Multispeciality Hospital, the best ortho hospital in Erode, provides advanced diagnostics for early detection and treatment."
                }
              },
              {
                "@type": "Question",
                "name": "What is the fastest way to increase bone density?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bone density can be improved through a combination of calcium- and vitamin D-rich diet, regular weight-bearing exercises, and proper medical supervision. Orthopaedist at Sudha Multispeciality Hospital offers guidance and diet plans to strengthen bones effectively."
                }
              },
              {
                "@type": "Question",
                "name": "Under what circumstances is knee replacement surgery performed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Knee replacement surgery is recommended for severe arthritis, significant joint damage, or chronic pain that cannot be managed with medications or therapy. Sudha Multispeciality Hospital, the best ortho hospital in Erode, provides expert knee replacement procedures for optimal outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "What is the recovery time after orthopedic surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Recovery time after orthopaedic surgery depends on the type of procedure, patient health, and adherence to rehabilitation. As the best hospital for orthopaedics, Sudha Multispeciality Hospital, ensures structured post-operative care to support smooth and safe recovery."
                }
              },
              {
                "@type": "Question",
                "name": "How painful is knee replacement surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The patient will not know the pain during the knee replacement surgery as they'll be under anaesthesia. Equipped with the best ortho doctors in Erode, Sudha Multispeciality Hospital offers advanced pain management and post-operative care for a comfortable recovery."
                }
              }
            ]
          })
        }}
      />


    

      <Script
        id="orthopaedics-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Orthopaedics – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/orthopaedics",
            "description":
              "Best Orthopaedics Hospital in Erode with expert orthopaedic doctors offering advanced treatments for bones, joints, and musculoskeletal care.",
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
                  "name": "Orthopaedics",
                  "item": "https://sudhahospitals.com/specialities/orthopaedics"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Orthopaedics",
              "url": "https://sudhahospitals.com/specialities/orthopaedics",
              "department": {
                "@type": "MedicalClinic",
                "name": "Orthopaedics"
              }
            }
          })
        }}
      />
      <Orthopaedics />
    </div>
  )
}

export default page
