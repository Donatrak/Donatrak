import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiCampaign } from "../../services/campaigns";
import { CampaignSkeleton } from "../../components/feedbacks/CampaignSkeleton";
import { formatDate } from "../../lib/lib";
import { campaignData } from "../../data-placeholder";
import { useSelector } from "react-redux";

const Donate = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const location = useLocation();
  const path = location.pathname;
  const id = path.split("/").pop();

  const [loading, setLoading] = useState(true);
  const [campaign, setCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("Credit Card");
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const fetchCampaign = async (id) => {
    setLoading(true);
    try {
      const res = await apiCampaign(id); // Ensure to await the API call
      console.log("ress---->", res);
      if (res.status === 200 || res.status === 201) {
        setCampaign(res.data.data);
      } else {
        setCampaign(campaignData);
      }
    } catch (error) {
      console.log("Error fetching campaign --->", error);
      setCampaign(campaignData);
    } finally {
      setLoading(false);
    }
  };

  const handleDonation = () => {
    // Handle the donation submission logic
    console.log({
      donationAmount,
      paymentMode,
      message,
      reference,
      campaignId: campaign.id,
    });
    // Proceed to payment gateway or next steps
  };

  useEffect(() => {
    console.log(campaignData);
    fetchCampaign(id);
  }, [id]);
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Campaign Details */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-primary-dark">
                {campaign.title}
              </h1>
              <p className="text-gray-700 mt-2">{campaign.description}</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Goal Amount</p>
                  <p className="text-xl font-semibold text-green-600">
                    GHC {campaign.goalAmount.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount Raised</p>
                  <p className="text-xl font-semibold text-blue-600">
                    GHC {campaign.currentAmount.toLocaleString()}
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
            </div>

            {/* Donation Form */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Make a Donation
              </h2>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="donationAmount"
                >
                  Donation Amount
                </label>
                <input
                  type="number"
                  id="donationAmount"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="paymentMode"
                >
                  Payment Mode
                </label>
                <select
                  id="paymentMode"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={paymentMode}
                  onChange={(e) => setPaymentMode(e.target.value)}
                >
                  <option>Credit Card</option>

                  <option>Bank Transfer</option>
                  <option>Mobile Money</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Leave a message for the campaign"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="reference"
                >
                  Reference (Optional)
                </label>
                <input
                  type="text"
                  id="reference"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter reference"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />
              </div>

              <button
                onClick={handleDonation}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 rounded-full hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
