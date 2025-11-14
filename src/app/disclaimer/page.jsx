import Disclaimer from '@/pages/Disclaimer/Disclaimer';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
    title: "Disclaimer and Events | Sudha Multispeciality Hospital",
    description: "",

    keywords: "Sudha Multispeciality Hospital’s disclaimer informs users about the accuracy and limitations of content provided on our website.",
};


const Page = () => {

    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/disclaimer/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/disclaimer/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/disclaimer/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/disclaimer/"
            hreflang="x-default"
        />
    </Head>


    return (
        <div>

            <Script
                id="disclaimer-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Disclaimer – Sudha Multispeciality Hospital",
                        "url": "https://sudhahospitals.com/disclaimer",
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
                                    "name": "Disclaimer",
                                    "item": "https://sudhahospitals.com/disclaimer"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Disclaimer",
                            "url": "https://sudhahospitals.com/disclaimer",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Disclaimer"
                            }
                        }
                    })
                }}
            />
            <Disclaimer />
        </div>
    );
}

export default Page;
