import { tw } from "@/utils/tailwindMerge";

type ToastItemProps<T extends React.ElementType> = Component<T> & {
  type?: "primary" | "success" | "error";
};

export function ToastItem({
  type = "primary",
  className,
  children,
  ...props
}: ToastItemProps<"div">) {
  const toastType = {
    primary: "bg-light-fg dark:text-black",
    success: "bg-green-200 text-green-800",
    error: "bg-red-200 text-red-800",
  };
  return (
    <div
      className={tw(
        "flex justify-center items-center gap-4 fixed left-0 right-0 h-12 bottom-16 w-max mx-auto p-4 px-6 font-semibold rounded-lg",
        toastType[type],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
