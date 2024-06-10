function handleCart(setShowCart) {
    document.documentElement.classList.remove('no-scroll'); // document.documentElement refers to the <html> element
    setShowCart(false)
}

export default function Cart ({setShowCart}) {
    document.documentElement.classList.add('no-scroll');
    return (
        <div className="cart-big-container">
            <div onClick={() => handleCart(setShowCart)} className="opacity-background">.</div>
            <div className="cart-hidden">
                <form action="get">form</form>
                <h1>Cart</h1>
            </div>
        </div>
    )
}