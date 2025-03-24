import Banner from "@/components/shared/banner";
import CallToAction from "@/components/shared/call-to-action";
import IntegrationList from "@/components/integration/integration-list";
import zapierImg from "@/assets/integration/zapier.png";
import asanaImg from "@/assets/integration/asana.png";
import atlassianImg from "@/assets/integration/atlassian.png";
import html5Img from "@/assets/integration/html_5.png";
import mailchipImg from "@/assets/integration/mailchip.png";
import reduxImg from "@/assets/integration/redux.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const IntegrationPage = () => {
  return (
    <>
      <div className="relative">
        <Banner
          title="Connect with treasured software effortlessly"
          description="Discover cutting-edge solutions for comprehensive data security, ensuring your digital world remains safe and protected."
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 inline-flex gap-2 sm:gap-4 p-2 bg-white rounded-full shadow-[0px_13px_36.9px_0px_rgba(22,17,46,0.06)]">
          {[
            {
              image: zapierImg,
              title: "Zapier",
            },
            {
              image: html5Img,
              title: "HTML5",
            },
            {
              image: asanaImg,
              title: "Asana",
            },
            {
              image: reduxImg,
              title: "Redux",
            },
            {
              image: atlassianImg,
              title: "Atlassian",
            },
            {
              image: mailchipImg,
              title: "Mailchip",
            },
          ].map((item) => (
            <TooltipProvider key={item.title}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="size-10 sm:size-[52px] bg-foreground rounded-full flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="max-w-5 sm:max-w-7 object-contain" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      <IntegrationList />

      <CallToAction />
    </>
  );
};

export default IntegrationPage;
