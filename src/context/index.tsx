import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Component } from "./component";
import { CustomProvider } from "./context";

const ComponentWrapper = () => {
  return (
    <div>
      <h2>Wrapped component</h2>
      <Component />
    </div>
  );
};

const App = () => {
  return (
    <>
      <CustomProvider>
        <Component />
        <Component />
        <div>
          <CustomProvider>
            <h2>Nested tag</h2>
            <Component />
          </CustomProvider>
        </div>
        <ComponentWrapper />
      </CustomProvider>
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
