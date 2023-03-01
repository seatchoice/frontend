const getSections = (seatList: SeatList, floor: number) => {
  return seatList
    .find((seat) => seat.floor === +floor)
    ?.sections.filter(({ seats }) => seats.length > 0)
    .map(({ section }) => section);
};

const getRows = (seatList: SeatList, floor: number, section: string) => {
  return Array.from(
    new Set(
      seatList
        .find((seat) => +floor === seat.floor)
        ?.sections.find((seat) => section === seat.section)
        ?.seats.map(({ seatRow }) => seatRow)
    )
  );
};

const getSeatNumbers = (
  seatList: SeatList,
  floor: number,
  section: string,
  seatRow: number
) => {
  return seatList
    .find((seat) => +floor === seat.floor)
    ?.sections.find((seat) => section === seat.section)
    ?.seats.filter((seat) => String(seatRow) === String(seat.seatRow))
    .map(({ seatNumber }) => seatNumber);
};

export { getSections, getRows, getSeatNumbers };
