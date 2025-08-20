'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Banner from "@/assets/privacypolicy/Banner.png";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },

];
const Privacypolicy = () => {
    return (
        <div>
            <section className="relative -mt-20 lg:-mt-[100px] m-10">
                {/* Banner Container */}
                <div
                    className="relative top-6 max-w-full mx-auto px-4 py-36 z-10 text-white bg-center bg-no-repeat bg-cover lbg-contain rounded-[24px] overflow-hidden banner"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    {/* Breadcrumb + Title */}
                    <div className="pl-8 md:pl-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-white mb-4"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[44px] mb-4"
                        >
                            Privacy Policy
                        </motion.h1>
                    </div>



                    <div className="absolute bottom-0 right-4 sm:right-10 md:right-[-40px] z-30 hidden md:block">
                        <div className="w-[220px] shadow-md overflow-hidden rounded-tl-xl rounded-tr-xl rounded-br-xl">
                            <div className="h-[30%] bg-transparent" />
                            <div className="bg-white p-4">
                                <h3 className="text-[36px] font-bold text-[#2B3990]">40+</h3>
                                <p className="text-lg leading-snug text-black font-semibold">
                                    Years of Trusted <br />
                                    Expertise in <br />
                                    Healthcare
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <div className="max-w-7xl mx-auto px-4 py-10  " >
                <h2 className='text-[24px] pb-2 pt-8'>Sudha Hospitals is located at:</h2>
                <p className='text-[#000000] font-bold text-1xl pb-2 pt-10'>Sudha Hospitals</p>
                <p className='text-[#000000] font-bold text-1xl pb-2 pt-0'>181 Edayankattuvalasu,</p>
                <p className='text-[#000000] font-bold text-1xl pb-2 pt-0'>Erode 638001 - Tamil Nadu , India</p>
                <p className='pt-10'>
                    It is Sudha Hospitals's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to www.sudhahospitals.com/ (hereinafter, "us", "we", or "www.sudhahospitals.com/"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the website and does not apply to our collection of information from other sources.
                    This Privacy Policy, together with the Terms of Service posted on our website, set forth the general rules and policies governing your use of our website. Depending on your activities when visiting our website, you may be required to agree to additional terms of service.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Website Visitors</h2>
                <p className='pt-2'>
                    Like most website operators, Sudha Hospitals collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Sudha Hospitals’ purpose in collecting non-personally identifying information is to better understand how Sudha Hospitals’ visitors use its website. From time to time, Sudha Hospitals may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
                    Sudha Hospitals also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on http://www.sudhahospitals.com/ blog posts. Sudha Hospitals only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Gathering of Personally-Identifying Information</h2>
                <p className='pt-2'>
                    Certain visitors of our website choose to interact with Sudha Hospitals in ways that require us to gather personally-identifying personally identifying information. The amount and type of information that Sudha Hospitals gathers depends on the nature of the interaction. For example, to sign up for a blog at http://www.sudhahospitals.com/ we ask for a username and email address.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Security</h2>
                <p className='pt-2'>
                    Sudha Hospital may revise these terms of use for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Governing Law</h2>
                <p className='pt-2'>
                    The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'> Advertisements</h2>
                <p className='pt-2 '>
                    Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Sudha Hospitals and does not cover the use of cookies by any advertisers.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'> Links To External Sites</h2>
                <p className='pt-2 '>
                    Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to their site. We strongly advise you to review the Privacy Policy and Terms of service of every site you visit.
                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Sudha Hospitals uses Google AdWords for remarketing</h2>
                <p className='pt-2 '>
                    Sudha Hospitals uses remarketing services to advertise on third party websites (including Google). It could mean advertising to previous visitors regarding an uncompleted task on our website, for example using the contact form to inquire. This could be in the form of an advertisement on the Google search results page or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone's past visits. Any data collected will be used in accordance with our privacy policy and Google's privacy policy.
                    You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt-out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Aggregated Statistics</h2>
                <p className='pt-2 '>
                    Sudha Hospitals may collect statistics about the behaviour of visitors to its website. Sudha Hospitals may display this information publicly or provide it to others. However, Sudha Hospitals does not disclose your personally-identifying information.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Cookies</h2>
                <p className='pt-2 '>
                    To enrich and perfect your online experience, Sudha Hospitals uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.
                    A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Sudha Hospitals uses cookies to identify and track visitors, their usage of http://www.sudhahospitals.com/, and their website access preferences. Sudha Hospitals visitors who do not wish to have cookies placed on their computers can change their browser's cookies settings before using Sudha Hospitals’ websites, with the drawback that certain features of our websites may not function properly without the aid of cookies.
                    By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Sudha Hospitals’ use of cookies.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Privacy Policy Changes</h2>
                <p className='pt-2 '>
                    Although most changes are likely to be minor, Sudha Hospitals may change its Privacy Policy from time to time, and at Sudha Hospitals’ sole discretion. Sudha Hospitals encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
                </p>
                <h2 className='text-[24px] pb-2 pt-6'>Credit & Contact Information</h2>
                <p className='pt-2 mb-10'>
                    This privacy policy was created at privacy terms.io. If you have any questions about our Privacy Policy, please contact us via email or phone.
                </p>
            </div>
        </div>
    );
}

export default Privacypolicy;
