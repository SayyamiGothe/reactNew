import { Link } from "react-router-dom"

function About() {
    return (
        <>

            <h2>This is the About page</h2>

            <button>
                <Link to={'/'}>Homepage</Link>


            </button>

            <button>
                <Link to={'/contact'}>Conatct</Link>

            </button>
        </>
    )
}

export default About