import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faHouse,
  faPause,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="w-16 h-80 border-white border-2 rounded-full fixed top-1/3 left-[92%]">
      <div className="w-full h-full">
        <ul className="flex flex-col justify-between items-center h-full w-full p-5">
          <li>
            <FontAwesomeIcon icon={faHouse} className="text-2xl text-primary cursor-pointer" />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className="text-2xl text-white cursor-pointer hover:text-primary transition-all" />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPause}
              rotation={90}
              className="text-3xl text-white cursor-pointer hover:text-primary transition-all"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
