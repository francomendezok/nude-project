import '../styles/index.css'
import '../styles/reset.css'
import nude from '../api/nude.json'
import stores from '../api/stores.json'
import banner1 from '../images/banner1.webp'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

console.log(nude);
// function handleMouseEnter () {
//     let title = document.querySelector('.product-title')
//     let price = document.querySelector('.product-price')
//     let sizes = document.querySelector('.product-sizes')
//     title.classList.add('hidden')
//     price.classList.add('hidden')
//     sizes.classList.add('flex')
// }

// function handleMouseLeave () {
//     let title = document.querySelector('.product-title')
//     let price = document.querySelector('.product-price')
//     let sizes = document.querySelector('.product-sizes')
//     title.classList.add('flex')
//     price.classList.add('flex')
//     sizes.classList.add('hidden')
// }


function ImagesBox( {from, to} ) {
    const [images, setImages] = useState([]);
    let nudeColors = [...nude]

    useEffect(() => {
        const imageUrls = nude.slice(from, to).map(product => product.images[0].src)
        const loadImages = imageUrls.map(url =>
            fetch(url)
                .then(response => response.blob())
                .then(blob => URL.createObjectURL(blob))
        );
        Promise.all(loadImages)
            .then(setImages)
            .catch(error => console.error("Error loading images:", error));
    }, [from, to]);


    return (
        <>

            {images.map((src, index) => {
                // const colors = nudeColors.slice(from, to).map(product => product.options[1])
                // let color = colors[index].values[0]
                // console.log(color)
                const product = nude[from + index];
                let variantsProduct = product.variants.map(v => v.option1 + " ");
                return (
                    <div className='product-home-box' key={product.id}>
                        <p className='new-in'>NEW IN</p>
                        <img className='product-home-img cursor-pointer' src={src} alt="" />
                        <div className='product-info'>
                            <p className='product-title'>{product.title}</p>
                            <p className='product-price'>€{product.variants[0].price}</p>
                            <p className='product-sizes'>{variantsProduct}</p>
                            
                            <div key={index} style={{backgroundColor: 'blue'}} className='clothes-colors'>{product.options[1]["values"][0]} </div>
                                
                          
                        </div>
                    </div>
                );
            })}
        </>
    );
}

ImagesBox.propTypes = {
    from: PropTypes.number,
    to: PropTypes.number
}


function ClothesSection() {
    const [images, setImages] = useState([]);
    const clothes = ['HOODIES', "TEES", "ALL PRODUCTS"]

    useEffect(() => {
        Promise.all([
            fetch("https://nude-project.com/cdn/shop/files/aSin_titulo-2.jpg?v=1715263768"),
            fetch("https://nude-project.com/cdn/shop/files/Sin_titulo-1_copia_40.jpg?v=1712850111"),
            fetch("https://nude-project.com/cdn/shop/files/Sin_titulo-8_02826557-3039-4635-8515-9a0ca9b9ff4e.jpg?v=1715263757")
        ])
        .then(responses => Promise.all(responses.map(response => response.blob())))
        .then(blobs => {
            const imageUrls = blobs.map(blob => URL.createObjectURL(blob));
            setImages(imageUrls);
        })
        .catch(error => console.error("Error fetching images:", error));
    }, []);

    return (
        <section id='clothes-section'>
            {images.map((imageUrl, index) => (
                <div key={index}>
                    <p className='clothes-categories-images'>{clothes[index]}</p>
                    <img src={imageUrl} alt={`Clothing ${index + 1}`} />
                </div>
            ))}
        </section>
    );
}

function OurStores() {
    const [position, setPosition] = useState(0)

    useEffect(() => {
        const interval = setTimeout(() => {
            setPosition(prevPosition => (prevPosition + 1) % stores.length);
        }, 5000);

        return () => clearTimeout(interval);
    }, [position]);

    return (
        <div>
            <h2>Our Stores</h2>
                <div className='store'>
                    <img src={stores[position].img} alt={`${stores[position].city} store`} />
                    <div className='flex'>
                        <h3>{stores[position].city}</h3>
                        <div className='grid'>
                            <div>
                                <p>{stores[position].street}</p>
                                <p>{stores[position].zip}</p>
                            </div>
                            <div>
                                <p>{stores[position].weekdays}</p>
                                {position === 5 ? <p>{stores[position].saturday}</p> : null}
                                <p>{stores[position].sunday}</p>
                            </div>
                            <div>
                                <p>{stores[position]['hs-weekdays']}</p>
                                {position === 5 ? <p>{stores[position]['hs-saturday']}</p> : null}
                                <p>{stores[position]['hs-sunday']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className='carrousel-position'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}




export default function Home() {

    return (
        <div>
            <div className="slideshow">
                <img src={banner1} alt="" />
            </div>
            <section className="new-arrivals-home">
                <div className='flex items-center w-full pl-6 pr-6 pt-4 -mb-10 justify-between'>
                    <h2 className="text-xl font-bold">NEW ARRIVALS</h2>
                    <Link className="underline text-xl text-slate-950" to="">VIEW ALL </Link>
                </div>
                <div className='images-container'>
                    <ImagesBox from={0} to={16} />
                </div>
                    <ClothesSection />
                <div className='images-container'>
                    <ImagesBox from={91} to={103} />
                </div>
                    <OurStores />
            </section>
        </div>
    );
}