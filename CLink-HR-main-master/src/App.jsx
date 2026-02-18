import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';

import AboutUs from './pages/company/AboutUs';
import VisionMission from './pages/company/VisionMission';
// import FounderMessage from './pages/company/FounderMessage';
import OurApproach from './pages/company/OurApproach';
import PanIndiaPresence from './pages/company/PanIndiaPresence';

import Careers from './pages/company/Careers';
import Blog from './pages/resources/Blog';
import FAQsClients from './pages/resources/FAQsClients';
import FAQsPartners from './pages/resources/FAQsPartners';
import CaseStudies from './pages/resources/casestudies/CaseStudies';
import FutureOfHROutsourcing from './pages/resources/blogs/FutureOfHROutsourcing';
import PermanentVsTemporaryStaffing from './pages/resources/blogs/PermanentVsTemporaryStaffing';
import PayrollAndComplianceBenefits from './pages/resources/blogs/PayrollAndComplianceBenefits';
import IndependentPrimePartners from './pages/resources/blogs/IndependentPrimePartners';
import BusinessPrimePartners from './pages/resources/blogs/BusinessPrimePartners';
import ExecutiveSearchLeadershipHiring from './pages/resources/blogs/ExecutiveSearchLeadershipHiring';
import WorkforceTransformationIndia from './pages/resources/blogs/WorkforceTransformationIndia';
import ITServicesScaling from './pages/resources/casestudies/ITServicesScaling';

import Services from './pages/services/Services';
import RecruitmentServices from './pages/services/recruitment/RecruitmentServices';
import PermanentHiring from './pages/services/recruitment/PermanentHiring';
import ContractStaffing from './pages/services/recruitment/ContractStaffing';
import BulkHiring from './pages/services/recruitment/BulkHiring';
import ExecutiveSearch from './pages/services/recruitment/ExecutiveSearch';

import PayrollServices from './pages/services/payroll/PayrollServices';
import ThirdPartyPayroll from './pages/services/payroll/ThirdPartyPayroll';
import EndToEndPayroll from './pages/services/payroll/EndToEndPayroll';
import StatutoryCompliance from './pages/services/payroll/StatutoryCompliance';
import HROperationsSupport from './pages/services/payroll/HROperationsSupport';

import OtherHRServices from './pages/services/other/OtherHRServices';
import HRAuditServices from './pages/services/other/HRAuditServices';
import HRPolicySetup from './pages/services/other/HRPolicySetup';
import BackgroundVerification from './pages/services/other/BackgroundVerification';
import HRAdvisory from './pages/services/other/HRAdvisory';


import Solutions from './pages/solutions/Solutions';
import HiringSolutions from './pages/solutions/HiringSolutions';
import ITHiringSolutions from './pages/solutions/hiringsolution/ITHiringSolutions';
import NonITHiringSolutions from './pages/solutions/hiringsolution/NonITHiringSolutions';
import StartupHiringSolutions from './pages/solutions/hiringsolution/StartupHiringSolutions';
import EnterpriseHiringSolutions from './pages/solutions/hiringsolution/EnterpriseHiringSolutions';
import FastClosureHiringModel from './pages/solutions/hiringsolution/FastClosureHiringModel';
import ContractWorkforceManagement from './pages/solutions/workforcesolutions/ContractWorkforceManagement';
import ThirdPartyPayrollSolutions from './pages/solutions/workforcesolutions/ThirdPartyPayrollSolutions';
import MultiLocationWorkforceSolutions from './pages/solutions/workforcesolutions/MultiLocationWorkforceSolutions';
import ScalableHRModel from './pages/solutions/businesshrsolutions/ScalableHRModel';
import ComplianceReadyHRSolutions from './pages/solutions/businesshrsolutions/ComplianceReadyHRSolutions';
import CostOptimizedHRSolutions from './pages/solutions/businesshrsolutions/CostOptimizedHRSolutions';
import WorkforceSolutions from './pages/solutions/WorkforceSolutions';
import BusinessHRSolutions from './pages/solutions/BusinessHRSolutions';

