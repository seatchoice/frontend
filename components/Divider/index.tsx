import { tw } from "@/utils/tailwindMerge";

type DividerProps<T extends React.ElementType> = Component<T> & {};

export function Divider({ className, children, ...props }: DividerProps<"hr">) {
  return (
    <hr
      className={tw(
        "border-[1px] border-light-fg dark:border-dark-fg",
        className
      )}
      {...props}
    >
      {children}
    </hr>
  );
}
