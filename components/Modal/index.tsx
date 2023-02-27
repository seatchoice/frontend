import { createPortal } from "react-dom";

import { tw } from "@/utils/tailwindMerge";
import { Text } from "@/components";

type ModalProps<T extends React.ElementType> = Component<T> & {
  open: boolean;
};
type ModalItemProps<T extends React.ElementType> = Component<T>;

function ModalContainer({ open, className, children }: ModalProps<"div">) {
  return open
    ? createPortal(
        <>
          <Dimmed />
          <div
            role="dialog"
            aria-modal="true"
            className="flex items-center fixed inset-0 z-50"
          >
            <div
              className={tw(
                "flex flex-col mx-auto max-w-3xl gap-2 p-6 rounded-lg bg-white dark:bg-black",
                className
              )}
            >
              {children}
            </div>
          </div>
        </>,
        document.body
      )
    : null;
}

function Header({ className, children, ...props }: ModalItemProps<"header">) {
  return (
    <header className={tw("", className)} {...props}>
      {children}
    </header>
  );
}

function Body({ className, children, ...props }: ModalItemProps<"main">) {
  return (
    <main className={tw("", className)} {...props}>
      {children}
    </main>
  );
}

function Footer({ className, children, ...props }: ModalItemProps<"footer">) {
  return (
    <footer className={tw("", className)} {...props}>
      {children}
    </footer>
  );
}

function Dimmed({ className, ...props }: ModalItemProps<"div">) {
  return (
    <div
      className={tw(
        "fixed inset-0 z-40 opacity-40 bg-black dark:bg-white",
        className
      )}
      aria-hidden="true"
      {...props}
    ></div>
  );
}

export const Modal = Object.assign(ModalContainer, {
  Header,
  Body,
  Footer,
});
