import ChangelogList from "@/components/changelog/changelog-list";
import Banner from "@/components/shared/banner";
import CallToAction from "@/components/shared/call-to-action";

const ChangelogPage = () => {
  return (
    <>
      <Banner
        title="Discover Our Latest Features and Enhancements"
        description="Discover cutting-edge solutions for comprehensive data security, ensuring your digital world remains safe and protected."
      />

      <ChangelogList />

      <CallToAction />
    </>
  );
};

export default ChangelogPage;
