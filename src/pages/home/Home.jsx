import Button from "../../components/buttons/Button";
import AboutSection from "./sections/About";
import FeaturedCampaigns from "./sections/FeaturedCampaigns";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturedCampaigns />
    </div>
  );
};

export default Home;
