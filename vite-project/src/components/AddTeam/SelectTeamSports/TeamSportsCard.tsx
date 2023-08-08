import { TeamSportType } from "../../data/TeamSports";

const TeamSportsCard = (props: TeamSportType) => {
	return (
		<a
			className="group flex flex-col h-full border border-gray-200 transition-all duration-300 rounded-xl p-5"
			href="#"
		>
			<div className="text-2xl mx-auto">{props.icon}</div>
			<p className="text-base font-semibold text-gray-800  text-center">
				{props.name}
			</p>
		</a>
	);
};

export default TeamSportsCard;
