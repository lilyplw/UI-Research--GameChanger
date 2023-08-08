type AddButtonHomeProps = {
	icon: React.ReactNode;
	title: string;
	body: string;
};

const AddButtonHome = (props: AddButtonHomeProps) => {
	return (
		<li className="inline-flex items-center gap-x-3.5 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
			<button
				type="button"
				className="w-full py-3 px-4 inline-flex justify-left items-center gap-2 rounded-xl border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
			>
				<div className="text-2xl text-blue-400 mr-2">{props.icon}</div>
				<div className="text-left">
					<p className="text-base font-semibold">{props.title}</p>
					<p className="text-sm text-gray-400">{props.body}</p>
				</div>
			</button>
		</li>
	);
};

export default AddButtonHome;
