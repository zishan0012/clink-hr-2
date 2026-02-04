import React from 'react';
import privacy from '../../assets/company-img/privacy.avif';
const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Introduction",
            content: "This Privacy Policy explains how personal data is collected, used, disclosed, stored, and protected when individuals access the website, engage with services, or interact through any digital or offline channels operated by the organization. The organization is committed to safeguarding privacy and ensuring that personal information is handled in a lawful, fair, and transparent manner."
        },
        {
            title: "Scope of This Policy",
            content: "This Policy applies to:",
            bullets: [
                "Website visitors",
                "Clients and prospective clients",
                "Service partners and independent professionals",
                "Candidates and job applicants",
                "Any individual whose personal data is processed in connection with service delivery"
            ],
            footer: "By accessing the website or engaging with services, users acknowledge and agree to the practices described herein."
        },
        {
            title: "Information Collected",
            content: "Personal data may be collected directly or indirectly through various interactions.",
            subsections: [
                {
                    subtitle: "Information Provided Voluntarily",
                    bullets: [
                        "Name, contact details, and business information",
                        "Employment and professional details",
                        "Identification and verification data (where applicable)",
                        "Documents shared for recruitment, payroll, or HR-related services"
                    ]
                },
                {
                    subtitle: "Information Collected Automatically",
                    bullets: [
                        "IP address and device information",
                        "Browser type and usage data",
                        "Website interaction and navigation behavior"
                    ]
                }
            ]
        },
        {
            title: "Purpose of Data Processing",
            content: "Personal data is collected and processed for legitimate business purposes, including but not limited to:",
            bullets: [
                "Service coordination and delivery",
                "Recruitment, payroll, and HR operations",
                "Communication and relationship management",
                "Compliance with legal and regulatory obligations",
                "Website functionality, security, and performance improvement"
            ],
            footer: "Data is processed only to the extent necessary to fulfill these purposes."
        },
        {
            title: "Legal Basis for Processing",
            content: "Personal data is processed based on one or more of the following legal grounds:",
            bullets: [
                "Consent provided by the individual",
                "Performance of contractual obligations",
                "Compliance with legal or regulatory requirements",
                "Legitimate business interests, provided such interests do not override individual rights"
            ]
        },
        {
            title: "Data Sharing & Disclosure",
            content: "Personal data may be shared on a need-to-know basis with authorized internal teams, independent service partners, technology platforms, and regulatory or legal authorities where required by law. All third parties are expected to maintain appropriate confidentiality, security, and data protection standards."
        },
        {
            title: "Partner & Third-Party Ecosystem",
            content: "Certain services are delivered through an ecosystem of independent partners and technology platforms. These entities process personal data solely for defined operational purposes and under appropriate contractual and security safeguards. The organization does not sell or commercially exploit personal data."
        },
        {
            title: "Data Retention",
            content: "Personal data is retained only for as long as necessary to fulfill the purpose for which it was collected, meet contractual/legal requirements, or resolve disputes. Once data is no longer required, it is securely deleted or anonymized."
        },
        {
            title: "Data Security Measures",
            content: "Reasonable administrative, technical, and organizational measures are implemented to protect personal data against unauthorized access, accidental loss, or misuse. Despite these safeguards, no method of transmission or storage can be guaranteed as completely secure."
        },
        {
            title: "Individual Rights",
            content: "Subject to applicable law, individuals may have the right to access, correct, delete, or restrict processing of their personal data. Requests may be subject to verification and legal limitations."
        },
        {
            title: "Cookies & Tracking Technologies",
            content: "The website may use cookies or similar technologies to enhance user experience, analyze traffic, and improve functionality. Users may control or disable cookies through browser settings."
        },
        {
            title: "Children’s Privacy",
            content: "Services and digital platforms are not intended for individuals under the age of 18. Personal data of minors is not knowingly collected."
        },
        {
            title: "External Links Disclaimer",
            content: "The website may contain links to third-party websites. This Privacy Policy does not apply to external platforms, and no responsibility is assumed for their content or privacy practices."
        },
        {
            title: "Policy Updates & Modifications",
            content: "This Privacy Policy may be updated periodically. Continued use of the website or services after updates constitutes acceptance of the revised Policy."
        },
        {
            title: "Governing Law & Jurisdiction",
            content: "This Privacy Policy and any matters related to data processing shall be governed by and construed in accordance with the laws of India. Courts located within India shall have exclusive jurisdiction.",
            bullets: [
                "All practices shall be interpreted in line with applicable Indian laws.",
                "Contractual obligations shall be subject to Indian legal standards.",
                "No claim may be brought in any jurisdiction outside India unless required by mandatory law."
            ]
        }
    ];

    return (
        <div style={{ backgroundColor: '#f8fafc', color: '#1e293b', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
            {/* Hero Section */}
            <header style={{
                position: 'relative',
                backgroundColor: '#0f172a',
                padding: '140px 20px',
                textAlign: 'center',
                backgroundImage: 'url(' + privacy + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)', zIndex: 1 }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: '900', margin: '0 0 20px 0' }}>
                        Privacy <span style={{ color: '#f97316' }}>Policy</span>
                    </h1>
                    <p style={{ color: '#cbd5e1', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        Your privacy is important to us. Learn how we handle and protect your personal data.
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
                            {section.content && (
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#475569', margin: '0 0 15px 0' }}>
                                    {section.content}
                                </p>
                            )}

                            {section.bullets && (
                                <ul style={{ listStyleType: 'disc', color: '#475569', fontSize: '1.1rem', margin: '0 0 15px 25px' }}>
                                    {section.bullets.map((bullet, k) => (
                                        <li key={k} style={{ marginBottom: '8px' }}>{bullet}</li>
                                    ))}
                                </ul>
                            )}

                            {section.subsections && section.subsections.map((sub, sIdx) => (
                                <div key={sIdx} style={{ marginTop: '20px' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155', marginBottom: '10px' }}>{sub.subtitle}</h3>
                                    <ul style={{ listStyleType: 'disc', color: '#475569', fontSize: '1.1rem', margin: '0 0 15px 25px' }}>
                                        {sub.bullets.map((b, bIdx) => (
                                            <li key={bIdx} style={{ marginBottom: '8px' }}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

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
                            For questions regarding this Privacy Policy, please contact our compliance team:
                        </p>
                        <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                            <p style={{ fontWeight: '700', color: '#0f172a', margin: '0 0 5px 0' }}>CLink HR – Privacy & Compliance</p>
                            <p style={{ color: '#475569', margin: '0' }}>Email: privacy@clinkhr.com</p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Statement Footer */}
            <div style={{ backgroundColor: '#0f172a', padding: '50px 20px', textAlign: 'center' }}>
                <p style={{ color: '#f97316', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                    Privacy Commitment Statement
                </p>
                <p style={{ color: '#ffffff', fontSize: '1.2rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                    "Personal data is handled with responsibility, discretion, and respect—ensuring trust, transparency, and compliance at every stage."
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
