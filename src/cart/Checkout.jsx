/* eslint-disable react/prop-types */
import { useLocation, Form, Link } from "react-router-dom"
import { useState } from "react";
import { getCart } from "./Cart";
import ImageComponent from '../collections/ImageComponent';
import Logo from "../home/Logo";
import expressCheckout from '../images/express-checkout.png'
import countries from '../api/countries.json'
import '../styles/checkout.css'

function ProductsBriefCart ({cart}) {
    return (
        cart.map((product, index) => {
            return (
                <div key={index} className="brief-product">
                    <div className="bubble-amount">{product.amount}</div>
                    <div className="img-div">
                        <ImageComponent folder={product.id} number={0} inCart={false} categorie={product.categorie} cartBrief={true} />
                    </div>
                    <div className="product-brief">
                        <p>{product.product}</p>
                        <p>{product.size} / {product.color}</p>
                    </div>
                    <div>
                        <p>€{product.price}</p>
                    </div>
                </div>
            )
        })
    )
}

function Countries({ countries }) {
    return (
        <select name="country" id="select-country" defaultValue="">
            <option value="Argentina" selected>Argentina</option>
            {countries.map(country => (
                <option key={country.code} value={country.code}>
                    {country.name}
                </option>
            ))}
        </select>
    );
}

function handleSubmit (e) {
    e.preventDefault()
    alert("You made a purchase ✅😀")
}

export default function Checkout () {
    const location = useLocation()
    const { cart } = location.state || { cart: getCart() };
    const total = cart.reduce((total, item) => total + item.price * item.amount, 0)
    const [scroll, setScroll] = useState(false)

    function handleScroll () {
        if (cart.length > 3) {
            setScroll(!scroll)
        } 
    }

    return (
        <main id="checkout-main">
            <section id="fill-info-checkout">
                <div className="info-form-container">
                    <div className="logo-form">
                        <Logo location={1} />
                        <p>Cart {">"} <span className="font-bold">Information</span> {">"} Shipping {">"} Payment</p>
                        <img className="cursor-pointer" src={expressCheckout} alt="" />
                    </div>
                    <div className="flex items-center text-center p-4">
                        <hr className="flex flex-1"/>
                        <span className="pl-4 pr-4">OR</span>
                        <hr className="flex flex-1"/>
                    </div>
                    <Form method="post" id="form">
                        <div className="contact-form">
                            <label htmlFor="contact">Contact</label>
                            <input type="email" name="email" id="email" placeholder="Email"/>
                            <div className="email-me-box">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="checkbox-email">Email me with news and offers</label>
                            </div>
                        </div>
                        <div className="shipping-form">
                            <label htmlFor="shipping">Shipping adress</label>
                            <div>
                                <h2>Country/region</h2>
                                <Countries countries={countries} />
                            </div>
                            <div className="names">
                                <input type="text" name="first-name" id="first-name" placeholder="First name" />
                                <input type="text" name="last-name" id="last-name" placeholder="Last name" />
                            </div>
                            <input type="text" name="address" id="address" placeholder="Address" />
                            <input type="text" name="apartment" id="apartment" placeholder="Apartment, suite, etc (optional)" />
                            <div className="zip-and-city">
                                <input type="number" name="zip-code" id="zip-code" placeholder="Postal code" />
                                <input type="text" name="city" id="city" placeholder="city" />
                            </div>
                            <input type="tel" name="phone" id="phone" placeholder="Phone" />
                            <div className="text-box">
                                <input type="checkbox" name="text-offers" id="text-offers" />
                                <label htmlFor="text-offers">Text me with news and offers</label>
                            </div>
                            <div className="to-shipping">
                                <div className="return-to-cart">
                                    <Link to="/">
                                        <p> <span>{"<"}</span> Return to cart</p>
                                    </Link>
                                </div>
                                <button onClick={handleSubmit} id="btn-submit" type="submit">Continue to shipping</button>
                            </div>
                        </div>
                    </Form>
                    <footer id="footer-checkout">
                        <a className="cursor-pointer" href="#">Refund policy</a>
                        <a className="cursor-pointer" href="#">Privacy policy</a>
                        <a className="cursor-pointer" href="#">Terms of service</a>
                    </footer>
                </div>
            </section>
            <section id="brief-cart-checkout">
                <div className="brief-inner-box">
                    <div onMouseEnter={() => handleScroll()} onMouseLeave={() => handleScroll()} className={`cart-brief ${scroll ? '' : 'no-scroll'}`}>
                        <ProductsBriefCart cart={cart} />
                    </div>
                    <div className="apply-code-brief">
                        <input type="text" placeholder="Discount code or gift card" />
                        <button>Apply</button>
                    </div>
                    <div className="subtotal-and-shipping-brief">
                        <div>
                            <p>Subtotal</p>
                            <p>Shipping</p>
                        </div>
                        <div>
                            <p className="text-white text-right">€{total}</p>
                            <p>Calculated at next step</p>
                        </div>
                    </div>
                    <div className="total-brief">
                        <p>Total</p>
                        <p>EUR <span>€{total}</span></p>
                    </div>
                </div>
            </section>
        </main>
    )
}