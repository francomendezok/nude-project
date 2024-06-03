/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import nude from '../api/nude.json';
import { useState } from 'react';
import ProductArrows from '../home/ProductArrows';

let ids = [
    8858950107460,
    8915764740420,
    8915769164100,
    8915779289412,
    8915783549252,
    8915825492292,
    8915826377028,
    8926544691524,
    8926979948868,
    8926980211012,
    8926982865220,
    8926985683268,
    8944216015172,
    8944223453508,
    8944227254596,
    8955406811460
]


function getProducts (ids) {
    let myProducts = []
    for (let i = 0; i < nude.length; i++) {
            if (ids.includes(nude[i].id)) {
                myProducts.push(nude[i])
            }   
    }
    return myProducts
}

let products = getProducts(ids)

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

function handleQuickAdd (setShowQuickAdd, showQuickAdd, hoverSize, setHoverSize, size) {
    setShowQuickAdd(showQuickAdd)
    setHoverSize(size)
}

function QuickAdd ({size, hoverSize}) {
    if (size === hoverSize) {
        return (
            <div id={size} className='quick-add arrowBottom'>
                QUICK ADD
            </div>
        )
    }
}

function Size ({product, size, value}) {
    const cross = product.options[0].values[value] == null ? "crossed" : '';

    return (
        <div className='p-size'>
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
    const [hoverSize, setHoverSize] = useState('')

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
                <Size product={product} size={"XS"} value={0} />
                <Size product={product} size={"S"} value={1} />
                <Size product={product} size={"M"} value={2} />
                <Size product={product} size={"L"} value={3} />
                <Size product={product} size={"XL"} value={4} />
                <Size product={product} size={"XXL"} value={5} />
            </div>
    </div>
    )
}

function ImageComponent ({folder, number}) {
    return (
        <img className='cursor-pointer' src={`/images/Shirts/${folder}/${number}.webp`} alt="Example" /> 
    )
  }


export default function Tshirts () {
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

