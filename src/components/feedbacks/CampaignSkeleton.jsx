import React from "react";

export const CampaignSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-40 w-full rounded-md"></div>{" "}
      <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4"></div>{" "}
      <div className="mt-2 h-4 bg-gray-300 rounded-md w-full"></div>{" "}
      <div className="mt-2 h-4 bg-gray-300 rounded-md w-5/6"></div>{" "}
      <div className="mt-4 h-5 bg-gray-300 rounded-md w-1/4"></div>{" "}
      <div className="mt-2 h-5 bg-gray-300 rounded-md w-1/4"></div>{" "}
      <div className="mt-2 h-5 bg-gray-300 rounded-md w-1/3"></div>{" "}
      <div className="mt-2 h-5 bg-gray-300 rounded-md w-1/3"></div>{" "}
      <div className="mt-4 h-4 bg-gray-300 rounded-md w-1/2"></div>{" "}
      <div className="mt-6 h-10 bg-gray-300 rounded-full w-1/3"></div>{" "}
    </div>
  );
};

const CampaignsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <CampaignSkeleton />
      <CampaignSkeleton />
      <CampaignSkeleton />)
    </div>
  );
};

export default CampaignsSkeleton;
