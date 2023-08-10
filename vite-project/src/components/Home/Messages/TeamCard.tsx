import useAlert from "../../../hooks/useAlert";

type TeamCardProps = {
	icon: React.ReactNode;
	name: string;
};

const TeamCard = (props: TeamCardProps) => {
	const { showAlert, AlertComponent } = useAlert();
	return (
		<>
			<AlertComponent />
			<button className="w-full text-left" onClick={showAlert}>
				<div className="flex items-center gap-x-4 bg-white py-4 px-4 border-b border-gray-300 border-opacity-50">
					<div className="text-3xl rounded-full shadow">{props.icon}</div>
					<div className="grow">
						<h3 className="text-base font-bold text-gray-800">{props.name}</h3>
						<p className="mt-2 text-sm text-gray-600">No messages yet</p>
					</div>
				</div>
			</button>
		</>
	);
};

export default TeamCard;