import Industries from './pages/industries/Industries';
import ITSoftware from './pages/industries/ITSoftware';
import Manufacturing from './pages/industries/Manufacturing';
import Healthcare from './pages/industries/Healthcare';
import RetailEcommerce from './pages/industries/RetailEcommerce';
import Logistics from './pages/industries/Logistics';
import BFSI from './pages/industries/BFSI';
import Education from './pages/industries/Education';
import Startups from './pages/industries/Startups';

import HowItWorks from './pages/how-it-works/HowItWorks';
import OurDeliveryModel from './pages/how-it-works/OurDeliveryModel';
import IPPPartnerNetwork from './pages/how-it-works/IPPPartnerNetwork';
import QualitySLAFramework from './pages/how-it-works/QualitySLAFramework';
import TechnologyPlatform from './pages/how-it-works/TechnologyPlatform';
import RequirementDistribution from './pages/how-it-works/RequirementDistribution';
// Partner Subpages
import Partners from './pages/partner/Partners';
import IPPPartnerProgram from './pages/partner/IPPPartnerProgram';
import WhoCanBecomeIPP from './pages/partner/WhoCanBecomeIPP';
import WhyJoinIPP from './pages/partner/WhyJoinIPP';
import HowIPPModelWorks from './pages/partner/HowIPPModelWorks';
import IPPOnboardingProcess from './pages/partner/IPPOnboardingProcess';
import IPPEarningsPayout from './pages/partner/IPPEarningsPayout';
import BecomeIPPPartner from './pages/partner/BecomeIPPPartner';

