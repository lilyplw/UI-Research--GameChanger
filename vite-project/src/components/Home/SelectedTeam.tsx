import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import TeamCard from "./TeamCard";

const SelectedTeam = () => {
	const { selectedTeams } = useContext(AppContext);
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
			{selectedTeams.map((selected) => {
				return <TeamCard name={selected.name} icon={selected.icon} />;
			})}
		</div>
	);
};

export default SelectedTeam;
