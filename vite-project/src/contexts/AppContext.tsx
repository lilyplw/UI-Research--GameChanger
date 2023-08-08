import { createContext, useState, ReactNode } from "react";

type Team = {
	name?: string;
	icon?: JSX.Element;
};

type ContextType = {
	// タブの状態を管理
	currentPage: string;
	setCurrentPage: (currentPage: string) => void;

	// チーム追加ボタンの状態を管理
	addTeam: boolean;
	setAddTeam: (addTeam: boolean) => void;

	// 選択したチームの状態を管理
	selectedTeams: Team[];
	addSelectedTeam: (team: Team) => void;
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

	// 選択したチームの状態を管理
	selectedTeams: [],
	addSelectedTeam: () => {},
});

export function AppProvider({ children }: AppProviderProps) {
	// タブの状態を管理
	const [currentPage, setCurrentPage] = useState("Home");

	// チーム追加ボタンの状態を管理
	const [addTeam, setAddTeam] = useState(false);

	// 選択したチームの状態を管理
	const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);

	const addSelectedTeam = (team: Team) => {
		setSelectedTeams((prev) => [...prev, team]);
	};

	console.log(selectedTeams);

	return (
		<AppContext.Provider
			value={{
				currentPage,
				setCurrentPage,
				addTeam,
				setAddTeam,
				selectedTeams,
				addSelectedTeam,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