import ContactUs from './pages/contact/ContactUs';
import HireTalent from './pages/contact/HireTalent';
import PayrollInquiry from './pages/contact/PayrollInquiry';
import PartnerInquiry from './pages/contact/PartnerInquiry';
import Support from './pages/contact/Support';
import Disclaimer from './pages/company/Disclaimer';
import PrivacyPolicy from './pages/company/PrivacyPolicy';
import TermsConditions from './pages/company/TermsConditions';
import RefundCancellation from './pages/company/RefundCancellation';
import CookiePolicy from './pages/company/CookiePolicy';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <ScrollToTop />
      <ScrollToTopButton />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund-cancellation" element={<RefundCancellation />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          {/* Main Service Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/company/about" element={<AboutUs />} />
          <Route path="/company/vision-mission" element={<VisionMission />} />
          {/* <Route path="/company/founder-message" element={<FounderMessage />} /> */}
          <Route path="/company/our-approach" element={<OurApproach />} />
          <Route path="/company/pan-india" element={<PanIndiaPresence />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/blog" element={<Blog />} />
          <Route path="/resources/blog/future-of-hr-outsourcing-2026" element={<FutureOfHROutsourcing />} />
          <Route path="/resources/blog/permanent-vs-temporary-staffing" element={<PermanentVsTemporaryStaffing />} />
          <Route path="/resources/blog/payroll-compliance-benefits" element={<PayrollAndComplianceBenefits />} />
          <Route path="/resources/blog/independent-prime-partners-ipp" element={<IndependentPrimePartners />} />
          <Route path="/resources/blog/business-prime-partners-bpp" element={<BusinessPrimePartners />} />
          <Route path="/resources/blog/executive-search-leadership-hiring" element={<ExecutiveSearchLeadershipHiring />} />
          <Route path="/resources/blog/workforce-transformation-india-2026" element={<WorkforceTransformationIndia />} />
          <Route path="/company/faqs-clients" element={<FAQsClients />} />
          <Route path="/company/faqs-partners" element={<FAQsPartners />} />
          <Route path="/company/case-studies" element={<CaseStudies />} />
          <Route path="/resources/case-studies/it-services-scaling" element={<ITServicesScaling />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/recruitment" element={<RecruitmentServices />} />
          <Route path="/services/recruitment/permanent-hiring" element={<PermanentHiring />} />
          <Route path="/services/recruitment/contract-staffing" element={<ContractStaffing />} />
          <Route path="/services/recruitment/bulk-hiring" element={<BulkHiring />} />
          <Route path="/services/recruitment/executive-search" element={<ExecutiveSearch />} />

          <Route path="/services/payroll" element={<PayrollServices />} />
          <Route path="/services/payroll/third-party-payroll" element={<ThirdPartyPayroll />} />
          <Route path="/services/payroll/end-to-end-payroll" element={<EndToEndPayroll />} />
          <Route path="/services/payroll/statutory-compliance" element={<StatutoryCompliance />} />
          <Route path="/services/payroll/hr-operations" element={<HROperationsSupport />} />

          <Route path="/services/other" element={<OtherHRServices />} />
          <Route path="/services/other/hr-audit" element={<HRAuditServices />} />
          <Route path="/services/other/hr-policy" element={<HRPolicySetup />} />
          <Route path="/services/other/background-verification" element={<BackgroundVerification />} />
          <Route path="/services/other/hr-advisory" element={<HRAdvisory />} />


          {/* Solutions */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/hiring" element={<HiringSolutions />} />
          <Route path="/solutions/hiring/it-hiring" element={<ITHiringSolutions />} />
          <Route path="/solutions/hiring/non-it-hiring" element={<NonITHiringSolutions />} />
          <Route path="/solutions/hiring/startup-hiring" element={<StartupHiringSolutions />} />
          <Route path="/solutions/hiring/enterprise-hiring" element={<EnterpriseHiringSolutions />} />
          <Route path="/solutions/hiring/fast-closure-hiring" element={<FastClosureHiringModel />} />
          <Route path="/solutions/workforce" element={<WorkforceSolutions />} />
          <Route path="/solutions/workforce/contract-management" element={<ContractWorkforceManagement />} />
          <Route path="/solutions/workforce/third-party-payroll" element={<ThirdPartyPayrollSolutions />} />
          <Route path="/solutions/workforce/multi-location" element={<MultiLocationWorkforceSolutions />} />
          <Route path="/solutions/business-hr" element={<BusinessHRSolutions />} />
          <Route path="/solutions/business-hr/scalable-hr-model" element={<ScalableHRModel />} />
          <Route path="/solutions/business-hr/compliance-ready" element={<ComplianceReadyHRSolutions />} />
          <Route path="/solutions/business-hr/cost-optimized" element={<CostOptimizedHRSolutions />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/it-software" element={<ITSoftware />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/industries/bfsi" element={<BFSI />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/startups" element={<Startups />} />

          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/how-it-works/delivery-model" element={<OurDeliveryModel />} />
          <Route path="/how-it-works/ipp-partner-network" element={<IPPPartnerNetwork />} />
          <Route path="/how-it-works/quality-sla-framework" element={<QualitySLAFramework />} />
          <Route path="/how-it-works/technology-platform" element={<TechnologyPlatform />} />
          <Route path="/how-it-works/requirement-distribution" element={<RequirementDistribution />} />


          {/* Partner Subpages */}
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/ipp-partner-program" element={<IPPPartnerProgram />} />
          <Route path="/partners/who-can-become-ipp" element={<WhoCanBecomeIPP />} />
          <Route path="/partners/why-join-as-ipp" element={<WhyJoinIPP />} />
          <Route path="/partners/how-ipp-model-works" element={<HowIPPModelWorks />} />
          <Route path="/partners/ipp-onboarding-process" element={<IPPOnboardingProcess />} />
          <Route path="/partners/ipp-earnings-payout" element={<IPPEarningsPayout />} />
          <Route path="/partners/become-ipp-partner" element={<BecomeIPPPartner />} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact/hire-talent" element={<HireTalent />} />
          <Route path="/contact/payroll-inquiry" element={<PayrollInquiry />} />
          <Route path="/contact/partner-inquiry" element={<PartnerInquiry />} />
          <Route path="/contact/support" element={<Support />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
