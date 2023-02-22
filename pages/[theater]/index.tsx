import { useNextRouter } from "@/hooks/useNextRouter";
import { SEATS } from "@/constants";
import { Text } from "@/components";
import { Seat } from "@/domain/theater/components";
import { useSeatListQuery } from "@/domain/theater/hooks/query";

export default function Theater() {
  const router = useNextRouter();
  const {
    asPath,
    query: { theater },
  } = router;

  const { data: seatList } = useSeatListQuery(theater as string);

  return (
    <div className="text-center">
      <Text as="h1">{theater}</Text>
      <Text>좌석을 클릭하면 리뷰를 볼 수 있어요</Text>
      <div className="py-6 bg-light-fg dark:bg-dark-fg">
        <Text>별점에 따라서 좌석 색깔이 달라져요</Text>
        <Seat rating={1}>1</Seat>
        <Seat rating={2}>2</Seat>
        <Seat rating={3}>3</Seat>
        <Seat rating={4}>4</Seat>
        <Seat rating={5}>5</Seat>
      </div>
      <div className="flex flex-col gap-10">
        {Object.keys(SEATS).map((floor) => (
          <>
            <Text as="h2">{floor}층</Text>
            <div key={floor} className="overflow-x-auto">
              <div className="flex">
                {Object.keys(SEATS[floor]).map((section) => (
                  <div key={section} className="mx-10">
                    <Text as="h3">{section}구역</Text>
                    {Object.keys(SEATS[floor][section]).map((row) => (
                      <div key={row} className="flex items-center">
                        <Text>{row}</Text>
                        {SEATS[floor][section][row].map((seatNumber) => {
                          const seatWithReview = seatList.find(
                            (seat) =>
                              seat.floor === +floor &&
                              seat.section === section &&
                              seat.seatRow === row &&
                              seat.seatNumber === +seatNumber
                          );
                          return seatWithReview ? (
                            <Seat
                              key={seatNumber}
                              href={`${asPath}/reviews/${seatWithReview.seatId}`}
                              rating={
                                seatWithReview
                                  ? (Math.floor(
                                      seatWithReview.rating
                                    ) as Rating)
                                  : 0
                              }
                              className="m-1"
                            >
                              {seatNumber}
                            </Seat>
                          ) : (
                            <Seat rating={0} className="m-1">
                              {seatNumber}
                            </Seat>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
