import Blog1 from "@/assets/blogs/blog-1.png";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Icons } from "../icons";

const FeaturedBlog = () => {
  return (
    <div className="rounded-3xl md:rounded-4xl bg-white p-4 md:p-6 max-w-[1096px] mx-auto shadow-[0px_13px_36.9px_0px_rgba(22,17,46,0.06)] grid md:grid-cols-2 gap-6">
      <div className="relative aspect-[498/456] rounded-xl md:rounded-3xl overflow-hidden">
        <span className="absolute top-2 left-2 bg-primary rounded-full text-sm py-0.5 px-2 text-white">
          Marketing
        </span>
        <img
          src={Blog1}
          alt="Title"
          className="object-cover size-full"
        />
      </div>
      <div className="grid gap-3 sm:gap-4 md:gap-6">
        <p>24 September 2024</p>
        <Link
          to="#"
          className="text-xl sm:text-2xl md:text-3xl lg:text-[44px] lg:leading-[61px] font-bold text-foreground hover:underline transition-all duration-300"
        >
          Unlocking the Secrets of Digital Marketing: Strategies for 2024
        </Link>
        <p className="text-lg text-foreground">
          A detailed look at the most significant cybersecurity threats this
          year, including practical tips and strategies to protect against them
        </p>
        <div className="mt-2 md:mt-8">
          <Button className="bg-foreground hover:bg-foreground/90 text-white ">
            Get Started
            <Icons.rightArrow3 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
