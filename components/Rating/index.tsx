import { tw } from "@/utils/tailwindMerge";
import { Icon } from "@/components";

type RatingProps<T extends React.ElementType> = Component<T> & {
  value?: number;
  onRatingChange?: (newRating: number) => void;
};

const REVIEW_STAR_COUNT = 5;

export function Rating({
  value = 0,
  onRatingChange,
  className,
  children,
  ...props
}: RatingProps<"input">) {
  return (
    <div className={tw("flex", className)}>
      {Array.from({ length: REVIEW_STAR_COUNT }).map((_, index) => (
        <>
          <label htmlFor={`rating-${index + 1}`}>
            <Icon
              key={index}
              as="star"
              className={
                index + 1 <= value ? "fill-yellow-300" : "fill-gray-300"
              }
            />
            <span className="sr-only">{index + 1}개의 별점</span>
          </label>
          <input
            type="radio"
            id={`rating-${index + 1}`}
            value={index + 1}
            checked={value === index + 1}
            className="sr-only"
            onChange={() => onRatingChange && onRatingChange(index + 1)}
            {...props}
          />
        </>
      ))}
    </div>
  );
}
