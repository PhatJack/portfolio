import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { BiUser, BiEnvelope } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BsColumnsGap } from "react-icons/bs";
function Navbar() {
	return (
		<div className="w-14 h-full border-gray-600 border-2 rounded-full relative transform translate-y-3/4">
			<div className="w-full h-full">
				<ul className="flex flex-col justify-between items-center h-full w-full py-5 gap-10">
					<li>
						<Link to="/home">
							<FiHome
								size={23}
								className="text-gray-600 hover:text-primary transition-all"
							/>
						</Link>
					</li>
					<li>
						<Link to="/personal">
							<BiUser
								size={23}
								className="text-gray-600 hover:text-primary transition-all"
							/>
						</Link>
					</li>
					<li>
						<Link to="/education">
							<HiOutlineBriefcase
								size={23}
								className="text-gray-600 hover:text-primary transition-all"
							/>
						</Link>
					</li>
					<li>
						<Link to="/project">
							<BsColumnsGap
								size={23}
								className="text-gray-600 hover:text-primary transition-all"
							/>
						</Link>
					</li>
					<li>
						<Link to="/contact">
							<BiEnvelope
								size={23}
								className="text-gray-600 hover:text-primary transition-all"
							/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
