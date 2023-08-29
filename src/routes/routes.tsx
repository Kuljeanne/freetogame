import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";

import Main from "./Main";
import GameDetails from "./GameDetails";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/games" /> },
  {
    path: "/games",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      { path: ":id", element: <GameDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
