import { useContext } from "react";
import { ToastContext } from "@/context/Toast";
import { ToastItem } from "./ToastItem";

type ToastProps<T extends React.ElementType> = Component<T> & {
  type?: "success" | "error";
};

const TOAST_HEIGHT = 50;

export function Toast({
  type,
  className,
  children,
  ...props
}: ToastProps<"div">) {
  const { toasts } = useContext(ToastContext);
  return (
    <>
      {toasts?.map((toast, index) => (
        <ToastItem
          key={toast.id}
          type={toast.type}
          style={{ bottom: `${TOAST_HEIGHT * (index + 1)}px` }}
          {...props}
        >
          {toast.content}
        </ToastItem>
      ))}
    </>
  );
}
