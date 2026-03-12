import { resetHooks, useState } from "./useState";

export const Component = () => {
  resetHooks(); // Called by react normally
  const [state1, setState1] = useState<number>(5);
  const [state2, setState2] = useState<number>(5);

  return (
    <div>
      <div>
        <h1>State1: {state1}</h1>
        <button onClick={() => setState1(state1 + 1)}>Add</button>
        <button onClick={() => setState1(state1 - 1)}>Subtract</button>
      </div>
      <div>
        <h1>State2: {state2}</h1>
        <button onClick={() => setState2(state2 + 1)}>Add</button>
        <button onClick={() => setState2(state2 - 1)}>Subtract</button>
      </div>
    </div>
  );
};
