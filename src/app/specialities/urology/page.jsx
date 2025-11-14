import Urology from '@/pages/Urology/Urology'
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Best Urology Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Best Urology Hospital in Erode delivering expert care for kidney and urinary issues with skilled urologists and advanced treatment options.",

  keywords: "Best Urology Hospital in Erode, best hospital for kidney-related treatment in Erode",
};


function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/urology/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/urology/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/urology/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/urology/"
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
            name: "Urology",
            url: "https://sudhahospitals.com/specialities/urology/",
            description:
              "Best Urology Hospital in Erode delivering expert care for kidney and urinary issues with skilled urologists and advanced treatment options.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Kidney and Urinary Stone Management",
              "Male Productive and Fertility Surgery",
              "Prostate and Bladder Health",
              "Urological Cancer and Reconstructive Surgery",
            ],
            areaServed: {
              "@type": "City",
              name: "Erode",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://sudhahospitals.com/#book-appointment",
              description: "Book a Urology Consultation appointment",
            },
          }),
        }}
      />



      <Script
        id="faq-urology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which hospital in Erode is best for urology problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Multispeciality Hospital is regarded as the best urology hospital in Erode, offering expert consultations, advanced diagnostic facilities, and comprehensive treatment for all urology and kidney-related conditions."
                }
              },
              {
                "@type": "Question",
                "name": "What are the most common urology problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common urology problems include kidney stones, urinary tract infections, enlarged prostate, bladder issues, and urethral strictures. At Sudha Multispeciality Hospital, the best hospital for kidney-related treatment in Erode, specialised care is provided for both common and complex cases by the best urologists."
                }
              },
              {
                "@type": "Question",
                "name": "What is the most common procedure performed in urology?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "One of the most common urology procedures is kidney stone removal, which may involve minimally invasive techniques such as ureteroscopy or laser treatment. Sudha Multispeciality Hospital in Erode offers advanced surgical and non-surgical options under expert urologists."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a urology procedure usually take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The duration of a urology procedure depends on the type of treatment. Minor procedures may take 30 to 60 minutes, while more complex surgeries may require several hours. Sudha Multispeciality Hospital ensures precision and safety with advanced facilities."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take for the urethra to heal after treatment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Urethral healing after treatment typically takes a few weeks, depending on the type of procedure and overall health condition. At Sudha Multispeciality Hospital in Erode, patients receive continuous monitoring and guidance for faster recovery."
                }
              },
              {
                "@type": "Question",
                "name": "Is urethroplasty considered a minor or major surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Urethroplasty is considered a major surgery, as it involves reconstructing or repairing the urethra. The procedure is performed by experienced specialists at Sudha Multispeciality Hospital, the best urology hospital in Erode, ensuring safe outcomes and effective recovery."
                }
              },
              {
                "@type": "Question",
                "name": "What is the first stage of urethroplasty?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The first stage of urethroplasty involves assessing the damaged portion of the urethra and preparing the tissue for reconstruction. At Sudha Multispeciality Hospital in Erode, expert urologists carry out the procedure with advanced techniques for optimal results."
                }
              }
            ]
          })
        }}
      />

      <Script
        id="urology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Urology – Sudha Multispeciality Hospital",
            "headline": "Best Urology Hospital in Erode",
            "url": "https://sudhahospitals.com/specialities/urology",
            "inLanguage": "en-IN",
            "description":
              "Best Urology Hospital in Erode delivering expert care for kidney and urinary issues with skilled urologists and advanced treatment options.",
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
                  "name": "Urology",
                  "item": "https://sudhahospitals.com/specialities/urology"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Urology",
              "url": "https://sudhahospitals.com/specialities/urology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Urology"
              }
            }
          })
        }}
      />

      <Urology />
    </div>
  )
}

export default page
