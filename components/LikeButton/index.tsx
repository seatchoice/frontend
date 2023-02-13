import { tw } from "@/utils/tailwindMerge";
import { Button, Icon } from "@/components";

type LikeButtonProps<T extends React.ElementType> = Component<T> & {};

export function LikeButton({
  className,
  children,
  ...props
}: LikeButtonProps<"button">) {
  return (
    <Button
      as="icon"
      className={tw(
        "flex items-center gap-2 p-2 hover:text-red-500",
        className
      )}
      {...props}
    >
      <span className="sr-only">좋아요</span>
      <Icon as="like" />
      {children}
    </Button>
  );
}
