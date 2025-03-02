import { Link } from "react-router-dom";
import BannerText from "./BannerText";
import bannerImg from "@/assets/images/banner/banner-img-3.png";
import BaseIconStats from "./BaseIconStats";
import { SlBadge } from "react-icons/sl";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const BannerSlideThree = () => {
  return (
    <div className="h-[800px] pt-28 pb-14">
      <div className="container grid lg:grid-cols-2 gap-8">
        <div className="self-center">
          <BannerText
            subtitle="Elite Talent"
            title="Find the perfect freelance services for your business"
            text="Work with talented people at the most affordable price to get the most out of your time and cost"
            badge="#cce8ca"
          />

          <div className="mt-5">
            <Link className="btn__primary" to="/auth/login">
              Explore Freelancers
            </Link>
          </div>
        </div>
        <div className="justify-self-end relative">
          <img src={bannerImg} className="w-auto h-full inline-block" alt="" />

          <div className=" absolute bottom-0 left-0">
            <BaseIconStats
              ICON={SlBadge}
              title="Proof of quality"
              subtitle="Skilled, Verified, and Reliable"
              color="#ffede8"
            />
          </div>
          <div className=" absolute top-1/2 right-0">
            <BaseIconStats
              ICON={AiOutlineSafetyCertificate}
              title="Safe and secure"
              subtitle="Protected Payments and Platform"
              color="#e9edec"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlideThree;
