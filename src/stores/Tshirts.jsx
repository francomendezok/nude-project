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

function handleQuickAdd (setShowQuickAdd, value) {
    setShowQuickAdd(value)
}

function QuickAdd () {
    
        return (
            <div className='quick-add'>
                QUICK ADD
            </div>
        )
    
}

function Size ({product, size, value, showQuickAdd, setShowQuickAdd}) {
    const cross = product.options[0].values[value] == null ? "crossed" : '';

    return (
        <div onMouseEnter={() => handleQuickAdd(setShowQuickAdd, true)} onMouseLeave={() => handleQuickAdd(setShowQuickAdd, false)} className='p-size'>
            {showQuickAdd ? <QuickAdd /> : null}
            <p id={size} className={cross}>{size}</p>
        </div>
    )
}




function Shirt ({product, color, length}) {
    const [showArrows, setShowArrows] = useState(false)
    const [position, setPosition] = useState(0)
    const [image, setImage] = useState(product.id)
    const [showSizes, setShowSize] = useState(false)
    const [hideInfo, setHideInfo] = useState(false)
    const [showQuickAdd, setShowQuickAdd] = useState(false)
    const [showCart, setShowCart] = useState(false)

    return (
        <div onMouseEnter={() => handleMouseEnter(product, position, setPosition, 1, setShowSize, setHideInfo, setShowArrows)} onMouseLeave={() => handleMouseLeave(product, position, setPosition, 0, setShowSize, setHideInfo, setShowArrows)} className='product-home-box'>
            <p className='new-in'>NEW IN</p>
            <ImageComponent folder={image} number={position} />
            {showArrows ? <ProductArrows position={position} setPosition={setPosition} length={length} /> : ''}
            <div className={hideInfo ? 'hidden' : 'product-info'}>
                <p className='product-title'>{product.title}</p>
                <p className='product-price'>€ {product.variants[0].price}</p>
                <div style={{backgroundColor: color ? color : product.options[1].values[0]}} className='clothes-colors'> </div>
            </div>
            <div className={showSizes ? "product-sizes-container" : "hidden"}>
                    {/* P should be a component that changes state to show QuickAdd*/}
                <Size product={product} size={"XS"} value={0} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} />
                <Size product={product} size={"S"} value={1} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} />
                <Size product={product} size={"M"} value={2} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} />
                <Size product={product} size={"L"} value={3} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} />
                <Size product={product} size={"XL"} value={4} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} />
                <Size product={product} size={"XXL"} value={5} showQuickAdd={showQuickAdd} setShowQuickAdd={setShowQuickAdd} />
            </div>
    </div>
    )
}

function ImageComponent ({folder, number}) {
    return (
        <img className='cursor-pointer' src={`/images/Shirts/${folder}/${number}.webp`} alt="Example" /> 
    )
  }


export default function Tshirts ({shirtsIds}) {
    
function getProducts (ids) {
    let myProducts = []
    for (let i = 0; i < nude.length; i++) {
            if (ids.includes(nude[i].id)) {
                myProducts.push(nude[i])
            }   
    }
    return myProducts
}

let products = getProducts(shirtsIds)

    return (
        <div className='images-container'>
            <Shirt product={products[0]} length={3} /> 
            <Shirt product={products[1]} length={4} /> 
            <Shirt product={products[2]} length={7} /> 
            <Shirt product={products[3]} length={5} /> 
            <Shirt product={products[4]} length={5} /> 
            <Shirt product={products[5]} length={4} /> 
            <Shirt product={products[6]} length={2} /> 
            <Shirt product={products[7]} length={2} /> 
            <Shirt product={products[8]} length={3} /> 
            <Shirt product={products[9]} length={5} /> 
            <Shirt product={products[10]} length={8} /> 
            <Shirt product={products[11]} length={8} /> 
            <Shirt product={products[12]} length={6} color={'#0a0d0d'} /> 
            <Shirt product={products[13]} length={5} /> 
            <Shirt product={products[14]} length={4} /> 
            <Shirt product={products[15]} length={4} />             
        </div>
    )
}

