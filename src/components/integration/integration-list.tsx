import SectionHeader from "../shared/section-header";

import zapierImg from "@/assets/integration/zapier.png";
import asanaImg from "@/assets/integration/asana.png";
import atlassianImg from "@/assets/integration/atlassian.png";
import html5Img from "@/assets/integration/html_5.png";
import mailchipImg from "@/assets/integration/mailchip.png";
import reduxImg from "@/assets/integration/redux.png";
import { Icons } from "../icons";
import { Link } from "react-router-dom";

const integrations = [
  {
    title: "Atlassian",
    image: atlassianImg,
    description:
      "Our advanced technology ensures that your payments are processed swiftly, reducing wait times and allowing you to manage your finances more efficiently.",
  },
  {
    title: "Zepier",
    image: zapierImg,
    description:
      "Our advanced technology ensures that your payments are processed swiftly, reducing wait times and allowing you to manage your finances more efficiently.",
  },
  {
    title: "html 5",
    image: html5Img,
    description:
      "Our advanced technology ensures that your payments are processed swiftly, reducing wait times and allowing you to manage your finances more efficiently.",
  },
  {
    title: "Asana",
    image: asanaImg,
    description:
      "Our advanced technology ensures that your payments are processed swiftly, reducing wait times and allowing you to manage your finances more efficiently.",
  },
  {
    title: "Redux",
    image: reduxImg,
    description:
      "Our advanced technology ensures that your payments are processed swiftly, reducing wait times and allowing you to manage your finances more efficiently.",
  },
  {
    title: "Mailchips",
    image: mailchipImg,
    description:
      "Our advanced technology ensures that your payments are processed swiftly, reducing wait times and allowing you to manage your finances more efficiently.",
  },
];

const IntegrationList = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container">
        <SectionHeader
          title="Explore Integrations"
          subTitle="integration"
          description="Securing Your Digital World: Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {integrations.map((integration) => (
            <div
              key={integration.title}
              className="rounded-3xl border border-[#EAECF0] p-6 text-foreground duration-300 hover:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center bg-foreground rounded-full size-[52px]">
                  <img
                    src={integration.image}
                    alt={integration.title}
                    className="w-7 object-contain"
                  />
                </div>
                <Link
                  to="#"
                  className="size-10 hover:bg-primary hover:text-white duration-300 flex items-center justify-center border border-[#EAECF0] text-foreground rounded-full"
                >
                  <Icons.arrowUpRight className="text-2xl" />
                </Link>
              </div>
              <h3 className="text-2xl font-bold mt-6 mb-2.5">
                {integration.title}
              </h3>
              <p className="text-sm">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationList;
