import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({buttonTittle ='Get Started'}) {
  return (
    <div className="min-w-36 py-2 px-4 flex items-center bg-zinc-100 justify-between text-black rounded-full">
      <span className="text-xs font-medium">{buttonTittle}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
