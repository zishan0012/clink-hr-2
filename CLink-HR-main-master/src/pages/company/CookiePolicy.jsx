import React from 'react';
import cookies1 from '../../assets/company-img/cookies.avif';

const CookiePolicy = () => {
    const sections = [
        {
            title: "Purpose of This Policy",
            content: "This Cookie Policy explains how cookies and similar technologies are used on the website to ensure optimal functionality, enhance user experience, and support security and performance objectives. By accessing or using the website, users consent to the use of cookies in accordance with this Policy, unless cookie preferences are managed or restricted through browser settings."
        },
        {
            title: "What Are Cookies",
            content: "Cookies are small text files placed on a user’s device when a website is accessed. They help recognize user preferences, enable core website functions, and collect aggregated usage information. Cookies do not typically contain information that directly identifies an individual."
        },
        {
            title: "Types of Cookies Used",
            subsections: [
                {
                    subtitle: "Strictly Necessary Cookies",
                    content: "These cookies are essential for the website to function properly. They enable secure navigation, access to protected areas, and basic system functionality. Disabling these cookies may affect website usability."
                },
                {
                    subtitle: "Performance & Analytics Cookies",
                    content: "These cookies collect information about how visitors interact with the website. They help measure website traffic, identifies usage patterns, and monitor system performance. Data collected is aggregated and anonymized where possible."
                },
                {
                    subtitle: "Functionality Cookies",
                    content: "These cookies allow the website to remember user preferences, provide enhanced features, and deliver a more personalized experience. They may store settings such as language or region selection."
                },
                {
                    subtitle: "Third-Party Cookies",
                    content: "Some cookies may be placed by third-party service providers that support analytics, security, and integrations. Third-party cookies are governed by the respective providers’ privacy and cookie policies."
                }
            ]
        },
        {
            title: "Cookie Duration",
            content: "Cookies may be session-based (deleted when the browser is closed) or persistent (stored for a defined period to remember preferences). The duration depends on the specific purpose and type of cookie used."
        },
        {
            title: "Use of Similar Technologies",
            content: "In addition to cookies, similar technologies such as web beacons, pixels, and local storage may be used for performance measurement and functionality enhancement."
        },
        {
            title: "Managing Cookie Preferences",
            content: "Users may manage or restrict cookies by adjusting browser settings, deleting existing cookies, or blocking certain cookie categories. Please note that restricting cookies may limit website functionality or features."
        },
        {
            title: "Consent & Withdrawal",
            content: "Where required by applicable law, cookie usage is based on user consent. Consent may be withdrawn at any time by modifying browser or device settings. Withdrawal of consent does not affect the legality of prior data processing."
        },
        {
            title: "Data Protection & Privacy",
            content: "Information collected through cookies is processed in accordance with the Privacy Policy and applicable data protection laws. Cookies are not used to sell personal data or track users beyond stated purposes."
        },
        {
            title: "Policy Updates",
            content: "This Cookie Policy may be updated periodically to reflect changes in technology, legal requirements, or operational practices. Continued use of the website constitutes acceptance of the updated Policy."
        },
        {
            title: "Governing Law",
            content: "This Policy shall be governed by and construed in accordance with the laws of India. Courts within India shall have exclusive jurisdiction over any disputes arising from cookie usage."
        }
    ];

    return (
        <div style={{ backgroundColor: '#f8fafc', color: '#1e293b', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
            {/* Hero Section */}
            <header style={{
                position: 'relative',
                backgroundColor: '#0f172a',
                padding: '140px 20px',
                textAlign: 'left',
                backgroundImage: 'url(' + cookies1 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)', zIndex: 1 }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: '900', margin: '0 0 20px 0' }}>
                        Cookie <span style={{ color: '#6366f1' }}>Policy</span>
                    </h1>
                    <p style={{ color: '#cbd5e1', fontSize: '1.2rem', maxWidth: '750px', margin: '0', lineHeight: '1.6' }}>
                        Understanding how we use cookies to improve your experience on our platform.
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
                                borderLeft: '5px solid #6366f1',
                                paddingLeft: '15px',
                                fontSize: '1.75rem',
                                fontWeight: '700',
                                margin: '0 0 20px 0'
                            }}>
                                {section.title}
                            </h2>
                            {section.content && (
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#475569', margin: '0 0 15px 0' }}>
                                    {section.content}
                                </p>
                            )}

                            {section.subsections && section.subsections.map((sub, sIdx) => (
                                <div key={sIdx} style={{ marginTop: '20px' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155', marginBottom: '10px' }}>{sub.subtitle}</h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#475569', margin: '0 0 15px 0' }}>
                                        {sub.content}
                                    </p>
                                </div>
                            ))}
                        </article>
                    ))}

                    <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '40px 0' }} />

                    <section>
                        <h2 style={{ color: '#0f172a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px' }}>Cookie Policy Statement</h2>
                        <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                            <p style={{ color: '#475569', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.6', margin: '0' }}>
                                "Cookies are used responsibly to support functionality, performance, and security while respecting user privacy and choice."
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default CookiePolicy;
