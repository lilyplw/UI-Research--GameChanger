import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { motion } from "framer-motion";
import AddButton from "./AddButton";
import AddButton2 from "./AddButton2";
import { Link } from "react-router-dom";
// アイコンのインポート
import { BiPlus, BiBaseball } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const Add = () => {
	const { setAddTeam } = useContext(AppContext);

	return (
		<motion.div
			initial={{ y: "100vh" }}
			animate={{ y: 0 }}
			exit={{ y: "100vh" }}
			transition={{ ease: "easeOut", duration: 0.3 }}
			className="fixed top-0 right-0 left-0 bg-white w-full h-full z-10"
		>
			<div className="max-w-6xl mx-auto">
				<button onClick={() => setAddTeam(false)}>
					<div className="p-2">
						<IoCloseOutline className="text-4xl" />
					</div>
				</button>
				<ul>
					<li className="py-2 px-4">
						<Link to="SelectTeamSports">
							<AddButton
								icon={<BiPlus />}
								title={"Create New Team"}
								body={"Roll over previous roster or add a roster from scratch."}
							/>
						</Link>
					</li>
					<li className="py-2 px-4">
						<AddButton
							icon={<BiBaseball />}
							title={"Import GC Classic Team"}
							body={"Bring team, stats from GameChanger Classic."}
						/>
					</li>
					<li className="py-2 px-4">
						<AddButton
							icon={<BiBaseball />}
							title={"Import Sports Connect"}
							body={"Import your team's roster and schedule."}
						/>
					</li>
					<li className="py-6 px-4">
						<AddButton2
							icon={<BiBaseball />}
							title={"Are you a League, Tournament or Travel Org admin?"}
							body={"Create an Organization >"}
						/>
					</li>
				</ul>
			</div>
		</motion.div>
	);
};

export default Add;
