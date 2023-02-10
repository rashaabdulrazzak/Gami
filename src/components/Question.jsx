import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded mb-0.5 px-6 border-1 border-solid border-white">
      <header className="justify-between flex	items-center bg-gray-200 h-16 pl-5">
        <h4
          onClick={() => setExpanded(!expanded)}
          className="text-lg mb-0 cursor-pointer text-gray-800 font-semibold"
        >
          {title}
        </h4>
        <button
          className="w-8 h-8 bg-transparent flex justify-center items-center  hover:bg-gray-300 cursor-pointer self-center min-w-[2rem] ml-4 rounded-[50%] border-transparent"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </button>
      </header>
      {expanded && <p className="text-gray-400 mt-2 mb-0">{info}</p>}
    </div>
  );
};

export default Question;
