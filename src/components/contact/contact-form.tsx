const ContactForm = () => {
  return (
    <div className="p-[30px] w-full rounded-[30px] bg-foreground md:col-span-5">
      <form className="grid gap-5">
        <div className="grid gap-3">
          <label htmlFor="name" className="text-lg font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className="w-full rounded-[12px] placeholder:text-[#EEF4FF]/20 focus-visible:outline-none focus:border-primary text-white border border-[#EEF4FF]/20 px-5 py-4"
          />
        </div>
        <div className="grid gap-3">
          <label htmlFor="email" className="text-lg font-medium text-white">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="Entry your email Adress"
            className="w-full rounded-[12px] placeholder:text-[#EEF4FF]/20 focus-visible:outline-none focus:border-primary text-white border border-[#EEF4FF]/20 px-5 py-4"
          />
        </div>
        <div className="grid gap-3">
          <label htmlFor="message" className="text-lg font-medium text-white">
            Tell us more about your inquiry
          </label>
          <textarea
            id="message"
            placeholder="Entry your message"
            className="w-full rounded-[12px] placeholder:text-[#EEF4FF]/20 focus-visible:outline-none focus:border-primary text-white border border-[#EEF4FF]/20 px-5 py-4 min-h-[154px]"
          ></textarea>
        </div>
        <div className="mt-2.5">
          <button
            type="submit"
            className="w-full rounded-full bg-primary text-foreground text-[22px] font-medium px-8 py-3 cursor-pointer hover:bg-primary/90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
