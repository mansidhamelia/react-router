import { Link, useNavigate } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home</h1>
            <Link to="/products">The list of products</Link>
        </div>
    )
}

export default Home