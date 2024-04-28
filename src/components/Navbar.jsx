import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-md  border-b-[1px] border-zinc-600 mx-auto py-3 flex  items-center justify-between  text-white capitalize">
     <div className="leftNavbar flex items-center gap-20">
     <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        className="h-4"
      />
      <div className="links flex items-center gap-5">
        {["Home", "Work", "Project", "", "skills"].map((item, index) =>
          item.length === 0 ? (
            <span className="h-7 w-[1.5px] bg-zinc-500"></span>
          ) : (
            <a
              className="text-xs font-medium flex items-center gap-[2px]"
              href="#"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25em #00ff19" }}
                  className="inline-block w-1 h-1 bg-green-400 rounded-full mt-1"
                ></span>
              )}
              {item}
            </a>
          )
        )}
      </div>
     </div>
     <div className="rightNavbar">
        <Button />
     </div>
    </div>
  );
}

export default Navbar;
