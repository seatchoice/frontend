import { tw } from "@/utils/tailwindMerge";

import {
  Close,
  Star,
  Camera,
  Back,
  Like,
  Plus,
  Logo,
  Notification,
  Dark,
  Light,
  Avatar,
} from "./assets";

type IconProps<T extends React.ElementType> = Component<T> & {
  as:
    | "close"
    | "star"
    | "camera"
    | "back"
    | "like"
    | "plus"
    | "logo"
    | "notification"
    | "light"
    | "dark"
    | "avatar";
  size?: number;
};

export function Icon({
  as,
  size,
  className,
  children,
  ...props
}: IconProps<"svg">) {
  switch (as) {
    case "close":
      return (
        <Close
          className={tw("", className)}
          viewBox="0 0 30 30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          {...props}
        />
      );
    case "star":
      return (
        <Star
          className={tw("", className)}
          viewBox={"0 0 30 30"}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width={size || "30"}
          height={size || "30"}
          {...props}
        />
      );
    case "camera":
      return (
        <Camera
          className={tw("", className)}
          viewBox="0 0 30 30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width={size || "30"}
          height={size || "30"}
          {...props}
        />
      );
    case "back":
      return (
        <Back
          className={tw("fill-white dark:fill-black", className)}
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          {...props}
        />
      );
    case "like":
      return (
        <Like
          className={tw("", className)}
          viewBox="0 0 20 19"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          {...props}
        />
      );
    case "plus":
      return (
        <Plus
          className={tw("", className)}
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          {...props}
        />
      );
    case "logo":
      return (
        <Logo
          className={tw("", className)}
          viewBox="0 0 30 30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          {...props}
        />
      );
    case "notification":
      return (
        <Notification
          className={tw("", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          {...props}
        />
      );
    case "dark":
      return (
        <Dark
          className={tw("", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          {...props}
        />
      );
    case "light":
      return (
        <Light
          className={tw("", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          {...props}
        />
      );
    case "avatar":
      return (
        <Avatar
          className={tw("", className)}
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          {...props}
        />
      );
  }
}
