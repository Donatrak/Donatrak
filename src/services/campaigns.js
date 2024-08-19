import { apiClient } from "./config";

export const apiCampaigns = async () => {
  try {
    return await apiClient.get("/campaigns");
  } catch (error) {
    console.log("Error fetching campaigns-->", error);
  }
};
