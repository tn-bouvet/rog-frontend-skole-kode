import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const parts: string[] = ["hooks"];

const App = () => {
  const [state, setState] = useState<string>("");
  return (
    <div>
      <h1>{state}</h1>
      <label htmlFor="state-input">State value</label>
      <input
        id="state-input"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
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
