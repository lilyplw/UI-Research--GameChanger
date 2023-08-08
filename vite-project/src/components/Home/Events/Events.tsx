import { FiCalendar } from "react-icons/fi";

const Events = () => {
	return (
		<div
			className="flex justify-center items-center w-full h-screen"
			style={{ maxHeight: "calc(100vh - 190px)" }}
		>
			<div className="text-center">
				<FiCalendar className="text-6xl text-blue-600 mx-auto" />
				<p className="mt-2 text-2xl text-center text-gray-600 font-bold">
					No Events Scheduled
				</p>
				<button
					type="button"
					className="mt-4 py-3 px-10 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
				>
					Add Event
				</button>
			</div>
		</div>
	);
};

export default Events;
