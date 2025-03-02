import BannerText from "./BannerText";
import bannerImg from "@/assets/images/banner/banner-img-1.png";

const BannerSlideOne = () => {
  return (
    <div className="container grid lg:grid-cols-2 gap-8 pt-28 pb-14">
      <div className="self-center">
        <BannerText
          subtitle="Work Smarter"
          title="Unlock the Power of Skilled Freelancers Worldwide"
          text="Post tasks, connect with talented workers, and get high-quality results—fast and hassle-free."
          badge="#FFEDE8"
        />
      </div>
      <div className="">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default BannerSlideOne;
