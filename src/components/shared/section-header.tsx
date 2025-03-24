import { cn } from "@/lib/utils";

const SectionHeader = ({
  title,
  description,
  subTitle,
  className,
  children,
}: {
  title: string;
  description?: TrustedHTML;
  subTitle?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className={cn("max-w-3xl mx-auto text-center mb-10", className)}>
      {subTitle && (
        <span className="text-primary font-medium rounded-full text-sm uppercase px-2.5 py-1 bg-[#F9F8FF]">
          {subTitle}
        </span>
      )}

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[61px] font-bold mb-3 sm:mb-5 mt-2.5">
        {title}
      </h1>

      {description && (
        <p
          className="text-foreground mx-auto text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {children}
    </section>
  );
};

export default SectionHeader;
