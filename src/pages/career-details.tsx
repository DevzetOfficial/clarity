import { useParams } from "react-router-dom";
import Banner from "@/components/shared/banner";
import ApplyForm from "@/components/career/apply-form";
import { careers } from "@/components/career/career-list";
import CallToAction from "@/components/shared/call-to-action";
import CareerDetailsContent from "@/components/career/career-details-content";

const CareerDetails = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <>
        <Banner title="No Id found" />

        <CallToAction />
      </>
    );
  }

  const career = careers.find((career) => career.id === parseInt(id));

  if (!career) {
    return (
      <>
        <Banner title="No Career found" />

        <CallToAction />
      </>
    );
  }

  return (
    <>
      <Banner
        title={career?.title || ""}
        component={<CareerDetailsContent career={career} />}
      />

      <ApplyForm />

      <CallToAction />
    </>
  );
};

export default CareerDetails;
