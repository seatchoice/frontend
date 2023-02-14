import { tw } from "@/utils/tailwindMerge";

type PlusProps<T extends React.ElementType> = Component<T> & {};

export function Plus({ className, children, ...props }: PlusProps<"svg">) {
  return (
    <svg {...props} className={tw("", className)}>
      <path
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
