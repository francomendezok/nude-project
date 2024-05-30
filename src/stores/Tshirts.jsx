/* eslint-disable react/prop-types */
import nude from '../api/nude.json';
import { useState } from 'react';
import ProductArrows from '../home/ProductArrows';


function handleMouseEnter (product, image, setImage, newImage, setShowSize, setHideInfo, setShowArrows) {
    if (image === product.images[0].src) {
        setImage(product.images[newImage].src)
    }
    setShowSize(true)
    setHideInfo(true)
    setShowArrows(true)
}
function handleMouseLeave (product, image, setImage, newImage, setShowSize, setHideInfo, setShowArrows) {
    if (image === product.images[1].src) {
        setImage(product.images[newImage].src)
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

function Size ({product, size, value, setShowQuickAdd, showQuickAdd, hoverSize, setHoverSize}) {
    const cross = product.options[0].values[value] == null ? "crossed" : '';

    return (
        <div className='p-size'>
            <div className={`quick-add-container arrowBottom ${showQuickAdd && !cross ? 'show' : ''}`}>
                {showQuickAdd && !cross ? <QuickAdd size={size} hoverSize={hoverSize} /> : null}
            </div>
            <p 
                id={size} 
                onMouseEnter={() => handleQuickAdd(setShowQuickAdd, true, hoverSize, setHoverSize, size)} 
                onMouseLeave={() => handleQuickAdd(setShowQuickAdd, false, hoverSize, setHoverSize, size)} 
                className={cross}
            >
                {size}
            </p>
        </div>
    )
}




function Shirt ({product, color}) {
    const [showArrows, setShowArrows] = useState(false)
    const [position, setPosition] = useState(0)
    const [image, setImage] = useState(product.images[0].src)
    const [showSizes, setShowSize] = useState(false)
    const [hideInfo, setHideInfo] = useState(false)
    const [showQuickAdd, setShowQuickAdd] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [hoverSize, setHoverSize] = useState('')

    return (
        <div onMouseEnter={() => handleMouseEnter(product, image, setImage, 1, setShowSize, setHideInfo, setShowArrows)} onMouseLeave={() => handleMouseLeave(product, image, setImage, 0, setShowSize, setHideInfo, setShowArrows)} className='product-home-box'>
            <p className='new-in'>NEW IN</p>
            <img className='product-home-img cursor-pointer' src={image} alt="" />
            {showArrows ? <ProductArrows position={position} setPosition={setPosition} setImage={setImage} product={product} /> : ''}
            <div className={hideInfo ? 'hidden' : 'product-info'}>
                <p className='product-title'>{product.title}</p>
                <p className='product-price'>€ {product.variants[0].price}</p>
                <div style={{backgroundColor: color ? color : product.options[1].values[0]}} className='clothes-colors'> </div>
            </div>
            <div className={showSizes ? "product-sizes-container" : "hidden"}>
                    {/* {showQuickAdd ? <QuickAdd /> : ""} */}
                    {/* P should be a component that changes state to show QuickAdd*/}
                <Size product={product} size={"XS"} value={0} setShowQuickAdd={setShowQuickAdd} showQuickAdd={showQuickAdd} hoverSize={hoverSize} setHoverSize={setHoverSize} />
                <Size product={product} size={"S"} value={1} setShowQuickAdd={setShowQuickAdd} showQuickAdd={showQuickAdd} hoverSize={hoverSize} setHoverSize={setHoverSize} />
                <Size product={product} size={"M"} value={2} setShowQuickAdd={setShowQuickAdd} showQuickAdd={showQuickAdd} hoverSize={hoverSize} setHoverSize={setHoverSize} />
                <Size product={product} size={"L"} value={3} setShowQuickAdd={setShowQuickAdd} showQuickAdd={showQuickAdd} hoverSize={hoverSize} setHoverSize={setHoverSize} />
                <Size product={product} size={"XL"} value={4} setShowQuickAdd={setShowQuickAdd} showQuickAdd={showQuickAdd} hoverSize={hoverSize} setHoverSize={setHoverSize} />
                <Size product={product} size={"XXL"} value={5} setShowQuickAdd={setShowQuickAdd} showQuickAdd={showQuickAdd} hoverSize={hoverSize} setHoverSize={setHoverSize} />
            </div>
    </div>
    )
}



export default function Tshirts () {

    return (
        <div className='images-container'>
            <Shirt product={nude[0]} /> 
            <Shirt product={nude[1]} /> 
            <Shirt product={nude[2]} /> 
            <Shirt product={nude[3]} color={"lightblue"} /> 
            <Shirt product={nude[4]} /> 
            <Shirt product={nude[5]} /> 
            <Shirt product={nude[9]} color={"#000080"} /> 
            <Shirt product={nude[10]} /> 
            <Shirt product={nude[11]} /> 
            <Shirt product={nude[12]} /> 
            <Shirt product={nude[13]} color={"#89CFF0"} /> 
            <Shirt product={nude[14]} color={"#B2BEB5"} /> 
            <Shirt product={nude[15]} /> 
            <Shirt product={nude[16]} color={"#B2BEB5"} /> 
            <Shirt product={nude[20]} color={"#89CFF0"} /> 
            <Shirt product={nude[30]} color={"#B2BEB5"} /> 
        </div>
    )
}

