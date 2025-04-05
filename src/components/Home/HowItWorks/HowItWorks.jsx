import sectionImg from "@/assets/images/home/how-it-works.jpg";
import SectionTitle from "@/components/shared/SectionTitle";
import registerIco from "@/assets/icons/register.svg";
import taskIco from "@/assets/icons/task.svg";
import rewardsIco from "@/assets/icons/rewards.svg";
import HowItWorksStep from "./HowItWorksStep";

const HowItWorks = () => {
  const howItWorks = [
    {
      title: "Register",
      description:
        "Sign up for free and create your profile to start exploring available tasks.",
      image: registerIco,
    },
    {
      title: "Complete Tasks",
      description:
        "Choose from a variety of micro-jobs, follow the instructions, and submit your work.",
      image: taskIco,
    },
    {
      title: "Earn Rewards",
      description:
        "Get paid securely after your completed tasks are reviewed and approved.",
      image: rewardsIco,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container grid grid-cols-2">
        <div className="self-center space-y-14">
          <SectionTitle
            title="Get Started in 3 Easy Steps"
            subtitle="Earn Rewards by Completing Simple Tasks"
          />

          <div className="space-y-5">
            {howItWorks.map((step, idx) => (
              <HowItWorksStep
                key={idx}
                title={step.title}
                description={step.description}
                image={step.image}
              />
            ))}
          </div>
        </div>
        <div className="">
          <img src={sectionImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
