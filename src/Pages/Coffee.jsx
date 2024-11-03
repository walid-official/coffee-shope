import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowCoffee from "./ShowCoffee";

const Coffee = () => {
  const coffee = useLoaderData();
  const [sorted,setSorted] = useState([]);
  useEffect(()=> {
    setSorted(coffee);
  },[])

  const handleRatingSort = () => {
    const sortByRating = [...sorted].sort((a,b) => b.rating -a.rating);
    setSorted(sortByRating)
  }

  const handlePopularity = () => {
    const sortByRating = [...sorted].sort((a,b) => b.popularity -a.popularity);
    setSorted(sortByRating)
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-end">
        <div className="flex gap-2 my-4">
          <button onClick={handleRatingSort} className="btn">Sort By Rating</button>
          <button onClick={handlePopularity} className="btn">Sort By Popularity</button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {sorted.map((coff, index) => (
          <ShowCoffee key={index} coffeeInfo={coff}></ShowCoffee>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
