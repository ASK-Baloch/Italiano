"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & delicious crispy & spicy hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order in 30 minutes",
    image: "/slide4.webp",
  },
  {
    id: 3,
    title: "the best italian pizza in town",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [slide, setSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     2000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/*  TEXT CONTAINER */}
      <div className="text-[#B40614] flex-1 flex items-center justify-center flex-col gap-8 font-bold ">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[slide].title}
        </h1>
        <button className="bg-[#B40614] text-white py-4 px-8 rounded">
          Order now
        </button>
      </div>
      {/*  IMAGE CONTAINER */}
      <div className="w-full relative flex-1">
        <Image
          src={data[slide].image}
          alt="slider"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
