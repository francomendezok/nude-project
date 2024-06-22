/* eslint-disable react/prop-types */
export default function ImageComponent ({folder, number, inCart, categorie, cartBrief}) {
    return (
        <img 
            className={`${inCart ? 'cart-image' : ''} ${cartBrief ? 'cart-brief-image' : 'cursor-pointer'}`} 
            src={`/images/${categorie}/${folder}/${number}.webp`} 
            alt="Product image" 
        /> 
    )
}