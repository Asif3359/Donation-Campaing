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
import DonationDetails from './Pagees/DonationDetails/DonationDetails.jsx';
import Errorpage from './Pagees/ErrorPage/Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader:()=> fetch("/DonationCampaing.json")
      },
      {
        path: "/donation",
        element:<Donation></Donation>,
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>,
        loader:()=> fetch("/DonationCampaing.json")
      },
      {
        path: "/donationDetails/:id",
        element:<DonationDetails></DonationDetails>,
        loader:()=>fetch("/DonationCampaing.json")
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
