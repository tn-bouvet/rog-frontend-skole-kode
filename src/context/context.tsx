import { createContext, useContext, useState, type ReactNode } from "react";

const context = createContext<{
  value: number;
  setValue: (val: number) => void;
}>({
  value: 1,
  setValue: () => undefined,
});

export const useCustomContext = () => {
  return useContext(context);
};

export const CustomProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<number>(1);
  return (
    <context.Provider value={{ value, setValue: (v) => setValue(v) }}>
      {children}
    </context.Provider>
  );
};
