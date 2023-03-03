import Link from "next/link";
import { tw } from "@/utils/tailwindMerge";
import { Button } from "@/components";
import { SEAT_SIZE } from "@/constants";
import { useNextRouter } from "@/hooks/useNextRouter";

type SeatProps<T extends React.ElementType> = Component<T> & {
  seatId: number;
  x?: number;
  y?: number;
  reviewAmount?: number;
  rating: Rating;
};

export function Seat({
  seatId,
  x,
  y,
  reviewAmount,
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

  const { asPath } = useNextRouter();

  if (reviewAmount) {
    return (
      <Link
        href={`${asPath}/reviews/${seatId}`}
        className={tw(
          "inline-block w-9 h-9 p-1 text-center rounded-lg hover:opacity-80",
          ratingColor[rating],
          className
        )}
        style={
          x && y
            ? {
                position: "absolute",
                top: `${y * SEAT_SIZE}px`,
                left: `${x * SEAT_SIZE}px`,
              }
            : undefined
        }
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Button
      className={tw(
        `inline-block w-9 h-9 p-1 text-center rounded-lg text-dark-fg dark:text-light-fg ${ratingColor[rating]}`,
        className
      )}
      style={
        x && y
          ? {
              position: "absolute",
              top: `${y * SEAT_SIZE}px`,
              left: `${x * SEAT_SIZE}px`,
            }
          : undefined
      }
    >
      {children}
    </Button>
  );
}
