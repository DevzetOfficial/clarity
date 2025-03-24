import { Icons } from "@/components/icons";
import {  buttonVariants } from "@/components/ui/button";
import { CareerType } from "./career-list";
import { cn } from "@/lib/utils";

const CareerDetailsContent = ({ career }: { career: CareerType }) => {
  return (
    <div className="max-w-[1096px] mx-auto py-12 lg:py-[60px] px-7 rounded-[32px] bg-white text-foreground">
      <div className="grid gap-4 mb-10 md:mb-14 lg:mb-[60px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Job Information</h2>
        <div className="flex items-center justify-between flex-wrap gap-8 pb-4 border-b border-[#EAECF0]">
          <div className="flex items-center gap-x-6 gap-y-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Icons.locationOutline className="text-base shrink" />
              <span className="text-lg">{career?.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.clock className="text-base shrink" />
              <span className="text-lg">{career?.employmentType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.moneyTick className="text-base shrink" />
              <span className="text-lg">{career?.salary}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.ticketStar className="text-base shrink" />
              <span className="text-lg">{career?.benefits} Benefits</span>
            </div>
          </div>

          <a href="#apply-form" className={cn(buttonVariants({variant: 'default'}), 'bg-foreground hover:bg-foreground/90 text-white')}>
            Apply Now <Icons.rightArrow3 />
          </a>
        </div>
      </div>

      <div
        className="prose max-w-full text-lg marker:text-foreground text-foreground border-b border-[#EAECF0] pb-4"
        dangerouslySetInnerHTML={{ __html: career?.description }}
      />
    </div>
  );
};

export default CareerDetailsContent;
