import React, { useEffect, useState } from 'react';
import { addToCoffeeList, getCoffeeList } from '../Utilities/storeCoffee';
import { useLoaderData } from 'react-router-dom';
import Favorite from './Favorite';

const DeshBoard = () => {
    const coffeeData = useLoaderData();
    const [coffeeList,setCoffeeList] = useState([]);
    
    useEffect(()=> {
        const storedCoffeeList = getCoffeeList();
        const storedCoffeeListInt = storedCoffeeList.map((id) => parseInt(id))
        const coffeeDataList = coffeeData.filter(coffee => storedCoffeeListInt.includes(coffee.id))
        setCoffeeList(coffeeDataList);
    },[])

    return (
        <div className='grid md:grid-cols-3 gap-6 w-11/12 mx-auto'>
            {
                coffeeList.map((favorite,index) => <Favorite key={index} favorite={favorite}></Favorite>)
            }
        </div>
    );
};

export default DeshBoard;