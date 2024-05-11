import { Link, Outlet } from "react-router-dom"
import logo from './images/nude.png'


export default function Root () {
    return (
        <div className="bor">
            <nav className="navbar">
                <div className="links">
                    <Link to='collections/all-products'>SHOP</Link>
                    <Link to='collections'>COLLECTIONS</Link>
                    <Link to='stores'>STORES</Link>
                    <Link to='about-us'>ABOUT US</Link>
                </div>
                
                <Link to='/'><img src={logo} alt="" /></Link>

                <div className="links">
                    <p>COUNTRY</p>
                    <p>ENG</p>
                    <p>SEARCH</p>
                    <p>CART (0)</p>
                </div>
            </nav>
            <Outlet />
        </div>

    )
}