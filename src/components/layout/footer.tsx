import { Link } from "react-router-dom";
import { Icons } from "../icons";

const NavTitle = ({ title }: { title: string }) => {
  return <h3 className="font-medium text-lg mb-5">{title}</h3>;
};

const NavList = ({
  lists,
}: {
  lists: {
    label: string;
    slug: string;
  }[];
}) => {
  return (
    <ul className="space-y-3">
      {lists.map((link, index) => (
        <li key={index}>
          <Link
            to={link.slug}
            className="text-lg hover:underline relative group transition-all duration-300 inline-flex items-center gap-1"
          >
            {link.label}
            <Icons.arrowUpRight className="text-2xl transition-all duration-300 invisible group-hover:visible" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container max-w-[1096px]">
        <div className="grid md:grid-cols-10 gap-5 py-10 md:py-14 lg:py-20">
          <div className="md:col-span-5">
            <div className="mb-11">
              <span className="text-xl font-bold">Clarity</span>
            </div>
            <h5 className="text-lg font-medium">
              Subscribe to Our Newsletter!
            </h5>
            <p className="text-sm mt-3 mb-6">
              Stay Informed with Our Latest Security Insights -{" "}
              <br className="hidden md:block" /> Subscribe to Our Newsletter!
            </p>

            <div className="max-w-[305px] flex items-center bg-[#2B3246] p-1 rounded-full">
              <input
                type="email"
                placeholder="Entry your Email"
                className="w-full px-2.5 py-2 text-sm placeholder:text-[#c0c0c0] focus-visible:outline-none"
              />
              <button className="bg-primary px-4 py-2 rounded-full text-sm font-medium shrink-0 cursor-pointer hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-y-5">
            <div>
              <NavTitle title="Menu" />
              <NavList
                lists={[
                  {
                    label: "Home",
                    slug: "/",
                  },
                  {
                    label: "Features",
                    slug: "/features",
                  },
                  {
                    label: "Pricing",
                    slug: "/pricing",
                  },
                  {
                    label: "Blogs",
                    slug: "/blogs",
                  },{
                    label: "Career",
                    slug: "/career",
                  },
                ]}
              />
            </div>

            <div>
              <NavTitle title="Info" />
              <NavList
                lists={[
                  {
                    label: "Terms",
                    slug: "/terms",
                  },
                  {
                    label: "Career",
                    slug: "/career",
                  },
                  {
                    label: "FAQ",
                    slug: "/faq",
                  },
                  {
                    label: "Case Studies",
                    slug: "/case-studies",
                  },
                  {
                    label: "Changelog",
                    slug: "/changelog",
                  },
                ]}
              />
            </div>

            <div>
              <NavTitle title="Social Media" />

              <NavList
                lists={[
                  {
                    label: "Facebook",
                    slug: "/",
                  },
                  {
                    label: "Instagram",
                    slug: "/Linkedin",
                  },
                  {
                    label: "Twitter (X)",
                    slug: "/",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-5 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Clarity Security. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
