import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const parts: string[] = [
  "react",
  "jsx",
  "classes",
  "custom-hooks",
  "state",
  "context",
];

const App = () => {
  return (
    <ul>
      {parts.map((p) => (
        <li key={p}>
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
