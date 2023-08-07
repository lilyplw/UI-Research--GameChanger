import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import HeaderMenu from "./Menu/HeaderMenu";
import FooterMenu from "./Menu/FooterMenu";

const HomeComponent = () => <div>Home Component</div>;
const EventsComponent = () => <div>Events Component</div>;
const MessagesComponent = () => <div>Messages Component</div>;
const AccountComponent = () => <div>Account Component</div>;

const Home = () => {
	// const { currentPage } = useContext(AppContext);

	const context = useContext(AppContext);

	if (!context) {
		throw new Error("AppContext value is undefined");
	}

	const { currentPage } = context;

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
			<HeaderMenu />
			<main className="mt-20">{renderComponent()}</main>
			<FooterMenu />
		</section>
	);
};

export default Home;
