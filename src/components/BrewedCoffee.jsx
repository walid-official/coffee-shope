import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

import Card from './Card';

const BrewedCoffee = () => {
    const categoryCoffee = useLoaderData();
    const {CategoryId} = useParams()
    const [coffees,setCoffees] = useState([categoryCoffee]);
    // const navigate = useNavigate();
    useEffect(() => {

        if(CategoryId){
            const filteredByCategory = categoryCoffee.filter(coffee => coffee.category === CategoryId);
            setCoffees(filteredByCategory);
        }else{
            setCoffees(categoryCoffee)
        }

    }, [categoryCoffee,CategoryId])

    console.log(categoryCoffee);
    return (
        <>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto'>
                {
                    coffees.map(filteringCoffee => <Card key={filteringCoffee.id} filteringCoffee={filteringCoffee}></Card>)
                }
            </div>
            <button className="btn" onClick={() => setCoffees(categoryCoffee)}>Show All</button>
        </>
        
    );
};

export default BrewedCoffee;