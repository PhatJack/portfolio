import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "../components/menu/List";

function Navbar() {
	const [curPage, setCurPage] = useState(false);
	return (
		<div className="w-14 h-fit border-gray-600 border-2 rounded-full fixed right-20 top-1/2 -translate-y-1/2">
			<div className="w-full h-full">
				<List />
			</div>
		</div>
	);
}

export default Navbar;
