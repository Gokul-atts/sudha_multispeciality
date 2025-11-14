import Privacypolicy from '@/pages/Privacypolicy/Privacypolicy';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Privacy Policy | Sudha Multispeciality Hospital",
  description: "Sudha Multispeciality Hospital respects your privacy. Read our privacy policy to understand how we collect, use, and protect your personal information.",

  keywords: "",
};

const Page = () => {

<Head>
        {/* Canonical */}
        <link
          rel="canonical"
          href="https://sudhahospitals.com/privacy-policy/"
        />

        {/* Hreflang */}
        <link
          rel="alternate"
          href="https://sudhahospitals.com/privacy-policy/"
          hreflang="en-in"
        />
        <link
          rel="alternate"
          href="https://sudhahospitals.com/privacy-policy/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://sudhahospitals.com/privacy-policy/"
          hreflang="x-default"
        />
      </Head>

    return (
        <div>

           <Script
        id="privacy-policy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy – Sudha Multispeciality Hospital",
            "url": "https://sudhahospitals.com/privacy-policy",
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
                  "name": "Privacy Policy",
                  "item": "https://sudhahospitals.com/privacy-policy"
                }
              ]
            },
            "mainEntity": {
              "@type": "MedicalClinic",
              "name": "Sudha Multispeciality Hospital – Privacy Policy",
              "url": "https://sudhahospitals.com/privacy-policy",
              "department": {
                "@type": "MedicalClinic",
                "name": "Privacy Policy"
              }
            }
          })
        }}
      />
            <Privacypolicy/>
        </div>
    );
}

export default Page;
