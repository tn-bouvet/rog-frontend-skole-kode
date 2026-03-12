import { useState, type ReactNode } from "react";
import { context } from "./context";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<number>(1);
  return (
    <context.Provider value={{ value, setValue: (v) => setValue(v) }}>
      {children}
    </context.Provider>
  );
};
