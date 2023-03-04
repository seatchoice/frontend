import { tw } from "@/utils/tailwindMerge";

type RequiredProps<T extends React.ElementType> = Component<T> & {};

export function Required({
  className,
  children,
  ...props
}: RequiredProps<"span">) {
  return (
    <span
      className={tw("px-1 font-bold text-lg text-primary-500", className)}
      {...props}
    >
      *{children}
      <span className="sr-only">필수 입력사항</span>
    </span>
  );
}
