// アイコンのインポート
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiPlus } from "react-icons/bi";

const HeaderMenu = () => {
	return (
		<div className="fixed top-0 left-0 right-0 bg-white p-6 border-b border-t-0 border-r-0 border-l-0">
			<div className="max-w-5xl flex items-center mx-auto justify-between">
				<HiMagnifyingGlass className="text-blue-400 text-2xl" />
				<p className="text-gray-400 text-base">Home</p>
				<BiPlus className="text-blue-400 text-2xl" />
			</div>
		</div>
	);
};

export default HeaderMenu;
