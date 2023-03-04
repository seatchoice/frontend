import { tw } from "@/utils/tailwindMerge";

type CloseProps<T extends React.ElementType> = Component<T> & {};

export function Close({ className, children, ...props }: CloseProps<"svg">) {
  return (
    <svg {...props} className={tw("", className)}>
      <path
        d="M8 8L22 22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 22L22 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
