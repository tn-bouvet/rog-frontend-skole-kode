import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Wrapper } from "./wrapper";
import { Component } from "./component";

const ComponentWrapper = () => {
  return (
    <div>
      <h2>Wrapped component</h2>
      <Component />
    </div>
  );
};

const App = () => {
  console.log(<Component />);
  return (
    <Wrapper>
      <Component />
      <div>
        <h2>Nested tag</h2>
        <Component />
      </div>
      <ComponentWrapper />
    </Wrapper>
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
