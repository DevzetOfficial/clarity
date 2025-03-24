import Banner from "@/components/shared/banner";
import CallToAction from "@/components/shared/call-to-action";
import FeaturedBlog from "@/components/blogs/featured-blog";
import BlogList from "@/components/blogs/blog-list";

const BlogsPage = () => {
  return (
    <>
      <Banner
        title="Protecting Your Data with Advanced Security "
        description="Discover cutting-edge solutions for comprehensive data security, ensuring your digital world remains safe and protected."
        component={<FeaturedBlog />}
      />

      <BlogList />

      <CallToAction />
    </>
  );
};

export default BlogsPage;
