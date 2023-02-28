import { useNextRouter } from "@/hooks/useNextRouter";
import { Text } from "@/components";
import { Seat } from "../Seat";
import { SEAT_SIZE } from "@/constants";

type SectionProps = {
  section: string;
  seats: Array<{
    seatId: number;
    seatRow: string;
    seatNumber: number;
    reviewAmount: number;
    rating: Rating;
  }>;
};

export function Section({ section, seats }: SectionProps) {
  const { asPath } = useNextRouter();
  const sectionWidth =
    Math.max(...seats.map(({ seatNumber }) => seatNumber)) * (SEAT_SIZE + 5);
  return (
    <div
      key={section}
      style={{
        width: sectionWidth,
      }}
      className="relative shrink-0"
    >
      {seats.length > 0 && (
        <>
          <Text as="h4">{section}구역</Text>
          {seats.map(
            ({ seatId, seatRow, seatNumber, rating, reviewAmount }) => (
              <Seat
                key={seatId}
                x={seatNumber}
                y={+seatRow}
                rating={Math.floor(rating) as Rating}
                href={reviewAmount ? `${asPath}/reviews/${seatId}` : undefined}
              >
                {seatNumber}
              </Seat>
            )
          )}
        </>
      )}
    </div>
  );
}
