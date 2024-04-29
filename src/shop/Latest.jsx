import { Link } from "react-router-dom"

export default function Latest () {
    return (
        <>
            <h1>Latest Games</h1>
            <Link to='/shop'>Go back</Link>
            <Link to='/'>Home</Link>
        </>
    )
}