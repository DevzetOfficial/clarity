import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import SectionHeader from "@/components/shared/section-header";

const faqData = [
  {
    question: "Do you provide on-going support?",
    answer:
      "If you receive a suspicious email, avoid clicking links or downloading attachments. Verify the sender's address and check for signs of phishing, like misspellings or odd requests. If unsure, contact the sender through a trusted method. Report the email to IT or your provider",
  },
  {
    question: "I already have the designs, can you develop them?",
    answer:
      "Absolutely! We specialize in turning existing designs into fully functional websites. Whether you have Figma, Adobe XD, or any other design files, we can transform them into a responsive, performant website while maintaining pixel-perfect accuracy to your original design.",
  },
  {
    question: "What if I don't like the designs?",
    answer:
      "We follow an iterative design process with multiple revision rounds to ensure your complete satisfaction. If you're not happy with any aspect of the design, we'll work closely with you to understand your preferences and make necessary adjustments until we achieve the perfect look and feel for your website.",
  },
  {
    question:
      "What if I want to work with someone else after the website is built?",
    answer:
      "We build our websites using industry-standard technologies and maintain clean, well-documented code. This means any qualified developer can easily take over the project if needed. We'll also provide complete documentation and can assist with the handover process to ensure a smooth transition.",
  },
  {
    question: "Can we have a quick call to see if we're a good fit?",
    answer:
      "Of course! We encourage scheduling a free consultation call to discuss your project requirements, answer any questions you may have, and determine if we're the right partner for your needs. During this call, we can discuss your goals, timeline, budget, and provide initial recommendations for your project.",
  },
];

const FAQ = ({ className }: { className?: string }) => {
  const location = useLocation();
  const isFaqPage = location.pathname === "/faq";

  return (
    <section className={cn("py-10 md:py-14 lg:py-20", className)}>
      <div className={cn('container max-w-[878px]', isFaqPage && 'bg-white p-3 md:p-7 rounded-[32px]')}>
        <SectionHeader
          title="Frequently Asked Questions"
          description="Discover cutting-edge solutions for comprehensive data security, <br class='hidden md:block'/> ensuring your digital world remains safe and protected."
        />

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
