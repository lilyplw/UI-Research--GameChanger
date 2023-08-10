import { TeamSportType } from "../../../data/TeamSports";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const TeamSportsCard = (props: TeamSportType) => {
	const { addSelectedTeam, setAddTeam } = useContext(AppContext);
	const navigate = useNavigate();
	const handleClick = () => {
		addSelectedTeam({ name: props.name, icon: props.icon });
		setAddTeam(false);
		navigate("/");
	};

	return (
		<button
			className="group flex flex-col h-full border border-gray-200 transition-all duration-300 rounded-xl py-5 px-2"
			onClick={handleClick}
		>
			<div className="text-2xl mx-auto">{props.icon}</div>
			<p className="mt-3 mx-auto text-xs font-semibold text-gray-800 text-center">
				{props.name}
			</p>
		</button>
	);
};

export default TeamSportsCard;
