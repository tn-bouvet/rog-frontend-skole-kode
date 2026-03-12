import {
  StrictMode,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [swapStates, setSwapStates] = useState<boolean>(false);
  let state1: string;
  let setState1: Dispatch<SetStateAction<string>>;
  let state2: string;
  let setState2: Dispatch<SetStateAction<string>>;

  if (swapStates) {
    [state2, setState2] = useState<string>("");
    [state1, setState1] = useState<string>("");
  } else {
    [state1, setState1] = useState<string>("");
    [state2, setState2] = useState<string>("");
  }

  return (
    <div className="wrapper">
      <span>
        <label htmlFor="input1">Input 1</label>
        <input
          id="input1"
          value={state1}
          onChange={(e) => setState1(e.target.value)}
        />
      </span>
      <span>
        <label htmlFor="input2">Input 2</label>
        <input
          id="input2"
          value={state2}
          onChange={(e) => setState2(e.target.value)}
        />
      </span>
      <span>
        <label htmlFor="check">Swap</label>
        <input
          type="checkbox"
          checked={swapStates}
          onChange={(e) => setSwapStates(e.target.checked)}
        />
      </span>
    </div>
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
