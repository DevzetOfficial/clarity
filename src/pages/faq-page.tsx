import Banner from "@/components/shared/banner";
import CallToAction from "@/components/shared/call-to-action";
import FAQ from "@/components/shared/faq";

const FAQPage = () => {
  return (
    <>
      <Banner
        title="Commonly Asked Questions"
        description="Discover cutting-edge solutions for comprehensive data security, ensuring your digital world remains safe and protected."
        component={<FAQContent />}
      />

      <CallToAction />
    </>
  );
};

const FAQContent = () => {
  return <FAQ className="p-0 lg:p-7" />;
};

export default FAQPage;
