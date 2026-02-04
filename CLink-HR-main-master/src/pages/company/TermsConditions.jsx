import React from 'react';
import terms from '../../assets/company-img/terms.avif';

const TermsConditions = () => {
    const sections = [
        {
            title: "Acceptance of Terms",
            content: "By accessing, browsing, or using this website or engaging with any services, the user acknowledges that they have read, understood, and agreed to be bound by these Terms & Conditions. If the user does not agree with any part of these Terms, access to the website and services should be discontinued immediately."
        },
        {
            title: "Scope of Applicability",
            content: "These Terms apply to website visitors, clients and prospective clients, service partners and independent professionals, candidates and job applicants, and any individual or entity interacting with services or digital platforms. These Terms govern all interactions unless superseded by a separate written agreement."
        },
        {
            title: "Services Overview",
            content: "The organization provides workforce-related services including recruitment coordination, payroll support, HR operations, compliance support, and related solutions. Service delivery may involve independent professionals, service partners, or technology platforms operating within a managed ecosystem. Specific service scope, timelines, and deliverables are subject to mutually agreed terms."
        },
        {
            title: "No Guarantee of Outcomes",
            content: "While reasonable efforts are made to deliver services professionally, no guarantee is provided regarding hiring outcomes, timelines, or business results. Candidate performance, retention, or employment continuity is not assured. Market conditions and third-party dependencies may impact outcomes. All decisions related to hiring or workforce management remain the sole responsibility of the client."
        },
        {
            title: "User Responsibilities",
            content: "Users agree to provide accurate, complete, and lawful information and use the website and services for legitimate purposes only. Users must comply with applicable laws and refrain from misuse, unauthorized access, or harmful activity. The organization reserves the right to suspend access in case of misuse or violation.",
        },
        {
            title: "Partner & Independent Entity Status",
            content: "Service partners and independent professionals operate as independent business entities. Nothing in these Terms shall be construed as creating an employer–employee relationship, establishing a partnership, joint venture, or agency, or granting authority to bind the organization. Each party remains responsible for its own operations and compliance."
        },
        {
            title: "Intellectual Property Rights",
            content: "All website content, including text, design, graphics, logos, and software, is protected by applicable intellectual property laws. Users may not copy, reproduce, distribute, or modify content, or use trademarks or branding elements without written consent. Unauthorized use may result in legal action."
        },
        {
            title: "Third-Party Links & Platforms",
            content: "The website may contain links to third-party platforms or tools. The organization does not control external websites and is not responsible for third-party content, availability, or practices. The organization disclaims liability for external interactions. Users access third-party platforms at their own risk."
        },
        {
            title: "Data Protection & Privacy",
            content: "Use of the website and services is subject to the Privacy Policy. Users acknowledge that personal data may be collected and processed in accordance with stated privacy practices and applicable laws."
        },
        {
            title: "Limitation of Liability",
            content: "To the maximum extent permitted by law, no liability is accepted for indirect, incidental, consequential, or special damages. This includes loss of data, business interruption, or employment disputes. Liability is limited to the extent required under applicable law."
        },
        {
            title: "Indemnification",
            content: "Users agree to indemnify and hold harmless the organization against claims, losses, or damages arising from violation of these Terms, misuse of services or website, or breach of legal or contractual obligations."
        },
        {
            title: "Suspension & Termination",
            content: "Access to the website or services may be suspended or terminated for violation of these Terms, for unlawful or harmful conduct, or at the organization’s discretion, with or without notice. Termination does not affect accrued rights or obligations."
        },
        {
            title: "Modifications to Terms",
            content: "These Terms may be revised periodically. Continued use of the website or services after changes constitutes acceptance of the updated Terms."
        },
        {
            title: "Force Majeure",
            content: "No liability shall arise for failure or delay caused by events beyond reasonable control, including natural disasters, government actions, system failures, or labor disruptions."
        },
        {
            title: "Governing Law & Jurisdiction",
            content: "These Terms shall be governed by and construed in accordance with the laws of India. Courts located within India shall have exclusive jurisdiction. Conflict of law principles shall not apply, and applicable statutory provisions shall prevail in case of inconsistency.",
            bullets: [
                "Exclusive jurisdiction in India.",
                "Subject to Indian legal standards.",
                "Survival of clause after termination."
            ]
        },
        {
            title: "Severability",
            content: "If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect."
        },
        {
            title: "Waiver",
            content: "Failure to enforce any right or provision shall not constitute a waiver of such right."
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
                backgroundImage: 'url(' + terms + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)', zIndex: 1 }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: '900', margin: '0 0 20px 0' }}>
                        Terms & <span style={{ color: '#f97316' }}>Conditions</span>
                    </h1>
                    <p style={{ color: '#cbd5e1', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
                        Please read these terms carefully before accessing our website or using our services.
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
                        </article>
                    ))}

                    <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '40px 0' }} />

                    <section>
                        <h2 style={{ color: '#0f172a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px' }}>Contact & Communication</h2>
                        <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '15px' }}>
                            For questions regarding these Terms, communication may be directed through our official channels.
                        </p>
                        <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                            <p style={{ fontWeight: '700', color: '#0f172a', margin: '0 0 5px 0' }}>CLink HR – Legal Compliance</p>
                            <p style={{ color: '#475569', margin: '0' }}>Please contact us through our website's contact form or direct assistance line.</p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Statement Footer */}
            <div style={{ backgroundColor: '#0f172a', padding: '50px 20px', textAlign: 'center' }}>
                <p style={{ color: '#f97316', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                    Terms Statement
                </p>
                <p style={{ color: '#ffffff', fontSize: '1.2rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                    "These Terms establish a transparent framework governing access, usage, and service engagement while protecting legal and operational integrity."
                </p>
            </div>
        </div>
    );
};

export default TermsConditions;
