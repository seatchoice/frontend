import { STORAGE } from "@/constants";

export function useAuth() {
  const getUser = () => localStorage.getItem(STORAGE.ACCESS_TOKEN);

  const setToken = (token: string) =>
    localStorage.setItem(STORAGE.ACCESS_TOKEN, token);

  const removeToken = () => localStorage.removeItem(STORAGE.ACCESS_TOKEN);

  return {
    user: getUser(),
    setToken,
    removeToken,
  };
}
