import { useAxios } from "../axios.config";

export const refreshTokenService = (refreshToken: string) =>
  useAxios.post("/auth/refresh-auth", {
    refreshToken,
  });
