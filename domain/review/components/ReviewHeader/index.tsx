import { useRouter } from "next/router";

import { tw } from "@/utils/tailwindMerge";
import { Text, BackButton } from "@/components";

type Seat = {
  theater: string;
  floor: number;
  section: string;
  seatRow: number;
  seatNumber?: number;
};

type ReviewHeaderProps<T extends React.ElementType> = Component<T> & {
  seat: Seat;
};

export function ReviewHeader({
  seat,
  className,
  children,
  ...props
}: ReviewHeaderProps<"header">) {
  const router = useRouter();
  const { theater, floor, section, seatRow, seatNumber } = seat;
  return (
    <header
      className={tw("flex items-center gap-4 py-3", className)}
      {...props}
    >
      <BackButton />
      <Text as="h3">{theater}</Text>
      <Text as="h4">
        {floor}층 {section}구역 {seatRow}열 {seatNumber && `${seatNumber}번`}
      </Text>
    </header>
  );
}
