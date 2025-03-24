import SectionHeader from "../shared/section-header";
import CareerCard from "./career-card";

export type CareerType = {
  id: number;
  title: string;
  description: string;
  locationType: string;
  location: string;
  employmentType: string;
  short_description: string;
  salary: string;
  benefits: number;
};

export const careers: CareerType[] = [
  {
    id: 1,
    title: "Software Engineer",
    short_description:
      "We are looking for a software engineer with 3+ years of experience in React and Node.js.",
    locationType: "Remote",
    location: "USA",
    employmentType: "Full-time",
    salary: "$100,000 - $120,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`,
  },
  {
    id: 2,
    title: "Product Manager",
    short_description:
      "Seeking a product manager with a strong background in agile methodologies and product lifecycle management.",
    locationType: "On-site",
    location: "New York, USA",
    employmentType: "Full-time",
    salary: "$90,000 - $110,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 3,
    title: "Data Scientist",
    short_description:
      "Looking for a data scientist with expertise in machine learning and data analysis.",
    locationType: "Remote",
    location: "Canada",
    employmentType: "Contract",
    salary: "$80,000 - $100,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 4,
    title: "UX Designer",
    short_description:
      "We need a UX designer with a passion for creating intuitive user experiences.",
    locationType: "On-site",
    location: "San Francisco, USA",
    employmentType: "Full-time",
    salary: "$85,000 - $105,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 5,
    title: "DevOps Engineer",
    short_description:
      "Hiring a DevOps engineer with experience in cloud infrastructure and CI/CD pipelines.",
    locationType: "Remote",
    location: "UK",
    employmentType: "Full-time",
    salary: "$95,000 - $115,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 6,
    title: "Marketing Specialist",
    short_description:
      "Seeking a marketing specialist with a focus on digital marketing strategies.",
    locationType: "On-site",
    location: "Los Angeles, USA",
    employmentType: "Part-time",
    salary: "$50,000 - $70,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 7,
    title: "Sales Executive",
    short_description:
      "Looking for a sales executive with a proven track record in B2B sales.",
    locationType: "Remote",
    location: "Australia",
    employmentType: "Full-time",
    salary: "$70,000 - $90,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 8,
    title: "HR Manager",
    short_description:
      "We are hiring an HR manager with experience in recruitment and employee relations.",
    locationType: "On-site",
    location: "Chicago, USA",
    employmentType: "Full-time",
    salary: "$75,000 - $95,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 9,
    title: "Content Writer",
    short_description:
      "Seeking a content writer with a flair for creating engaging and informative content.",
    locationType: "Remote",
    location: "India",
    employmentType: "Contract",
    salary: "$40,000 - $60,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 10,
    title: "Graphic Designer",
    short_description:
      "Looking for a graphic designer with a strong portfolio in digital and print media.",
    locationType: "On-site",
    location: "Berlin, Germany",
    employmentType: "Full-time",
    salary: "$60,000 - $80,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 11,
    title: "Network Administrator",
    short_description:
      "Hiring a network administrator with experience in network security and management.",
    locationType: "Remote",
    location: "USA",
    employmentType: "Full-time",
    salary: "$85,000 - $105,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 12,
    title: "Customer Support Specialist",
    short_description:
      "We need a customer support specialist with excellent communication skills.",
    locationType: "Remote",
    location: "Philippines",
    employmentType: "Part-time",
    salary: "$30,000 - $50,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 13,
    title: "IT Support Technician",
    short_description:
      "Looking for an IT support technician with experience in troubleshooting and technical support.",
    locationType: "On-site",
    location: "London, UK",
    employmentType: "Full-time",
    salary: "$55,000 - $75,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
  {
    id: 14,
    title: "Project Manager",
    short_description:
      "Hiring a project manager with a strong background in managing cross-functional teams.",
    locationType: "Remote",
    location: "USA",
    employmentType: "Full-time",
    salary: "$100,000 - $130,000",
    benefits: 401,
    description: `<h2>About the position</h2> <p> At Clarity, we are passionate about delivering exceptional user experiences through thoughtful and innovative design. We are a dynamic team committed to understanding user needs and solving complex problems. As a UX Designer, you will play a crucial role in shaping the way users interact with our products. </p> <h2>Key Responsibilities:</h2> <ul> <li> Conduct user research to gather insights and understand user needs, behaviors, and pain points. </li> <li> Create user personas, journey maps, and user flows to guide the design process. </li> <li> Develop wireframes, prototypes, and interaction designs based on research and user feedback. </li> <li> Collaborate closely with UI designers, developers, and product managers to ensure seamless integration of UX designs. </li> <li> Facilitate usability testing and analyze results to iterate and improve designs. </li> </ul> <h2>Required Qualifications:</h2> <ul> <li> Bachelor’s degree in UX Design, Human-Computer Interaction, Psychology, or a related field, or equivalent experience. </li> <li> Proven experience as a UX Designer with a strong portfolio demonstrating your process and outcomes. </li> <li> Proficiency in UX design tools such as Axure, Figma, Adobe XD, or similar. </li> <li> Solid understanding of user research methods, usability principles, and interaction design. </li> <li>Excellent problem-solving skills and attention to detail.</li> </ul> <h2>Preferred Qualifications:</h2> <ul> <li>Experience with data-driven design and A/B testing.</li> <li>Knowledge of front-end development technologies is a plus.</li> <li>Experience working in a fast-paced, Agile environment.</li> </ul> <h2>Why Join Us:</h2> <ul> <li>Competitive salary and benefits package.</li> <li>Work on a variety of exciting projects that make a real impact.</li> <li> Supportive and innovative team environment that fosters creativity and growth. </li> </ul>`
  },
];

const CareerList = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container max-w-[1096px]">
        <SectionHeader
          title="Job Listings"
          description="Discover an extensive selection of job openings that <br class='hidden md:block'/> offer interesting chances for professional "
          subTitle="Integration"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {careers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default CareerList;
