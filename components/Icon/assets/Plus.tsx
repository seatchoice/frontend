import { tw } from "@/utils/tailwindMerge";

type PlusProps<T extends React.ElementType> = Component<T> & {};

export function Plus({ className, children, ...props }: PlusProps<"svg">) {
  return (
    <svg {...props} className={tw("", className)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 .875c.483 0 .875.392.875.875v10.5a.875.875 0 0 1-1.75 0V1.75c0-.483.392-.875.875-.875z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.125 7a.875.875 0 0 1-.875.875H1.75a.875.875 0 1 1 0-1.75h10.5c.483 0 .875.392.875.875z"
      />
    </svg>
  );
}
