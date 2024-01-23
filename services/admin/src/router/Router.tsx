import { App } from "@/components/App";
import { About } from "@/pages/About";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { UserCard } from "@packages/shared/src/components/UserCard";

const routes = [
  {
    path: adminRoutes.root,
    element: <App />,
    children: [
      {
        path: adminRoutes.main,
        element: (
          <Suspense fallback={"Loading..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: adminRoutes.second,
        element: (
          <Suspense fallback={"Loading..."}>
            <div>
              <h2>From Admin:</h2>
              <UserCard username="Andrei" />
            </div>
          </Suspense>
        ),
      },
    ],
  },
];
export const router = createBrowserRouter(routes);

export default routes;
