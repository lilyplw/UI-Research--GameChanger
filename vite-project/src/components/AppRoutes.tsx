import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import SelectTeamSports from "./AddTeam/SelectTeamSports/SelectTeamSports";

export const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/SelectTeamSports", element: <SelectTeamSports /> },
]);
