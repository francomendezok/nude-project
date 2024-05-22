import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import banner1 from '../images/banner1.webp';
import banner2 from '../images/banner2.webp';
import banner3 from '../images/banner3.webp';
import nude from '../api/nude.json';
import stores from '../api/stores.json';
import logo from '../images/nude.png'
import '../styles/index.css';
import '../styles/reset.css';

const loadImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = (error) => reject(error);
    });
};

function handlePosition(position, setPosition, side) {
    if (side === "right") {
        if (position < 7) {
            setPosition(position + 1)
        }
        else {
            setPosition(0)
        }
    } else {
        if (position > 0) {
            setPosition(position - 1)
        } else {
            setPosition(7)
        }
    }
}

function Arrows({ position, setPosition, side }) {
    return (
        side === "right" 
        ? 
        <svg
            onClick={() => handlePosition(position, setPosition, "right")}
            className='right-arrow'
            fill="#ffffff"
            height="12px"
            width="12px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
            data-darkreader-inline-fill=""
            style={{ "--darkreader-inline-fill": "#000000" }}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
            <path
            id="XMLID_222_"
            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 
            c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 
            C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 
            C255,161.018,253.42,157.202,250.606,154.389z"
            ></path>
            </g>
        </svg>
        : 
        <svg onClick={() => handlePosition(position, setPosition, "left")} className='left-arrow' fill="#ffffff" height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path></g></svg>
    );
}

function ImagesBox({ from, to }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imageUrls = nude.slice(from, to).map(product => product.images[0].src);
        const loadImages = imageUrls.map(url =>
            loadImage(url)
        );
        Promise.all(loadImages)
            .then(setImages)
            .catch(error => console.error("Error loading images:", error));
    }, [from, to]);

    return (
        <>
            {images.map((src, index) => {
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
                            <div key={index} style={{backgroundColor: 'blue'}} className='clothes-colors'> </div>
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
};
Arrows.propTypes = {
    position: PropTypes.number,
    setPosition: PropTypes.function,
    side: PropTypes.string
};

function ClothesSection() {
    const [images, setImages] = useState([]);
    const clothes = ['HOODIES', "TEES", "ALL PRODUCTS"];

    useEffect(() => {
        const urls = [
            "https://nude-project.com/cdn/shop/files/aSin_titulo-2.jpg?v=1715263768",
            "https://nude-project.com/cdn/shop/files/Sin_titulo-1_copia_40.jpg?v=1712850111",
            "https://nude-project.com/cdn/shop/files/Sin_titulo-8_02826557-3039-4635-8515-9a0ca9b9ff4e.jpg?v=1715263757"
        ];

        const loadImages = urls.map(url => loadImage(url));
        Promise.all(loadImages)
            .then(setImages)
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
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setPosition(prevPosition => (prevPosition + 1) % stores.length);
        }, 5000);

        return () => clearTimeout(interval);
    }, [position]);

    return (
        <div>
            <div className='our-stores-container'>
                <p className="our-stores-title">Our Stores</p>
                <p className="our-stores-title">Our Stores</p>
                <p className="our-stores-title">Our Stores</p>
                <p className="our-stores-title">Our Stores</p>
                <p className="our-stores-title">Our Stores</p>
            </div>
            <div id='store'>
                <img src={stores[position].img} alt={`${stores[position].city} store`} />
                <div className='city-info-container'>
                    <a>{stores[position].city} ↗️</a>
                    <div className='stores-info-box'>
                        <div className='address-box'>
                            <p>{stores[position].street}</p>
                            <p>{stores[position].zip}</p>
                        </div>
                        <div className='days-box'>
                            <p>{stores[position].weekdays}</p>
                            {position === 5 ? <p>{stores[position].saturday}</p> : null}
                            <p>{stores[position].sunday}</p>
                        </div>
                        <div className='hs-box'>
                            <p>{stores[position]['hs-weekdays']}</p>
                            {position === 5 ? <p>{stores[position]['hs-saturday']}</p> : null}
                            <p>{stores[position]['hs-sunday']}</p>
                        </div>
                    </div>
                </div>
                <div className='arrow'>
                    <Arrows position={position} setPosition={setPosition} side='left' />
                    <Arrows position={position} setPosition={setPosition} side='right' />
                </div>
            </div>
            <div className='carrousel-position'>
                <div id={position === 0 ? 'radio-item-selected' : ''} className='position-div'></div>
                <div id={position === 1 ? 'radio-item-selected' : ''} className='position-div'></div>
                <div id={position === 2 ? 'radio-item-selected' : ''} className='position-div'></div>
                <div id={position === 3 ? 'radio-item-selected' : ''} className='position-div'></div>
                <div id={position === 4 ? 'radio-item-selected' : ''} className='position-div'></div>
                <div id={position === 5 ? 'radio-item-selected' : ''} className='position-div'></div>
                <div id={position === 6 ? 'radio-item-selected' : ''} className='position-div'></div>
                <div id={position === 7 ? 'radio-item-selected' : ''} className='position-div'></div>
            </div>
        </div>
    );
}

function PhotosOfCollections () {
    return (
        <div id='photos'>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo">g<img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
           <div className="inner-photo"><img src="" alt="" /></div>
        </div>
    )
}

function Slideshow() {
    const [index, setIndex] = useState(0);
    const images = [banner1, banner2, banner3];

    useEffect(() => {
        const timerID = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(timerID);
    }, [images.length]);

    return (
        <div className="slideshow">
            <img src={images[index]} alt="" />
        </div>
    );
}

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const imagesToLoad = [
            banner1,
            banner2,
            banner3,
            "https://nude-project.com/cdn/shop/files/aSin_titulo-2.jpg?v=1715263768",
            "https://nude-project.com/cdn/shop/files/Sin_titulo-1_copia_40.jpg?v=1712850111",
            "https://nude-project.com/cdn/shop/files/Sin_titulo-8_02826557-3039-4635-8515-9a0ca9b9ff4e.jpg?v=1715263757",
            ...nude.slice(0, 16).map(product => product.images[0].src),
            ...nude.slice(91, 103).map(product => product.images[0].src),
            ...stores.map(store => store.img)
        ];

        Promise.all(imagesToLoad.map(url => loadImage(url)))
            .then(() => setIsLoading(false))
            .catch(error => console.error("Error loading images:", error));
    }, []);

    if (isLoading) {
        return <img className='loading' src={logo} alt="" />
    }

    return (
        <div>
            <Slideshow />
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
                <PhotosOfCollections />
            </section>
        </div>
    );
}
