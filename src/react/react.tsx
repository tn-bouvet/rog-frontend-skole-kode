import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [state, setState] = useState<number>(1);
  return (
    <div className="wrapper">
      <h1>React</h1>
      <span>Currently set to {state}</span>
      <button onClick={() => setState((s) => s + 1)}>Add</button>
      <button onClick={() => setState((s) => s - 1)}>Subtract</button>
    </div>
  );
};

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
