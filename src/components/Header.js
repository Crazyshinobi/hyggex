import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex my-2 mx-2 justify-between items-center	">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-10 text-[#3A3740] items-center">
          <li className="text-lg font-sans font-normal cursor-pointer">Home</li>
          <li className="text-lg font-sans font-normal cursor-pointer">
            Flashcard
          </li>
          <li className="text-lg font-sans font-normal cursor-pointer">
            Contact
          </li>
          <li className="text-lg font-sans font-normal cursor-pointer">FAQ</li>
          <div>
            <button className="font-medium text-lg font-sans px-[40px] py-[13px] text-white rounded-[32px]  bg-gradient-to-b from-blue-900 to-blue-500 ">
              Login
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
