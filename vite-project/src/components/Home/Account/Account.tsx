import useAlert from "../../../hooks/useAlert";

const Account = () => {
	const { showAlert, AlertComponent } = useAlert();
	return (
		<>
			<AlertComponent />
			<div className="">
				<div className="flex items-center gap-x-4 bg-white p-6">
					<img
						className="rounded-full w-20 h-20"
						src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
						alt="Image Description"
					/>
					<button className="text-left" onClick={showAlert}>
						<div className="grow">
							<h3 className="text-2xl font-bold text-gray-800">David Forren</h3>
							<p className="mt-2 text-sm uppercase text-blue-600">
								Edit Account
							</p>
						</div>
					</button>
				</div>
				<button className="w-full" onClick={showAlert}>
					<ul className="mt-10 flex flex-col">
						<li className="inline-flex items-center py-3 px-4 text-sm font-medium bg-white border-y text-gray-800 -mt-px">
							Change Password
						</li>

						<li className="inline-flex items-center py-3 px-4 text-sm font-medium bg-white border-y text-gray-800 -mt-px">
							Fan Pricing
						</li>
						<li className="inline-flex items-center py-3 px-4 text-sm font-medium bg-white border-y text-gray-800 -mt-px">
							Link Account
						</li>
					</ul>
					<ul className="mt-10 flex flex-col">
						<li className="inline-flex items-center py-3 px-4 text-sm font-medium bg-white border-y text-gray-800 -mt-px">
							Content Support
						</li>
						<li className="inline-flex items-center py-3 px-4 text-sm font-medium bg-white border-y text-gray-800 -mt-px">
							Help Center
						</li>
					</ul>
					<ul className="mt-10 flex flex-col">
						<li className="inline-flex items-center py-3 px-4 text-sm font-medium bg-white border-y text-gray-800 -mt-px">
							Leagal
						</li>
					</ul>
				</button>
			</div>
		</>
	);
};

export default Account;
