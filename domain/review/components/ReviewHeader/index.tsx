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
  const { theater, floor, section, seatRow, seatNumber } = seat;
  return (
    <header
      className={tw("flex items-center gap-4 py-3 px-4", className)}
      {...props}
    >
      <BackButton />
      <Text as="h3" className="whitespace-nowrap text-ellipsis overflow-hidden">
        {theater}
      </Text>
      <Text as="h4" className="shrink-0">
        {floor}층 {section}구역 {seatRow}열 {seatNumber && `${seatNumber}번`}
      </Text>
    </header>
  );
}
