import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowCoffee from "./ShowCoffee";

const Coffee = () => {
  const coffee = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-end">
        <div className="flex gap-2 my-4">
          <button className="btn">Sort By Rating</button>
          <button className="btn">Sort By Popularity</button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {coffee.map((coff, index) => (
          <ShowCoffee key={index} coffeeInfo={coff}></ShowCoffee>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
