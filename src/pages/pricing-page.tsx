import FAQ from "@/components/shared/faq";
import Banner from "@/components/shared/banner";
import Review from "@/components/shared/review";
import PricingCard from "@/components/shared/pricing-card";
import CallToAction from "@/components/shared/call-to-action";
import SecuringLogos from "@/components/shared/securing-logos";

const PricingPage = () => {
  return (
    <>
      <Banner
        title="Flexible Pricing Options Customized for You"
        description="Discover cutting-edge solutions for comprehensive data security,
              ensuring your digital world remains safe and protected."
        component={ <PricingCard />}
      />
      <SecuringLogos/>
      <Review/>
      <FAQ/>
      <CallToAction />
    </> 
  );
};

export default PricingPage;
