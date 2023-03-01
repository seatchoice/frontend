type JwtPayload = {
  exp: number;
  iat: number;
  sub: string;
  nickname: string;
};

export const parseJwt = (token: string): JwtPayload => {
  if (!token) throw new Error("Invalid token");

  const [, payload] = token.split(".");
  return JSON.parse(atob(payload));
};
