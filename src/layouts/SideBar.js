import React from "react";
import { Img } from "../Icon/icon";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="fixed top-[7.5em] left-10">
      <div className="w-[25em] h-[45em] border-2 border-[#3a4f50] rounded-[30px]">
        <div className="wrapper px-7 py-10">
          <section className="top-content flex justify-between items-center">
            <div className="name-text relative">
              <h1 className="text-5xl text-white tracking-wide">Jack</h1>
              <div className="absolute top-0 -right-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M15.8278 10.13C15.8278 9.45533 15.7324 8.986 15.5418 8.722C15.3511 8.458 14.9771 8.24533 14.4198 8.084L13.9138 7.952L14.1778 7.204H18.9958L19.2818 7.556L18.9958 7.952C18.6291 8.436 18.3724 8.94933 18.2258 9.492C18.0791 10.0347 18.0058 10.746 18.0058 11.626V17.808C18.0058 19.7147 17.5951 21.108 16.7738 21.988C15.9671 22.868 14.8451 23.308 13.4078 23.308C12.5424 23.308 11.8091 23.1613 11.2078 22.868C10.6064 22.56 10.1518 22.1713 9.84375 21.702C9.55042 21.218 9.40375 20.7047 9.40375 20.162C9.40375 19.4287 9.65308 18.8053 10.1518 18.292C10.6504 17.764 11.3324 17.5 12.1978 17.5C12.3444 17.5 12.4471 17.5293 12.5058 17.588C12.5791 17.632 12.6158 17.6833 12.6158 17.742C12.6158 17.8007 12.5131 17.94 12.3078 18.16C12.1024 18.38 11.9191 18.644 11.7578 18.952C11.6111 19.26 11.5378 19.6487 11.5378 20.118C11.5378 20.7047 11.7138 21.196 12.0658 21.592C12.4324 21.9733 12.9311 22.164 13.5618 22.164C15.0724 22.164 15.8278 21.1593 15.8278 19.15V10.13Z"
                    fill="white"
                  />
                  <circle cx="15" cy="15" r="14.5" stroke="white" />
                </svg>
              </div>
            </div>
            <div className="job-description ">
              <p className="w-56 text-md text-white text-right font-semibold">
                Front End Developer & Designer
              </p>
            </div>
          </section>
          <div className="main-img h-56 mt-8">
            <img
              src={Img}
              alt=""
              className="w-full h-full object-cover rounded-[20px]"
              loading="lazy"
            />
          </div>
          <div className="component-text text-center text-white text-xl flex flex-col gap-2 mt-5">
            <p className="email">tienphatng.693@gmail.com</p>
            <p className="address">Based in Quang Ngai, Viet Nam</p>
            <p className="copyright text-sm mt-4 text-gray-600">
              © 2023 Jack. All Rights Reserved
            </p>
          </div>
          <div className="social-media-contact px-14 mt-5">
            <ul className="flex justify-between items-center">
              <li>
                <Link to="https://www.facebook.com/jack.willam2003" target="_blank">
                  <FaFacebook
                    size={50}
                    className="text-gray-600 hover:text-primary hover:border-primary transition-all border border-gray-600 p-3 rounded-full"
                  />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/tuila_tien_phat/" target="_blank">
                  <AiOutlineInstagram
                    size={50}
                    className="text-gray-600 hover:text-primary hover:border-primary transition-all border border-gray-600 p-3 rounded-full"
                  />
                </Link>
              </li>
              <li>
                <Link to="">
                  <AiOutlineLinkedin
                    size={50}
                    className="text-gray-600 hover:text-primary hover:border-primary transition-all border border-gray-600 p-3 rounded-full"
                  />
                </Link>
              </li>
              <li>
                <Link to="https://github.com/PhatJack" target="_blank">
                  <AiOutlineGithub
                    size={50}
                    className="text-gray-600 hover:text-primary hover:border-primary transition-all border border-gray-600 p-3 rounded-full"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
