import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pagees/Home/Home.jsx';
import Donation from './Pagees/Donation/Donation.jsx';
import Statistics from './Pagees/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader:()=> fetch("./DonationCampaing.json")
      },
      {
        path: "/donation",
        element:<Donation></Donation>,
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
