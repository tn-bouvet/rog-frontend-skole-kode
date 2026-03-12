// import { resetHooks, useState } from "./useState";
import { useMemo, useState } from "react";

const useDerrived = () => {
  const [state1, setState1] = useState<number>(5);
  const derrived = useMemo(() => {
    return Math.pow(state1, 2);
  }, [state1]);
  return [derrived, setState1] as const;
};

const SubComp = ({ init }: { init: number }) => {
  const [state1, setState1] = useState<number>(init);
  return (
    <div>
      <h1>
        State{init}: {state1}
      </h1>
      <button onClick={() => setState1(state1 + 1)}>Add</button>
      <button onClick={() => setState1(state1 - 1)}>Subtract</button>
    </div>
  );
};

export const Component = () => {
  // resetHooks(); // Called by react normally
  const [state1, setState1] = useState<number>(5);
  const [state2, setState2] = useState<number>(5);
  const [state3, setState3] = useState<string>("");

  const [val, setVal] = useDerrived();

  return (
    <div>
      {[1, 2, 3, 4, 5].map((v) => (
        <SubComp init={v} key={v} />
      ))}
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
      <div>
        <h1>derrived: {val}</h1>
        <button onClick={() => setVal(val)}>Add</button>
        <button onClick={() => setVal(val)}>Subtract</button>
      </div>
      <input value={state3} onChange={(e) => setState3(e.target.value)} />
    </div>
  );
};
