import Link from "next/link";
import { UrlObject } from "url";
import { tw } from "@/utils/tailwindMerge";
import { Button } from "@/components";

type SeatProps<T extends React.ElementType> = Component<T> & {
  href?: string | UrlObject;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
};

export function Seat({
  href,
  rating,
  className,
  children,
  ...props
}: SeatProps<"a">) {
  const ratingColor = {
    0: "bg-light-fg dark:bg-dark-fg",
    1: "bg-red-500 dark:bg-red-500",
    2: "bg-orange-400 dark:bg-orange-400",
    3: "bg-yellow-400 dark:bg-yellow-400",
    4: "bg-green-400 dark:bg-green-400",
    5: "bg-green-600 dark:bg-green-600",
  };
  if (!href) {
    return (
      <Button
        className={tw(
          `inline-block w-9 h-9 p-1 text-center rounded-lg text-dark-fg dark:text-light-fg ${ratingColor[rating]}`,
          className
        )}
      >
        {children}
      </Button>
    );
  }
  return (
    <Link
      href={href}
      className={tw(
        "inline-block w-9 h-9 p-1 text-center rounded-lg hover:opacity-80",
        ratingColor[rating],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
