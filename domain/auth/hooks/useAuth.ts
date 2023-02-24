import { STORAGE } from "@/constants";
import { parseJwt } from "@/utils/parseJwt";

export function useAuth() {
  const getToken = () => localStorage.getItem(STORAGE.ACCESS_TOKEN);

  const setToken = (token: string) =>
    localStorage.setItem(STORAGE.ACCESS_TOKEN, token);

  const removeToken = () => localStorage.removeItem(STORAGE.ACCESS_TOKEN);

  const getUser = () => {
    const token = getToken();
    if (!token) return null;

    const { nickname, sub: userId } = parseJwt(token);
    return { nickname, userId };
  };

  return {
    user: getUser(),
    getToken,
    setToken,
    removeToken,
  };
}
