import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import { Outlet, useLoaderData } from 'react-router-dom';
import Title from '../components/Title';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="">
                <div className="text-center">
                    <Title title="This is a title"></Title>
                </div>
                <Category categories={categories}></Category>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;