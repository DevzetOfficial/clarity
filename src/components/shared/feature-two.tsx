import { Icons } from "@/components/icons";
import FeatureSessionImg from "@/assets/feature-session.png";
import FeatureActivityImg from "@/assets/feature-activity.png";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "../ui/button";

const FeatureTwo = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container max-w-[1024px]">
        <SectionHeader
          title="Discover the Features That Makes Fortify Stand Out."
          description="Securing your digital world: your trusted partner in data protection with <br class='hidden md:block'/> cutting-edge solutions for comprehensive data security."
          subTitle="key Features"
          className="md:mb-20"
        />

        <div className="grid gap-14 md:gap-20 lg:gap-40">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="w-[336px] h-[347px] z-[-1] absolute left-0 top-0  bg-[#fbfbfb] rounded-3xl"></div>
              <img
                src={FeatureSessionImg}
                alt="Feature Session"
                className="max-w-[307px] mt-3 md:ml-[89px] rounded [box-shadow:-83px_78px_204px_0px_rgba(11,14,40,0.12)]"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-[28px] text-[#101828] md:leading-[42px] font-bold mb-5">
                In-Depth Explanation of Our Web Security
              </h3>
              <p className="text-[#101828] md:text-lg">
                Securing Your Digital World: Your Trusted Partner in Data
                Protection with Cutting-Edge Solutions for
              </p>
              <div className="grid grid-cols-2 gap-14 mt-10">
                <div>
                  <div className="flex items-center justify-center size-[60px] rounded-full bg-[#D3FFEE]">
                    <Icons.code className="text-[28px] text-[#467CE9]" />
                  </div>
                  <h4 className="text-[#101828] text-lg font-medium mt-5 mb-2">
                    Deleiled user logs
                  </h4>
                  <p className="text-[#101828] text-sm">
                    Our platform regularly logs all user activities including
                    logins.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center size-[60px] rounded-full bg-[#F1EAFF]">
                    <Icons.code className="text-[28px] text-[#A97EFF]" />
                  </div>
                  <h4 className="text-[#101828] text-lg font-medium mt-5 mb-2">
                    Anomaly Detection
                  </h4>
                  <p className="text-[#101828] text-sm">
                    This includes unusual login times and access to restricted
                    data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-10 gap-5 items-center">
            <div className="md:col-span-6">
              <h3 className="text-2xl md:text-[28px] text-[#101828] md:leading-[42px] font-bold mb-5">
                Delivers an All-Encompassing Security Summary.
              </h3>
              <ul className="grid grid-cols-2 gap-y-5">
                {[
                  "Providing robust security ",
                  "Additionally, enforce Multi-Factor",
                  "Regularly audit user access ",
                  "Securing your digital world"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icons.check className="text-2xl [&>rect]:fill-[#D0F2DC] [&>path]:stroke-[#12B76A]" />
                    <span className="text-lg">
                    {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button className="bg-foreground hover:bg-foreground/90 text-white mt-10">
                Get Started <Icons.rightArrow3 />
              </Button>
            </div>
            <div className="relative md:col-span-4">
              <div className="max-w-[361px] h-[250px] z-[-1] absolute right-0 bottom-0  bg-[#fbfbfb] rounded-3xl"></div>
              <img
                src={FeatureActivityImg}
                alt="Feature Activity"
                className="max-w-[354px] mb-3 md:mr-[52px] rounded [box-shadow:0px_13px_36.9px_0px_rgba(22,17,46,0.06)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;
