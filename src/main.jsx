import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './root';
import Home from './home/Home';
import Collections from './collections/Collections';
import Cart from './cart/Cart';
import About from './about/About';
import NewArrivals from './collections/NewArrivals'
import BestSellers from './collections/BestSellers'
import Stores from './stores/Stores'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home />},
      { path: "about-us", element: <About />},
      { path: "cart", element: <Cart />},
      { path: "collections",
        element: <Collections />,
        children: [
          { path: "new-arrivals", element: <NewArrivals /> },
          { path: "best-sellers", element: <BestSellers /> },
          // add tons of collections //
        ],
      },
    ]
  },
 
  {
    path: "stores",
    element: <Stores />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

