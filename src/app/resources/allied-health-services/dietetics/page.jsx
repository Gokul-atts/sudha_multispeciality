import Dietetics from '@/pages/dietetics/dietetics';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
    title: "Dietetics | Sudha Multispeciality Hospital",
    description: "Consult the best dietitian in Erode at Sudha Multispeciality Hospital. As the best dietetics hospital in Erode, we provide tailored nutrition care and healthy lifestyle plans.",

    keywords: "Best dietitian in Erode, Best Dietetics hospital in Erode",
};


const Page = () => {

    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/allied-health-services/dietetics/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/allied-health-services/dietetics/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/allied-health-services/dietetics/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/allied-health-services/dietetics/"
            hreflang="x-default"
        />
    </Head>


    return (
        <div>



            <Script
                id="faq-schema-nutrition"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What are the signs of poor nutrition?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Signs of poor nutrition may include fatigue, weakness, hair loss, brittle nails, frequent illnesses, digestive issues, and delayed wound healing. The best dietitians in Erode at Sudha Multispeciality Hospital provide assessments and personalised plans to address nutritional deficiencies.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which vitamin deficiencies are most harmful to health?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Deficiencies in vitamins such as A, D, B12, and C can lead to vision problems, weakened immunity, anaemia, and bone disorders. At Sudha Multispeciality Hospital, recognised as the best dietetics hospital in Erode, these deficiencies are detected early and managed with expert guidance.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What are the signs of good nutrition?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Signs of good nutrition include healthy skin and hair, proper weight, strong immunity, high energy levels, and good mental focus. The best dietitians in Erode at Sudha Multispeciality Hospital design personalised diets to help achieve and maintain these health indicators.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What diseases are caused by poor dietary habits?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Poor dietary habits can contribute to obesity, diabetes, heart disease, hypertension, digestive disorders, and nutrient deficiencies. Sudha Multispeciality Hospital, the best dietetics hospital in Erode, offers dietary counselling to prevent and manage these conditions effectively.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is a healthy diet for the human body?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A healthy diet includes balanced portions of proteins, carbohydrates, healthy fats, vitamins, and minerals. Fresh fruits, vegetables, whole grains, lean proteins, and hydration are essential. Expert dietitians at Sudha Multispeciality Hospital provide customized meal plans for optimal health.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to start eating healthy?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Starting a healthy diet involves gradual changes such as incorporating more whole foods, reducing processed foods, controlling portion sizes, and maintaining regular meal timings. Sudha Multispeciality Hospital, recognised as the best dietetics hospital in Erode, offers guidance and follow-up support for a sustainable healthy lifestyle.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What foods should you avoid for good health?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Highly processed foods, excessive sugar, trans fats, and deep-fried items should be limited. The best dietitians in Erode at Sudha Multispeciality Hospital provide practical advice on food choices to support long-term health and prevent lifestyle diseases.",
                                },
                            },
                        ],
                    }),
                }}
            />


            <Script
                id="dietetics-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Dietetics – Sudha Multispeciality Hospital",
                        "headline": "Dietetics",
                        "url": "https://sudhahospitals.com/allied-health-services/dietetics",
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
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 4,
                                    "name": "Dietetics",
                                    "item": "https://sudhahospitals.com/allied-health-services/dietetics"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Dietetics",
                            "url": "https://sudhahospitals.com/allied-health-services/dietetics",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Dietetics"
                            }
                        }
                    })
                }}
            />
            <Dietetics />
        </div>
    );
}

export default Page;
