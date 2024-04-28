import React from "react";

function Work() {
  const image = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuk8GkSkbcA_RARvBVgEWPbJZ2QPi-s8XsMrqUUJ2SMpgec7Ia2EZD6-kagfDRlshQUjc&usqp=CAU",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8bwJVrm0YyO7x0_gDE1ASkUDNpWw0Zgdjw&usqp=CAU",
      top: "48%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABOkPgfMjy63_YZvD67ivIiTZH2mjCvCBWg&usqp=CAU",
      top: "45%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://wallpapercave.com/wp/wp5167010.jpg",
      top: "55%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://wallpapercave.com/wp/wp5699315.jpg",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://wallpapers.com/images/featured/information-technology-nucb4z97b3q78mjk.jpg",
      top: "65%",
      left: "53%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full select-none text-white">
      <div className="relative max-w-screen-lg mx-auto py-2 text-center">
        <h1 className="text-[30vw] tracking-tight font-medium leading-none">
          Work
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
