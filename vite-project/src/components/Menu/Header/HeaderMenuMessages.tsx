import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import useAlert from "../../../hooks/useAlert";
// アイコンのインポート
import { BsPencilSquare } from "react-icons/bs";

const HeaderMenuHome = () => {
	const { currentPage, selectedTeams } = useContext(AppContext);
	const { showAlert, AlertComponent } = useAlert();

	return (
		<>
			<AlertComponent />
			<div className="fixed top-0 left-0 right-0 bg-white p-4 border-b border-t-0 border-r-0 border-l-0">
				<div className="max-w-5xl flex items-center mx-auto justify-between">
					<div className="w-1/3" onClick={showAlert}>
						&nbsp;
					</div>
					<p className="text-gray-600 text-base">{currentPage}</p>
					<button className="w-1/3" onClick={showAlert}>
						<BsPencilSquare
							className={`ml-auto text-2xl ${
								selectedTeams && selectedTeams.length > 0
									? "text-blue-400"
									: "text-gray-400"
							}`}
						/>
					</button>
				</div>
			</div>
		</>
	);
};

export default HeaderMenuHome;
