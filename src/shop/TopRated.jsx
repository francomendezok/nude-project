import { Link } from "react-router-dom"

export default function TopRated () {
    return (
        <>
            <h1>Top rated Games</h1>
            <Link to='/shop'>Go back</Link>
            <Link to='/'>Home</Link>
        </>
    )
}