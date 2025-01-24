import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Contacts/Contact.jsx';
import User from './Components/User/User.jsx'
import GitHub, { GitHubloader } from './Components/GitHub/GitHub.jsx';


// let router1= createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"", //path can any name only for url which comes after above / of path
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={GitHubloader} // this is sttribute
      path='github' 
      element={<GitHub />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
)
