import { StrictMode, useState } from "react";
import { createRoot, type Root } from "react-dom/client";
import { Component } from "./component";

const App = () => {
  return <Component />;
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
  const root = (import.meta.hot.data.root ??= createRoot(elem)) as Root;
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
