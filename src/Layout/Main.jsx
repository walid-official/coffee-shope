import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;