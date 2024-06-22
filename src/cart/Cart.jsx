/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ImageComponent from '../collections/ImageComponent';
import { Link } from "react-router-dom";

function handleCart(setShowCart) {
    document.documentElement.classList.remove('no-scroll'); // document.documentElement refers to the <html> element
    setShowCart(false)
}

function getCart () {
        let cartJSON = localStorage.getItem("cart");
        let cart = JSON.parse(cartJSON);

        return cart;
}

function remove (setCart, product, amount, setAmount) {
    let cart = getCart()
    let myCart = [...cart]

    myCart = myCart.filter(myCartProduct => myCartProduct.id !== product.id)

    myCart.map(item => setAmount(item.amount))

    setCart(myCart)
    localStorage.setItem("cart", JSON.stringify(myCart));
}

function EmptyCart () {
    return (
        <h2 className="empty-cart">YOUR CART IS EMPTY</h2>
    )
}

function handlePlusLessProduct(product, side, setCart, setAmount) {
    let cart = getCart()
    let myCart = [...cart]
    
    const index = myCart.findIndex(cartItem => cartItem.id === product.id);

    if (side === "left") {
        if (product.amount > 1) {
            myCart[index].amount--
        }
        else {
            myCart.splice(index,1)
        }
        setAmount(myCart[index].amount)
    } 

    else if (side === "right") {
        myCart[index].amount++
        setAmount(myCart[index].amount)
    }

    setCart(myCart)
    localStorage.setItem("cart", JSON.stringify(myCart));
}

function ProductCart ({product, index, setCart}) {
    const [amount, setAmount] = useState(product.amount)
    return (
        <div className="product-cart" key={index}>
            <div className="img-product-card">
                <ImageComponent folder={product.id} number={0} inCart={true} categorie={product.categorie} />
            </div>
            <section className="info-container-card">
                <div className="info-product-card">
                    <div>{product.product}</div>
                    <div>€{product.price}</div>
                    <div>{product.size}</div>
                </div>
                <div className="buttons-product-card">
                    <div className="plus-less-card">
                        <svg onClick={() => handlePlusLessProduct(product, "left", setCart, setAmount)} width={"10px"} className="Icon Icon--minus" role="presentation" viewBox="0 0 16 2">
<path d="M1,1 L15,1" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                        </svg>
                        <p>{amount}</p>
                        <svg onClick={() => handlePlusLessProduct(product, "right", setCart, setAmount)} width={"10px"} className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
<g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
<path d="M8,1 L8,15"></path>
<path d="M1,8 L15,8"></path>
</g>
                        </svg>
                    </div>
                    <h2 className="cursor-pointer" onClick={() => remove(setCart, product, amount, setAmount)}>REMOVE</h2>
                </div>
            </section>
        </div>
    )
}

function CartProducts({ cart, setCart }) {
    const [updatedCart, setUpdatedCart] = useState(cart);

    useEffect(() => {
        setUpdatedCart(cart);
    }, [cart]);

    return (
        updatedCart.map((product, index) => (
            <ProductCart product={product} key={index} setCart={setCart} />
        ))
    );
}

function ShippingCost ({cart}) {
        if (cart.reduce((total, item) => total + item.price * item.amount, 0) >= 200) {
            return (
                <p>You are eligible for free shipping!</p>
            )
        }
        else {
            return (
                <div>
                    <p>SPAIN: {cart.reduce((total, item) => total + item.price * item.amount, 0) >= 100 ? "You are eligible for free shipping!" : `Spend €${100 - cart.reduce((total, item) => total + item.price * item.amount, 0)} more and get free shipping`} </p>
                    <p>INTERNATIONAL: {cart.reduce((total, item) => total + item.price * item.amount, 0) >= 200 ? "You are eligible for free shipping!" : `Spend €${200 - cart.reduce((total, item) => total + item.price * item.amount, 0)} more and get free shipping`} </p>
                </div>
            )
        }
}

function ShippingContainer ({cart}) {
    return (
        <div className="checkout-shipping-container">
                    <div className="info-shipping">
                        <ShippingCost cart={cart} />    
                    </div>
                    <div className="info-checkout">
                        <div className="subtotal-box">
                            <div>
                                <p>CART</p>
                                <p>{cart.reduce((total, item) => total + item.amount, 0)} Items</p>
                            </div>
                            <div>
                                <p>SUBTOTAL</p>
                                <p className="text-xl font-bold">€{cart.reduce((total, item) => total + item.price * item.amount, 0)}</p>
                            </div>
                        </div>
                        <div className="checkout-button-box">
                            <Link to="checkout" id="btn-to-checkout" state={{cart}}>
                                CHECKOUT
                            </Link>
                            <p>Shipping & taxes calculated at checkout</p>
                        </div>
                    </div>
                </div>
    )
}

export default function Cart ({setShowCart, cart, setCart}) {
    document.documentElement.classList.add('no-scroll');
    return (
        <div className="cart-big-container">
            <div onClick={() => handleCart(setShowCart)} className="opacity-background">.</div>
            <div className="cart-hidden">
                <div className="cart-info-cross">
                    <h2>CART</h2>
                    <svg className="cursor-pointer" onClick={() => setShowCart(false)} width="15" height="15" viewBox="0 0 15 14" fill="#452b1a" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.13135 1L14.0004 13" stroke="#452b1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M1.13135 13L14.0004 1" stroke="#452b1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>

                </div>
                <div className={`products-card-container ${cart.length > 2 ? 'overflow-y-scroll' : ''}`}>
                    {cart.length ? <CartProducts cart={cart} setCart={setCart} /> : <EmptyCart />}
                </div>
                    {cart.length ? <ShippingContainer cart={cart} /> : ''}
            </div>
        </div>
    )
}

export { getCart }