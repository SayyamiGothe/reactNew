import { Button } from "bootstrap"
import { Link } from "react-router-dom"

function Home() {
    return (

        <>

            <h2>This is homepage</h2>

            <button>
                <Link to={'/about'}>ABOUT</Link>
            </button>

        </>
    )
}

export default Home
