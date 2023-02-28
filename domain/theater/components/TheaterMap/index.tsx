import { useNextRouter } from "@/hooks/useNextRouter";
import { Text } from "@/components";
import { Section } from "../Section";
import { Seat } from "../Seat";
import { NotFoundTheater } from "../NotFound";
import { useSeatListQuery } from "../../hooks/query";

export function TheaterMap() {
  const {
    query: { theater },
  } = useNextRouter();

  const { data: seatList } = useSeatListQuery(theater as string);
  return (
    <>
      {seatList.length ? (
        <>
          <MapGuide />
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
      ) : (
        <NotFoundTheater />
      )}
    </>
  );
}

function MapGuide() {
  return (
    <section className="flex flex-col gap-3">
      <Text className="font-semibold text-lg text-primary-300">
        좌석을 클릭하면 리뷰를 볼 수 있어요
      </Text>
      <div className="py-6 bg-light-fg dark:bg-dark-fg">
        <Text className="mb-2">별점에 따라서 좌석 색깔이 달라져요</Text>
        <Seat rating={1}>1</Seat>
        <Seat rating={2}>2</Seat>
        <Seat rating={3}>3</Seat>
        <Seat rating={4}>4</Seat>
        <Seat rating={5}>5</Seat>
      </div>
    </section>
  );
}
