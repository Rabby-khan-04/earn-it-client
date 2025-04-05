import Banner from "@/components/Home/Banner/Banner";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import KeyFeatures from "@/components/Home/KeyFeatures/KeyFeatures";

const Home = () => {
  return (
    <main className="bg-base-100">
      <Banner />
      <KeyFeatures />
      <HowItWorks />
    </main>
  );
};

export default Home;
