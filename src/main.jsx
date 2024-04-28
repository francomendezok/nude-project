import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home/Home';
import Shop from './shop/Shop';
import Cart from './cart/Cart';
import Help from './help/Help';
import TopRated from './shop/sidebar/TopRated'
import Latest from './shop/sidebar/Latest'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
    children: [
      { path: "topRated", element: <TopRated /> },
      { path: "latest", element: <Latest /> },
    ],
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "help",
    element: <Help />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

