import Banner from "@/components/shared/banner";
import CallToAction from "@/components/shared/call-to-action";
import TermsContent from "@/components/terms/terms-content";
const TermsPage = () => {
  return (
    <>
      <Banner
        title="Terms & Privacy"
        description="When drafting the Terms and Conditions (T&C) for a subscription-based design agency, the specific details can vary depending on the nature of the services provided. However, there are several common elements that are typically included:"
        component={<TermsContent />}
      />

      <CallToAction />
    </>
  );
};

export default TermsPage;
