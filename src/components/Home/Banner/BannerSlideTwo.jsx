import bannerBg from "@/assets/images/banner/banner-bg-2.jpg";
import bannerImg from "@/assets/images/banner/banner-img-2.png";
import BannerText from "./BannerText";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import { AiFillLike } from "react-icons/ai";

const BannerSlideTwo = () => {
  return (
    <div
      className="h-[800px] pt-28 pb-14 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container grid lg:grid-cols-2 gap-8">
        <div className="self-center">
          <BannerText
            subtitle="Instant Hiring"
            title="Thousands of Verified Experts Ready to Work for You"
            text="From micro-jobs to large projects, find skilled professionals and get your work done efficiently."
            badge="#21dfd63e"
          />
          <div className="mt-5">
            <Link className="btn__primary" to="/auth/login">
              Hire Top Talent
            </Link>
          </div>
        </div>
        <div className="justify-self-end relative">
          <img src={bannerImg} className="w-auto h-full inline-block" alt="" />
          <div className="absolute left-0 top-3/4">
            <UserInfo
              ICON={AiFillLike}
              title="Ariene McCoy"
              subtitle="UX/UI Designer"
              count="4.9"
              color="#168882"
              cssClass="rounded-3xl rounded-tr-none"
            />
          </div>
          <div className="absolute -right-20 top-1/2">
            <UserInfo
              ICON={AiFillLike}
              title="Jane Cooper"
              subtitle="UX/UI Designer"
              count="4.9"
              color="#f6cc77"
              cssClass="rounded-3xl rounded-tl-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlideTwo;
