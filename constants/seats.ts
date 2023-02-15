const FLOOR_1_OP_ROWS = [15, 15];
const FLOOR_1_A_ROWS = [
  4, 6, 6, 7, 8, 9, 9, 10, 11, 11, 12, 13, 13, 12, 12, 12, 12, 12, 12, 7,
];
const FLOOR_1_B_ROWS = [
  15, 16, 15, 16, 15, 16, 15, 16, 15, 16, 15, 16, 15, 16, 15, 16, 15, 16, 15,
  16,
];
const FLOOR_1_C_ROWS = [
  4, 6, 6, 7, 7, 8, 9, 9, 10, 11, 12, 12, 13, 12, 12, 12, 12, 12, 12, 7,
];
const FLOOR_2_A_ROWS = [13, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14];
const FLOOR_2_B_ROWS = [16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15];
const FLOOR_2_C_ROWS = [13, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14];

const createSeats = (size: number) => {
  return Array.from({ length: size }).map((_, i) => i + 1);
};

const createRows = (row: Array<number>) => {
  return row.reduce(
    (acc, value, index) => ({ ...acc, [`${index + 1}`]: createSeats(value) }),
    {}
  );
};

type Seats = {
  [index: string]: {
    [index: string]: { [index: string]: Array<number> };
  };
};

export const SEATS: Seats = {
  1: {
    OP: createRows(FLOOR_1_OP_ROWS),
    A: createRows(FLOOR_1_A_ROWS),
    B: createRows(FLOOR_1_B_ROWS),
    C: createRows(FLOOR_1_C_ROWS),
  },
  2: {
    A: createRows(FLOOR_2_A_ROWS),
    B: createRows(FLOOR_2_B_ROWS),
    C: createRows(FLOOR_2_C_ROWS),
  },
};
