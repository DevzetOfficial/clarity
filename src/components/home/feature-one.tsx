import SectionHeader from "@/components/shared/section-header";
import FeatureCards from "@/components/shared/feature-cards";

const FeatureOne = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container ">
        <SectionHeader
          title="In-Depth Explanation of Our Web Security Features"
          description="Securing your digital world: your trusted partner in data protection with <br class='hidden md:block'/> cutting-edge solutions for comprehensive data security."
          subTitle="key Features"
        />

        <FeatureCards />
      </div>
    </section>
  );
};

export default FeatureOne;
