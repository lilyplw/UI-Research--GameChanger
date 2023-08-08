import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AnimatePresence } from "framer-motion";
import HeaderMenuHome from "./Menu/HeaderMenuHome";
import FooterMenu from "./Menu/FooterMenu";
import Add from "./AddTeam/Add";

const HomeComponent = () => <div>Home Component</div>;
const EventsComponent = () => <div>Events Component</div>;
const MessagesComponent = () => <div>Messages Component</div>;
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
				return <EventsComponent />;
			case "Messages":
				return <MessagesComponent />;
			case "Account":
				return <AccountComponent />;
			default:
				return <HomeComponent />;
		}
	};

	return (
		<section className="relative">
			<AnimatePresence>{addTeam ? <Add /> : ""}</AnimatePresence>
			<header>{renderHeader()}</header>
			<main className="mt-20 max-w-6xl mx-auto">{renderComponent()}</main>
			<FooterMenu />
		</section>
	);
};

export default Home;
