import Link from "next/link";
import Image from "next/image";
import { useNextRouter } from "@/hooks/useNextRouter";
import { Text } from "@/components";
import { useReviewImageListQuery } from "../../hooks/query";

export function ReviewImageList() {
  const {
    query: { name, seatId },
    asPath,
  } = useNextRouter();
  const [currentPath] = asPath.split("?");
  const { data: thumbnailList } = useReviewImageListQuery(seatId as string);
  return (
    <section className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
      {thumbnailList.length > 0 ? (
        thumbnailList.map(({ reviewId, imageUrl }) => (
          <Link key={reviewId} href={`${currentPath}/${reviewId}?name=${name}`}>
            <Image
              src={imageUrl}
              alt="좌석 리뷰 사진"
              width={250}
              height={250}
              className="rounded-lg hover:opacity-70 hover:scale-105 duration-500"
            />
          </Link>
        ))
      ) : (
        <Text className="w-full p-6 rounded-md bg-white/10 font-semibold text-center">
          아직 등록된 사진이 없어요
        </Text>
      )}
    </section>
  );
}
