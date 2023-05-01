import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './layouts/pages/Main/Main.jsx';
import Home from './layouts/pages/Home/Home.jsx';
import Blogs from './layouts/pages/Blogs/Blogs';
import Login from './layouts/pages/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: 'home',
        element:<Home></Home>
      }
      , {
        path: 'blogs',
        element:<Blogs></Blogs>
      },
      {
        path: 'login',
        element:<Login></Login>
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
