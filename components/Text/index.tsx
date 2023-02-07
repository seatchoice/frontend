import { tw } from "@/utils/tailwindMerge";

type TextProps<T extends React.ElementType> = Component<T> & {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const defaultHeadingStyle = "font-bold";

export function Text({
  as = "p",
  className,
  children,
  ...props
}: TextProps<"p">) {
  switch (as) {
    case "p":
      return (
        <p className={tw("", className)} {...props}>
          {children}
        </p>
      );
    case "h1":
      return (
        <h1
          className={tw("text-3xl sm:text-4xl", defaultHeadingStyle, className)}
          {...props}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={tw("text-2xl sm:text-3xl", defaultHeadingStyle, className)}
          {...props}
        >
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3
          className={tw("text-xl sm:text-2xl", defaultHeadingStyle, className)}
          {...props}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={tw("text-lg sm:text-xl", defaultHeadingStyle, className)}
          {...props}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={tw("text-base sm:text-lg", defaultHeadingStyle, className)}
          {...props}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={tw("text-md sm:text-base", defaultHeadingStyle, className)}
          {...props}
        >
          {children}
        </h6>
      );
  }
}
