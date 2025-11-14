import Centreofexcellence from '@/pages/Centreofexcellence/Centreofexcellence';
import React from 'react';
import Script from "next/script";
import Head from "next/head";

export const metadata = {
    title: "Centre of Excellence | Sudha Multispeciality Hospital",
    description: "",

    keywords: "Best Cardiology Hospital in Erode, Best Cardiologist in Erode, Best Hospital for Heart Treatments, Best Pulmonology Hospital in Erode, Best Pulmonologist in Erode, Best Hospital for Kidney Treatment, Best Neurology Hosptial in Erode, Best Neurologist in Erode, Best Hospital for Brain, Spinal cord, and Nervous System, Best Mother and Child Care Hospital in Erode, Best Women Care Centre in Erode, Best Baby Care Hospital in Erode, Best Fertility Hospital in Erode, Best IVF Hospital in Erode, Best Cancer Hosptial in Erode, Best Hospital for Oncology Treatment, Best Oncologist in Erode",
};


const Page = () => {

    <Head>
        {/* Canonical */}
        <link
            rel="canonical"
            href="https://sudhahospitals.com/specialities/centre-of-excellence/"
        />

        {/* Hreflang */}
        <link
            rel="alternate"
            href="https://sudhahospitals.com/specialities/centre-of-excellence/"
            hreflang="en-in"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/specialities/centre-of-excellence/"
            hreflang="en"
        />
        <link
            rel="alternate"
            href="https://sudhahospitals.com/specialities/centre-of-excellence/"
            hreflang="x-default"
        />
    </Head>
    return (
        <div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Centre of Excellence",
                        url: "https://sudhahospitals.com/specialities/centre-of-excellence/",
                        description:
                            "Sudha Multispeciality Hospital in Erode features Centres of Excellence with advanced technology, expert doctors, and specialized care across medical specialties.",
                        provider: {
                            "@type": "Hospital",
                            name: "Sudha Multispeciality Hospital",
                            url: "https://sudhahospitals.com/",
                        },
                        serviceType: [
                            "Cardiology",
                            "Pulmonology",
                            "Neurology",
                            "Mother and Child Care",
                            "Cancer Centre",
                            "Fertility Care",
                        ],
                        areaServed: {
                            "@type": "City",
                            name: "Erode",
                        },
                        availableChannel: {
                            "@type": "ServiceChannel",
                            serviceUrl: "https://sudhahospitals.com/#book-appointment",
                            description: "Book an appointment",
                        },
                    }),
                }}
            />


           

            <Script
                id="centre-of-excellence-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Centre of Excellence – Sudha Multispeciality Hospital",
                        "url": "https://sudhahospitals.com/specialities/centre-of-excellence",
                        "description": "Sudha Multispeciality Hospital in Erode features Centres of Excellence with advanced technology, expert doctors, and specialized care across medical specialities.",
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
                                    "name": "Specialities",
                                    "item": "https://sudhahospitals.com/specialities"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Centre of Excellence",
                                    "item": "https://sudhahospitals.com/specialities/centre-of-excellence"
                                }
                            ]
                        },
                        "mainEntity": {
                            "@type": "MedicalClinic",
                            "name": "Sudha Multispeciality Hospital – Centre of Excellence",
                            "url": "https://sudhahospitals.com/specialities/centre-of-excellence",
                            "department": {
                                "@type": "MedicalClinic",
                                "name": "Centre of Excellence"
                            }
                        }
                    })
                }}
            />
            <Centreofexcellence />
        </div>
    );
}

export default Page;
