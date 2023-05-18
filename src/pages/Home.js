import { Link } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/products">The list of products</Link>
        </div>
    )
}

export default Home