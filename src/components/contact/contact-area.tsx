import ContactCard from "./contact-card";
import ContactForm from "./contact-form";

const ContactArea = () => {
  return (
    <div className="max-w-[1096px] mx-auto grid md:grid-cols-10 gap-5">
      <ContactCard />
      <ContactForm />
    </div>
  );
};

export default ContactArea;
