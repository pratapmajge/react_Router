import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'


let router1= createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:"", //path can any name only for url which comes after above / of path
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router1} />
  </StrictMode>
)
