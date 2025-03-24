import CtaBg from "@/assets/cta-bg.png";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/section-header";

const CallToAction = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container">
        <div
          className="max-w-[1096px] px-4 mx-auto py-10 md:py-14 lg:py-20 rounded-[30px] bg-cover"
          style={{
            backgroundImage: `url(${CtaBg})`,
          }}
        >
          <SectionHeader
            title="Secure Your Data with Fortify Protection Solution"
            description="Allows you to set thresholds for security parameters and receive <br class='hidden md:block'/> real-time alerts when these thresholds are breached."
          >
            <div className="mt-11">
              <Button className="bg-black text-white hover:bg-gray-800">
                Get Started <Icons.rightArrow3 />
              </Button>
            </div>
          </SectionHeader>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
