import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "./Main";
import GameDetails from "./GameDetails";
import App from "../App";

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/games" /> },
  {
    path: "/games",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      { path: ":gameName", element: <GameDetails /> },
    ],
  },
]);
