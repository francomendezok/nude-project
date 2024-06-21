/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import nude from '../api/nude.json';
import { useState } from 'react';
import ProductArrows from '../home/ProductArrows';


function handleMouseEnter (product, position, setPosition, newImage, setShowSize, setHideInfo, setShowArrows) {
    if (position === 0) {
        setPosition(newImage)
    }
    setShowSize(true)
    setHideInfo(true)
    setShowArrows(true)
}
function handleMouseLeave (product, position, setPosition, newImage, setShowSize, setHideInfo, setShowArrows) {
    if (position === 1) {
        setPosition(newImage)
    }
    setShowSize(false)
    setHideInfo(false)
    setShowArrows(false)    
}
function handleQuickAdd (setShowQuickAdd, value, setActive, size) {
    setShowQuickAdd(value)
    setActive(size)
}
function QuickAdd ({size, active, cross}) {
    if (size === active && !cross) {
        return (
            <div className='quick-add'>QUICK ADD</div>
        )
    }

}
function handleCart (showCart, setShowCart, setCart, product, size, cross) {
if (!cross) {
    let sameSize = false
    let index;

    setShowCart(!showCart)
    let cartJSON = localStorage.getItem("cart");

    let dataCart = JSON.parse(cartJSON);

    for (let i = 0; i < dataCart.length; i++) {
        if (dataCart[i].id === product.id && dataCart[i].size === size) {
            sameSize = true
            index = i
            break;
        }  
    }

    if (sameSize) {
        dataCart[index].amount++;
    }

    else {
        dataCart.push({
            product: product.title,
            size: size,
            price: product.variants[0].price,
            id: product.id,
            amount: 1,
            categorie: "Trousers"
        })
    }

    setCart(dataCart)
    localStorage.setItem("cart", JSON.stringify(dataCart));
}
}
function Size ({product, size, value, showQuickAdd, setShowQuickAdd, showCart, setShowCart, cart, setCart}) {
    const cross = product.options[0].values[value] == null ? "crossed" : '';
    const [active, setActive] = useState('')

    return (
        <div onMouseEnter={() => handleQuickAdd(setShowQuickAdd, true, setActive, size)} onMouseLeave={() => handleQuickAdd(setShowQuickAdd, false, setActive, '')} className='p-size'>
            {showQuickAdd ? <QuickAdd size={size} active={active} cross={cross} /> : null}
            <p onClick={() => handleCart(showCart, setShowCart, setCart, product, size, cross)} id={size} className={cross}>{size}</p>
        </div>
    )
}

function Trouser ({product, color, length, showCart, setShowCart, cart, setCart}) {
    const [showArrows, setShowArrows] = useState(false)
    const [position, setPosition] = useState(0)
    const [image, setImage] = useState(product.id)
    const [showSizes, setShowSize] = useState(false)
    const [hideInfo, setHideInfo] = useState(false)
    const [showQuickAdd, setShowQuickAdd] = useState(false)

    return (
        <div onMouseEnter={() => handleMouseEnter(product, position, setPosition, 1, setShowSize, setHideInfo, setShowArrows)} onMouseLeave={() => handleMouseLeave(product, position, setPosition, 0, setShowSize, setHideInfo, setShowArrows)} className='product-home-box'>
            <p className='new-in'>NEW IN</p>
            <ImageComponent folder={image} number={position} categorie={"Trousers"} />
            {showArrows ? <ProductArrows position={position} setPosition={setPosition} length={length} /> : ''}
            <div className={hideInfo ? 'hidden' : 'product-info'}>
                <p className='product-title'>{product.title}</p>
                <p className='product-price'>€ {product.variants[0].price}</p>
                <div style={{backgroundColor: color ? color : product.options[1].values[0]}} className='clothes-colors'> </div>
            </div>
            <div className={showSizes ? "product-sizes-container" : "hidden"}>
                <Size product={product} size={"XS"} value={0} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} showCart={showCart} setShowCart={setShowCart} cart={cart} setCart={setCart} />
                <Size product={product} size={"S"} value={1} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} showCart={showCart} setShowCart={setShowCart} cart={cart} setCart={setCart} />
                <Size product={product} size={"M"} value={2} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} showCart={showCart} setShowCart={setShowCart} cart={cart} setCart={setCart} />
                <Size product={product} size={"L"} value={3} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} showCart={showCart} setShowCart={setShowCart} cart={cart} setCart={setCart} />
                <Size product={product} size={"XL"} value={4} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} showCart={showCart} setShowCart={setShowCart} cart={cart} setCart={setCart} />
                <Size product={product} size={"XXL"} value={5} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} showCart={showCart} setShowCart={setShowCart} cart={cart} setCart={setCart} />
            </div>
    </div>
    )
}

function ImageComponent ({folder, number, inCart, categorie}) {
    return (
        <img className={inCart ? 'cart-image' : 'cursor-pointer'} src={`/images/${categorie}/${folder}/${number}.webp`} alt="Example" /> 
    )
}

export default function Trousers ({trousersIds, showCart, setShowCart, cart, setCart}) {
    
    function getProducts (ids) {
        let myProducts = []
        for (let i = 0; i < nude.length; i++) {
                if (ids.includes(nude[i].id)) {
                    myProducts.push(nude[i])
                }   
        }
        return myProducts
    }

    let products = getProducts(trousersIds)

    return (
        <div className='images-container'>
            <Trouser product={products[0]} length={4} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[1]} length={4} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[2]} length={3} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[3]} length={3} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[4]} length={3} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[5]} length={3} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[6]} length={4} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[7]} length={2} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[8]} length={5} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[9]} length={5} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[10]} length={2} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[11]} length={5} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[12]} length={3} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[13]} length={5} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[14]} length={4} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
            <Trouser product={products[15]} length={3} showCart={showCart} cart={cart} setCart={setCart} setShowCart={setShowCart} />
        </div>
    )
}