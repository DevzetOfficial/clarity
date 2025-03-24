import FAQ from "@/components/shared/faq";
import Banner from "@/components/shared/banner";
import CallToAction from "@/components/shared/call-to-action";
import ContactArea from "@/components/contact/contact-area";

const ContactPage = () => {
  return (
    <>
      <Banner
        title="Get in Touch Contact Information and Support."
        description="Discover cutting-edge solutions for comprehensive data security, ensuring your digital world remains safe and protected."
        component={ <ContactArea />}
      />
      <FAQ/>
      <CallToAction />
    </> 
  );
};

export default ContactPage;
