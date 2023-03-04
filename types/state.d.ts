import { Dispatch, SetStateAction } from "react";

type StateAndAction<T, K extends string> = {
  [P in K]: T;
} &
  {
    [P in `set${Capitalize<K>}`]: Dispatch<SetStateAction<T>>;
  };
