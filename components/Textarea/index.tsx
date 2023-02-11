import { forwardRef } from "react";
import { tw } from "@/utils/tailwindMerge";

type TextareaProps<T extends React.ElementType> = Component<T> & {};

export const Textarea = forwardRef(function Textarea(
  { className, children, ...props }: TextareaProps<"textarea">,
  ref
) {
  return (
    <textarea
      ref={ref}
      className={tw(
        "resize-none p-2 rounded-lg bg-light-fg dark:bg-dark-fg",
        className
      )}
      {...props}
    >
      {children}
    </textarea>
  );
});
