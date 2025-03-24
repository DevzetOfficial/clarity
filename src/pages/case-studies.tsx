import Banner from "@/components/shared/banner";
import CallToAction from "@/components/shared/call-to-action";
import CaseStudiesImage from "@/assets/case-studies.png";

const CaseStudiesPage = () => {
  return (
    <>
      <Banner
        title="Application deadlines or instructions."
        description="Explore a wide array of employment opportunities and discover fascinating career paths at our innovative Software as a Service (SaaS) firm."
        component={<CaseStudiesDetails />}
      />

      <CallToAction />
    </>
  );
};

const CaseStudiesDetails = () => {
  return (
    <div className="max-w-[1096px] mx-auto space-y-10 md:space-y-12 lg:space-y-[60px]">
      <div className="aspect-[1064/494] rounded-3xl overflow-hidden">
        <img
          src={CaseStudiesImage}
          alt="Case Studies"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col text-center sm:text-left sm:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-[100px]">
        {[
          {
            label: "10m+",
            value: "Worldwide customer",
          },
          {
            label: "98%",
            value: "Business growth",
          },
          {
            label: "5m+",
            value: "Direct business involved",
          },
        ].map((item) => (
          <div className="text-foreground" key={item.label}>
            <span className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] lg:leading-[66px] font-bold">
              {item.label}
            </span>
            <p className="text-lg font-medium">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-full text-lg marker:text-foreground text-foreground">
        <h2>Introduction</h2>
        <p>In a digital age where efficiency and organization are paramount, the Clarity Task Management App has emerged as a game-changer for individuals and teams seeking to revolutionize their productivity. This case study delves into the experiences of Horizon Company, showcasing the transformative journey they undertook with the Clarity app.</p>
        <h2>Challenge</h2>
        <p>Horizon Company, a dynamic team in the tech industry, faced challenges in project coordination and meeting tight deadlines. The lack of a cohesive task management system led to missed milestones, communication gaps, and an overall decline in team productivity. Recognizing the need for change, they turned to the Clarity Task Management App.</p>
        <h2>Implementation</h2>
        <p>The Clarity app was seamlessly integrated into Horizon Company's workflow, providing a user-friendly interface that allowed team members to create and prioritize tasks effortlessly. Customization features allowed the team to tailor the app to their unique needs, creating a personalized experience that aligned with their workflow. The app's cross-platform compatibility ensured that tasks were accessible from desktops, laptops, and mobile devices, enabling flexibility in task management.</p>
        <h2>Results</h2>
        <p>The Clarity app quickly became an integral part of XYZ Company's daily operations, leading to a remarkable transformation in their productivity. Real-time collaboration features streamlined communication, enabling team members to work cohesively, irrespective of their physical location. The app's integration with calendar tools and email platforms simplified coordination and reduced the need for multiple applications. The customizable nature of Clarity allowed the team to adapt the app to their evolving needs, fostering a sense of ownership and engagement.</p>
        <h2>Results</h2>
        <p>The Clarity app quickly became an integral part of XYZ Company's daily operations, leading to a remarkable transformation in their productivity. Real-time collaboration features streamlined communication, enabling team members to work cohesively, irrespective of their physical location. The app's integration with calendar tools and email platforms simplified coordination and reduced the need for multiple applications. The customizable nature of Clarity allowed the team to adapt the app to their evolving needs, fostering a sense of ownership and engagement.</p>
        <p>Furthermore, Clarity's analytics and reporting features provided valuable insights into task completion rates, identifying areas for improvement and enhancing overall project management. The Clarity app not only addressed the initial challenges but also set a foundation for continuous improvement and efficiency</p>
        <h2>Conclusion</h2>
        <p>The Clarity Task Management App proved to be a catalyst for change at XYZ Company, illustrating the app's capacity to transform challenges into opportunities for growth. By embracing the ultimate task management secrets embedded in the Habit app, XYZ Company witnessed increased collaboration, heightened efficiency, and a renewed sense of control over their projects. As businesses navigate the complexities of the modern workplace, the Clarity app stands out as a powerful tool, offering a strategic advantage in the pursuit of enhanced productivity and success.</p>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
