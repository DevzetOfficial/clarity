/* eslint-disable @typescript-eslint/ban-ts-comment */
import CareemLogo from "@/assets/logos/careem.png";
import CollinearLogo from "@/assets/logos/collinear.png";
import AvastLogo from "@/assets/logos/avast.png";
import ReplayLogo from "@/assets/logos/replay.png";
import StackAdaptLogo from "@/assets/logos/stack-adapt.png";
import TalentLogo from "@/assets/logos/talent.png";
// @ts-expect-error
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const logos = [
  {
    src: CareemLogo,
    alt: "Careem Logo",
  },
  {
    src: StackAdaptLogo,
    alt: "StackAdapt Logo",
  },
  {
    src: CollinearLogo,
    alt: "Collinear Logo",
  },
  {
    src: ReplayLogo,
    alt: "Replay Logo",
  },

  {
    src: TalentLogo,
    alt: "Talent Logo",
  },
  {
    src: AvastLogo,
    alt: "Avast Logo",
  },
];

const SecuringLogos = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container max-w-[1050px]">
        <h2 className="text-center text-lg lg:text-2xl font-bold mb-[30px]">
          Securing Your Digital World:
        </h2>
        <Swiper
          slidesPerView={"auto"}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={10000}
          loop={true}
          spaceBetween={30}
          modules={[Autoplay]}
          className="logosSwiper"
          breakpoints={{
            768: {
              spaceBetween: 66,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="h-7 md:h-8 lg:h-9 !w-fit">
              <img
                src={logo.src}
                alt={`${logo.alt}`}
                className="h-full w-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SecuringLogos;
