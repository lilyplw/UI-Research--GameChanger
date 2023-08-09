import MenuButton from "./MenuButton";
// アイコンのインポート
import { MdHome, MdEvent, MdMessage, MdAccountCircle } from "react-icons/md";

const FooterMenu = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-b-0 border-t border-r-0 border-l-0">
			<div className="max-w-5xl flex items-center mx-auto justify-between">
				<MenuButton icon={<MdHome />} menuName="Home" />
				<MenuButton icon={<MdEvent />} menuName="Events" />
				<MenuButton icon={<MdMessage />} menuName="Messages" />
				<MenuButton icon={<MdAccountCircle />} menuName="Account" />
			</div>
		</div>
	);
};

export default FooterMenu;
