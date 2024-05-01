import { Link } from "react-router-dom";
import '../styles/app.scss'
import '../styles/reset.scss'
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
        <h1>Hola</h1>
    )
}