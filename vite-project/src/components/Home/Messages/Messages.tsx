import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import TeamCard from "./TeamCard";
import NoMessages from "./NoMessages";

const Messages = () => {
	const { selectedTeams } = useContext(AppContext);
	return (
		<>
			{selectedTeams && selectedTeams.length > 0 ? (
				<div className="w-full h-screen bg-white">
					{selectedTeams.map((selected, index) => {
						if (!selected.name || !selected.icon) return null; // nameやiconがundefinedの場合は何もレンダリングしない
						return (
							<TeamCard key={index} name={selected.name} icon={selected.icon} />
						);
					})}
				</div>
			) : (
				<NoMessages />
			)}
		</>
	);
};

export default Messages;
