import { createContext, useState } from "react";

import { StateAndAction } from "@/types/state";

type UserContextValue = StateAndAction<string, "username">;
type UserContextProviderProps = { children: React.ReactNode };

export const UserContext = createContext<UserContextValue>(
  {} as UserContextValue
);

export function UserProvider({ children }: UserContextProviderProps) {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
