import axios from "axios";

const useAxios = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
});

const authData = localStorage.getItem("AUTH_DATA");

if (authData) {
  const { idToken } = JSON.parse(authData);

  useAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${idToken}`;
}

export { useAxios };
