import { useRouter } from "next/router";
import { tw } from "@/utils/tailwindMerge";
import { Button, Icon } from "@/components";

type BackButtonProps<T extends React.ElementType> = Component<T> & {};

export function BackButton({
  className,
  children,
  ...props
}: BackButtonProps<"button">) {
  const router = useRouter();
  return (
    <Button
      as="icon"
      className={tw(
        "flex items-center gap-2 p-2 hover:text-primary-500",
        className
      )}
      onClick={() => router.back()}
      {...props}
    >
      <span className="sr-only">뒤로 가기</span>
      <Icon as="back" />
      {children}
    </Button>
  );
}
