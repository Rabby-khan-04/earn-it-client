import bannerBg from "@/assets/images/banner/banner-img-4.jpg";
import { Link } from "react-router-dom";

const BannerSlideFour = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerBg})` }}
      className="h-[800px] pt-28 pb-14 bg-cover bg-center bg-no-repeat"
    >
      <div className="container text-center flex flex-col justify-center gap-8 h-full">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl text-primary font-dm-sans font-bold leading-snug mb-3">
            Get Your Work Done Faster with Trusted Professionals
          </h2>
          <p className="font-inter text-base text-text">
            Post jobs, track progress, and pay securely—all within one seamless
            and easy-to-use platform.
          </p>
        </div>

        <div className="">
          <Link className="btn__primary" to="/auth/login">
            Post a Job Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSlideFour;
