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
    if (image === product.images[2].src) {
        setImage(product.images[newImage].src)
    }
    setShowSize(false)
    setHideInfo(false)
    setShowArrows(false)    
}

function Trouser ({product, color}) {
    const [showArrows, setShowArrows] = useState(false)
    const [position, setPosition] = useState(0)
    const [image, setImage] = useState(product.images[0].src)
    const [showSizes, setShowSize] = useState(false)
    const [hideInfo, setHideInfo] = useState(false)

    return (
        <div onMouseEnter={() => handleMouseEnter(product, image, setImage, 2 || 3, setShowSize, setHideInfo, setShowArrows)} onMouseLeave={() => handleMouseLeave(product, image, setImage, 0, setShowSize, setHideInfo, setShowArrows)} className='product-home-box'>
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
//91 to 103 //
export default function Trousers () {
    return (
        <div className='images-container'>
            <Trouser product={nude[91]} />
            <Trouser product={nude[92]} color={"lightgreen"} />
            <Trouser product={nude[301]} color={"#F5F5DC"} />
            <Trouser product={nude[295]} color={"#013220"} />
            <Trouser product={nude[296]} color={"#89CFF0"} />
            <Trouser product={nude[96]} color={"white"} />
            <Trouser product={nude[97]} color={"#B2BEB5"} />
            <Trouser product={nude[98]} color={"#98fb98"} />
            <Trouser product={nude[0]} color={"#89CFF0"} />
            <Trouser product={nude[100]} />
            <Trouser product={nude[101]} color={"#808000"} />
            <Trouser product={nude[102]} />
            <Trouser product={nude[1]} color={"grey"} />
            <Trouser product={nude[2]} color={"#808000"} />
            <Trouser product={nude[3]} color={"#9B7F5B"} />
            <Trouser product={nude[300]} color={"#FFFDD0"} />
        </div>
    )
}