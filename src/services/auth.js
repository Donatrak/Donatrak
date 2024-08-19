import { apiClient } from "./config";

export const apiRegister = async (payload) => {
  return await apiClient.post(`/users/auth/register`, payload);
};
export const apiLogin = async (payload) => {
  return apiClient.post("/users/auth/token/login", payload);
};
export const generateToken = async (payload) => {
  return apiClient.post("/users/auth/token", payload);
};

export const apiGetUser = async (userName) => {
  return apiClient.get(`/users/auth/${userName}`);
};

export const apiLogout = async () => {
  return apiClient.post("/users/auth/logout");
};
