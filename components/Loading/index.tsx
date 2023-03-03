import { tw } from "@/utils/tailwindMerge";
import { Button, Icon, Text } from "@/components";

type LoadingProps<T extends React.ElementType> = Component<T> & {
  content?: string;
};

export function Loading({
  content,
  className,
  children,
  ...props
}: LoadingProps<"div">) {
  return (
    <div className={tw("", className)} {...props}>
      <Button as="icon">
        <Icon as="logo" className="animate-spin" />
      </Button>
      <Text className="font-semibold text-lg">{content}</Text>
    </div>
  );
}
