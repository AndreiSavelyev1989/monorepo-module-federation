import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/Router";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



root.render(<RouterProvider router={router} />);
