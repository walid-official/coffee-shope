import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Category categories={categories}></Category>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;