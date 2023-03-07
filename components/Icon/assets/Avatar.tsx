import { tw } from "@/utils/tailwindMerge";

type AvatarProps<T extends React.ElementType> = Component<T> & {};

export function Avatar({ className, children, ...props }: AvatarProps<"svg">) {
  return (
    <svg {...props} className={tw("", className)}>
      <path
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
