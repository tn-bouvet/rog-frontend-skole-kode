import { serve } from "bun";
import indexPage from "./index.html";
import hooksPage from "./hooks/index.html";
import classesPage from "./classes/index.html";
import customHooksPage from "./customHooks/index.html";
import jsxPage from "./jsx/index.html";
import reactPage from "./react/index.html";
import contextPage from "./context/index.html";

const server = serve({
  hostname: "localhost",
  port: 3005,
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": indexPage,
    "/hooks": hooksPage,
    "/classes": classesPage,
    "/custom-hooks": customHooksPage,
    "/jsx": jsxPage,
    "/react": reactPage,
    "/context": contextPage,
  },

  // development: process.env.NODE_ENV !== "production" && {
  //   // Enable browser hot reloading in development
  //   hmr: true,
  //
  //   // Echo console logs from the browser to the server
  //   console: true,
  // },
});

console.log(`🚀 Server running at ${server.url}`);
