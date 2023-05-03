import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './layouts/pages/Main/Main.jsx';
import Home from './layouts/pages/Home/Home.jsx';
import Blogs from './layouts/pages/Blogs/Blogs';
import Login from './layouts/pages/Login/Login';
import Details from './layouts/pages/Details/Details';
import Register from './layouts/pages/Register/Register';
import AuthProviders from './providers/AuthProviders';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Error from './layouts/pages/NotFount/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'home',
        element: <Home></Home>
      }
      , {
        path: 'goHome',
        element:<Home></Home>
      }
      , {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'details/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://the-thai-master-server-rathin-rathin.vercel.app/chef/${params.id}`)
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
