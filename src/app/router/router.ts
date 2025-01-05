import { createRouter } from "@kitbag/router";
import ROUTES from "./routes";

const appRouter = createRouter(ROUTES);

declare module "@kitbag/router" {
  interface Register {
    router: typeof appRouter;
  }
}

export default appRouter;
