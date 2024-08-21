import { apiClient } from "./config";

export const apiCampaigns = async () => {
  try {
    return await apiClient.get("/campaigns");
  } catch (error) {
    console.log("Error fetching campaigns-->", error);
  }
};
export const apiCampaign = async (id) => {
  try {
    return await apiClient.get(`/campaign/${id}`);
  } catch (error) {
    console.log("Error fetching campaign-->", error);
  }
};
