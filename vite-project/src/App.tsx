import "./App.css";
import Home from "./components/Home";
import { AppProvider } from "./contexts/AppContext";

function App() {
	return (
		<AppProvider>
			<Home />
		</AppProvider>
	);
}

export default App;
