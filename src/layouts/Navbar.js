import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { BiUser, BiEnvelope } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BsColumnsGap } from "react-icons/bs";
function Navbar() {
	return (
		<div className="w-16 h-80 border-white border-2 rounded-full relative">
			<div className="w-full h-full">
				<ul className="flex flex-col justify-between items-center h-full w-full px-7 py-5">
					<li>
						<Link to="/home">
							<FiHome
								size={24}
								className="text-white hover:text-primary transition-all"
							/>
						</Link>
					</li>
					<li>
						<Link to="/personal">
							<BiUser
								size={24}
								className="text-white hover:text-primary transition-all"
							/>
						</Link>
					</li>
					<li>
						<Link to="/education">
							<HiOutlineBriefcase
								size={24}
								className="text-white hover:text-primary transition-all"
							/>
						</Link>
					</li>
					<li>
						<Link to="/project">
							<BsColumnsGap
								size={24}
								className="text-white hover:text-primary transition-all"
							/>
						</Link>
					</li>
					<li>
						<Link to="/contact">
							<BiEnvelope
								size={24}
								className="text-white hover:text-primary transition-all"
							/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
