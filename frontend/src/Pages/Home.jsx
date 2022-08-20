import {BrowserRouter as Router, Link} from 'react-router-dom';


function Home() {

    return (
        <div>
            <h1>
                Home Page
            </h1>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </div>
    )
}

export default Home