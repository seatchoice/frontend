import { useNextRouter } from "@/hooks/useNextRouter";
import { Loading, MainHeader, SSRSuspense, Text } from "@/components";
import { TheaterMap } from "@/domain/theater/components";

export default function Theater() {
  const {
    query: { name: theaterName },
  } = useNextRouter();

  return (
    <>
      <MainHeader />
      <div className="text-center">
        <Text as="h1">{theaterName}</Text>
        <SSRSuspense
          fallback={<Loading content={"공연장을 불러오는 중입니다."} />}
        >
          <TheaterMap />
        </SSRSuspense>
      </div>
    </>
  );
}
