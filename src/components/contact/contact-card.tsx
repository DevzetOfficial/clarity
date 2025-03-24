import { Icons } from "../icons";

const ContactCard = () => {
  return (
    <div className="p-[30px] w-full rounded-[30px] bg-white border border-black/10 md:col-span-5">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Contact Us</h2>
      <p className="mb-14 mt-5 text-lg">
        Connect with our dedicated Sales Team at Clarity and unlock a tailored
        experience designed to meet your business needs
      </p>
      <div className="grid gap-6">
        {[
          {
            label: "Our Email",
            value: "hello@uihut.com",
            icon: Icons.message,
            iconBgColor: "#F1EAFF",
            iconColor: "#925FFF",
          },
          {
            label: "Phone",
            value: "We hire +61 (000 000 000)",
            icon: Icons.calling,
            iconBgColor: "#EEF4FF",
            iconColor: "#467CE9",
          },
          {
            label: "Visit Us",
            value: "1875 Ascot Ave 10th Floor, CA",
            icon: Icons.link,
            iconBgColor: "#FFF2EA",
            iconColor: "#FF7A28",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="size-[60px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: item.iconBgColor }}
            >
              <item.icon
                className="text-2xl"
                style={{ color: item.iconColor }}
              />
            </div>
            <div className="grid gap-1">
              <p className="text-lg font-medium">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
