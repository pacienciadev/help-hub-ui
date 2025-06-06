import { useAxios } from "../axios.config";

export const logoutService = () => useAxios.post("/auth/logout");
