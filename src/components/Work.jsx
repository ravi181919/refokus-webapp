import React from "react";

function Work() {
  const image = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "48%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "55%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "53%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full select-none text-white mt-5">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[30vw] tracking-tight font-medium leading-none">
          work
        </h1>
        <div className="absolute top-0 h-full w-full">
          {image.map(
            (item, index) =>
              item.isActive && (
                <img
                  key={index}
                  style={{ left: item.left, top: item.top }}
                  src={item.url}
                  className="rounded-md w-44 h-44 object-cover absolute -translate-x-1/2 -translate-y-1/2"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
