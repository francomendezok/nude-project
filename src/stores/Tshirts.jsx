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

function Shirt ({product, color}) {
    const [showArrows, setShowArrows] = useState(false)
    const [position, setPosition] = useState(0)
    const [image, setImage] = useState(product.images[0].src)
    const [showSizes, setShowSize] = useState(false)
    const [hideInfo, setHideInfo] = useState(false)

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
            <p className={product.options[0].values[0] == null ? "crossed" : ''}>XS</p>
            <p className={product.options[0].values[1] == null ? "crossed" : ''}>S</p>
            <p className={product.options[0].values[2] == null ? "crossed" : ''}>M</p>
            <p className={product.options[0].values[3] == null ? "crossed" : ''}>L</p>
            <p className={product.options[0].values[4] == null ? "crossed" : ''}>XL</p>
            <p className={product.options[0].values[5] == null ? "crossed" : ''} >XXL</p>
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

