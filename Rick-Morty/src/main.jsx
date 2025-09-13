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
import Location,{LoderLocation} from './route/location.jsx';
import ErrorPage from './route/errorPage.jsx';
let router=createBrowserRouter(
  [
    {
      path:'/',
      Component:Root,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          Component:Home,
          errorElement:<ErrorPage/>,
          loader:LoaderData,
        },
       
      ]
    },
     {
          path:'episodes/:id',
          Component:Episodes,
          errorElement:<ErrorPage/>,
          loader:LoderEpisodePage,
        },
        {
          path:'character/:id',
          Component:Person,
          loader:LoaderPeesons,
          errorElement:<ErrorPage/>,
        },
        {
          path:'locations/:id',
          Component:Location,
          errorElement:<ErrorPage/>,
          loader:LoderLocation,
        }

  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
