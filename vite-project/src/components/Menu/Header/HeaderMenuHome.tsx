import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import useAlert from "../../../hooks/useAlert";
// アイコンのインポート
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiPlus } from "react-icons/bi";

const HeaderMenuHome = () => {
	const { currentPage, setAddTeam } = useContext(AppContext);
	const { showAlert, AlertComponent } = useAlert();

	return (
		<>
			<AlertComponent />
			<div className="fixed top-0 left-0 right-0 bg-white p-4 border-b border-t-0 border-r-0 border-l-0">
				<div className="max-w-5xl flex items-center mx-auto justify-between">
					<button className="w-1/3" onClick={showAlert}>
						<HiMagnifyingGlass className="mr-auto text-blue-400 text-2xl" />
					</button>
					<p className="text-gray-600 text-base">{currentPage}</p>
					<button className="w-1/3" onClick={() => setAddTeam(true)}>
						<BiPlus className="ml-auto text-blue-400 text-2xl" />
					</button>
				</div>
			</div>
		</>
	);
};

export default HeaderMenuHome;
