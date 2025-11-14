import Careers from '@/pages/career/careers';
import React from 'react';
import Head from "next/head";
import Script from "next/script";


export const metadata = {
    title: "Careers at Sudha Hospitals | Sudha Multispeciality Hospital",
    description: "Explore job vacancies at Sudha Hospitals in Erode. Apply for the best and highly paid jobs in healthcare with opportunities for career growth and development.",

    keywords: "Job Vacancies in Sudha Hospitals, Best and Highly Paid Jobs in Erode",
};


const Page = () => {

    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/careers/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/careers/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/careers/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/careers/"
            hreflang="x-default"
        />
    </Head>

    return (
        <div>

            <Script
                id="careers-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Careers – Sudha Multispeciality Hospital",
                        "headline": "Careers",
                        "url": "https://sudhahospitals.com/careers",
                        "inLanguage": "en-IN",
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
                                    "name": "Careers",
                                    "item": "https://sudhahospitals.com/careers"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Careers",
                            "url": "https://sudhahospitals.com/careers",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Careers"
                            }
                        }
                    })
                }}
            />

            <Careers />
        </div>
    );
}

export default Page;
