import { Link, Outlet, Route } from "react-router-dom"
import Latest from "./Latest";
import TopRated from "./TopRated";

export default function Shop () {
    return (
        <div>
          <ul>
            <li>
              <Link to="/shop/latest">Latest</Link>
            </li>
            <li>
              <Link to="/shop/topRated">Top rated</Link>
            </li>
          </ul>
          <Outlet />

        </div>
      );
}

export function ShopRoutes() {
    return (
      <Route path="/shop" element={<Shop />}>
        {/* Ruta secundaria para Latest */}
        <Route path="latest" element={<Latest />} />
        {/* Ruta secundaria para ShopContent */}
        <Route path="topRated" element={<TopRated />} />
      </Route>
    );
  }