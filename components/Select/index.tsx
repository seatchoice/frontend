import { tw } from "@/utils/tailwindMerge";
import { forwardRef } from "react";

type SelectProps<T extends React.ElementType> = Component<T> & {
  options?: Array<{ value: string | number }>;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps<"select">>(
  function Select(
    { options, className, children, ...props }: SelectProps<"select">,
    ref
  ) {
    return (
      <select
        ref={ref}
        className={tw(
          "inline-flex shrink-0 w-full max-w-xs px-3 py-2 select-none appearance-none rounded-lg font-semibold cursor-pointer bg-light-fg dark:bg-dark-fg",
          className
        )}
        {...props}
      >
        {options?.map(({ value }, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }
);
