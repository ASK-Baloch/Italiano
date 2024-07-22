"use client";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    id:1,
    title:"always fresh & delicious crispy & spicy hot",
    image:"/slide1.png"
  },
  {
    id:2,
    title:"we deliver your order in 30 minutes",
    image:"/slide2.png"
  },
  {
    id:3,
    title:"the best italian pizza in town",
    image:"/slide3.png"
  }
]

const Slider = () => {
  const [slide, setSlide] = useState(0);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/*  TEXT CONTAINER */}
      <div className="text-[#B40614] h-1/2 flex items-center justify-center flex-col gap-8 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl">
          Slider
        </h1>
        <button className="bg-[#B40614] text-white py-4 px-8 rounded">Order now</button>
      </div>
      {/*  IMAGE CONTAINER */}
      <div className="h-1/2 relative w-full">
        <Image src="/slide1.png" alt="slider" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Slider;
