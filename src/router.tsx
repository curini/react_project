import { createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import App from "./App";
import Index from "./pages/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "welcome", element: <Welcome /> },
    ],
  },
]);
