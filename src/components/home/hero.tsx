import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import HeroBg from "@/assets/hero-bg.png";
import { Icons } from "@/components/icons";
import HeroDashboard from "@/assets/hero-dashboard.png";
import { Button, buttonVariants } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-cover bg-center pt-20" style={{
        backgroundImage: `url(${HeroBg})`,
      }}>
        <div className="container relative">
          <div className="max-w-[630px] text-center mx-auto py-10 md:py-14 lg:py-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-[55px] lg:leading-[66px]">
              Your Committed Partner in Total Web Security
            </h1>
            <p className="md:text-lg my-5 mb-[30px]">
              Discover cutting-edge solutions for comprehensive data security,
              ensuring your digital world remains safe and protected.
            </p>
            <div className="flex  items-center justify-center gap-3">
              <Button className="bg-foreground hover:bg-foreground/90 text-white">
                Get Started <Icons.rightArrow3 />
              </Button>

              <Link to="/about" className={cn(buttonVariants({ variant: "outline" }), "bg-background text-foreground")}>
                Learn More <Icons.rightArrow3 />
              </Link>
            </div>
          </div>
            <img
              src={HeroDashboard}
              alt="Security Dashboard Interface"
              className="w-full object-cover rounded max-w-[1010px] mx-auto bg-[#FAF5FF] dark:bg-[#1A1A1A] [box-shadow:0px_-24px_93.5px_0px_rgba(0,0,0,0.04)]"
            />
        </div>
      </section>
    </>
  );
};

export default Hero;
