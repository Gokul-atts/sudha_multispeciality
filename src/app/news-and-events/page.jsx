import NewsAndEvents from '@/pages/newsEvents/NewsAndEvents'
import React from 'react'
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "News and Events | Sudha Multispeciality Hospital",
  description: "Stay updated with the latest news and events at Sudha Multispeciality Hospital in Erode, including health initiatives, medical updates, and free camps.",

  keywords: "Sudha Hospital News and Events",
};




function page() {
  return (
    <div>
      <Head>
        {/* Canonical */}
        <link
          rel="canonical"
          href="https://sudhahospitals.com/news-and-events/"
        />

        {/* Hreflang */}
        <link
          rel="alternate"
          href="https://sudhahospitals.com/news-and-events/"
          hreflang="en-in"
        />
        <link
          rel="alternate"
          href="https://sudhahospitals.com/news-and-events/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://sudhahospitals.com/news-and-events/"
          hreflang="x-default"
        />
      </Head>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "News and Events – Sudha Multispeciality Hospital",
            url: "https://sudhahospitals.com/news-and-events",
            description:
              "Explore Sudha Multispeciality Hospital in Erode, known for its expert medical team, advanced facilities, and dedication to compassionate healthcare.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://sudhahospitals.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "News and Events",
                  item: "https://sudhahospitals.com/news-and-events",
                },
              ],
            },
            mainEntity: {
              "@type": "MedicalClinic",
              name: "Sudha Multispeciality Hospital – News and Events",
              url: "https://sudhahospitals.com/news-and-events",
              department: {
                "@type": "MedicalClinic",
                name: "News and Events",
              },
            },
          }),
        }}
      />
      <NewsAndEvents />

    </div>
  )
}

export default page
