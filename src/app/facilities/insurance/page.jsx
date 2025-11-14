import Insurance from '@/pages/Insurance-hospital/Insurance'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Insurance | Sudha Multispeciality Hospital",
  description: "",

  keywords: "Sudha Hospital Insurance facilities",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/facilities/insurance/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/insurance/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/insurance/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/facilities/insurance/"
      hreflang="x-default"
    />
  </Head>


  return (
    <div>



      <Script
        id="faq-insurance-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does Sudha Hospital cover insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Multispeciality Hospital in Erode offers insurance facilities. Patients can avail cashless or reimbursement options depending on their eligibility and policy terms. The insurance desk at the hospital will assist with the entire insurance process."
                }
              },
              {
                "@type": "Question",
                "name": "What insurance plans are accepted at Sudha Hospitals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Multispeciality Hospital accepts a variety of national and private health insurance plans. The staff of insurance desk at the hospital will provide detailed guidance on eligibility and coverage."
                }
              },
              {
                "@type": "Question",
                "name": "What is the time limit for health insurance claims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The time limit for submitting claims depends on the terms of the individual insurance policy. Patients are advised to contact the insurance provider for specific claim timelines."
                }
              },
              {
                "@type": "Question",
                "name": "How to use health insurance in a hospital?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To use health insurance, patients must present valid insurance documents at the hospital. Sudha Multispeciality Hospital’s insurance desk assists with the process for both cashless and reimbursement options."
                }
              },
              {
                "@type": "Question",
                "name": "Is health insurance valid in all hospitals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Health insurance validity depends on whether the hospital is listed under the insurer’s network. Contact the helpline of Sudha Multispeciality hospital or insurance provider to confirm coverage."
                }
              },
              {
                "@type": "Question",
                "name": "Which illness is not covered by health insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Some pre-existing conditions, cosmetic procedures, and treatments not mentioned in the policy may not be covered. For detailed information, patients should consult the hospital’s insurance desk or their insurance provider."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="insurance-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Insurance – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/facilities/insurance",
            "description": "Explore Sudha Multispeciality Hospital in Erode, known for its expert medical team, advanced facilities, and dedication to compassionate healthcare.",
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
                  "name": "Facilities",
                  "item": "https://sudhahospitals.com/#facilities"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Insurance",
                  "item": "https://sudhahospitals.com/facilities/insurance"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Insurance",
              "url": "https://sudhahospitals.com/facilities/insurance",
              "department": {
                "@type": "MedicalClinic",
                "name": "Insurance"
              }
            }
          })
        }}
      />


      <Insurance />
    </div>
  )
}

export default page
