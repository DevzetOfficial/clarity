import Banner from "@/components/shared/banner";
import CareerImage from "@/assets/career.png";
import CareerList from "@/components/career/career-list";
import CallToAction from "@/components/shared/call-to-action";
const CareerPage = () => {
  return (
    <>
      <Banner
        title="Application deadlines or instructions."
        description="Explore a wide array of employment opportunities and discover fascinating career paths at our innovative Software as a Service (SaaS) firm."
        component={
          <div className="max-w-[1096px] mx-auto aspect-[1064/494] rounded-3xl overflow-hidden">
            <img
              src={CareerImage}
              alt="Career"
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      <CareerList />

      <CallToAction />
    </>
  );
};

export default CareerPage;
