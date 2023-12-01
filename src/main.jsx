import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import TheLodge from "./pages/TheLodge.jsx";
import SkiRun from "./pages/SkiRun.jsx";
import TheSummit from "./pages/TheSummit.jsx";
import HowTo from "./pages/HowTo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/TheLodge",
    element: <TheLodge />,
  },
  {
    path: "/SkiRun",
    element: <SkiRun />,
  },
  {
    path: "/Theummit",
    element: <TheSummit />,
  },
  {
    path: "/HowTo",
    element: <HowTo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
