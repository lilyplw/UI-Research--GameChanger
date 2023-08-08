import { Link } from "react-router-dom";
// アイコンのインポート
import { BiPlus, BiBaseball } from "react-icons/bi";

const AddHome = () => {
	return (
		<>
			<p className="mt-2 mb-8 text-2xl text-center font-bold">
				Ready To Get Started?
			</p>
			<ul className="flex flex-col">
				<li className="py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
					<Link
						className="inline-flex items-center gap-x-3.5"
						to="SelectTeamSports"
					>
						<BiPlus className="text-2xl text-blue-400 mr-2" />
						<div className="text-left">
							<p className="text-base font-semibold">Create New Team</p>
							<p className="text-sm text-gray-400">
								Roll over previous roster or add a roster from scratch.
							</p>
						</div>
					</Link>
				</li>
				<li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
					<BiBaseball className="text-2xl text-blue-400 mr-2" />
					<div className="text-left">
						<p className="text-base font-semibold">Import GC Classic Team</p>
						<p className="text-sm text-gray-400">
							Bring team, stats from GameChanger Classic.
						</p>
					</div>
				</li>
				<li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
					<BiBaseball className="text-2xl text-blue-400 mr-2" />
					<div className="text-left">
						<p className="text-base font-semibold">Import Sports Connect</p>
						<p className="text-sm text-gray-400">
							Import your team's roster and schedule.
						</p>
					</div>
				</li>
			</ul>
		</>
	);
};

export default AddHome;
