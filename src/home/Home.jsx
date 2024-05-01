import { Link, Outlet } from "react-router-dom";
import '../styles/index.css'
import '../styles/reset.css'
import nude from '../api/nude.json'
import logo from '../images/nude.png'
import banner1 from '../images/banner1.webp'

const uniqueImageUrls = new Set();

const uniqueProducts = nude.filter(product => {
    if (!uniqueImageUrls.has(product.images_urls[0])) {
        uniqueImageUrls.add(product.images_urls[0]);
        return true;
    }
    return false;
});


export default function Home () {
    return (
        <main className="flex flex-col w-full h-full items-center justify-center">
            <header>
                <nav className="flex justify-around w-full items-center">
                    <aside className="flex justify-around w-full">
                        <Link to="collections">Shop</Link>
                        <Link to="collections">Collections</Link>
                        <Link to="collections">Stores</Link>
                        <Link to="about-us">About Us</Link>
                        <Outlet />
                    </aside>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </nav>
            </header>
            <div className="slideshow">
                <img src={banner1} alt="" />
            </div>
            <section style={{height: "450px"}} className="w-full flex flex-col items-center new-arrivals-home">
                <h2 className="text-2xl">New Arrivals</h2>
                <div className="container border-4 border-red-500 w-full flex justify-around mt-16">
                    {uniqueProducts.slice(0, 4).map(product => (
                        <div className="border-8 border-red-500" key={product.id}>
                            <img className="w-44 h-44 mb-4" src={product.images_urls[0]} alt={product.title} />
                            <p>{product.title}</p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    )
}