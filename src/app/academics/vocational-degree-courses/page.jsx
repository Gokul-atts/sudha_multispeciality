import VocationalDegree from '@/pages/vocationaldegree/vocationaldegree';
import React from 'react';
import Script from "next/script";
import Head from "next/head";


export const metadata = {
    title: "Vocational Degree Courses | Sudha Multispeciality Hospital",
    description: "Advance your career with Vocational Degree Courses at Sudha Multispeciality Hospital, providing hands-on experience and professional skills.",

    keywords: "Best Medical Courses in Erode, Top Alied Health Service Course, Best Hospital for Vocational Courses, Best Hospital for MBBS Diploma Courses, Best Hospital for BSS Vocational Courses, Vocational Degree Courses in Erode, BSS Vocational Courses in Erode, MBBS Diploma Courses in Erode",
};

const Page = () => {

    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/academics/vocational-degree-courses/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/vocational-degree-courses/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/vocational-degree-courses/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/academics/vocational-degree-courses/"
            hreflang="x-default"
        />
    </Head>



    return (
        <div>

            <Script
                id="vocational-degree-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Vocational Degree Courses – Sudha Multispeciality Hospital",
                        "url": "https://sudhahospitals.com/academics/vocational-degree-courses",
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
                                    "name": "Vocational Degree Courses",
                                    "item": "https://sudhahospitals.com/academics/vocational-degree-courses"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Vocational Degree Courses",
                            "url": "https://sudhahospitals.com/academics/vocational-degree-courses",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Vocational Degree Courses"
                            }
                        }
                    })
                }}
            />
            <VocationalDegree />
        </div>
    );
}

export default Page;
