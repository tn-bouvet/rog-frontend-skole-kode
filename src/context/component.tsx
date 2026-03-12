import { useCustomContext } from "./context";

export const Component = () => {
  const { value, setValue } = useCustomContext();
  return (
    <div>
      <h1>Value is {value}</h1>
      <button onClick={() => setValue(value + 1)}>Add</button>
      <button onClick={() => setValue(value - 1)}>Subtract</button>
    </div>
  );
};
