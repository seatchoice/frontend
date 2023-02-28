type Rating = 0 | 1 | 2 | 3 | 4 | 5;

type Seat = {
  floor: number;
  section: string;
  seatRow: number;
  seatNumber: number;
};

type SeatList = Array<{
  floor: number;
  sections: Array<{
    section: string;
    seats: Array<{
      seatId: number;
      seatRow: string;
      seatNumber: number;
      reviewAmount: number;
      rating: Rating;
    }>;
  }>;
}>;
