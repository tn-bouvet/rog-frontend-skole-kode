import { useContext } from "react";
import { context } from "./context";

export const Component = () => {
  const { value, setValue } = useContext(context);
  return (
    <div>
      <h1>Value is {value}</h1>
      <button onClick={() => setValue(value + 1)}>Add</button>
      <button onClick={() => setValue(value - 1)}>Subtract</button>
    </div>
  );
};
