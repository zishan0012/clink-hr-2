import React from 'react';
import refund from '../../assets/company-img/refund.avif';

const RefundCancellation = () => {
    const sections = [
        {
            title: "Purpose of This Policy",
            content: "This Policy outlines the terms governing service cancellations, payment adjustments, and refund considerations. It is intended to ensure transparency, fairness, and clarity for all parties engaging with workforce, payroll, and HR-related services."
        },
        {
            title: "Scope of Applicability",
            content: "This Policy applies to clients engaging in recruitment, payroll, HR operations, or related services, whether initiated through digital or offline channels. This applies to one-time, recurring, or project-based service arrangements and operates in conjunction with applicable agreements, proposals, or statements of work."
        },
        {
            title: "Service Engagement & Commercial Terms",
            content: "Service fees, payment schedules, and deliverables are defined based on the nature and scope of services, timelines, and resource allocation. Commercial terms are agreed prior to service initiation. Once a service engagement has commenced, resources and operational efforts are allocated accordingly."
        },
        {
            title: "Cancellation by Client",
            content: "Cancellation requests must be submitted in writing through official communication channels.",
            subsections: [
                {
                    subtitle: "Before Service Commencement",
                    bullets: [
                        "Cancellations requested prior to service initiation may be considered without penalty.",
                        "Any administrative or onboarding costs already incurred may be deducted."
                    ]
                },
                {
                    subtitle: "After Service Commencement",
                    bullets: [
                        "Cancellations after initiation may not be eligible for a refund.",
                        "Fees corresponding to work already performed shall remain payable.",
                        "Ongoing activities may be discontinued upon formal confirmation."
                    ]
                }
            ]
        },
        {
            title: "Recruitment Services – Refund Policy",
            content: "For recruitment-related services, fees are charged for service effort, coordination, and execution—not solely for outcomes. No refunds shall be applicable once candidate sourcing, screening, or coordination has begun. Replacement or alternative service support, if any, shall be governed by agreed terms. No guarantees are provided regarding hiring outcomes or timelines."
        },
        {
            title: "Payroll & HR Services – Refund Policy",
            content: "For payroll, HR operations, and compliance-related services, fees are based on processing cycles, administrative coordination, and operational support. Refunds are not applicable for services already delivered or partially completed. Subscription or recurring services may be discontinued prospectively."
        },
        {
            title: "Non-Refundable Charges",
            content: "The following are generally non-refundable:",
            bullets: [
                "Professional service fees",
                "Setup, onboarding, or activation charges",
                "Third-party or statutory costs",
                "Technology or platform usage fees"
            ]
        },
        {
            title: "Exceptional Circumstances",
            content: "Refunds, if any, may be considered solely at discretion under exceptional circumstances such as service non-availability due to internal operational failure or documented billing errors. Such considerations do not create a precedent or obligation."
        },
        {
            title: "Third-Party Services Disclaimer",
            content: "Certain services may involve third-party platforms or independent service providers. Refunds related to third-party services shall be governed by respective third-party policies. No liability is assumed for third-party refund delays or denials."
        },
        {
            title: "Payment Disputes",
            content: "Any payment-related concerns must be raised within a reasonable time frame from the date of invoice. Delayed or disputed payments may result in suspension of services, withholding of deliverables, or additional administrative actions."
        },
        {
            title: "Processing of Approved Refunds",
            content: "Where a refund is approved, processing shall occur within a reasonable timeframe. Refunds shall be issued through the original mode of payment where feasible. Transaction or processing charges may be deducted."
        },
        {
            title: "No Set-Off Rights",
            content: "Clients may not withhold or set off payments against disputed claims unless expressly agreed in writing."
        },
        {
            title: "Policy Modifications",
            content: "This Policy may be updated periodically. Continued use of services constitutes acceptance of revised terms."
        },
        {
            title: "Governing Law",
            content: "This Policy shall be governed by and interpreted in accordance with the laws of India. Courts within India shall have exclusive jurisdiction over any disputes arising hereunder."
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
                backgroundImage: 'url(' + refund + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)', zIndex: 1 }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: '900', margin: '0 0 20px 0' }}>
                        Refund & <span style={{ color: '#6366f1' }}>Cancellation</span>
                    </h1>
                    <p style={{ color: '#cbd5e1', fontSize: '1.2rem', maxWidth: '750px', margin: '0', lineHeight: '1.6' }}>
                        Guidelines regarding service cancellations, payment adjustments, and refund considerations.
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
                        </article>
                    ))}

                    <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '40px 0' }} />

                    <section>
                        <h2 style={{ color: '#0f172a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px' }}>Refund & Cancellation Statement</h2>
                        <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                            <p style={{ color: '#475569', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.6', margin: '0' }}>
                                "Service fees reflect professional effort, coordination, and operational readiness. Refunds, where applicable, are handled transparently and fairly within defined boundaries."
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default RefundCancellation;
