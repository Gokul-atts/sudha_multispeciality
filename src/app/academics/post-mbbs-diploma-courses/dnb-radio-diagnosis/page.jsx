import Radiodiagnosis from '@/pages/Radiodiagnosis/Radiodiagnosisdetails';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
    title: "DNB – Radio Diagnosis | Sudha Multispeciality Hospital",
    description: "Advance your career with DNB – Radio Diagnosis at Sudha Multispeciality Hospital, offering comprehensive training and clinical experience.",

    keywords: "Best Medical Courses in Erode, Top Alied Health Service Course, Best Hospital for Vocational Courses, Best Hospital for MBBS Diploma Courses, Best Hospital for BSS Vocational Courses, Vocational Degree Courses in Erode, BSS Vocational Courses in Erode, MBBS Diploma Courses in Erode",
};



const Page = () => {


    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/academics/post-mbbs-diploma-courses/dnb-radio-diagnosis/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/post-mbbs-diploma-courses/dnb-radio-diagnosis/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/post-mbbs-diploma-courses/dnb-radio-diagnosis/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/post-mbbs-diploma-courses/dnb-radio-diagnosis/"
            hreflang="x-default"
        />
    </Head>

    return (
        <div>


            <Script
                id="dnb-radio-diagnosis-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "DNB – Radio Diagnosis – Sudha Multispeciality Hospital",
                        "url": "https://sudhahospitals.com/academics/post-mbbs-diploma-courses/dnb-radio-diagnosis",
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
                                    "name": "Post MBBS Diploma Courses",
                                    "item": "https://sudhahospitals.com/academics/post-mbbs-diploma-courses"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 4,
                                    "name": "DNB – Radio Diagnosis",
                                    "item": "https://sudhahospitals.com/academics/post-mbbs-diploma-courses/dnb-radio-diagnosis"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – DNB – Radio Diagnosis",
                            "url": "https://sudhahospitals.com/academics/post-mbbs-diploma-courses/dnb-radio-diagnosis",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "DNB – Radio Diagnosis"
                            }
                        }
                    })
                }}
            />
            <Radiodiagnosis />
        </div>
    );
}

export default Page;
