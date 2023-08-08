import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { AnimatePresence } from "framer-motion";
import HeaderMenuHome from "../Menu/HeaderMenuHome";
import FooterMenu from "../Menu/FooterMenu";
import Add from "../AddTeam/Add";
import SelectedTeam from "./SelectedTeam";
import Events from "./Events/Events";
import Messages from "./Messages/Messages";

// ダミーデータ
const AccountComponent = () => <div>Account Component</div>;

const Home = () => {
	const { currentPage, addTeam } = useContext(AppContext);

	const renderHeader = () => {
		switch (currentPage) {
			case "Events":
				return <HeaderMenuHome />;
			case "Messages":
				return <HeaderMenuHome />;
			case "Account":
				return <HeaderMenuHome />;
			default:
				return <HeaderMenuHome />;
		}
	};

	const renderComponent = () => {
		switch (currentPage) {
			case "Events":
				return (
					<div className="w-full h-screen bg-slate-200">
						<div
							className="max-w-6xl mx-auto pt-20 pb-10 px-4 overflow-y-scroll"
							style={{ maxHeight: "calc(100vh - 70px)" }}
						>
							<Events />
						</div>
					</div>
				);
			case "Messages":
				return (
					<div className="w-full h-screen bg-slate-200">
						<div
							className="max-w-6xl mx-auto pt-20 pb-10 px-4 overflow-y-scroll"
							style={{ maxHeight: "calc(100vh - 70px)" }}
						>
							<Messages />
						</div>
					</div>
				);
			case "Account":
				return <AccountComponent />;
			default:
				return (
					<div className="w-full h-screen bg-slate-200">
						<div
							className="max-w-6xl mx-auto pt-20 pb-10 px-4 overflow-y-scroll"
							style={{ maxHeight: "calc(100vh - 70px)" }}
						>
							<SelectedTeam />
						</div>
					</div>
				);
		}
	};

	return (
		<section className="relative">
			<AnimatePresence>{addTeam ? <Add /> : ""}</AnimatePresence>
			<header>{renderHeader()}</header>
			<main>{renderComponent()}</main>
			<FooterMenu />
		</section>
	);
};

export default Home;
