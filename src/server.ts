import { serve } from "bun";
import index from "./index.html";
import hooks from "./hooks/index.html";
import classes from "./classes/index.html";
import customHooks from "./customHooks/index.html";
import jsx from "./jsx/index.html";

const server = serve({
  hostname: "localhost",
  port: 3005,
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,
    "/hooks": hooks,
    "/classes": classes,
    "/custom-hooks": customHooks,
    "/jsx": jsx,
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
