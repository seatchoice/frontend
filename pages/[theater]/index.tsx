import { useNextRouter } from "@/hooks/useNextRouter";
import { Loading, MainHeader, SSRSuspense, Text } from "@/components";
import { TheaterMap } from "@/domain/theater/components";

export default function Theater() {
  const router = useNextRouter();
  const {
    query: { theater },
  } = router;

  return (
    <>
      <MainHeader />
      <div className="text-center">
        <Text as="h1">{theater}</Text>
        <SSRSuspense
          fallback={<Loading content={"공연장을 불러오는 중입니다."} />}
        >
          <TheaterMap />
        </SSRSuspense>
      </div>
    </>
  );
}
