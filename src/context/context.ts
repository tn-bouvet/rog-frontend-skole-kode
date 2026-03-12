import { createContext } from "react";

export const context = createContext<{
  value: number;
  setValue: (val: number) => void;
}>({
  value: 1,
  setValue: () => undefined,
});
