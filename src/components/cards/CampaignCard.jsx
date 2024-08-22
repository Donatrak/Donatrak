import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import Card from "./Card";
import { formatDate } from "../../lib/lib";
import HeroImage from "../../assets/images/Hero.jpg";

/* eslint-disable react/prop-types */
const CampaignCard = ({ campaign, handleDonate }) => {
  const navigate = useNavigate();
  return (
    <Card
      title={campaign.title}
      image={
        campaign.image
          ? `https://savefiles.org/${campaign.image}?shareable_link=346`
          : HeroImage
      }
      footer={
        <div className="flex justify-center gap-6 items-center">
          <Button
            variant="secondary"
            onClick={() => navigate(`/campaign/${campaign.id}`)}
          >
            Details
          </Button>{" "}
          <Button onClick={() => handleDonate(campaign)}>Donate Now</Button>
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
          <span className="font-medium">{formatDate(campaign.startDate)}</span>
        </p>
        <p className="text-sm text-purple-600">
          End Date:{" "}
          <span className="font-medium">{formatDate(campaign.endDate)}</span>
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
};

export default CampaignCard;
