import EthicsCommitte from '@/pages/ethicscommittee/ethicscommittee';
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
    title: "Ethics Committee | Sudha Multispeciality Hospital",
    description: "Ethics Committee at Sudha Hospital oversees medical research, clinical trials, and patient care to maintain the highest ethical standards.",

    keywords: "",
};

const Page = () => {

    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/academics/ethics-committee/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/ethics-committee/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/ethics-committee/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/ethics-committee/"
            hreflang="x-default"
        />
    </Head>

    return (
        <div>

            <Script
                id="ethics-committee-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Ethics Committee – Sudha Multispeciality Hospital",
                        "url": "https://sudhahospitals.com/academics/ethics-committee",
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
                                    "name": "Academics",
                                    "item": "https://sudhahospitals.com/#academics"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Ethics Committee",
                                    "item": "https://sudhahospitals.com/academics/ethics-committee"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Ethics Committee",
                            "url": "https://sudhahospitals.com/academics/ethics-committee",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Ethics Committee"
                            }
                        }
                    })
                }}
            />

            <Script
                id="ethics-committee-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Ethics Committee – Sudha Multispeciality Hospital",
                        "headline": "Ethics Committee",
                        "url": "https://sudhahospitals.com/academics/ethics-committee",
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
                                    "name": "Academics",
                                    "item": "https://sudhahospitals.com/#academics"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Ethics Committee",
                                    "item": "https://sudhahospitals.com/academics/ethics-committee"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "Sudha Multispeciality Hospital – Ethics Committee",
                            "url": "https://sudhahospitals.com/academics/ethics-committee",
                            "department": {
                                "@type": "Organization",
                                "name": "Ethics Committee"
                            }
                        }
                    })
                }}
            />

            <EthicsCommitte />
        </div>
    );
}

export default Page;
