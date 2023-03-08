import { tw } from "@/utils/tailwindMerge";

type ReviewImageSkeletonProps<T extends React.ElementType> = Component<T> & {};

export function ReviewImageSkeleton({
  className,
  children,
  ...props
}: ReviewImageSkeletonProps<"div">) {
  return (
    <div
      role="status"
      className={tw(
        "w-[250px] h-[250px] rounded-lg animate-pulse bg-light-fg dark:bg-dark-fg",
        className
      )}
      {...props}
    >
      {children}
      <span className="sr-only">이미지 로딩 중</span>
    </div>
  );
}
