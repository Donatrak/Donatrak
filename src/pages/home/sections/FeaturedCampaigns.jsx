import Card from "../../../components/cards/Card";
import HeroImage from "../../../assets/images/Hero.jpg";
import { useEffect, useState } from "react";
import { apiCampaigns } from "../../../services/campaigns";
import { Link, useNavigate } from "react-router-dom";
import CampaignsSkeleton from "../../../components/feedbacks/CampaignSkeleton";
import { formatDate } from "../../../lib/lib";
import Button from "../../../components/buttons/Button";
import { useSelector } from "react-redux";

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
  const { user } = useSelector((state) => ({ ...state }));

  const [loading, setLoading] = useState(false);
  const [featuredCampaigns, setFeaturedCampaigns] = useState(null);

  const navigate = useNavigate();

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const res = await apiCampaigns();
      if (res.status === 200 || res.status === 201) {
        setFeaturedCampaigns(res.data.data);
        console.log("Campaigns--->", res.data.data);
      }
    } catch (error) {
      console.log("Error fetching campaigns---->", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDonate = (campaign) => {
    if (user && user.id) {
      navigate(`/donate/${campaign.id}`);
    } else {
      navigate(`/login?redirect=/donate/${campaign.id}`);
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
        <>
          {loading ? (
            <CampaignsSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {featuredCampaigns &&
                featuredCampaigns.map((campaign, index) => {
                  return (
                    <Card
                      key={index}
                      title={campaign.title}
                      image={campaign.image || HeroImage}
                      footer={
                        <div className="flex justify-center gap-6 items-center">
                          <Button
                            variant="secondary"
                            onClick={() => navigate(`/campaign/${campaign.id}`)}
                          >
                            Details
                          </Button>{" "}
                          <Button onClick={() => handleDonate(campaign)}>
                            Donate Now
                          </Button>
                        </div>
                      }
                    >
                      {/* <p className="text-gray-700">{campaign.description}</p> */}
                      <div className="flex flex-col items-start gap-4 mt-4">
                        <p className="text-sm text-green-600 font-semibold">
                          Goal: GHC {campaign.goalAmount}
                        </p>
                        {/* <p className="text-sm text-green-600 font-semibold">
                          Raised: GHC {campaign.currentAmount}
                        </p> */}
                        <p className="text-sm text-purple-600">
                          Start Date:{" "}
                          <span className="font-medium">
                            {formatDate(campaign.startDate)}
                          </span>
                        </p>
                        <p className="text-sm text-purple-600">
                          End Date:{" "}
                          <span className="font-medium">
                            {formatDate(campaign.endDate)}
                          </span>
                        </p>
                      </div>
                      <div className="mt-4">
                        {/* <p className="text-xs text-gray-500 italic">
                          Created by:{" "}
                          <span className="text-gray-700 font-medium">
                            {campaign.createdBy?.firstName}{" "}
                            {campaign.createdBy?.lastName}
                          </span>
                        </p> */}
                      </div>
                    </Card>
                  );
                })}
            </div>
          )}
        </>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
