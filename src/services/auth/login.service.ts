import { useAxios } from "../axios.config";

export const loginService = (email: string, password: string) =>
  useAxios.post("/auth/login", {
    email,
    password,
  });
