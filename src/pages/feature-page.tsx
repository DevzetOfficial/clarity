import FeatureTwo from "@/components/shared/feature-two";
import CallToAction from "@/components/shared/call-to-action";
import Banner from "@/components/shared/banner";
import FeatureCards from "@/components/shared/feature-cards";

const FeaturePage = () => {
  return (
    <>
      <Banner
        title="Protecting Your Data with Advanced Security"
        description="Discover cutting-edge solutions for comprehensive data security, ensuring your digital world remains safe and protected."
        component={<FeatureCards />}
      />
      <FeatureTwo />
      <CallToAction />
    </>
  );
};

export default FeaturePage;
