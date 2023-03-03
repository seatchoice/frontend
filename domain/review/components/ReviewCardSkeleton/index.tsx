import { tw } from "@/utils/tailwindMerge";
import { ReviewImageSkeleton } from "../ReviewImageSkeleton";

type ReviewCardSkeletonProps<T extends React.ElementType> = Component<T> & {};

export function ReviewCardSkeleton({
  className,
  children,
  ...props
}: ReviewCardSkeletonProps<"div">) {
  return (
    <div
      role="status"
      className={tw(
        "flex flex-col sm:flex-row gap-4 p-4 rounded-lg animate-pulse",
        className
      )}
    >
      <ReviewImageSkeleton className="w-[300px] h-[300px] animate-none" />
      <div className="flex flex-col justify-center gap-2 px-2">
        <div className="h-5 bg-light-fg rounded-full dark:bg-dark-fg w-64 mb-4"></div>
        <div className="h-3 bg-light-fg rounded-full dark:bg-dark-fg max-w-[480px] mb-2.5"></div>
        <div className="h-3 bg-light-fg rounded-full dark:bg-dark-fg mb-2.5"></div>
        <div className="h-3 bg-light-fg rounded-full dark:bg-dark-fg max-w-[440px] mb-2.5"></div>
        <div className="h-3 bg-light-fg rounded-full dark:bg-dark-fg max-w-[460px] mb-2.5"></div>
        <div className="h-10 bg-light-fg rounded-lg dark:bg-dark-fg max-w-[360px]"></div>
      </div>
      <span className="sr-only">리뷰 로딩 중</span>
    </div>
  );
}
