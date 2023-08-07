// import { useContext } from "react";
// import { AppContext } from "../../../contexts/AppContext";
import { motion } from "framer-motion";
// アイコンのインポート
import { IoIosArrowBack } from "react-icons/io";

const Add = () => {
	// const { setAddTeam } = useContext(AppContext);
	return (
		<motion.div
			initial={{ x: "100vw" }}
			animate={{ x: 0 }}
			exit={{ x: "100vw" }}
			transition={{ ease: "easeOut", duration: 0.3 }}
			className="fixed top-0 right-0 left-0 bg-white w-full h-full z-10"
		>
			<button className="p-2 flex">
				<IoIosArrowBack className="text-4xl text-blue-400" />
				<p className="text-blue-400">Back</p>
			</button>
			<ul></ul>
		</motion.div>
	);
};

export default Add;
