type AddButtonProps = {
	icon: React.ReactNode;
	title: string;
	body: string;
};

const AddButton = (props: AddButtonProps) => {
	return (
		<button
			type="button"
			className="w-full py-3 px-4 inline-flex justify-left items-center gap-2 rounded-xl border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
		>
			<div className="text-2xl text-blue-400 mr-2">{props.icon}</div>
			<div className="text-left">
				<p className="text-base text-gray-400">{props.title}</p>
				<p className="text-sm text-blue-400">{props.body}</p>
			</div>
		</button>
	);
};

export default AddButton;
