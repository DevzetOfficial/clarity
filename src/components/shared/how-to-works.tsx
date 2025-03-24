import { Icons } from "@/components/icons";
import SectionHeader from "@/components/shared/section-header";

const features = [
  {
    icon: Icons.chartSuccess,
    iconColor: "#00FF99",
    iconBg: "#D1FADF",
    title: "Advanced Detection",
    description:
      "Our system continuously monitors your network and data environments to detect any suspicious activities promptly.",
  },
  {
    icon: Icons.data,
    iconColor: "#D735D7",
    iconBg: "#FFEAFF",
    title: "Robust Data Encryption",
    description:
      "We ensure that all sensitive data is encrypted both in transit and at rest, using industry-standard encryption protocols.",
  },
  {
    icon: Icons.speedometer,
    iconColor: "#FF7A28",
    iconBg: "#FFF2EA",
    title: "Automatic Updates",
    description:
      "In the event of a security incident, our automated response system promptly initiates protective measures.",
  },
  {
    icon: Icons.shieldTick,
    iconColor: "#FF7575",
    iconBg: "#FDF2F2",
    title: "Cost Efficiency",
    description:
      "In the event of a security incident, our automated response system promptly initiates protective measures.",
  },
  {
    icon: Icons.key,
    iconColor: "#5C96FF",
    iconBg: "#EEF4FF",
    title: "Enhanced Security",
    description:
      "Our system continuously monitors your network and data environments to detect any suspicious activities promptly.",
  },
  {
    icon: Icons.securityCard,
    iconColor: "#9966FF",
    iconBg: "#F1EAFF",
    title: "Scalability & Flexibility",
    description:
      "We ensure that all sensitive data is encrypted both in transit and at rest, using industry-standard encryption protocols.",
  },
];

const HowToWorks = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container max-w-[1056px]">
        <SectionHeader
          title="How Clarity Security Solution works"
          description="Securing your digital world: your trusted partner in data protection with <br class='hidden md:block'/> cutting-edge solutions for comprehensive data security."
          subTitle="How it works"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[22px] gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 md:p-[30px] border rounded-2xl md:rounded-[20px] hover:-translate-y-2 transition-all duration-300">
              <div
                className="flex size-[72px] items-center justify-center rounded-full mx-auto"
                style={{
                  backgroundColor: feature.iconBg,
                }}
              >
                <feature.icon
                  className="text-[32px]"
                  style={{
                    color: feature.iconColor,
                  }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2.5 mt-6">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToWorks;
