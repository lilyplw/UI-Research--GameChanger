import React from "react";

type MenuButtonProps = {
	icon: React.ReactNode;
	menuName: string;
};

const MenuButton = (props: MenuButtonProps) => {
	return (
		<button className="flex flex-col md:flex-row items-center">
			<div className="mr-1 text-gray-500 text-2xl">{props.icon}</div>
			<p className="text-gray-500 text-xs">{props.menuName}</p>
		</button>
	);
};

export default MenuButton;
