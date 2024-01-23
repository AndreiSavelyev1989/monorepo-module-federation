import { App } from "@/components/App";
import { Shop } from "@/pages/Shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { UserCard } from "@packages/shared/src/components/UserCard";

const routes = [
  {
    path: shopRoutes.root,
    element: <App />,
    children: [
      {
        path: shopRoutes.main,
        element: (
          <Suspense fallback={"Loading..."}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: shopRoutes.second,
        element: (
          <Suspense fallback={"Loading..."}>
            <div>
              <h2>From Shop:</h2>
              <UserCard />
            </div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
