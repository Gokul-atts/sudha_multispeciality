import Finddoctor from '@/pages/Finddoctor/Finddoctor'
import React from 'react'
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Find a Doctor | Sudha Multispeciality Hospital",
  description: "",

  keywords: "Best Doctors in Erode, Best General Surgeons in Erode, Find a Doctor at Sudha Hospital",
};



function page() {



  <Head>
    {/* Canonical */}
    <link rel="canonical" href="https://sudhahospitals.com/find-a-doctor/" />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/find-a-doctor/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/find-a-doctor/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/find-a-doctor/"
      hreflang="x-default"
    />
  </Head>
  return (
    <div>


      <Script
        id="faq-doctors-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is the best ENT specialist in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The ENT specialists at Sudha Multispeciality Hospital in Erode are regarded as the best, offering expert diagnosis and treatment for all ear, nose, and throat conditions with advanced facilities."
                }
              },
              {
                "@type": "Question",
                "name": "Who is the best cardiologist in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The cardiology team at Sudha Multispeciality Hospital in Erode is recognised as the best, providing comprehensive heart care, including preventive, diagnostic, and interventional cardiology services."
                }
              },
              {
                "@type": "Question",
                "name": "Who is the best anesthesiologist in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The anaesthesiology specialists at Sudha Multispeciality Hospital in Erode are considered the best, ensuring safe and effective anaesthesia management for all types of surgical procedures."
                }
              },
              {
                "@type": "Question",
                "name": "Who is the leading doctor for general medicine in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The general medicine specialists at Sudha Multispeciality Hospital in Erode are recognised as leading doctors, providing expert care for a wide range of acute and chronic medical conditions."
                }
              },
              {
                "@type": "Question",
                "name": "How can I book an appointment at Sudha Multispeciality Hospital in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Appointments at Sudha Multispeciality Hospital in Erode can be booked easily via the official website using the 'Book Appointment' option or by calling the helpline at +91-424-2454545."
                }
              }
            ]
          })
        }}
      />


      <Script
        id="find-doctor-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Find a Doctor – Sudha Multispeciality Hospital",
            "headline": "Find a Doctor",
            "url": "https://sudhahospitals.com/find-a-doctor",
            "inLanguage": "en-IN",
            "description":
              "Explore Sudha Multispeciality Hospital in Erode, known for its expert medical team, advanced facilities, and dedication to compassionate healthcare.",
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
                  "name": "Find a Doctor",
                  "item": "https://sudhahospitals.com/find-a-doctor"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Find a Doctor",
              "url": "https://sudhahospitals.com/find-a-doctor",
              "department": {
                "@type": "MedicalClinic",
                "name": "Find a Doctor"
              }
            }
          })
        }}
      />


      <Finddoctor />
    </div>
  )
}

export default page
