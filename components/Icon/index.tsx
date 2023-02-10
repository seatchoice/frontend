import { tw } from "@/utils/tailwindMerge";

import { Close } from "./assets";

type IconProps<T extends React.ElementType> = Component<T> & {
  as: "close";
  size?: number;
};

export function Icon({
  as,
  size,
  className,
  children,
  ...props
}: IconProps<"svg">) {
  switch (as) {
    case "close":
      return (
        <Close
          className={tw("", className)}
          viewBox="0 0 30 30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          {...props}
        />
      );
  }
}
