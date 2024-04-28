import { Link } from "react-router-dom";
import '../styles/app.scss'
import '../styles/reset.scss'
import Diablo from '../images/diablo.avif'




export default function Home () {
    return (
        <div className="home">
            <img src={Diablo} alt="Diablo 3 Background" />
            <Link to='shop'>Games</Link>
            <Link to='cart'>Cart</Link>
            <Link to='help'>Help</Link>
        </div>
    )
}