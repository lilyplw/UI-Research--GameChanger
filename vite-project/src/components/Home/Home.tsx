import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { AnimatePresence } from "framer-motion";
import HeaderMenuHome from "../Menu/Header/HeaderMenuHome";
import HeaderMenuEvents from "../Menu/Header/HeaderMenuEvents";
import HeaderMenuMessages from "../Menu/Header/HeaderMenuMessages";
import FooterMenu from "../Menu/Footer/FooterMenu";
import Add from "../AddTeam/Add";
import SelectedTeam from "./SelectedTeam";
import Events from "./Events/Events";
import Messages from "./Messages/Messages";
import Account from "./Account/Account";

const Home = () => {
	const { currentPage, addTeam } = useContext(AppContext);

	const renderHeader = () => {
		switch (currentPage) {
			case "Events":
				return <HeaderMenuEvents />;
			case "Messages":
				return <HeaderMenuMessages />;
			case "Account":
				return "";
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
							className="max-w-6xl mx-auto pt-14 overflow-y-scroll"
							style={{ maxHeight: "calc(100vh - 50px)" }}
						>
							<Messages />
						</div>
					</div>
				);
			case "Account":
				return (
					<div className="w-full h-screen bg-slate-200">
						<div
							className="max-w-6xl mx-auto overflow-y-scroll"
							style={{ maxHeight: "calc(100vh - 70px)" }}
						>
							<Account />
						</div>
					</div>
				);
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
