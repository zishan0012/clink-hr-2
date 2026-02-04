import React from 'react';

import disclaimer from '../../assets/company-img/disclaimer.avif';

const Disclaimer = () => {
    // Standard sections data
    const sections = [
        {
            title: "General Information Disclaimer",
            content: "The information provided on the CLink HR website is for general informational purposes only. While we strive to ensure that all information on this website is accurate, current, and reliable, CLink HR makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of any information, services, or related content contained on the website. Any reliance you place on such information is strictly at your own risk."
        },
        {
            title: "No Professional or Legal Advice",
            content: "The content on this website does not constitute legal, financial, tax, or professional advice. CLink HR recommends that users:",
            bullets: [
                "Seek independent professional advice before making business, legal, or employment-related decisions",
                "Verify statutory, regulatory, or compliance requirements applicable to their organization"
            ],
            footer: "We are not responsible for decisions taken based on information provided on this website."
        },
        {
            title: "Service Scope Disclaimer",
            content: "CLink HR operates as a workforce solutions and service coordination platform. Actual service delivery may involve independent professionals, service partners, or third-party providers operating within a managed ecosystem. CLink HR does not guarantee:",
            bullets: [
                "Specific hiring outcomes or timelines",
                "Candidate performance or retention",
                "Business results arising from service usage"
            ],
            footer: "All services are delivered subject to mutually agreed terms and service conditions."
        },
        {
            title: "Third-Party & Partner Disclaimer",
            content: "Certain services, tools, or content may be delivered or supported by independent partners, third-party platforms or service providers, or technology ecosystems such as Zryoss. CLink HR is not responsible for:",
            bullets: [
                "Third-party platform availability",
                "External service provider actions beyond agreed coordination scope",
                "Technical issues or interruptions caused by third parties"
            ]
        },
        {
            title: "Partner Independence Disclaimer",
            content: "Partners associated with CLink HR operate as independent business entities under their own brand identity and management structure. Nothing on this website shall be construed as:",
            bullets: [
                "Creating an employer–employee relationship",
                "Forming a partnership, joint venture, or agency relationship"
            ],
            footer: "between CLink HR and any partner, service provider, or individual unless explicitly stated in a written agreement."
        },
        {
            title: "Recruitment & Employment Disclaimer",
            content: "CLink HR:",
            bullets: [
                "Does not act as an employer for candidates unless explicitly stated",
                "Does not guarantee job placement or employment outcomes",
                "Is not responsible for employment terms decided between employers and candidates"
            ],
            footer: "All hiring decisions rest solely with the hiring organization."
        },
        {
            title: "Payroll & HR Services Disclaimer",
            content: "Payroll, HR operations, and compliance-related services are provided based on:",
            bullets: [
                "Information supplied by clients",
                "Applicable laws and regulations at the time of service"
            ],
            footer: "CLink HR shall not be held responsible for: Errors arising from incomplete or incorrect data provided by clients, Regulatory changes after service delivery, or Client non-compliance with statutory obligations."
        },
        {
            title: "Limitation of Liability",
            content: "To the maximum extent permitted by applicable law, CLink HR shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of this website or services. This includes, without limitation:",
            bullets: [
                "Loss of data",
                "Loss of business or revenue",
                "Employment or workforce-related disputes"
            ]
        },
        {
            title: "Website Availability Disclaimer",
            content: "CLink HR does not guarantee that:",
            bullets: [
                "The website will always be available or uninterrupted",
                "The website is free from viruses or harmful components"
            ],
            footer: "Users are responsible for ensuring appropriate safeguards while accessing the website."
        },
        {
            title: "Changes to Disclaimer",
            content: "CLink HR reserves the right to:",
            bullets: [
                "Modify, update, or change this Disclaimer at any time",
                "Update website content without prior notice"
            ],
            footer: "Continued use of the website constitutes acceptance of the revised Disclaimer."
        },
        {
            title: "Governing Law",
            content: "This Disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes arising from website usage shall be subject to the exclusive jurisdiction of courts located in India."
        }
    ];

    return (
        <div style={{ backgroundColor: '#f8fafc', color: '#1e293b', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
            {/* Simple Hero with Background Image */}
            <header style={{
                position: 'relative',
                backgroundColor: '#0f172a',
                padding: '140px 20px',
                textAlign: 'center',
                backgroundImage: 'url(' + disclaimer + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden'
            }}>
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.75)',
                    zIndex: 1
                }}></div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: '900', margin: '0 0 20px 0' }}>
                        Website <span style={{ color: '#f97316' }}>Disclaimer</span>
                    </h1>
                    <p style={{ color: '#cbd5e1', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        Important legal information and disclosures regarding the use of the CLink HR platform.
                    </p>
                </div>
            </header>

            {/* Content Container */}
            <main style={{ padding: '60px 20px', flexGrow: 1 }}>
                <div style={{
                    maxWidth: '850px',
                    margin: '0 auto',
                    backgroundColor: '#ffffff',
                    padding: '40px',
                    borderRadius: '24px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e2e8f0'
                }}>
                    {sections.map((section, idx) => (
                        <article key={idx} style={{ marginBottom: '50px' }}>
                            <h2 style={{
                                color: '#0f172a',
                                borderLeft: '5px solid #f97316',
                                paddingLeft: '15px',
                                fontSize: '1.75rem',
                                fontWeight: '700',
                                margin: '0 0 20px 0'
                            }}>
                                {section.title}
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#475569', margin: '0 0 15px 0' }}>
                                {section.content}
                            </p>

                            {section.bullets && (
                                <ul style={{ listStyleType: 'disc', color: '#475569', fontSize: '1.1rem', margin: '0 0 15px 25px' }}>
                                    {section.bullets.map((bullet, k) => (
                                        <li key={k} style={{ marginBottom: '8px' }}>{bullet}</li>
                                    ))}
                                </ul>
                            )}

                            {section.footer && (
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#475569', margin: '0' }}>
                                    {section.footer}
                                </p>
                            )}
                        </article>
                    ))}

                    <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '40px 0' }} />

                    <section>
                        <h2 style={{ color: '#0f172a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px' }}>Contact Information</h2>
                        <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '15px' }}>
                            For questions regarding this Disclaimer, please contact:
                        </p>
                        <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                            <p style={{ fontWeight: '700', color: '#0f172a', margin: '0 0 5px 0' }}>CLink HR – Legal & Compliance Team</p>
                            <p style={{ color: '#475569', margin: '0' }}>Email: legal@clinkhr.com</p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Statement Footer */}
            <div style={{ backgroundColor: '#0f172a', padding: '50px 20px', textAlign: 'center' }}>
                <p style={{ color: '#f97316', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                    Disclaimer Summary Statement
                </p>
                <p style={{ color: '#ffffff', fontSize: '1.2rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                    "CLink HR provides information and services in good faith, with structured coordination and professional intent, while limiting liability to the extent permitted by law."
                </p>
            </div>
        </div>
    );
};

export default Disclaimer;
