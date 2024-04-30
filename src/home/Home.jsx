import { Link } from "react-router-dom";
import '../styles/app.scss'
import '../styles/reset.scss'
import Diablo from '../images/diablo.avif'
import nude from '../api/nude.json'

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
        <div className="home">
            {/* <img src={Diablo} alt="Diablo 3 Background" />
            <Link to='shop'>Games</Link>
            <Link to='cart'>Cart</Link>
            <Link to='help'>Help</Link> */}
            {uniqueProducts.map(product => (
                <div className="box" key={product.id}>
                    <img src={product.images_urls[0]} alt={product.title} />
                </div>
            ))}        </div>
    )
}