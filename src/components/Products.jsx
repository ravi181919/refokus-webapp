import React from "react";
import Product from "./Product";

function Products() {
  const productsData = [
    {
      head: "Arqitel",
      src:'src/assets/arqitel.mp4',
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      head: "Cula",
      src:'src/assets/Cula.mp4',
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },
    {
      head: "Silvr",
      src:'src/assets/silvr.mp4',
      desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: true,
    },
    {
      head: "TTR",
      src:'src/assets/ttr.mp4',
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      head: "YIR 2022",
      src:'src/assets/yir2022.mp4',
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
  ];
  return (
    <div className="text-white mt-10">
      {productsData.map((item, index) => (
        <Product value={item} key={index}/>
      ))}
    </div>
  );
}

export default Products;
