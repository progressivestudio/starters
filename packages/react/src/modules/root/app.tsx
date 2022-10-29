import React, { Suspense } from "react";
import { Route, Switch } from "wouter";

import { DefaultLayout } from "../ui/layouts/default";

import { routes } from "./routes";

function Loading() {
  return <div>Loading...</div>;
}

export function App() {
  return (
    <React.StrictMode>
      <DefaultLayout>
        <Switch>
          {routes.map((route) => {
            const Component = route.component;

            return (
              <Route key={route.key} path={route.path}>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </Route>
            );
          })}
        </Switch>
      </DefaultLayout>
    </React.StrictMode>
  );
}
