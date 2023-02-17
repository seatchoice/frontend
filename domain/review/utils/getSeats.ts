import { SEATS } from "@/constants";

type Floor = keyof typeof SEATS;
type Section = "OP" | "A" | "B" | "C";

const getSections = (floor: Floor) => {
  return Object.keys(SEATS[floor]).map((section) => section);
};

const getRows = (floor: Floor, section: Section) => {
  return Object.keys(SEATS[floor][section]).map((row) => row);
};

const getSeatNumbers = (floor: Floor, section: Section, row: string) => {
  return SEATS[floor][section][row].map((seatNumber) => seatNumber);
};

export { getSections, getRows, getSeatNumbers };
