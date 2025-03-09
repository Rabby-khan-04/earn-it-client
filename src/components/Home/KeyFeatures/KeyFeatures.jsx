import SectionTitle from "@/components/shared/SectionTitle";
import postJob from "@/assets/icons/cv.svg";
import freelancer from "@/assets/icons/web-design.svg";
import secure from "@/assets/icons/secure.svg";
import customerService from "@/assets/icons/customer-service.svg";
import KeyFeature from "./KeyFeature";

const KeyFeatures = () => {
  const keyFeatures = [
    {
      title: "Post a Job",
      subtitle:
        "It’s quick and simple to post a job. Just add a title, description, and set your requirements.",
      image: postJob,
    },
    {
      title: "Choose Freelancers",
      subtitle:
        "Browse skilled professionals and select the best freelancer for your task with ease.",
      image: freelancer,
    },
    {
      title: "Pay Securely",
      subtitle:
        "Funds are held securely and only released when the job is successfully completed.",
      image: secure,
    },
    {
      title: "We're Here to Help",
      subtitle:
        "Our support team is available to assist you whenever you need help.",
      image: customerService,
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <SectionTitle
          title="Need Something Done?"
          subtitle="Post a task, choose a freelancer, and receive quality results in no time."
        />
        <div className="grid grid-cols-4 gap-8 mt-12">
          {keyFeatures.map((feature, idx) => (
            <KeyFeature
              key={idx}
              title={feature.title}
              subtitle={feature.subtitle}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
