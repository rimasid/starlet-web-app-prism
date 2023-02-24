import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home/Home'
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
