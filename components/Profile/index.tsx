import { tw } from "@/utils/tailwindMerge";
import { Icon, Text } from "@/components";

type ProfileProps<T extends React.ElementType> = Component<T> & {
  nickname: string;
  updatedAt?: string;
};

export function Profile({
  nickname,
  updatedAt,
  className,
  children,
  ...props
}: ProfileProps<"div">) {
  return (
    <div className={tw("flex items-center gap-2", className)} {...props}>
      <Icon
        as="avatar"
        className="w-10 h-10 overflow-hidden rounded-full bg-light-fg dark:bg-dark-fg"
      />
      <span>{nickname}</span>
      {updatedAt && (
        <Text className="text-sm text-gray-500">
          <time dateTime={updatedAt} title={updatedAt}>
            {updatedAt}
          </time>
        </Text>
      )}
      {children}
    </div>
  );
}
