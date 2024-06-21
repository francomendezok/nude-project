import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './root';
import Home from './home/Home';
import Collections from './collections/Collections';
import Cart from './cart/Cart';
import Checkout from './cart/Checkout';
import About from './about/About';
import NewArrivals from './collections/NewArrivals'
import BestSellers from './collections/BestSellers'
import AllProducts from './collections/AllProducts'
import Stores from './stores/Stores'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home />},
      { path: "about-us", element: <About />},
      { path: "cart", element: <Cart />},
      { path: "stores", element: <Stores />},
      { path: "collections",
        element: <Collections />,
        children: [
          { path: "new-arrivals", element: <NewArrivals /> },
          { path: "best-sellers", element: <BestSellers /> },
          { path: "all-products", element: <AllProducts /> },
          // add tons of collections //
        ],
      },
    ]
  },
  { path: "checkout",
    element: <Checkout />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

