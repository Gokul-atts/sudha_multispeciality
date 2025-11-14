import Image from "next/image";
import Home from "../pages/Home";
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Sudha Multispeciality Hospital Erode",
  description: "Sudha Multispeciality Hospital, the best multispecialty hospital in Erode, offers expert doctors, advanced treatments, and compassionate patient care across all specialties.",

  keywords: "Best Multispecialty hospital in Erode",
};


export default function Page() {
  return (
    <div >
      <Head>
        {/* Canonical */}
        <link rel="canonical" href="https://sudhahospitals.com/" />

        {/* Hreflang */}
        <link rel="alternate" href="https://sudhahospitals.com/" hreflang="en-in" />
        <link rel="alternate" href="https://sudhahospitals.com/" hreflang="en" />
        <link rel="alternate" href="https://sudhahospitals.com/" hreflang="x-default" />
      </Head>
      <Script
        id="hospital-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hospital",
            name: "Sudha Multispeciality Hospital",
            url: "https://sudhahospitals.com/",
            image: "https://sudhahospitals.com/_next/static/media/whiteLogo.40698793.svg",
            description:
              "Sudha Multispeciality Hospital, the best multispecialty hospital in Erode, offers expert doctors, advanced treatments, and compassionate patient care across all specialties.",
            telephone: "+0424-245-4545",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "No.162, 181, Perundurai Rd, Edayankattuvalasu, Erode, India, Tamil Nadu",
              addressLocality: "Erode",
              addressRegion: "Tamil Nadu",
              postalCode: "638011",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 11.337678,
              longitude: 77.712731,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            ],
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "numberOfBeds",
                value: 300,
              },
            ],
            medicalSpecialty: [
              "Cardiology",
              "Pulmonology",
              "Neurology",
              "Mother and Child Care",
              "Anaesthesiology",
              "Fertility Care",
              "Oncology",
              "Cardiothoracic Surgery",
              "Dentistry and Oral Surgery",
              "Dermatology",
              "ENT",
              "Emergency Care",
              "Gastroenterology",
              "Radiology",
              "General Medicine",
              "General Surgery",
              "Urology",
              "Orthopaedics",
              "Nephrology",
              "Neurology",
              "Imaging and Diagnostic Services",
              "Obstetrics and Gynaecology",
              "Paediatrics",
              "Neonatology",
              "Pain Medicine",
              "Plastic Surgery",
              "Laryngology",
            ],
            foundingDate: "1985",
            employee: [
              {
                "@type": "Person",
                jobTitle: "Doctor",
                description: "100+ qualified doctors across various departments",
              },
            ],
            sameAs: [
              "https://www.facebook.com/simserode",
              "https://www.instagram.com/sudhamultispecialityhospital/",
              "https://www.youtube.com/@sudhafertilitycentre",
            ],
          }),
        }}
      />

      <Script
        id="faq-hospital-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the Best Multispecialty Hospital in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Sudha Multispeciality Hospital is recognised as the best multispecialty hospital in Erode, offering advanced tertiary care with modern infrastructure, specialised departments, and expert consultants across a wide range of medical fields."
                }
              },
              {
                "@type": "Question",
                "name": "Which hospital provides world class facilities in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Sudha Multispeciality Hospital known as the best multispeciality hospital in Erode, provides world-class facilities with state-of-the-art technology, advanced diagnostic services, and modern surgical care, ensuring high standards of treatment for all patients."
                }
              },
              {
                "@type": "Question",
                "name": "Which is the best hospital for Larynx treatment in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "As the best multispeciality hospital in Erode, Sudha Multispeciality Hospital is equipped with best ENT specialists and laryngologists offering the best and advanced Larynx treatments in Erode at an affordable price."
                }
              },
              {
                "@type": "Question",
                "name": "Does Sudha Hospital provide affordable treatments in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Sudha Multispeciality Hospital is known for offering affordable treatments without compromising on quality. Patients benefit from cost-effective health packages and transparent pricing across various specialties."
                }
              },
              {
                "@type": "Question",
                "name": "Which hospital is best for respiratory care in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Equipped with best pulmonologists in Erode, Sudha Multispeciality Hospital is considered the best choice for respiratory care, with dedicated pulmonology services, advanced respiratory diagnostics, and comprehensive treatment at an affordable price."
                }
              },
              {
                "@type": "Question",
                "name": "Which is the most trusted hospital in Erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "With over 40 years of experience and excellence in delivering quality healthcare services, Sudha Multispeciality Hospital has earned its reputation as the most trusted hospital in Erode. Sudha is widely known for its experienced specialists, patient-focused services, and affordable treatments without compromise in quality."
                }
              },
              {
                "@type": "Question",
                "name": "Which hospital provides the best intensive care unit in erode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Sudha Multispeciality Hospital in Erode provides one of the best intensive care units, equipped with advanced monitoring systems, modern life-support technologies, and round-the-clock critical care specialists."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="home-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Home – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/",
            "description": "Sudha Multispeciality Hospital, the best multispecialty hospital in Erode, offers expert doctors, advanced treatments, and compassionate patient care across all specialties.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sudhahospitals.com/"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital - Home Page",
              "url": "https://sudhahospitals.com/",
              "department": {
                "@type": "MedicalClinic",
                "name": "Home"
              }
            }
          })
        }}
      />

      <Home />
    </div>
  );
}
