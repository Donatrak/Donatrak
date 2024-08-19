import Card from "../../../components/cards/Card";
import HeroImage from "../../../assets/images/Hero.jpg";
import { useEffect, useState } from "react";
import { apiCampaigns } from "../../../services/campaigns";

const campaigns = [
  {
    title: "Helping Hands Community Fund",
    image: HeroImage,
    description:
      "Aid local families in need by contributing to this community-driven fund.",
  },
  {
    title: "Green Earth Initiative",
    image: HeroImage,
    description:
      "Support climate action projects and make a difference for the planet.",
  },
  {
    title: "Education for All",
    image: HeroImage,
    description:
      "Provide educational resources and scholarships to underprivileged children.",
  },
];

const FeaturedCampaigns = () => {
  const [loading, setLoading] = useState(false);

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const res = await apiCampaigns();
      console.log("Campaigns--->", res);
    } catch (error) {
      console.log("Error fetching campaigns---->", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <section className="py-16 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-8">
          Make an Impact
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Explore these active campaigns and contribute to meaningful change.
        </p>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {campaigns.map((campaign, index) => {
            return (
              <Card
                key={index}
                title={campaign.title}
                image={HeroImage}
                footer={
                  <a
                    href="#donate1"
                    className="inline-block text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
                  >
                    Donate Now
                  </a>
                }
              >
                <p>{campaign.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
