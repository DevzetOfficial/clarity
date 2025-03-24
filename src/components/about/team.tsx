import SectionHeader from "@/components/shared/section-header";
import TeamMember from "./team-member";
import TeamMemberOne from "@/assets/team/member-1.png";
import TeamMemberTwo from "@/assets/team/member-2.png";
import TeamMemberThree from "@/assets/team/member-3.png";

export type MemberType = {
    id: number;
    name: string;
    designation: string;
    image: string;
    facebook: string;
    instagram: string;
    x: string;
}

const teamMembers: MemberType[] = [
  {
    id: 1,
    name: "Michael Brown",
    designation: "HR Consultant",
    image: TeamMemberOne,
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    x: "https://www.x.com",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    designation: "Marketing Consultant",
    image: TeamMemberTwo,
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    x: "https://www.x.com",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "Operations Consultant",
    image: TeamMemberThree,
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    x: "https://www.x.com",
  },
];
const Team = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container">
        <SectionHeader
          title="Get to know amazing people"
          description="Securing Your Digital World: Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security."
          subTitle="team"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
