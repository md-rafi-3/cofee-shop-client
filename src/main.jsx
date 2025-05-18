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
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
