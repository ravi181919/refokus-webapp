import React, { useState } from "react";
import Button from "./Button";

function Product({ value }) {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative w-full py-10 px-10"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-medium"> {value.head}</h1>
        <div className="w-1/3">
          <p className="mb-10">{value.desc}</p>
          <div className="flex items-center gap-5">
            {value.live && <Button />}
            {value.case && <Button buttonTittle="Case Study" />}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 h-64 w-80 rounded-xl overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          src={isHovered ? value.src : ''}
          muted
          loop
        />
      </div>
    </div>
  );
}

export default Product;
