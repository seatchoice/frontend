type JwtPayload = {
  exp: number;
  iat: number;
  id: number;
  nickname: string;
};

export const parseJwt = (token: string | null): JwtPayload => {
  if (!token) throw new Error("Invalid token");

  const [, payload] = token.split(".");
  return JSON.parse(atob(payload));
};
