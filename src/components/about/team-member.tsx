import { Icons } from "../icons";
import { MemberType } from "./team";
import { Facebook, Instagram } from "lucide-react";

const TeamMember = ({ member }: { member: MemberType }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-foreground p-6 rounded-3xl border border-[#EAECF0]">
      <div className="size-[166px] rounded-full overflow-hidden mb-3">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl md:text-[28px] md:leading-[42px] font-bold">
        {member.name}
      </h3>
      <p className="text-lg">{member.designation}</p>
      <div className="flex items-center justify-center gap-3.5 mt-6">
        <a
          href={member.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="size-9 rounded-full bg-[#F9F8FF] flex items-center justify-center hover:bg-primary hover:text-white duration-200"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="size-9 rounded-full bg-[#F9F8FF] flex items-center justify-center hover:bg-primary hover:text-white duration-200"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href={member.x}
          target="_blank"
          rel="noopener noreferrer"
          className="size-9 rounded-full bg-[#F9F8FF] flex items-center justify-center hover:bg-primary hover:text-white duration-200"
        >
          <Icons.x className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
