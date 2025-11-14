import Generalsurgery from '@/pages/Generalsurgery/Generalsurgery'
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Best Hospital in Erode for General Surgery | Sudha Multispeciality Hospital",
  description: "Best Hospital in Erode for General Surgery with skilled surgeons, advanced facilities, and complete surgical care you can trust.",

  keywords: "Best general surgeon in Erode, Best Hospital for General Surgery in Erode, ",
};

function page() {
  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/general-surgery/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/general-surgery/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/general-surgery/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/general-surgery/"
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
            name: "General Surgery",
            url: "https://sudhahospitals.com/specialities/general-surgery/",
            description:
              "Best Hospital in Erode for General Surgery with skilled surgeons, advanced facilities, and complete surgical care you can trust.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Laparoscopic and Minimally Invasive Surgeries",
              "Gastrointestinal and Abdominal Surgeries",
              "Emergency and Trauma Surgeries",
              "Oncology Related Surgeries",
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
        id="faq-general-surgery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the most common general surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The most common general surgeries include appendectomy (removal of the appendix), hernia repair, gallbladder removal, and minor abdominal procedures. At Sudha Multispeciality Hospital, considered one of the best hospitals in Erode for general surgery, these procedures are performed by the best general surgeons with safe and effective care."
                }
              },
              {
                "@type": "Question",
                "name": "What organs are involved in general surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "General surgery mainly involves organs in the abdomen, including the stomach, intestines, appendix, liver, gallbladder, and hernia-affected areas. Equipped with experienced general surgeons in Erode, Sudha Multispeciality Hospital offers advanced treatments and a personalized recovery plan to every patient."
                }
              },
              {
                "@type": "Question",
                "name": "What disease is under general surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "General surgeons treat conditions such as appendicitis, hernias, gallstones, intestinal blockages, tumors, and injuries requiring surgical care. Sudha Multispeciality Hospital, recognized as one of the best hospitals in Erode for general surgery, offers effective surgical management for these conditions with the best surgeons."
                }
              },
              {
                "@type": "Question",
                "name": "What is the major surgery in general surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Major surgeries include abdominal operations, tumor removals, gallbladder and liver surgeries, and other complex procedures. At Sudha Multispeciality Hospital, one of the best hospitals in Erode for general surgery, major surgeries are performed by skilled surgeons with proper pre- and post-operative care."
                }
              },
              {
                "@type": "Question",
                "name": "What pre-operative preparations are needed — fasting, medications?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Before surgery, patients may need to fast for a few hours, avoid certain medications, and undergo basic investigations like blood tests and imaging. At Sudha Multispeciality Hospital, the best hospital for general surgery in Erode, doctors guide patients through all pre-operative steps to ensure safety and smooth recovery."
                }
              },
              {
                "@type": "Question",
                "name": "How long will the surgery take and what is the expected recovery time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The duration of surgery depends on the type and complexity of the procedure. Minor surgeries may take less than an hour, while major procedures can take several hours. Recovery can range from a few days to several weeks. Sudha Multispeciality Hospital, recognized as one of the best hospitals in Erode for general surgery, ensures proper post-operative care and follow-up for faster recovery."
                }
              },
              {
                "@type": "Question",
                "name": "Who is the Best General Surgeon in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The team of experienced and highly skilled general surgeons at Sudha Multispeciality Hospital is recognised as the best general surgeons in Erode, offering advanced treatments, modern surgical techniques, and personalised care for every patient."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="general-surgery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "General Surgery – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/general-surgery",
            "description":
              "Best Hospital in Erode for General Surgery with skilled surgeons, advanced facilities, and complete surgical care you can trust.",
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
                  "name": "General Surgery",
                  "item": "https://sudhahospitals.com/specialities/general-surgery"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – General Surgery",
              "url": "https://sudhahospitals.com/specialities/general-surgery",
              "department": {
                "@type": "MedicalClinic",
                "name": "General Surgery"
              }
            }
          })
        }}
      />

      <Generalsurgery />
    </div>
  )
}

export default page
