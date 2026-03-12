import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const parts: string[] = [
  "react", // Why react? Imperative
  "jsx",
  "hooks",
  "classes",
  "state",
  "context",
  "custom-hooks",
];

const App = () => {
  return (
    <ul>
      {parts.map((p) => (
        <li>
          <a href={p}>{p.replace("-", " ")}</a>
        </li>
      ))}
    </ul>
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
