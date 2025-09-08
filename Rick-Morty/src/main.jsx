import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './route/root.jsx';
import Home,{LoaderData} from './route/home.jsx';
import Episodes ,{LoderEpisodePage} from './route/episodes.jsx';
import Person,{LoaderPeesons} from './route/person.jsx';
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

        },
       
      ]
    },
     {
          path:'episodes/:id',
          Component:Episodes,
          loader:LoderEpisodePage,

        },
        {
          path:'character/:id',
          Component:Person,
          loader:LoaderPeesons,

        }

  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
