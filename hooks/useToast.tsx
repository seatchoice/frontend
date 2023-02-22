import { useContext } from "react";
import { ToastContext } from "@/context/Toast";
import { Toast as ToastType } from "@/context/Toast";

const TOAST_SHOW_TIME = 3000;

const getToastId = () => {
  return new Date().getTime();
};

export function useToast() {
  const { toasts, setToasts } = useContext(ToastContext);

  const removeToast = (toastId: number) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== toastId));
  };

  const addToast = ({ type, content }: Omit<ToastType, "id">) => {
    const newToast = { id: getToastId(), type, content };
    setToasts([...toasts, newToast]);

    setTimeout(() => removeToast(newToast.id), TOAST_SHOW_TIME);
  };

  return { toast: addToast };
}
