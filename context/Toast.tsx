import { createContext, useEffect, useState } from "react";

import { StateAndAction } from "@/types/state";

export type Toast = {
  id: number;
  type?: "success" | "error";
  content: string;
};
type ToastContextValue = StateAndAction<Array<Toast>, "toasts">;
type ToastContextProviderProps = { children: React.ReactNode };

export const ToastContext = createContext<ToastContextValue>(
  {} as ToastContextValue
);

export function ToastProvider({ children }: ToastContextProviderProps) {
  const [toasts, setToasts] = useState<Array<Toast>>([] as Array<Toast>);

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastContext.Provider>
  );
}
