import { lazy, LazyExoticComponent } from "react";

interface Route {
  name: string;
  key: string;
  path?: string;
  component: LazyExoticComponent<() => JSX.Element>;
}

const LazyHome = lazy(() =>
  import("@/modules/home").then((module) => ({ default: module.HomePage })),
);
const LazyNotFound = lazy(() =>
  import("@/modules/ui").then((module) => ({ default: module.NotFoundPage })),
);

export const routes: Route[] = [
  {
    /* component: lazy(() => */
    /*   import("@/modules/home").then((module) => ({ default: module.HomePage })), */
    /* ), */
    component: LazyHome,
    key: "home-page",
    name: "Home",
    path: "/",
  },
  {
    /* component: lazy(() => */
    /*   import("@/modules/ui").then((module) => ({ default: module.NotFoundPage })), */
    /* ), */
    component: LazyNotFound,
    key: "default-page",
    name: "error",
  },
];
