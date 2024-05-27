import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Cards from './Components/Cards.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Hero from './Components/Hero.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/> ,
    children:[
      {
        path:"home",
        element:<Hero/>
      },
      {
        path:'product',
        element:<Cards/>
      },
      {
        path:'about',
        element:<About/>
      },{
        path:"contact",
        element:<Contact/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
)

