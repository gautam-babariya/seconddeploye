import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Catchid from './catchid.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: "",
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "gautam/:id",
        element: <Catchid />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
