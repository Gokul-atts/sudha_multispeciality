import Alliedhealthservice from '@/pages/AlliedhealthService/AlliedhealthService';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
    title: "Best Allied Health Services in Erode | Sudha Multispeciality Hospital",
    description: "Sudha Multispeciality Hospital, the best hospital in Erode for Allied Health Services, offers expert care, advanced therapies, and comprehensive support for all patient needs.",

    keywords: "Best Hospital for Physiotherapy, Best Hospital for Dietetics, Best Hospital for Lactation and Maternal Health, Best Hospital for Nursing Services, Best Hospital for Psychology, Allied Health Services in Erode, Best Hospital in Erode for Allied Health Services",
};

const Page = () => {


    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/allied-health-services/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/allied-health-services/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/allied-health-services/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/allied-health-services/"
            hreflang="x-default"
        />
    </Head>


    return (
        <div>

            <Script
                id="allied-health-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Allied Health Services – Sudha Multispeciality Hospital",
                        "headline": "Allied Health Services",
                        "url": "https://sudhahospitals.com/allied-health-services",
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
                                    "name": "Resources",
                                    "item": "https://sudhahospitals.com/#resources"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Allied Health Services",
                                    "item": "https://sudhahospitals.com/allied-health-services"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Allied Health Services",
                            "url": "https://sudhahospitals.com/allied-health-services",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Allied Health Services"
                            }
                        }
                    })
                }}
            />

            <Alliedhealthservice />
        </div>
    );
}

export default Page;
