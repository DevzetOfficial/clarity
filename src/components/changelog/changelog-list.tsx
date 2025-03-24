import ChangelogImg from "@/assets/changelog.png";

const changelogs = [
  {
    date: "Aug 25, 2023",
    version: "v1.0.0",
    features: [
      {
        title: "Initial Release",
        items: [
          "Introduced the core application framework.",
          "Implemented user authentication and authorization.",
        ],
      },
    ],
  },
  {
    date: "Sep 10, 2023",
    version: "v1.1.0",
    features: [
      {
        title: "Dashboard Enhancements",
        items: [
          "Added customizable widgets for personalized dashboards.",
          "Improved data visualization with new chart types.",
        ],
      },
      {
        title: "User Profile Updates",
        items: [
          "Enabled profile picture uploads.",
          "Added user bio and social media links.",
        ],
      },
    ],
  },
  {
    date: "Oct 5, 2023",
    version: "v1.2.0",
    features: [
      {
        title: "Performance Improvements",
        items: [
          "Optimized database queries for faster load times.",
          "Reduced application memory usage.",
        ],
      },
      {
        title: "Security Enhancements",
        items: [
          "Implemented two-factor authentication.",
          "Upgraded to the latest encryption standards.",
        ],
      },
    ],
  },
];

const ChangelogList = () => {
  return (
    <section className="pt-10 md:pt-14 lg:pt-20">
      <div className="container max-w-[878px] mx-auto text-foreground">
        <div className="grid gap-10 md:gap-12 lg:gap-[60px]">
          {changelogs.map((changelog, index) => (
            <div
              key={index}
              className="p-5 rounded-3xl bg-white shadow-[0px_13px_36.9px_0px_rgba(22,17,46,0.06)] flex gap-7 flex-col sm:flex-row"
            >
              <div className="aspect-[281/255] w-full sm:w-52 md:w-[281px] shrink-0 overflow-hidden rounded-2xl relative">
                <img
                  src={ChangelogImg}
                  alt="Changelog image"
                  className="size-full"
                />
                <span className="left-3 top-3 absolute bg-[linear-gradient(91deg,#FFF_3.55%,#FFF_96.15%)] px-2.5 py-0.5 rounded-full border border-white text-sm shadow-[0px_13px_36.9px_0px_rgba(22,17,46,0.06)]">
                  Released {changelog.date}
                </span>
              </div>
              <div className="flex-1">
                <span className="px-2.5 py-1 rounded-full border border-[#EAECF0] text-lg font-medium">
                  {changelog.version}
                </span>

                <div className="mt-3.5">
                  {changelog.features.map((feature, index) => (
                    <div className="mb-5 last:mb-0" key={index}>
                      <h4 className="text-lg font-medium mb-3">
                        {feature.title}
                      </h4>
                      <ul className="space-y-0.5 ml-5">
                        {feature.items.map((item, index) => (
                          <li
                            key={index}
                            className="list-disc marker:text-primary"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChangelogList;
