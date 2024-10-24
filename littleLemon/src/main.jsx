import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//page imports
import Home from './pages/Home.jsx'
import BookingPage from './pages/BookingPage.jsx'
import ConfirmedBookings from './pages/ConfirmedBookings.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "booking",
    element: <BookingPage></BookingPage>
  },
  {
    path: "confirmed",
    element: <ConfirmedBookings></ConfirmedBookings>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
