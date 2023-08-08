import { motion } from "framer-motion";
import TeamSportsComponent from "./TeamSportsComponent";
import { useNavigate } from "react-router-dom";
// アイコンのインポート
import { IoIosArrowBack } from "react-icons/io";

const Add = () => {
	const navigate = useNavigate();

	return (
		<motion.div
			initial={{ x: "100vw" }}
			animate={{ x: 0 }}
			exit={{ x: "100vw" }}
			transition={{ ease: "easeOut", duration: 0.3 }}
			className="fixed top-0 right-0 left-0 bg-white max-w-6xl mx-auto w-full h-screen z-10"
		>
			<button className="p-2 flex items-center" onClick={() => navigate("/")}>
				<IoIosArrowBack className="text-3xl text-blue-400" />
				<p className="text-blue-400">Back</p>
			</button>
			<div className="mt-10 mb-8 px-4">
				<p className="text-gray-400">CREATE YOUR TEAM</p>
				<h3 className="text-2xl font-black text-gray-800">
					Select your team sport.
				</h3>
			</div>
			<div
				className="px-4 overflow-y-scroll"
				style={{ maxHeight: "calc(100vh - 190px)" }}
			>
				{/* 190pxはヘッダー分 */}
				<TeamSportsComponent />
			</div>
		</motion.div>
	);
};

export default Add;
