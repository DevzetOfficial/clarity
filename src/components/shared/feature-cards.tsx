import FeatureOneImage from "@/assets/feature/feature-1.png";
import FeatureTwoImage from "@/assets/feature/feature-2.png";
import FeatureThreeImage from "@/assets/feature/feature-3.png";

const features = [
  {
    category: "Visitor History",
    title: "Regularly evaluates potential security risks",
    description:
      "Securing your digital world: your trusted partner in data protection with",
    bgColor: "#D3F5FF",
    image: FeatureOneImage,
  },
  {
    category: "Visitor History",
    title: "Continuously assesses potential security threats ",
    description:
      "Securing your digital world: your trusted partner in data protection with",
    bgColor: "#DDD6FF",
    image: FeatureTwoImage,
  },
  {
    category: "Banners clicks",
    title: "Monitors and logs all data access events",
    description:
      "Securing your digital world: your trusted partner in data protection with cutting",
    bgColor: "#FFF2EA",
    image: FeatureThreeImage,
  },
];

const FeatureCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          className="overflow-hidden rounded-xl p-5"
          key={index}
          style={{
            backgroundColor: feature.bgColor,
          }}
        >
          <div className="aspect-[375/273] mb-5 sm:mb-8 rounded-[14px] border">
            <img
              src={feature.image}
              alt={feature.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-foreground text-white text-xs px-3 py-1 rounded-full w-fit mb-3">
            {feature.category}
          </div>
          <h3 className="text-xl sm:text-2xl md:text-[28px] md:leading-[42px] font-bold mb-2 sm:mb-4">
            {feature.title}
          </h3>
          <p className="text-forebg-foreground md:text-lg">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
