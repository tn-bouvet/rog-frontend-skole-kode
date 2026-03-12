import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { ClassBased } from "./ClassBased";
import { FunctionBased } from "./FunctionBased";

const App = () => {
  const [state1, setState1] = useState<number>(1);
  const [state2, setState2] = useState<number>(1);
  return (
    <>
      <div>
        {state1 > 5 && <ClassBased num={state1} />}
        <ClassBased
          num={state1}
          // key={state}
        />
        <input
          type="number"
          value={state1}
          onChange={(e) => setState1(+e.target.value)}
        />
      </div>

      <div>
        {state2 > 5 && <FunctionBased num={state2} />}
        <FunctionBased
          num={state2}
          // key={state}
        />
        <input
          type="number"
          value={state2}
          onChange={(e) => setState2(+e.target.value)}
        />
      </div>
    </>
  );
};

//
//
//
//
//
//
//
//
//
//
//
//

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
