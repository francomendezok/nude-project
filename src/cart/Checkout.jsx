/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom"
import { getCart } from "./Cart";
import ImageComponent from '../collections/ImageComponent';


function ProductsBriefCart ({cart}) {
    console.log(cart);
    return (
        cart.map((product, index) => {
            return (
                <div key={index} className="brief-product">
                    <div className="img-div">
                        <ImageComponent folder={product.id} number={0} inCart={false} categorie={product.categorie} cartBrief={true} />
                        <div className="bubble-amount">{product.amount}</div>
                    </div>
                    <div>
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

export default function Checkout () {
    const location = useLocation()
    const { cart } = location.state || { cart: getCart() };
    const total = cart.reduce((total, item) => total + item.price * item.amount, 0)

    return (
        <main id="checkout-main">
            <section id="fill-info-checkout">a</section>
            <section id="brief-cart-checkout">
                <div className="brief-inner-box">
                    <div className="cart-brief">
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