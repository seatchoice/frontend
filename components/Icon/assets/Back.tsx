import { tw } from "@/utils/tailwindMerge";

type BackProps<T extends React.ElementType> = Component<T> & {};

export function Back({ className, children, ...props }: BackProps<"svg">) {
  return (
    <svg {...props} className={tw("", className)}>
      <path
        d="M18 8L10.2231 15L18 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
