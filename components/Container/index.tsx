import { tw } from "@/utils/tailwindMerge";

type ContainerProps<T extends React.ElementType> = Component<T> & {};

export function Container({
  className,
  children,
  ...props
}: ContainerProps<"div">) {
  return (
    <div className={tw("container mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
