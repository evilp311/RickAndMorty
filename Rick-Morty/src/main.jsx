import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './route/root.jsx';
import Home,{LoaderData} from './route/home.jsx';
let router=createBrowserRouter(
  [
    {
      path:'/',
      Component:Root,
      children:[
        {
          index:true,
          Component:Home,
          loader:LoaderData,

        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
