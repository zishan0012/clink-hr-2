export const NAVIGATION = [
  {
    label: 'Company',
    path: '/company/about',
    children: [
      { label: 'About Us', path: '/company/about' },
      { label: 'Vision & Mission', path: '/company/vision-mission' },
      { label: 'Founder’s Message', path: '/company/founder-message' },
      { label: 'Our Approach', path: '/company/our-approach' },
      { label: 'Pan-India Presence', path: '/company/pan-india' },
      { label: 'Careers at CLink HR', path: '/company/careers' },
      { label: 'FAQs – Clients', path: '/resources/faqs-clients' },
      { label: 'FAQs – Partners', path: '/resources/faqs-partners' }
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      {
        label: 'Recruitment Services',
        path: '/services/recruitment',
        children: [
          { label: 'Permanent Hiring', path: '/services/recruitment/permanent-hiring' },
          { label: 'Contract Staffing', path: '/services/recruitment/contract-staffing' },
          { label: 'Bulk / Volume Hiring', path: '/services/recruitment/bulk-hiring' },
          { label: 'Executive Search', path: '/services/recruitment/executive-search' }
        ]
      },
      {
        label: 'Payroll & HR Services',
        path: '/services/payroll',
        children: [
          { label: 'End-to-End Payroll', path: '/services/payroll/end-to-end-payroll' },
          { label: 'Third-Party Payroll', path: '/services/payroll/third-party-payroll' },
          { label: 'Statutory Compliance', path: '/services/payroll/statutory-compliance' },
          { label: 'HR Operations Support', path: '/services/payroll/hr-operations' }
        ]
      },
      {
        label: 'Other HR Services',
        path: '/services/other',
        children: [
          { label: 'HR Policy Setup', path: '/services/other/hr-policy' },
          { label: 'Background Verification', path: '/services/other/background-verification' },
          { label: 'HR Audit Services', path: '/services/other/hr-audit' },
          { label: 'HR Advisory Services', path: '/services/other/hr-advisory' }
        ]
      }
    ]
  },
  {
    label: 'Solutions',
    path: '/solutions/hiring',
    children: [
      {
        label: 'Hiring Solutions',
        path: '/solutions/hiring',
        children: [
          { label: 'IT Hiring Solutions', path: '/solutions/hiring/it-hiring' },
          { label: 'Non-IT Hiring Solutions', path: '/solutions/hiring/non-it-hiring' },
          { label: 'Startup Hiring Solutions', path: '/solutions/hiring/startup-hiring' },
          { label: 'Enterprise Hiring Solutions', path: '/solutions/hiring/enterprise-hiring' },
          { label: 'Fast Closure Hiring Model', path: '/solutions/hiring/fast-closure-hiring' }
        ]
      },
      {
        label: 'Workforce Solutions',
        path: '/solutions/workforce',
        children: [
          { label: 'Contract Workforce Management', path: '/solutions/workforce/contract-management' },
          { label: 'Third-Party Payroll Solutions', path: '/solutions/workforce/third-party-payroll' },
          { label: 'Multi-Location Workforce Solutions', path: '/solutions/workforce/multi-location' }
        ]
      },
      {
        label: 'Business HR Solutions',
        path: '/solutions/business-hr',
        children: [
          { label: 'Scalable HR Model', path: '/solutions/business-hr/scalable-hr-model' },
          { label: 'Compliance-Ready HR Solutions', path: '/solutions/business-hr/compliance-ready' },
          { label: 'Cost-Optimized HR Solutions', path: '/solutions/business-hr/cost-optimized' }
        ]
      }
    ]
  },
  {
    label: 'Industries',
    path: '/industries',
    children: [
      { label: 'IT & Software', path: '/industries/it-software' },
      { label: 'Manufacturing', path: '/industries/manufacturing' },
      { label: 'Healthcare', path: '/industries/healthcare' },
      { label: 'Retail & E-Commerce', path: '/industries/retail-ecommerce' },
      { label: 'Logistics & Supply Chain', path: '/industries/logistics' },
      { label: 'BFSI', path: '/industries/bfsi' },
      { label: 'Education', path: '/industries/education' },
      { label: 'Startups', path: '/industries/startups' }
    ]
  },
  {
    label: 'How It Works',
    path: '/how-it-works',
    children: [
      { label: 'Our Delivery Model', path: '/how-it-works/delivery-model' },
      { label: 'IPP Partner Network', path: '/how-it-works#ipp' },
      { label: 'Quality & SLA Framework', path: '/how-it-works#quality' },
      { label: 'Technology Platform (Zryoss)', path: '/how-it-works#tech' },
      { label: 'Requirement Distribution System', path: '/how-it-works#distribution' }
    ]
  },
  {
    label: 'Partners',
    path: '/partners',
    children: [
      { label: 'IPP Partner Program', path: '/partners#program' },
      { label: 'Who Can Become an IPP', path: '/partners#who' },
      { label: 'Why Join as an IPP', path: '/partners#why' },
      { label: 'How IPP Model Works', path: '/partners#how' },
      { label: 'IPP Onboarding Process', path: '/partners#onboarding' },
      { label: 'IPP Earnings & Payout Model', path: '/partners#earnings' },
      { label: 'Become an IPP Partner', path: '/partners#join' }
    ]
  },
  {
    label: 'Contact',
    path: '/contact',
    children: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Hire Talent', path: '/contact/hire-talent' },
      { label: 'Payroll Inquiry', path: '/contact/payroll-inquiry' },
      { label: 'Partner Inquiry', path: '/contact/partner-inquiry' },
      { label: 'Support', path: '/contact/support' }
    ]
  }
];

export const FOOTER_LINKS = {
  company: [
    { label: 'About CLink HR', path: '/company/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Careers', path: '/company/careers' }
  ],
  solutions: [
    { label: 'Recruitment Services', path: '/services/recruitment' },
    { label: 'Payroll Services', path: '/services/payroll' },
    { label: 'Compliance Support', path: '/services/payroll/statutory-compliance' },
    { label: 'HR Advisory', path: '/services/other' }
  ],
  partners: [
    { label: 'Partner Program', path: '/partners' },
    { label: 'IPP Model', path: '/partners#ipp' },
    { label: 'Partner Onboarding', path: '/partners#onboarding' }
  ],
  resources: [
    { label: 'Blog', path: '/resources/blog' },
    { label: 'FAQs – Clients', path: '/resources/faqs-clients' },
    { label: 'FAQs – Partners', path: '/resources/faqs-partners' }
  ],
  legal: [
    { label: 'Privacy Policy', path: '/legal/privacy' },
    { label: 'Terms & Conditions', path: '/legal/terms' },
    { label: 'Refund & Cancellation', path: '/legal/refund' }
  ]
};
