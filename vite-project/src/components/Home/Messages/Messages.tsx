import { FcSpeaker } from "react-icons/fc";

const Messages = () => {
	return (
		<div
			className="flex justify-center items-center w-full h-screen"
			style={{ maxHeight: "calc(100vh - 190px)" }}
		>
			<div className="text-center">
				<FcSpeaker className="text-6xl mx-auto" />
				<p className="mt-2 text-2xl text-center text-gray-600 font-bold">
					Become Part of a Team
				</p>
				<p className="mt-2 text-xs text-gray-600 text-center">
					Find or create your team from the home tab in order to send messages
					and share events with team members.
				</p>
				<button
					type="button"
					className="mt-4 py-3 px-10 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
				>
					Go to the Home Tab
				</button>
			</div>
		</div>
	);
};

export default Messages;
