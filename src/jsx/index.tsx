import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FunctionComponent } from "./functionComponent";
import { CreateElement } from "./createElement";

const App = () => {
  return (
    <div>
      <h1>Functional component</h1>
      <FunctionComponent
        onSubmit={(email, password) =>
          console.log("functional component", { email, password })
        }
      />
      <h1>Create element</h1>
      <CreateElement
        onSubmit={(email, password) =>
          console.log("create element", { email, password })
        }
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
