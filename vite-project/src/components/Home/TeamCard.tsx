import useAlert from "../../hooks/useAlert";

type TeamSportType = {
	name: string;
	icon: React.ReactNode;
};

const TeamCard = (props: TeamSportType) => {
	const { showAlert, AlertComponent } = useAlert();
	return (
		<>
			<AlertComponent />
			<button
				className="group flex flex-col h-full border border-gray-200 transition-all duration-300 rounded-xl p-5 bg-white shadow"
				onClick={showAlert}
			>
				<div className="text-4xl mx-auto">{props.icon}</div>
				<p className="text-base font-semibold text-gray-800 text-center mt-4 mx-auto">
					{props.name}
				</p>
			</button>
		</>
	);
};

export default TeamCard;
