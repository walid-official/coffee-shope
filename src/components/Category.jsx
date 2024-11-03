import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";



const Category = ({categories}) => {
  return (
    <div className="w-11/12 mx-auto my-12">
      <div role="tablist" className="tabs tabs-lifted">
        {
            categories.map((category,index) => <NavLink key={index} to={`CategoryCoffee/${category.category}`} role="tab" className={({isActive}) => `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`}>
                {category.category}
            </NavLink>)
        }
      </div>
      
    </div>
  );
};

export default Category;
