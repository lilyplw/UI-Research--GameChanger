import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

type MenuButtonProps = {
	icon: React.ReactNode;
	menuName: string;
};

const MenuButton = (props: MenuButtonProps) => {
	const { currentPage, setCurrentPage } = useContext(AppContext);

	return (
		<button
			className="flex flex-col md:flex-row items-center"
			onClick={() => setCurrentPage(props.menuName)}
		>
			<div
				className={`mr-0 md:mr-1 text-2xl ${
					currentPage === props.menuName ? "text-blue-400" : "text-gray-400"
				}`}
			>
				{props.icon}
			</div>
			<p
				className={`text-xs ${
					currentPage === props.menuName ? "text-blue-400" : "text-gray-400"
				}`}
			>
				{props.menuName}
			</p>
		</button>
	);
};

export default MenuButton;
