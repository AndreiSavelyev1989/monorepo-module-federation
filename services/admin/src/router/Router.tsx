import { App } from "@/components/App";
import { About } from "@/pages/About";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin/main",
        element: (
          <Suspense fallback={"Loading..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/admin/second",
        element: (
          <Suspense fallback={"Loading..."}>
            <div style={{ color: "red" }}>second admin page</div>
          </Suspense>
        ),
      },
    ],
  },
];
export const router = createBrowserRouter(routes);

export default routes;
