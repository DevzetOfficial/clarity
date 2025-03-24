import PricingCard from "./pricing-card";
import { Switch } from "@/components/ui/switch";
import SectionHeader from "@/components/shared/section-header";

const Pricing = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container">
        <SectionHeader
          title="Choose a Suitable Plan"
          description="Securing your digital world: your trusted partner in data protection <br class='hidden md:block'/> with cutting-edge solutions for comprehensive data security."
          subTitle="pricing & plan"
        />

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-lg font-medium">Monthly</span>
          <Switch />
          <span className="text-lg font-medium">Yearly</span>
        </div>

        <PricingCard/>
      </div>
    </section>
  );
};

export default Pricing;
