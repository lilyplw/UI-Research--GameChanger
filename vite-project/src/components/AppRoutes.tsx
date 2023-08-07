import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Add from "./AddTeam/Add";
import SelectTeamSports from "./AddTeam/SelectTeamSports/SelectTeamSports";

export const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/AddTeam", element: <Add /> },
	{ path: "/AddTeam/SelectTeamSports", element: <SelectTeamSports /> },
]);
