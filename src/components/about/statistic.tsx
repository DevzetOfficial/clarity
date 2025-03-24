const Statistic = () => {
  return (
    <div className="container max-w-[1096px] mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-10 sm:flex-wrap">
        {[
          {
            label: "1000+",
            value: "Helped over 1000 businesses",
          },
          {
            label: "32M+",
            value: "Customer Satisfaction",
          },
          {
            label: "24/7",
            value: "Support Availability",
          },
        ].map((item) => (
          <div className="text-foreground text-center" key={item.label}>
            <span className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] lg:leading-[66px] font-bold">
              {item.label}
            </span>
            <p className="text-lg font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistic;
