import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiCampaign } from "../../services/campaigns";
import { CampaignSkeleton } from "../../components/feedbacks/CampaignSkeleton";
import { formatDate } from "../../lib/lib";
import { campaignData } from "../../data-placeholder";
import { useSelector } from "react-redux";

const Campaign = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const location = useLocation();
  const path = location.pathname;
  const id = path.split("/").pop();

  const [loading, setLoading] = useState(true);
  const [campaign, setCampaign] = useState(null);

  const navigate = useNavigate();

  const fetchCampaign = async (id) => {
    setLoading(true);
    try {
      const res = await apiCampaign(id); // Ensure to await the API call
      if (res.data.id) {
        console.log("ress---->", res);
        setCampaign(res.data);
      } else {
        setCampaign(campaignData);
      }
    } catch (error) {
      console.log("Error fetching campaign --->", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(campaignData);
    fetchCampaign(id);
  }, [id]);

  const handleDonate = (campaign) => {
    if (user && user.id) {
      navigate(`/donate/${campaign.id}`);
    } else {
      navigate(`/login?redirect=/donate/${campaign.id}`);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {loading ? (
        <CampaignSkeleton />
      ) : (
        <div>
          {campaign ? (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={campaign.image || "default-image.jpg"}
                alt={campaign.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  {campaign.title}
                </h1>
                <p className="text-gray-700 mt-4">{campaign.description}</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Goal Amount</p>
                    <p className="text-xl font-semibold text-green-600">
                      ${campaign.goalAmount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Amount Raised</p>
                    <p className="text-xl font-semibold text-blue-600">
                      ${campaign.currentAmount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="text-lg font-medium text-gray-800">
                      {formatDate(campaign.startDate)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">End Date</p>
                    <p className="text-lg font-medium text-gray-800">
                      {formatDate(campaign.endDate)}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500">Created By</p>
                  <p className="text-lg font-medium text-gray-900">
                    {campaign.createdBy.firstName} {campaign.createdBy.lastName}
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => handleDonate(campaign)}
                    className="inline-block w-full text-center text-white bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-full hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            "No Campaign Found"
          )}
        </div>
      )}
    </div>
  );
};

export default Campaign;
