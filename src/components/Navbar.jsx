import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto py-4">
      <div className="flex justify-between">
        <div className="">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="">
          <ul className="flex py-2 items-center gap-6"> 
            <NavLink>Home</NavLink>
            <NavLink to="Coffee">Coffees</NavLink>
            <NavLink>Dashboard</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
