import Image from "next/image";
import { tw } from "@/utils/tailwindMerge";
import { Text } from "@/components";

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
      <Image
        src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="프로필 사진"
        width={24}
        height={24}
        className="w-6 h-6 rounded-full"
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
