import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div className="navbar">
            <Link to='/'>
                <img id='logo' src={require ('../data/_0b5f6f5c-9c01-4e30-a8e7-92789a5aa6e9.jpg')} alt='Logo'></img>
            </Link>

            <nav>
                <Link id='links' to='/'>
                    <h6>Home</h6>
                </Link> 
                <Link id='links' to='/exam'>
                    <h6>Challenge</h6>
                </Link>

                <div className = 'btn'>
                    <Link id='links' to='/login'><h6>Log In</h6></Link>
                    <Link id='links' to='/signin'><h6>Sign In</h6></Link>
                </div>
        
            </nav>
        </div>
    );
}