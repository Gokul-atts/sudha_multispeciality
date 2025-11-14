import LactionandMaternal from '@/pages/lactationandmaternalhealth/lactationandmaternalhealth';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
    title: "Lactation and Maternal Health | Sudha Multispeciality Hospital",
    description: "Sudha Multispeciality Hospital is the top Mother and Child Care Hospital in Erode, offering expert Lactation & Maternal Health Consultants for complete support before and after childbirth.",

    keywords: "Lactation & Maternal Health Consultant in Erode, Mother and Child Care Hospital in Erode",
};


const Page = () => {

    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/allied-health-services/lactation-and-maternal-health/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/allied-health-services/lactation-and-maternal-health/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/allied-health-services/lactation-and-maternal-health/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/allied-health-services/lactation-and-maternal-health/"
            hreflang="x-default"
        />
    </Head>

    return (
        <div>
            <Script
                id="faq-schema-breastfeeding"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How to feed breastmilk to a newborn baby?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Breastmilk should be fed directly from the breast, ensuring proper latching for effective feeding and comfort. In cases where direct breastfeeding is not possible, expressed milk can be given using a sterilized spoon, cup, or bottle. Sudha Multispeciality Hospital, a trusted Mother and Child Care Hospital in Erode, has lactation & maternal health consultants and specialists who guide new mothers in correct feeding techniques.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the first stage of lactation?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The first stage of lactation is colostrum production, beginning during pregnancy and continuing after delivery. Colostrum is thick, yellowish milk rich in antibodies and nutrients vital for the newborn’s immunity. Experts at Sudha Multispeciality Hospital, the leading centre with lactation & maternal health consultants in Erode, support mothers through every stage of lactation.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the normal color of breast milk?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Breast milk can appear white, bluish, or slightly yellow depending on its stage (foremilk or hindmilk) and maternal nutrition. All these variations are considered normal. Specialists at Sudha Multispeciality Hospital, the best Mother and Child Care Hospital in Erode, provide reassurance and guidance to mothers about healthy lactation.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What food to avoid when breastfeeding?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Breastfeeding mothers are advised to limit caffeine, alcohol, spicy foods, and highly processed items that may affect digestion in infants. Sudha Multispeciality Hospital has expert lactation & maternal health consultants in Erode who provide personalised dietary advice for safe breastfeeding.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What food to eat when breastfeeding?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A balanced diet rich in proteins, whole grains, fruits, vegetables, and plenty of fluids is recommended to maintain milk supply and maternal health. The team of specialists at Sudha Multispeciality Hospital, the best Mother and Child Care Hospital in Erode, ensures mothers receive tailored nutrition plans during breastfeeding.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to increase maternal nutrition?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Maternal nutrition can be improved with a diet rich in iron, calcium, folic acid, and protein, along with supplements prescribed by healthcare providers. Lactation & maternal health consultants in Erode at Sudha Multispeciality Hospital offer continuous monitoring and expert guidance for optimal nutrition.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What are the major health concerns during pregnancy?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Common concerns include anaemia, gestational diabetes, hypertension, thyroid disorders, and nutritional deficiencies. Early diagnosis and timely care are essential for maternal and foetal health. Sudha Multispeciality Hospital, the best Mother and Child Care Hospital in Erode, has experienced specialists to manage high-risk pregnancies and maternal health concerns effectively.",
                                },
                            },
                        ],
                    }),
                }}
            />

            <Script
                id="lactation-maternal-health-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Lactation & Maternal Health – Sudha Multispeciality Hospital",
                        "headline": "Lactation & Maternal Health – Allied Health Services",
                        "url": "https://sudhahospitals.com/allied-health-services/lactation-and-maternal-health",
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
                                    "name": "Lactation & Maternal Health",
                                    "item":
                                        "https://sudhahospitals.com/allied-health-services/lactation-and-maternal-health"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Lactation & Maternal Health",
                            "url": "https://sudhahospitals.com/allied-health-services/lactation-and-maternal-health",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Lactation & Maternal Health"
                            }
                        }
                    })
                }}
            />


            <LactionandMaternal />
        </div>
    );
}

export default Page;
