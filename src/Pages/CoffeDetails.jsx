import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { addToCoffeeList, getCoffeeList } from '../Utilities/storeCoffee';

const CoffeDetails = () => {
    const coffeeDetails = useLoaderData();
    const {CoffeeId} = useParams();
    const [coffee,setCoffee] = useState({});
    const [favorite,setFavorite] = useState(false);

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
      } = coffee;

    useEffect(() => {
        const singleData = coffeeDetails.find(coffee => coffee.id === parseInt(CoffeeId));
        setCoffee(singleData);
        const favorites = getCoffeeList();
        if(favorites.includes(id)){
            setFavorite(true);
        }
    },[coffeeDetails,CoffeeId])

    const handleCoffeeList = () => {
        addToCoffeeList(id);
        setFavorite(true);
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className="card card-compact bg-base-100 shadow-xl">
          <div className="flex flex-col">
            <figure className="h-[450px] w-full">
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
            </div>
            <div className="my-4 ml-4">
                <button disabled={favorite} onClick={() => handleCoffeeList(CoffeeId)} className='btn'>Add Favorite</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default CoffeDetails;