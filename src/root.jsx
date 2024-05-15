import { Link, Outlet } from "react-router-dom"
import logo from './images/nude.png'


export default function Root () {

    return (
        <div className="bor">
            <nav className="navbar">
                <div className="links">
                    <Link className="hover:font-black" to='collections/all-products'>SHOP</Link>
                    <Link className="hover:font-black" to='collections'>COLLECTIONS</Link>
                    <Link className="hover:font-black" to='about-us'>ABOUT US</Link>
                    <Link className="hover:font-black" to='stores'>STORES</Link>
                </div>
                
                <Link to='/'><img src={logo} alt="" /></Link>

                <div className="links">
                    <p>COUNTRY</p>
                    <p>ENG</p>
                    <p>SEARCH</p>
                    <p>CART (0)</p>
                </div>
            </nav>
            <div className="free-shipping">FREE SHIPPING: NATIONAL OVER 100€ | INTERNATIONAL OVER 200€</div>
            <Outlet />
            <footer id="footer-root">
                <div className="footer-divs">
                    <img src={logo} alt="" />
                    <p>help@nude-project.com</p>
                    <section className="flex">
                        <img src="#" alt="" />
                        <img src="#" alt="" />
                        <img src="#" alt="" />
                        <img src="#" alt="" />
                        <img src="#" alt="" />
                    </section>
                </div>
                <div className="footer-divs">
                    <p>BRAND</p>
                    <a href="">STORES</a>
                    <a href="">CAREERS</a>
                    <a href="">ABOUT US</a>
                </div>
                <div className="footer-divs">
                    <p>BORING STUFF</p>
                    <a href="">LEGAL NOTICE</a>
                    <a href="">PRIVACY POLICY</a>
                    <a href="">TERMS</a>
                </div>
                <div className="footer-divs">
                    <p>SUPPORT</p>
                    <a href="">RETURNS</a>
                    <a href="">FAQ</a>
                    <a href="">CONTACT</a>
                </div>
                <div className="footer-divs">
                    <p>JOIN THE CULT</p>
                    <p>SIGN UP TO OUR EMAIL LIST AND GET 10% OFF YOUR FIRST ORDER</p>
                    <div>
                        <input type="email" name="email" id=""  placeholder="Email address"/>
                        <button type="submit">JOIN</button>
                    </div>
                </div>
            </footer>
        </div>

    )
}