import React from "react";
import HomeLogo from "../assets/home.png";
import RightArrow from "../assets/greaterthan.png";

const Path = () => {
  return (
    <div className="flex items-center gap-2 mt-10">
      <div className="w-[20px] h-[21.5px] cursor-pointer">
        <img src={HomeLogo} alt="" />
      </div>
      <div>
        <img src={RightArrow} alt="" />
      </div>
      <span className="font-sans font-medium text-lg text-center text-[#696671] cursor-pointer">
        Flashcard
      </span>
      <div>
        <img src={RightArrow} alt="" />
      </div>
      <span className="font-sans font-medium text-lg text-center text-[#696671] cursor-pointer">
        Mathematics
      </span>
      <div>
        <img src={RightArrow} alt="" />
      </div>
      <span className=" font-sans font-semibold	text-lg text-center text-[#06286E] cursor-pointer">
        Relation and Function
      </span>
    </div>
  );
};

export default Path;
