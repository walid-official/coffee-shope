import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from '../Pages/ErrorPage';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Coffee from '../Pages/Coffee';
import BrewedCoffee from '../components/BrewedCoffee';
import DeshBoard from '../components/DeshBoard';
import CoffeDetails from '../Pages/CoffeDetails';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('../categories.json'),
          children: [
            {
              path: '/',
              element: <BrewedCoffee></BrewedCoffee>,
              loader: () => fetch('../coffees.json')
            },
            {
              path: 'CategoryCoffee/:CategoryId',
              element: <BrewedCoffee></BrewedCoffee>,
              loader: () => fetch('../coffees.json')
            }
          ]
        },
        {
          path: "Coffee",
          element: <Coffee></Coffee>,
          loader: () => fetch('/public/coffees.json')
        },
        {
          path: "DashBoard",
          element: <DeshBoard></DeshBoard>,
          loader: () => fetch('/public/coffees.json')
        },
        {
          path: "/CoffeeDetails/:CoffeeId",
          element: <CoffeDetails></CoffeDetails>,
          loader: () => fetch('../coffees.json')
        }
      ]
    },
  ]);

export default router;