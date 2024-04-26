import React from "react";
import { NavLink } from "react-router-dom";

import Faq from "./Faq";

import Bulb from "../assets/bulb.png";
import Sound from "../assets/sound.png";
import Reload from "../assets/reload.png";
import Prev from "../assets/previous.png";
import Next from "../assets/next.png";
import Full from "../assets/fullscreen.png";
import Symbol from "../assets/symbol.png";
import SmallLogo from "../assets/smallLogo.png";
import Add from "../assets/add.png";

const Home = () => {
  const activeClass =
    "text-[20px] text-[#06286E] font-sans font-bold border-b-2 border-[#06286E]";
  const inactiveClass = "text-[20px] text-[#696671] font-sans font-medium";
  return (
    <div className="mt-10">
      <h1 className="font-mons font-bold	text-[32px] bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-blue-500">
        Relations and Functions ( Mathematics )
      </h1>

      <ul className="flex gap-14 justify-center mt-10">
        <li>
          <NavLink
            to="/study"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Study
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Test
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/game"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Game
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/other"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Other
          </NavLink>
        </li>
      </ul>

      <div className="w-[712px] h-[393.19px] bg-gradient-to-l from-blue-900 to-blue-500 mx-auto mt-8 rounded-[42.51px]">
        <div className="flex justify-between">
          <img className="mx-8 my-8 cursor-pointer" src={Bulb} alt="" />
          <img className="mx-8 my-8 cursor-pointer" src={Sound} alt="" />
        </div>
        <div className="flex items-center justify-center h-[50%]">
          <p className="text-white text-[38.26px] font-bold	text-center">
            9 + 6 + 7x - 2x - 3
          </p>
        </div>
      </div>

      <div className="w-[612px] h-[60px] mx-auto my-4 flex items-center justify-between">
        <div>
          <img src={Reload} alt="" />
        </div>
        <div className="flex items-center gap-8">
          <img src={Prev} alt="" />
          <p className="text-[24px] font-sans font-bold text-[#202B37]">
            01/10
          </p>
          <img src={Next} alt="" />
        </div>
        <div>
          <img src={Full} alt="" />
        </div>
      </div>

      <div className="max-w-[1280px] flex justify-between items-center mt-20">
        <div className="flex items-center">
          <div>
            <img src={Symbol} alt="" />
          </div>
          <div className="flex-col">
            <div>
              <p className="font-sans text-[12.4px] font-bold	text-[#696671]">
                Published by
              </p>
            </div>
            <div>
              <img src={SmallLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mx-4">
          <div>
            <img src={Add} alt="" />
          </div>
          <div>
            <p className="font-sans font-semibold	text-[28px]  bg-clip-text text-transparent bg-gradient-to-t from-blue-900 to-blue-500 cursor-pointer">Create a Flash Card</p>
          </div>
        </div>
      </div>


      <Faq />

    </div>
  );
};

export default Home;
