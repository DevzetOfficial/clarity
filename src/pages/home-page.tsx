import Hero from "@/components/home/hero";
import Review from "@/components/shared/review";
import Pricing from "@/components/shared/pricing";
import FeatureOne from "@/components/home/feature-one";
import FeatureTwo from "@/components/shared/feature-two";
import HowToWorks from "@/components/shared/how-to-works";
import SecuringLogos from "@/components/shared/securing-logos";
import CallToAction from "@/components/shared/call-to-action";

export default function Home() {
  return (
    <>
      <Hero />
      <SecuringLogos />
      <HowToWorks />
      <FeatureOne />
      <FeatureTwo />
      <Pricing />
      <Review />
      <CallToAction />
    </>
  );
}
