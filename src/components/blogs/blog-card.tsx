import { Link } from "react-router-dom";

const BlogCard = ({
  blog,
}: {
  blog: {
    category: string;
    title: string;
    date: string;
    slug: string;
    thumbnail: string;
  };
}) => {
  return (
    <div className="rounded-3xl p-2.5 border-[#EAECF0] border group">
      <div className="relative aspect-[502/299] rounded-2xl overflow-hidden">
        <span className="absolute top-2 left-2 z-[1] bg-white rounded-full text-sm py-0.5 px-2 text-foreground">
          {blog.category}
        </span>
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="object-cover size-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <p className="my-3">{blog.date}</p>
      <Link to={blog.slug} className="text-xl sm:text-2xl md:text-[28px] md:leading-[42px] font-bold text-foreground hover:underline transition-all duration-300">
        {blog.title}
      </Link>
    </div>
  );
};

export default BlogCard;
