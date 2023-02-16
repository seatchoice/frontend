import { tw } from "@/utils/tailwindMerge";
import { Button, Icon } from "@/components";

type LikeButtonProps<T extends React.ElementType> = Component<T> & {
  liked?: boolean;
};

export function LikeButton({
  liked,
  className,
  children,
  ...props
}: LikeButtonProps<"button">) {
  return (
    <Button
      as="icon"
      className={tw(
        "flex justify-evenly items-center max-w-[80px] gap-2 p-2 rounded-2xl",
        liked ? "text-red-600" : "hover:text-red-600",
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
