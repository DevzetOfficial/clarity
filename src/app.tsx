import { Route, Routes } from "react-router-dom";

// Components
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Pages
import FAQPage from "@/pages/faq-page";
import HomePage from "@/pages/home-page";
import BlogsPage from "@/pages/blogs-page";
import TermsPage from "@/pages/terms-page";
import AboutPage from "@/pages/about-page";
import CareerPage from "@/pages/career-page";
import PricingPage from "@/pages/pricing-page";
import ContactPage from "@/pages/contact-page";
import FeaturePage from "@/pages/feature-page";
import NotFoundPage from "@/pages/not-found-page";
import ChangelogPage from "@/pages/changelog-page";
import CareerDetails from "@/pages/career-details";
import CaseStudiesPage from "@/pages/case-studies";
import IntegrationPage from "@/pages/integration-page";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/career/:id" element={<CareerDetails />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="/integration" element={<IntegrationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
