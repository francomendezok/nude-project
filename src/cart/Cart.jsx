/* eslint-disable react/prop-types */
import { ImageComponent } from "../stores/Tshirts";

function handleCart(setShowCart) {
    document.documentElement.classList.remove('no-scroll'); // document.documentElement refers to the <html> element
    setShowCart(false)
}

function getCart () {
        let cartJSON = localStorage.getItem("cart");
        let cart = JSON.parse(cartJSON);

        return cart;
}

function remove (setCart, product) {
    let cart = getCart()
    let myCart = [...cart]

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
            myCart.splice(i, 1);
            break;
        }        
    }
    setCart(myCart)
    localStorage.setItem("cart", JSON.stringify(myCart));
}

function EmptyCart () {
    return (
        <h2 className="empty-cart">YOUR CART IS EMPTY</h2>
    )
}

function CartProducts ({cart, setCart}) {
    return (
        cart.map((product, index) => {
            return (
                <div className="product-cart" key={index}>
                    <div className="img-product-card">
                        <ImageComponent folder={product.id} number={1} inCart={true} categorie={product.categorie} />
                    </div>
                    <section className="info-container-card">
                        <div className="info-product-card">
                            <div>{product.product}</div>
                            <div>€{product.price}</div>
                            <div>{product.size}</div>
                        </div>
                        <div className="buttons-product-card">
                            <div className="plus-less-card">
                                <svg width={"10px"} className="Icon Icon--minus" role="presentation" viewBox="0 0 16 2">
<path d="M1,1 L15,1" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                                </svg>
                                <p>{product.amount}</p>
                                <svg width={"10px"} className="Icon Icon--plus" role="presentation" viewBox="0 0 16 16">
<g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
    <path d="M8,1 L8,15"></path>
    <path d="M1,8 L15,8"></path>
</g>
                                </svg>
                            </div>
                            <h2 className="cursor-pointer" onClick={() => remove(setCart, product)}>REMOVE</h2>
                        </div>
                    </section>
                </div>
            );
        })
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
                <div className="products-card-container">
                    {cart.length ? <CartProducts cart={cart} setCart={setCart} /> : <EmptyCart />}
                </div>
            </div>
        </div>
    )
}