import { tw } from "@/utils/tailwindMerge";
export type ButtonProps<T extends React.ElementType> = Component<T> & {
  as?: "primary" | "icon";
  size?: "sm" | "md" | "lg";
};

export function Button({
  as = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps<"button">) {
  const buttonStyle = {
    primary:
      "font-semibold bg-primary-200 text-primary-900 dark:bg-primary-800 dark:text-primary-200 disabled:bg-gray-300 dark:disabled:bg-dark-fg",
    icon: "bg-transparent p-0",
  };

  const buttonSize = {
    sm: "text-sm p-2 px-4",
    md: "text-base p-3 px-6",
    lg: "text-2xl p-4 px-14",
  };

  return (
    <button
      className={tw(
        `${buttonSize[size]} ${buttonStyle[as]} rounded-lg active:translate-y-px`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
