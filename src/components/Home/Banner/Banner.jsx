import BannerSlideOne from "./BannerSlideOne";
import BannerSlideTwo from "./BannerSlideTwo";
import BannerSlideThree from "./BannerSlideThree";
import BannerSlideFour from "./BnnerSlideFour";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section>
      <Swiper
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <BannerSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlideTwo />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlideThree />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlideFour />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
