import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './LAYouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        index:true,
        Component:Home,
        loader:()=>fetch('http://localhost:3000/coffees')
      },
      {
        path:"addCoffee",
        Component:AddCoffe,
      },
      {
         path:"coffee/:id",
      },
      {
        path:"updateCoffee/:id",
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        Component:UpdateCoffee,
      },
      {
        path:"signin",
        element:<Signin></Signin>
      },
      {
        path:"signup",
        element:<Signup></Signup>
      },
      {
        path:"/users",
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:3000/users')
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
