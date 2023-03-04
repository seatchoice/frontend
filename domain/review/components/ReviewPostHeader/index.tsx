import { tw } from "@/utils/tailwindMerge";
import { BackButton, Text } from "@/components";

type ReviewPostHeaderProps<T extends React.ElementType> = Component<T> & {};

export function ReviewPostHeader({
  className,
  children,
  ...props
}: ReviewPostHeaderProps<"header">) {
  return (
    <header className={tw("flex items-center py-2 px-4", className)} {...props}>
      <BackButton />
      <Text as="h3">{children}</Text>
    </header>
  );
}
