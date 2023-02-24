import { STORAGE } from "@/constants";
import { parseJwt } from "@/utils/parseJwt";

export function useAuth() {
  const getToken = () => localStorage.getItem(STORAGE.ACCESS_TOKEN);

  const setToken = (token: string) =>
    localStorage.setItem(STORAGE.ACCESS_TOKEN, token);

  const removeToken = () => localStorage.removeItem(STORAGE.ACCESS_TOKEN);

  const getNickname = () => {
    const token = getToken();
    if (!token) return null;

    const { nickname } = parseJwt(token);
    return nickname;
  };

  return {
    user: getNickname(),
    getToken,
    setToken,
    removeToken,
  };
}
