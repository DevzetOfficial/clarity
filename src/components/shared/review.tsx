/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Icons } from "@/components/icons";
import SectionHeader from "@/components/shared/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error
import "swiper/css";

import MemberAvatar from "@/assets/team/member-1.png"

const Review = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="container">
        <SectionHeader
          title="Customer Reviews"
          description="Securing your digital world: your trusted partner in data protection with cutting-edge solutions "
        />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          768: {
            centeredSlides: true,
            slidesPerView: 1.75,
          },
          1200: {
            slidesPerView: 2.75,
          },
        }}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <SwiperSlide key={i}>
            <div className="p-[30px] bg-input h-[403px] flex flex-col justify-between rounded-[20px]">
              <div>
                <p className="text-foreground text-lg font-medium">
                  "Clarity has transformed our security posture. We've seen a
                  dramatic reduction in security incidents and our team can
                  focus on innovation instead of constantly putting out fires."
                </p>
                <div className="flex items-center gap-2.5 mt-[30px]">
                  <div className="flex items-center gap-0.5">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <Icons.star
                          className="text-xl text-[#FF7A28]"
                          key={j}
                        />
                      ))}
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    4.9
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-[58px] rounded-full bg-gray-50 overflow-hidden">
                    <img src={MemberAvatar} alt="Avatar" className="object-cover" />
                  </div>
                  <div className="grid gap-1.5 text-lg text-foreground">
                    <div className="font-medium">Michael Brown</div>
                    <div>IT Director at HealthCare</div>
                  </div>
                </div>

                <Icons.quoteLeft className="text-[40px] text-foreground" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
