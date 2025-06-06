import { useEffect, useState } from "react";
import { refreshTokenService } from "../services";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const refreshAuth = async () => {
      const authData = localStorage.getItem("AUTH_DATA");

      if (!authData) {
        setLoggedIn(false);
        setIsLoading(false);
        return;
      }

      const { expiresIn, refreshToken } = JSON.parse(authData);

      if (!expiresIn || !refreshToken) {
        setLoggedIn(false);
        setIsLoading(false);

        return;
      }

      try {
        const { data } = await refreshTokenService(refreshToken);

        const expiresInDate = Date.now() + Number(data.expiresIn) * 100;

        localStorage.setItem("AUTH_DATA", JSON.stringify(data));
        localStorage.setItem("EXPIRES_IN", JSON.stringify(expiresInDate));

        setLoggedIn(true);
      } catch (error) {
        console.error(error);

        setLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    const expiresIn = localStorage.getItem("EXPIRES_IN");
    const rememberMe = localStorage.getItem("REMEMBER_ME");

    if (!expiresIn) {
      setLoggedIn(false);
      setIsLoading(false);
      return;
    }

    const isExpired = Date.now() > JSON.parse(expiresIn);

    if (isExpired && rememberMe) {
      refreshAuth();

      return;
    }

    if (isExpired && !rememberMe) {
      setLoggedIn(false);
      setIsLoading(false);
    } else {
      setLoggedIn(true);
      setIsLoading(false);
    }
  }, []);

  return {
    loggedIn,
    isLoading,
  };
};

export default useAuth;
