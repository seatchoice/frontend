import { useNextRouter } from "@/hooks/useNextRouter";
import { MainHeader, Text } from "@/components";
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
        <TheaterMap />
      </div>
    </>
  );
}
