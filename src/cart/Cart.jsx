/* eslint-disable react/prop-types */
import { ImageComponent } from "../stores/Tshirts";

function handleCart(setShowCart) {
    document.documentElement.classList.remove('no-scroll'); // document.documentElement refers to the <html> element
    setShowCart(false)
}

export default function Cart ({setShowCart, cart, setCart}) {
    document.documentElement.classList.add('no-scroll');
    return (
        <div className="cart-big-container">
            <div onClick={() => handleCart(setShowCart)} className="opacity-background">.</div>
            <div className="cart-hidden">
                <form action="get">form</form>
                <h1>Cart</h1>
                {cart.map((product, index) => {
                    return (
                        <div className="product-cart" key={index}>
                            <div>{product.product}</div>
                            <div>{product.size}</div>
                            <div>${product.price}</div>
                            <ImageComponent folder={product.id} number={3} inCart={true} />
                        </div>
                    );
                })}

            </div>
        </div>
    )
}