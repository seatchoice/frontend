import { useState } from "react";
import { tw } from "@/utils/tailwindMerge";
import { Button } from "@/components";

type DropdownProps<T extends React.ElementType> = Component<T> & {
  buttonText: React.ReactNode;
  items: Array<{ content: React.ReactNode }>;
};

export function Dropdown({
  buttonText,
  items,
  className,
  children,
  ...props
}: DropdownProps<"div">) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={tw("relative z-10 rounded-lg", className)} {...props}>
      <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {buttonText}
      </Button>
      {isOpen && (
        <ul className="absolute top-14 right-0 min-w-[200px] p-4 rounded-lg text-sm bg-light-fg dark:bg-dark-fg">
          {items.map(({ content }) => (
            <li key={`${content}`} className="p-2">
              {content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
