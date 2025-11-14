import Termsandconditions from '@/pages/Termsandconditions/Termsandconditions';
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Terms and Conditions | Sudha Multispeciality Hospital",
  description: "Learn about the rules, policies, and guidelines for using Sudha Multispeciality Hospital services in our Terms & Conditions page.",

  keywords: "",
};

const Page = () => {


  <Head>
    {/* Canonical */}
    <link
      rel="canonical"
      href="https://sudhahospitals.com/terms-and-conditions/"
    />

    {/* Hreflang */}
    <link
      rel="alternate"
      href="https://sudhahospitals.com/terms-and-conditions/"
      hreflang="en-in"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/terms-and-conditions/"
      hreflang="en"
    />
    <link
      rel="alternate"
      href="https://sudhahospitals.com/terms-and-conditions/"
      hreflang="x-default"
    />
  </Head>

  return (
    <div>
      <Script
        id="terms-conditions-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/terms-and-conditions",
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
                  "name": "Terms and Conditions",
                  "item": "https://sudhahospitals.com/terms-and-conditions"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Terms and Conditions",
              "url": "https://sudhahospitals.com/terms-and-conditions",
              "department": {
                "@type": "MedicalClinic",
                "name": "Terms and Conditions"
              }
            }
          })
        }}
      />

      <Termsandconditions />
    </div>
  );
}

export default Page;
