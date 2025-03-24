import HeroBg from "@/assets/banner-bg.png";

const Banner = ({
  title,
  description,
  component,
}: {
  title: string;
  description?: React.ReactNode;
  component?: React.ReactNode;
}) => {
  return (
    <>
      <section
        className={`relative overflow-hidden bg-cover bg-top pt-20 ${component && 'pb-14 sm:pb-20 md:pb-40 lg:pb-60'}`}
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        <div className="container relative">
          <div className="max-w-[730px] text-center mx-auto py-10 md:py-14 lg:py-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-[55px] lg:leading-[66px]">
                {title}
            </h1>
            {description && (
              <p
                className="md:text-lg my-5 mb-[30px]"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        </div>
      </section>

      {component && (
        <div className="container relative -translate-y-14 sm:-translate-y-20 md:-translate-y-40 lg:-translate-y-60 -mb-8 sm:-mb-14 md:-mb-24 lg:-mb-40">
          {component}
        </div>
      )}
    </>
  );
};

export default Banner;
