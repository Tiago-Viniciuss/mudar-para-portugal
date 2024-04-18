import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from '../routes/Home.jsx'
import FormEmail from '../routes/FormEmail.jsx'
import FormName from '../routes/FormName.jsx'
import FormPeople from '../routes/FormPeople.jsx'
import FormRent from '../routes/FormRent.jsx'
import FormYear from '../routes/FormYear.jsx'
import FormCity from '../routes/FormCity.jsx'
import FormLocal from '../routes/FormLocal.jsx'
import FormVehicle from '../routes/FormVehicle.jsx'
import Result from '../routes/Result.jsx'
import DatabaseResult from '../routes/DatabaseResult.jsx'
import PortugalHistory from '../routes/PortugalHistory.jsx'
import Tourism from '../routes/Tourism.jsx'
import Beach from '../routes/articles/Beach.jsx'
import PastelNata from '../routes/articles/PastelNata.jsx'
import Madeira from '../routes/articles/Madeira.jsx'
import Curiosity from '../routes/Curiosity.jsx'
import CreatorPage from '../routes/Creator.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';


const router = createBrowserRouter([
  {
    
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/form-email",
        element: <FormEmail/>
      },
      {
        path: "/form-name",
        element: <FormName/>
      },
      {
        path: "/form-city",
        element: <FormCity/>
      },
      {
        path: "/form-people",
        element: <FormPeople/>
      },
      {
        path: "/form-rent",
        element: <FormRent/>
      },
      {
        path: "/form-year",
        element: <FormYear/>
      },
      {
        path: "/form-local",
        element: <FormLocal/>
      },
      {
        path: "/form-vehicle",
        element: <FormVehicle/>
      },
      {
        path: "/result",
        element: <Result/>
      },
      {
        path: "/database-result",
        element: <DatabaseResult/>
      },
      {
        path: "/portugal-history",
        element: <PortugalHistory/>
      },
      {
        path: "/tourism",
        element: <Tourism/>
      },
      {
        path: "/beach",
        element: <Beach/>
      },
      {
        path: "/pastel-de-nata",
        element: <PastelNata/>
      },
      {
        path: "/madeira-island",
        element: <Madeira/>
      },
      {
        path: "/curiosity",
        element: <Curiosity/>
      },
      {
        path: "/creator-page",
        element: <CreatorPage/>
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
