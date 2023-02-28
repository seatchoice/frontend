import { useNextRouter } from "@/hooks/useNextRouter";
import { MainHeader, Text } from "@/components";
import { Seat, Section } from "@/domain/theater/components";
import { useSeatListQuery } from "@/domain/theater/hooks/query";

export default function Theater() {
  const router = useNextRouter();
  const {
    query: { theater },
  } = router;

  const { data: seatList } = useSeatListQuery(theater as string);

  return (
    <>
      <MainHeader />
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
        <>
          {seatList.map(({ floor, sections }) => (
            <div
              key={floor}
              className="flex flex-col min-h-screen mb-10 overflow-auto"
            >
              <Text as="h3" className="text-left">{`${floor}층`}</Text>
              <div className="flex gap-4">
                {sections.map(({ section, seats }) => (
                  <Section key={section} section={section} seats={seats} />
                ))}
              </div>
            </div>
          ))}
        </>
      </div>
    </>
  );
}
