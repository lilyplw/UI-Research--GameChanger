import { teamSports, TeamSportType } from "../../data/TeamSports";
import TeamSportsCard from "./TeamSportsCard";

const TeamSportsComponent = () => {
	return (
		<div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6">
			{teamSports.map((teamSport: TeamSportType) => {
				return <TeamSportsCard name={teamSport.name} icon={teamSport.icon} />;
			})}
		</div>
	);
};

export default TeamSportsComponent;