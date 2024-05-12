import '../styles/index.css'
import '../styles/reset.css'
import nude from '../api/nude.json'
import banner1 from '../images/banner1.webp'

// console.log(nude)



function ImagesBox () {
    return (
        nude.slice(0,16).map(product => {
            return (
                <div className='product-home-box' key={product.id}>
                    <p className='new-in'>NEW IN</p>
                    <img className='product-home-img' src={product.images[0].src} alt="" />
                    <div className='product-info'>
                        <p className='product-title'>{product.title}</p>
                        <p className='product-price'>€{product.variants[0].price}</p>
                    </div>
                </div>
            );
       })
    )
}


export default function Home () {
    return (
        <div>
            <div className="slideshow">
                <img src={banner1} alt="" />
            </div>
            <section className="new-arrivals-home">
                <h2 className="text-2xl">New Arrivals</h2>
                <div id='images-container'>
                   <ImagesBox />
                    {/* <div className='product-home-box'>
                        <p id='new-in'>NEW IN</p>
                        <img className='product-home-img' src={nude[0].images[0].src} alt="" />
                        <p>{nude[0].title}</p>
                        <p>{nude[0].variants[0].price}</p>
                    </div>
                    <div className='product-home-box'>
                        <p id='new-in'>NEW IN</p>
                        <img className='product-home-img' src={nude[1].images[0].src} alt="" />
                        <p>{nude[1].title}</p>
                        <p>{nude[1].variants[0].price}</p>
                    </div>
                    <div className='product-home-box'>
                        <p id='new-in'>NEW IN</p>
                        <img className='product-home-img' src={nude[2].images[0].src} alt="" />
                        <p>{nude[2].title}</p>
                        <p>{nude[2].variants[0].price}</p>
                    </div>
                    <div className='product-home-box'>
                        <p id='new-in'>NEW IN</p>
                        <img className='product-home-img' src={nude[3].images[0].src} alt="" />
                        <p>{nude[3].title}</p>
                        <p>{nude[3].variants[0].price}</p>
                    </div> */}
                </div>
            </section>
        </div>
    )
}