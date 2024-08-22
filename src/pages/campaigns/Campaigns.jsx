import { useEffect, useState } from "react";
import CampaignCard from "../../components/cards/CampaignCard";
import { apiCampaigns } from "../../services/campaigns"; // Assume this API fetches all campaigns
import CampaignSkeleton from "../../components/feedbacks/CampaignSkeleton";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await apiCampaigns();
        if (res.status === 200) {
          setCampaigns(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const handleDonate = (campaign) => {
    // Handle the donation logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore Our Campaigns
        </h1>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <CampaignSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <CampaignCard
                  key={campaign.id}
                  campaign={campaign}
                  handleDonate={handleDonate}
                />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No campaigns available.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCampaigns;
