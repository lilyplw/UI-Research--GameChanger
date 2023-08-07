import { createContext, useState, ReactNode } from "react";

type ContextType = {
	currentPage: string;
	setCurrentPage: (currentPage: string) => void;
};

type AppProviderProps = {
	children: ReactNode;
};

export const AppContext = createContext<ContextType>({
	currentPage: "Home",
	setCurrentPage: () => {},
});

export function AppProvider({ children }: AppProviderProps) {
	const [currentPage, setCurrentPage] = useState("Home");
	return (
		<AppContext.Provider
			value={{
				currentPage,
				setCurrentPage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
