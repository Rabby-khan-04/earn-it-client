import BannerText from "./BannerText";
import bannerImg from "@/assets/images/banner/banner-img-1.png";
import TopIconStats from "./TopIconStats";
import { MdOutlineReviews } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

const BannerSlideOne = () => {
  // const siteStats = [
  //   { count: "1.2K", title: "Employers" },
  //   { count: "980K", title: "Tasks Completed" },
  //   { count: "150K", title: "Active Freelancers" },
  //   { count: "2.5M", title: "Total Rewards Paid" },
  // ];

  return (
    <div className="h-[800px] pt-28 pb-14">
      <div className="container grid lg:grid-cols-2 gap-8">
        <div className="self-center">
          <BannerText
            subtitle="Work Smarter"
            title="Unlock the Power of Skilled Freelancers Worldwide"
            text="Post tasks, connect with talented workers, and get high-quality results—fast and hassle-free."
            badge="#FFEDE8"
          />
          {/* <div className="flex items-center gap-8 mt-5">
            {siteStats.map((stats, idx) => (
              <BannerCounter
                key={idx}
                title={stats.title}
                count={stats.count}
              />
            ))}
          </div> */}

          <div className="mt-5">
            <Link className="btn__primary" to="/auth/login">
              Get Started Today
            </Link>
          </div>
        </div>
        <div className="justify-self-end relative">
          <img src={bannerImg} className="w-[650px] inline-block" alt="" />
          <div className="absolute -left-20 top-20">
            <TopIconStats
              ICON={MdOutlineReviews}
              count="4.8/5"
              title="Clients rate professionals"
              color="#f4ca76"
            />
          </div>
          <div className="absolute -right-20 bottom-20">
            <TopIconStats
              ICON={IoRocketOutline}
              count="+12M"
              title="Project Completed"
              color="#1f4b3f"
            />
          </div>
          <div className="absolute -left-20 bottom-20">
            <TopIconStats
              ICON={HiUserGroup}
              count="150K+"
              title="Active Freelancers"
              color="#5bbb7b"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlideOne;
