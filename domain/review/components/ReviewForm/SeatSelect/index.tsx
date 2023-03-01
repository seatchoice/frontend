import { useNextRouter } from "@/hooks/useNextRouter";
import { StateAndAction } from "@/types/state";
import { Select } from "@/components";
import { useSeatListQuery } from "@/domain/theater/hooks/query";
import { getSections, getRows, getSeatNumbers } from "../../../utils";

type SeatSelectProps = { disabled?: boolean } & StateAndAction<Seat, "seat">;

export function SeatSelect({ disabled, seat, setSeat }: SeatSelectProps) {
  const {
    query: { theater },
  } = useNextRouter();
  const { data: seatList } = useSeatListQuery(theater as string);
  const seatInfo: Array<{
    id: "floor" | "section" | "seatRow" | "seatNumber";
    title: string;
    options?: Array<{ value: string | number }>;
  }> = [
    {
      id: "floor",
      title: "층",
      options: seatList.map(({ floor }) => ({ value: floor })),
    },
    {
      id: "section",
      title: "구역",
      options: getSections(seatList, seat.floor)?.map((section) => ({
        value: section,
      })),
    },
    {
      id: "seatRow",
      title: "열",
      options: getRows(seatList, seat.floor, seat.section)?.map((row) => ({
        value: row,
      })),
    },
    {
      id: "seatNumber",
      title: "번호",
      options: getSeatNumbers(
        seatList,
        seat.floor,
        seat.section,
        seat.seatRow
      )?.map((seatNumber) => ({ value: seatNumber })),
    },
  ];

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: keyof typeof seat
  ) => {
    const { floor, section, seatRow }: Seat = {
      ...seat,
      [id]: e.target.value,
    };
    const newSection =
      id === "floor" ? getSections(seatList, floor) ?? section : section;
    const newSeatRow =
      id !== "seatNumber" ? getRows(seatList, floor, section)[0] : seatRow;
    const newSeatNumber =
      getSeatNumbers(seatList, floor, section, seatRow) ?? [];

    setSeat({
      ...seat,
      section: newSection[0],
      seatRow: +newSeatRow,
      seatNumber: newSeatNumber[0],
      [id]: e.target.value,
    });
  };

  return (
    <section className="flex items-center gap-2 mb-4">
      {seatInfo.map(({ id, title, options }) => (
        <>
          <Select
            disabled={disabled}
            id={id}
            options={options}
            className="max-w-[4rem] text-center"
            onChange={(e) => handleSelectChange(e, id)}
            value={seat[id]}
          />
          <label htmlFor={id}>{title}</label>
        </>
      ))}
    </section>
  );
}
