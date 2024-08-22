import { useEffect, useState } from "react";
import { apiCampaigns } from "../../../services/campaigns";
import { useNavigate } from "react-router-dom";
import CampaignsSkeleton from "../../../components/feedbacks/CampaignSkeleton";

import { useSelector } from "react-redux";
import CampaignCard from "../../../components/cards/CampaignCard";

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
    if (user && user.email) {
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
                    <CampaignCard
                      key={index}
                      campaign={campaign}
                      handleDonate={handleDonate}
                    />
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
