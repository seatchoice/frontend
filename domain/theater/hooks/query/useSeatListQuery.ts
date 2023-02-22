import { AxiosError, AxiosResponse } from "axios";
import { UseQueryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";

import { api } from "@/api";
import { useSuspenseQuery } from "@/hooks/useSuspenseQuery";

type SeatListResponse = Array<{
  seatId: number;
  floor: number;
  section: string;
  seatRow: string;
  seatNumber: number;
  reviewAmount: number;
  rating: Rating;
}>;

const getSeatList = (
  theaterId: string
): Promise<AxiosResponse<SeatListResponse>> => {
  return api.get(`/theaters/${theaterId}/seats`);
};

export const useSeatListQuery = (
  theaterId: string,
  options?: UseQueryOptions<
    SeatListResponse,
    AxiosError,
    SeatListResponse,
    string[]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.SEAT_LIST, theaterId],
    async ({ queryKey: [, theaterId] }) => {
      const { data } = await getSeatList(theaterId);
      return data;
    },
    {
      ...options,
    }
  );
};
