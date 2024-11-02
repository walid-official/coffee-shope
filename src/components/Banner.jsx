import React from 'react';
import banner from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="h-[600px]">
                <img src={banner} className='h-full w-full object-cover' alt="" />
            </div>
        </div>
    );
};

export default Banner;