import React from "react";
import MenuButton from "./MenuButton";
// アイコンのインポート
import {
	MdHome,
	MdEvent,
	MdMessage,
	MdAccountCircle,
} from "/node_modules/react-icons/md";

const Menu = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4">
			<div className="flex max-w-5xl mx-auto justify-between">
				<MenuButton icon={<MdHome />} menuName="Home" />
				<MenuButton icon={<MdEvent />} menuName="Events" />
				<MenuButton icon={<MdMessage />} menuName="Messages" />
				<MenuButton icon={<MdAccountCircle />} menuName="Account" />
			</div>
		</div>
	);
};

export default Menu;
