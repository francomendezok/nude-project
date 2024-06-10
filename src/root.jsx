import { Link, Outlet } from "react-router-dom"
import Logo from "./home/Logo.jsx"
import { useState, useEffect } from "react"
import logo from './images/nude.png'

function Loading () {
    return (
        <div>
            <img className='loading' src={logo} alt="Loading..." />;
        </div>
    )
}

export default function Root() {
    const [rootClass, setRootClass] = useState('');
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [headerClass, setHeaderClass] = useState('header-visible');

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setHeaderClass('header-hidden');
            } else {
                // Scrolling up
                setHeaderClass('header-visible');
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const contextValue = {
        rootClass,
        setRootClass,
        showCart,
        setShowCart,
        cart,
        setCart
    };

    return (
        rootClass === 'hidden' ? <Loading /> :
            <div id="root" className={rootClass}>
                <header className={headerClass}>
                    <nav className="navbar">
                        <div className="links">
                            <Link className="hover:font-black" to='collections/all-products'>SHOP</Link>
                            <Link className="hover:font-black" to='collections'>COLLECTIONS</Link>
                            <Link className="hover:font-black" to='stores'>STORES</Link>
                            <Link className="hover:font-black" to='about-us'>ABOUT US</Link>
                        </div>
                        <Logo location={0} />
                        <div className="links">
                            <p>COUNTRY</p>
                            <p>ENG</p>
                            <p>SEARCH</p>
                            <p>CART <span className="cart-parentesis">({cart.length})</span></p>
                        </div>
                    </nav>
                    <div className="free-shipping">FREE SHIPPING: NATIONAL OVER 100€ | INTERNATIONAL OVER 200€</div>
                </header>
                <Outlet context={contextValue} />
                <footer id="footer">
                    <div id="footer-root">
                        <div className="footer-divs nude-icons">
                            <Logo location={1} />
                            <p className="mail-help">help@nude-project.com</p>
                            <section className="icons">
                                {/* SVG Icons */}
                            </section>
                        </div>
                        <div className="footer-divs">
                            <p>BRAND</p>
                            <a href="/">STORES</a>
                            <a href="/">CAREERS</a>
                            <a href="/">ABOUT US</a>
                        </div>
                        <div className="footer-divs">
                            <p>BORING STUFF</p>
                            <a href="/">LEGAL NOTICE</a>
                            <a href="/">PRIVACY POLICY</a>
                            <a href="/">TERMS</a>
                        </div>
                        <div className="footer-divs">
                            <p>SUPPORT</p>
                            <a href="/">RETURNS</a>
                            <a href="/">FAQ</a>
                            <a href="/">CONTACT</a>
                        </div>
                        <div className="footer-divs email">
                            <p>JOIN THE CULT</p>
                            <p>SIGN UP TO OUR EMAIL LIST AND GET 10% OFF YOUR FIRST ORDER</p>
                            <div className="email-box">
                                <input type="email" name="email" id="" placeholder="Email address" />
                                <button type="submit">JOIN</button>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-banner">
                        <Link to='/'>© NUDE PROJECT</Link>
                    </div>
                </footer>
            </div>
    );
}