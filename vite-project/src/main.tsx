import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/AppRoutes";
import { AppProvider } from "./contexts/AppContext";
import { AnimatePresence } from "framer-motion";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppProvider>
			<AnimatePresence>
				<RouterProvider router={router} />
			</AnimatePresence>
		</AppProvider>
	</React.StrictMode>
);
