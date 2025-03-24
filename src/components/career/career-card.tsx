import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CareerType } from "./career-list";
import { Icons } from "@/components/icons";

const CareerCard = ({ career }: { career: CareerType }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#EAECF0] grid gap-3 text-foreground">
      <div className="grid gap-2.5">
        <h3 className="text-2xl md:text-[28px] md:leading-[42px] font-bold">
          {career.title}
        </h3>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <Icons.location className="text-[#130F26]" />
            <span className="text-sm">{career.location}</span>
          </div>
          <span className="text-sm px-2 py-0.5 bg-[#DDD6FF] rounded-full">{career.locationType}</span>
        </div>
      </div>

      <p className="text-lg ">{career.short_description}</p>

      <Link to={`/career/${career.id}`}>
        <Button className="bg-foreground hover:bg-foreground/90 text-white">
          View Job <Icons.rightArrow3 />
        </Button>
      </Link>
    </div>
  );
};

export default CareerCard;
