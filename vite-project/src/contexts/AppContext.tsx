import { createContext, useState, ReactNode } from "react";

type ContextType = {
	// タブの状態を管理
	currentPage: string;
	setCurrentPage: (currentPage: string) => void;
	// チーム追加ボタンの状態を管理
	addTeam: boolean;
	setAddTeam: (addTeam: boolean) => void;
};

type AppProviderProps = {
	children: ReactNode;
};

export const AppContext = createContext<ContextType>({
	// タブの状態を管理
	currentPage: "Home",
	setCurrentPage: () => {},
	// チーム追加ボタンの状態を管理
	addTeam: false,
	setAddTeam: () => {},
});

export function AppProvider({ children }: AppProviderProps) {
	// タブの状態を管理
	const [currentPage, setCurrentPage] = useState("Home");
	// チーム追加ボタンの状態を管理
	const [addTeam, setAddTeam] = useState(false);

	return (
		<AppContext.Provider
			value={{
				currentPage,
				setCurrentPage,
				addTeam,
				setAddTeam,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
