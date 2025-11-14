import React from 'react';
import Diplomacourse from "@/pages/Diplomacourse/Diplomacourse";
import Script from "next/script";
import Head from "next/head";

export const metadata = {
    title: "Post MBBS Diploma Courses | Sudha Multispeciality Hospital",
    description: "Enroll in Post MBBS Diploma Courses at Sudha Multispeciality Hospital in Erode for expert medical training with practical experience.",

    keywords: "Best Medical Courses in Erode, Top Alied Health Service Course, Best Hospital for Vocational Courses, Best Hospital for MBBS Diploma Courses, Best Hospital for BSS Vocational Courses, Vocational Degree Courses in Erode, BSS Vocational Courses in Erode, MBBS Diploma Courses in Erode",
};


const Page = () => {


    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/academics/post-mbbs-diploma-courses/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/post-mbbs-diploma-courses/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/post-mbbs-diploma-courses/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/post-mbbs-diploma-courses/"
            hreflang="x-default"
        />
    </Head>

    return (
        <div>

            <Script
                id="post-mbbs-diploma-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Post MBBS Diploma Courses – Sudha Multispeciality Hospital",
                        "url": "https://sudhahospitals.com/academics/post-mbbs-diploma-courses",
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
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Post MBBS Diploma Courses",
                            "url": "https://sudhahospitals.com/academics/post-mbbs-diploma-courses",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Post MBBS Diploma Courses"
                            }
                        }
                    })
                }}
            />

            <Diplomacourse />
        </div>
    );
}

export default Page;
