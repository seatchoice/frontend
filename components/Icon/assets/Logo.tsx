import { tw } from "@/utils/tailwindMerge";

type LogoProps<T extends React.ElementType> = Component<T> & {};

export function Logo({ className, children, ...props }: LogoProps<"svg">) {
  return (
    <svg {...props} className={tw("", className)}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14.5 0L15.6098 11.8207L24.753 4.24695L17.1793 13.3902L29 14.5L17.1793 15.6098L24.753 24.753L15.6098 17.1793L14.5 29L13.3902 17.1793L4.24695 24.753L11.8207 15.6098L0 14.5L11.8207 13.3902L4.24695 4.24695L13.3902 11.8207L14.5 0Z"
      />
    </svg>
  );
}
