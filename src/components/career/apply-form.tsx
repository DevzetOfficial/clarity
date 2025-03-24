import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

const ApplyForm = () => {
  return (
    <div className="container" id="apply-form">
      <div className="max-w-[582px] mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Apply for position</h2>

        <form action="" className="space-y-8">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-lg text-foreground">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="py-3 px-2.5 rounded-lg text-lg border border-[#EAECF0] focus-visible:outline-none focus:border-foreground placeholder:text-[#9F9F9F] text-foreground"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-lg text-foreground">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="py-3 px-2.5 rounded-lg text-lg border border-[#EAECF0] focus-visible:outline-none focus:border-foreground placeholder:text-[#9F9F9F] text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="address" className="text-lg text-foreground">
                Address
              </label>
              <textarea
                id="address"
                placeholder="Your address"
                className="py-3 px-2.5 min-h-[180px] rounded-lg text-lg border border-[#EAECF0] focus-visible:outline-none focus:border-foreground placeholder:text-[#9F9F9F] text-foreground"
              ></textarea>
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-lg text-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Your phone number"
                className="py-3 px-2.5 rounded-lg text-lg border border-[#EAECF0] focus-visible:outline-none focus:border-foreground placeholder:text-[#9F9F9F] text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="website" className="text-lg text-foreground">
                Website, Blog or Portfolio
              </label>
              <input
                type="text"
                id="website"
                placeholder="dribbble.com/uihut"
                className="py-3 px-2.5 rounded-lg text-lg border border-[#EAECF0] focus-visible:outline-none focus:border-foreground placeholder:text-[#9F9F9F] text-foreground"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="bg-foreground w-full hover:bg-foreground/90 text-white"
          >
            Apply Now <Icons.rightArrow3 />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
