import Healthpackage from '@/pages/Healthpackage/Healthpackage';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
    title: "Health Package | Sudha Multispeciality Hospital",
    description: "Affordable health packages at Sudha Multispeciality, the Best Hospital for Master Health Checkup in Erode, with complete preventive care.",

    keywords: "Affordable health package, Best hospital for Master Health Checkup in Erode",
};


const Page = () => {

    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/facilities/health-package/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/facilities/health-package/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/facilities/health-package/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/facilities/health-package/"
            hreflang="x-default"
        />
    </Head>

    return (
        <div>

            <Script
                id="faq-schema-health-checkup"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Which hospital is best for health checkups?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Sudha Multispeciality Hospital is considered the best hospital for master health checkup in Erode, as it has affordable health packages, advanced diagnostic facilities, and experienced doctors.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which test is best for a full body checkup?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A comprehensive health checkup is regarded as the best test for a full-body evaluation, and Sudha Multispeciality Hospital provides this at an affordable price with all essential tests included.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which hospital provides a master health checkup for a low cost?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Sudha Multispeciality Hospital in Erode provides master health checkup at a low cost through affordable health packages that cover a wide range of tests without compromising quality.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the importance of a medical check-up every year?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "An annual medical checkup is important to detect health issues at an early stage and prevent future complications. Sudha Multispeciality Hospital offers different health packages suitable to the patient’s health records.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the price of a master health checkup in Erode?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The price of a master health checkup in Erode at Sudha Multispeciality Hospital is affordable, with packages starting from Rs.2000, at a cost-effective range, ensuring complete care within budget.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What tests are recommended for women?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A comprehensive health checkup for women, including mammogram, Pap smear, blood profile, and essential screenings, is recommended to diagnose underlying medical conditions. Sudha Multispeciality Hospital, the best hospital for master health checkup in Erode, offers these tests as part of its affordable health packages.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many tests are included in a full-body checkup for men?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A general full-body checkup for men includes 13 to 15 essential tests, with additional investigations recommended based on specific medical conditions. Sudha Multispeciality Hospital in Erode provides these under affordable health packages designed for men’s overall well-being.",
                                },
                            },
                        ],
                    }),
                }}
            />

            <Script
                id="health-package-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Health Package – Sudha Multispeciality Hospital",
                        "url": "https://sudhahospitals.com/facilities/health-package",
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
                                    "name": "Facilities",
                                    "item": "https://sudhahospitals.com/#facilities"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Health Package",
                                    "item": "https://sudhahospitals.com/facilities/health-package"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Health Package",
                            "url": "https://sudhahospitals.com/facilities/health-package",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Health Package"
                            }
                        }
                    })
                }}
            />

            <Healthpackage />
        </div>
    );
}

export default Page;
