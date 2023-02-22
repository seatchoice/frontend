import { SEATS } from "@/constants";
import { Select } from "@/components";
import { StateAndAction } from "@/types/state";
import { getSections, getRows, getSeatNumbers } from "../../../utils";

type SeatSelectProps = { disabled?: boolean } & StateAndAction<
  { floor: string; section: string; seatRow: string; seatNumber: string },
  "seat"
>;

export function SeatSelect({ disabled, seat, setSeat }: SeatSelectProps) {
  const seatInfo: Array<{
    id: "floor" | "section" | "seatRow" | "seatNumber";
    title: string;
    options: Array<{ value: string }>;
  }> = [
    {
      id: "floor",
      title: "층",
      options: Object.keys(SEATS).map((floor) => ({ value: floor })),
    },
    {
      id: "section",
      title: "구역",
      options: getSections(seat.floor).map((section) => ({ value: section })),
    },
    {
      id: "seatRow",
      title: "열",
      options: getRows(seat.floor, seat.section).map((row) => ({
        value: row,
      })),
    },
    {
      id: "seatNumber",
      title: "번호",
      options: getSeatNumbers(seat.floor, seat.section, seat.seatRow).map(
        (seatNumber) => ({ value: seatNumber })
      ),
    },
  ];

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: keyof typeof seat
  ) => {
    const { floor, section, seatRow } = { ...seat, [id]: e.target.value };
    const newSection = id === "floor" ? getSections(floor)[0] : section;
    const newSeatRow =
      id !== "seatNumber" ? getRows(floor, newSection)[0] : seatRow;
    const [newSeatNumber] = getSeatNumbers(floor, newSection, newSeatRow);

    setSeat({
      ...seat,
      section: newSection,
      seatRow: newSeatRow,
      seatNumber: newSeatNumber,
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
