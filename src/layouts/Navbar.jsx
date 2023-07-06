import React from "react";
import List from "../components/menu/List";

function Navbar() {
	return (
		<div className="hidden 2xl:block w-14 h-fit border-gray-600 border-2 rounded-full fixed right-20 top-1/2 -translate-y-1/2">
			<div className="w-full h-full">
				<List />
			</div>
		</div>
	);
}

export default Navbar;
