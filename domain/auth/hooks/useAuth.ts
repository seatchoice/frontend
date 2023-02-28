import { STORAGE } from "@/constants";
import { parseJwt } from "@/utils/parseJwt";

export function useAuth() {
  const getToken = () => localStorage.getItem(STORAGE.ACCESS_TOKEN);

  const setToken = (token: string) =>
    localStorage.setItem(STORAGE.ACCESS_TOKEN, token);

  const getUsername = () => localStorage.getItem(STORAGE.USERNAME);

  const setUsername = (username: string) =>
    localStorage.setItem(STORAGE.USERNAME, username);

  const getUser = () => {
    const token = getToken();
    if (!token) return null;

    const { sub: userId } = parseJwt(token);
    const nickname = getUsername();

    return { nickname, userId };
  };

  const setUser = (token: string, username: string) => {
    setToken(token);
    setUsername(username);
  };

  const removeUser = () => {
    localStorage.removeItem(STORAGE.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE.USERNAME);
  };

  return {
    user: getUser(),
    setUser,
    removeUser,
  };
}
