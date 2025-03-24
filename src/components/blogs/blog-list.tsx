import SectionHeader from "@/components/shared/section-header";
import BlogCard from "./blog-card";
import Blog1 from "@/assets/blogs/blog-1.png";
import Blog2 from "@/assets/blogs/blog-2.png";
import Blog3 from "@/assets/blogs/blog-3.png";
import Blog4 from "@/assets/blogs/blog-4.png";
import Blog5 from "@/assets/blogs/blog-5.png";
import Blog6 from "@/assets/blogs/blog-6.png";

const blogs = [
  {
    category: "Business",
    title: "Monitors and logs all data access events",
    date: "24 September 2024",
    slug: "#",
    thumbnail: Blog1,
  },
  {
    category: "Technology",
    title: "The Future of AI in Everyday Life",
    date: "15 October 2024",
    slug: "#",
    thumbnail: Blog2,
  },
  {
    category: "Health",
    title: "How Technology is Revolutionizing Healthcare",
    date: "5 November 2024",
    slug: "#",
    thumbnail: Blog3,
  },
  {
    category: "Finance",
    title: "Understanding Cryptocurrency and Blockchain",
    date: "20 November 2024",
    slug: "#",
    thumbnail: Blog4,
  },
  {
    category: "Education",
    title: "The Role of Technology in Modern Education",
    date: "30 November 2024",
    slug: "#",
    thumbnail: Blog5,
  },
  {
    category: "Travel",
    title: "Exploring the Wonders of the World",
    date: "10 December 2024",
    slug: "#",
    thumbnail: Blog6,
  },
];

const BlogList = () => {
  return (
    <div>
      <SectionHeader title="Latest Blogs" />

      <div className="container max-w-[1096px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
