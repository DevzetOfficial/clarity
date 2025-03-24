import FAQ from "@/components/shared/faq";
import Team from "@/components/about/team";
import Banner from "@/components/shared/banner";
import HowToWorks from "@/components/shared/how-to-works";
import CallToAction from "@/components/shared/call-to-action";
import AboutImage from "@/assets/about.png";
import AvatarImg from "@/assets/team/member-1.png";
import SecuringLogos from "@/components/shared/securing-logos";
import Statistic from "@/components/about/statistic";

const AboutPage = () => {
  return (
    <>
      <Banner
        title="Protecting Your Data with Advanced Security"
        description="Discover cutting-edge solutions for comprehensive data security, ensuring your digital world remains safe and protected."
        component={
          <div className="grid md:grid-cols-2 gap-5 text-foreground">
            <div className="aspect-[522/400] rounded-4xl overflow-hidden">
              <img
                src={AboutImage}
                alt="About Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-4xl bg-[#DDD6FF] p-8 grid gap-12 md:gap-20 lg:gap-[102px]">
              <div className="flex items-center gap-5">
                <img src={AvatarImg} className="size-16 rounded-full object-cover"/>
                <div className="space-y-0.5">
                  <h4 className="text-2xl font-bold">Continuously assesses</h4>
                  <p className="text-lg">Securing Your Digital</p>
                </div>
              </div>
              <p className="text-lg font-medium">Welcome to Clarity! At Clarity, we are committed to protecting your data with cutting-edge security solutions. In today’s digital world, safeguarding your information isn’t just important—it’s essential. We're here to ensure your data remains secure and your peace of mind intact.</p>
            </div>
          </div>
        }
      />

      <SecuringLogos />
      <Statistic/>
      <HowToWorks />
      <Team />
      <FAQ />
      <CallToAction />
    </>
  );
};

export default AboutPage;
