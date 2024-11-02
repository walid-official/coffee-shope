import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from '../Pages/ErrorPage';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Coffee from '../Pages/Coffee';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: "Coffee",
          element: <Coffee></Coffee>,
          loader: () => fetch('/public/coffees.json')
        }
      ]
    },
  ]);

export default router;