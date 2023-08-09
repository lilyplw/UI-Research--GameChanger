import { teamSports, TeamSportType } from "../../../data/TeamSports";
import TeamSportsCard from "./TeamSportsCard";

const TeamSportsComponent = () => {
	return (
		<div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-6">
			{teamSports.map((teamSport: TeamSportType, index) => {
				return (
					<TeamSportsCard
						key={index}
						name={teamSport.name}
						icon={teamSport.icon}
					/>
				);
			})}
		</div>
	);
};

export default TeamSportsComponent;
