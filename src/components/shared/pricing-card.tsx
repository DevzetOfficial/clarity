import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const prices = [
  {
    name: "Basic Plan",
    description:
      "Ideal for small businesses or individuals looking to secure their data with fundamental protection features.",
    price: "$29",
    period: "per month, billed annually",
    features: [
      "Basic threat detection",
      "Email alerts & reporting",
      "Daily data backup",
    ],
    popular: false,
  },
  {
    name: "Core Plan",
    description:
      "Ideal for small businesses or individuals looking to secure their data with fundamental protection features.",
    price: "$69",
    period: "per month, billed annually",
    features: [
      "Basic threat detection",
      "Basic alerts & reporting",
      "Daily data backup",
      "API protection",
      "Email support",
    ],
    popular: true,
  },
  {
    name: "Pro Plan",
    description:
      "Ideal for small businesses or individuals looking to secure their data with fundamental protection features.",
    price: "$99",
    period: "per month, billed annually",
    features: [
      "Basic threat detection",
      "Basic alerts & reporting",
      "Daily data backup",
      "Email support",
      "Single user license",
    ],
    popular: false,
  },
];

const PricingCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {prices.map((plan, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-3xl md:rounded-[30px] p-7 pb-20 md:p-10 md:pb-[126px] ${
            plan.popular
              ? "bg-foreground text-white"
              : "bg-input text-foreground"
          }`}
        >
          <h3 className="md:text-2xl font-bold mb-4">{plan.name}</h3>
          <p className="text-lg">{plan.description}</p>
          <div className="my-8">
            <span className="text-4xl md:text-[44px] font-bold">{plan.price}</span>
            <span className="text-lg"> {plan.period}</span>
          </div>
          <ul className="space-y-2 mb-6 text-lg">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Icons.check
                  className={`text-2xl  ${
                    plan.popular
                      ? "[&>rect]:fill-[#12B76A] [&>path]:stroke-foreground"
                      : "[&>rect]:fill-[#FFEAFF] [&>path]:stroke-[#925FFF]"
                  }`}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            className={`absolute bottom-10 left-10 ${
              plan.popular ? "" : "bg-black text-white"
            }`}
          >
            Get Started
            <Icons.rightArrow3 />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
