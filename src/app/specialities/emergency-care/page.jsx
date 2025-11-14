import Emergencycare from '@/pages/Emergencycare/Emergencycare'
import React from 'react';
import Script from "next/script";
import Head from "next/head";
export const metadata = {
  title: "Best Emergency Care Hospital in Erode | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality, the Best emergency care hospital in Erode, provides 24/7 expert doctors, advanced facilities, and life-saving critical to trauma care.",

  keywords: "Best emergency care hospital in Erode",
};

function page() {

  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/specialities/emergency-care/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/emergency-care/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/emergency-care/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/specialities/emergency-care/"
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
            name: "Emergency Care",
            url: "https://sudhahospitals.com/specialities/emergency-care/",
            description:
              "Sudha Multispeciality, the Best emergency care hospital in Erode, provides 24/7 expert doctors, advanced facilities, and life-saving critical to trauma care.",
            provider: {
              "@type": "Hospital",
              name: "Sudha Multispeciality Hospital",
              url: "https://sudhahospitals.com/",
            },
            serviceType: [
              "Cardiology Emergencies",
              "Nephrology Emergencies",
              "Pulmonology Emergencies",
              "Gastroenterology Emergencies",
              "Vascular Emergencies",
              "Radiology Support",
              "Orthopaedic Emergencies",
              "General Emergency Care",
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
        id="faq-emergency-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the Best Emergency Care Hospital in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The best emergency care hospital is one that provides 24/7 critical care, advanced life-saving facilities, and immediate trauma care services. It should have a trained emergency response team capable of handling accidents, strokes, cardiac arrests, and other life-threatening situations. In Erode, Sudha Multispeciality Hospital is widely regarded as the best emergency care hospital, trusted for its quick response, state-of-the-art critical care unit, and expert trauma care services."
                }
              },
              {
                "@type": "Question",
                "name": "When to call emergency service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "You should call emergency services immediately if someone experiences chest pain, severe injury, breathing difficulty, unconsciousness, stroke symptoms, or heavy bleeding. Quick action in such cases saves lives. Sudha Multispeciality Hospital, the best emergency care hospital in Erode, provides 24/7 emergency response with highly trained doctors and nurses specializing in critical care and trauma care."
                }
              },
              {
                "@type": "Question",
                "name": "How do you perform CPR on a casualty?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Cardiopulmonary Resuscitation (CPR) involves chest compressions and rescue breaths to maintain blood flow and oxygen supply when someone’s heart has stopped. The standard method includes 30 compressions followed by 2 rescue breaths, repeated until help arrives. At Sudha Multispeciality Hospital, the emergency team is trained in advanced life support and provides immediate CPR and critical care for cardiac arrest and trauma patients."
                }
              },
              {
                "@type": "Question",
                "name": "How do we use CPR during emergencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "During emergencies such as cardiac arrest, drowning, or sudden collapse, CPR is the first step in keeping the brain and vital organs alive until advanced treatment is given. Performing CPR quickly and correctly increases survival chances. Sudha Multispeciality Hospital, the best emergency care hospital in Erode, has specialists trained in advanced CPR techniques as part of their emergency and trauma care services."
                }
              },
              {
                "@type": "Question",
                "name": "What are the steps of emergency care?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Emergency care begins with assessing the patient’s condition, securing the airway, supporting breathing and circulation, controlling bleeding, stabilizing vital signs, and shifting the patient to intensive or trauma care if required. Sudha Multispeciality, the best emergency care hospital in Erode follows global emergency protocols and provides seamless transition from first aid to advanced critical care."
                }
              },
              {
                "@type": "Question",
                "name": "What are emergency services in a hospital?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Emergency services typically include accident and trauma care, cardiac emergency treatment, stroke management, poison and burn care, ventilator support, and 24/7 ambulance availability. As the best emergency care hospital, Sudha Multispeciality Hospital offers comprehensive emergency and critical care services, ensuring patients receive immediate and specialized treatment when every second counts."
                }
              },
              {
                "@type": "Question",
                "name": "What is the contact number for Erode emergency care?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Hospitals provide dedicated emergency contact numbers to ensure quick medical help when needed. Sudha Multispeciality Hospital, one of the leading emergency care hospitals in Erode, offers 24/7 critical and trauma care support. In case of an emergency, call 042-424-54545 for immediate assistance."
                }
              }
            ]
          })
        }}
      />

      <Script
        id="emergency-care-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Emergency Care – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/specialities/emergency-care",
            "description": "Sudha Multispeciality, the Best emergency care hospital in Erode, provides 24/7 expert doctors, advanced facilities, and life-saving critical to trauma care.",
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
                  "name": "Emergency Care",
                  "item": "https://sudhahospitals.com/specialities/emergency-care"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Emergency Care",
              "url": "https://sudhahospitals.com/specialities/emergency-care",
              "department": {
                "@type": "MedicalClinic",
                "name": "Emergency Care"
              }
            }
          })
        }}
      />
      <Emergencycare />
    </div>
  )
}

export default page
