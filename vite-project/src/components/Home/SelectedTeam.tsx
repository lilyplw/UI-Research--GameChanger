import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import TeamCard from "./TeamCard";

const SelectedTeam = () => {
	const { selectedTeams } = useContext(AppContext);
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
			{selectedTeams.map((selected, index) => {
				if (!selected.name || !selected.icon) return null; // nameやiconがundefinedの場合は何もレンダリングしない
				return (
					<TeamCard key={index} name={selected.name} icon={selected.icon} />
				);
			})}
		</div>
	);
};

export default SelectedTeam;
