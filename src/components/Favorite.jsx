import React from "react";
import { removeFromCoffeeList } from "../Utilities/storeCoffee";

const Favorite = ({ favorite,handleRemove }) => {
  const {
    image,
    name,
    id,
    category,
    rating,
    popularity,
    origin,
    type,
    ingredients,
    nutrition_info,
    description,
    making_process,
  } = favorite;



 



  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="flex flex-col">
          <figure className="h-[300px] w-full">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="">
              <h2 className="card-title">{name}</h2>
              <h3 className="text-xl">Category: {category}</h3>
              <h2 className="text-xl">Type: {type}</h2>
              <h2 className="text-xl">Origin: {origin}</h2>
              <h2 className="text-xl">Popularity: {popularity}</h2>
              <h2 className="text-xl">Rating: {rating}</h2>
            </div>
            <div onClick={() => handleRemove(id)} className="">
              <button  className="btn">Delete Item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
