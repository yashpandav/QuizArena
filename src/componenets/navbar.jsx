import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Navbar({isLogin , setLogin , showNavigation}){
    const navigate = useNavigate();
    const [accountInfo , setAccount] = useState('hideAccount');

    function accountHandler() {
        setAccount(prev => (prev === 'hideAccount' ? 'showAccount' : 'hideAccount'));
    }

    function removeDrop(){
        setAccount('hideAccount');
    }

    function logoutHandler(){
        setLogin(false);
        toast.success("Logout successfully");
        navigate('/home');
    }

    return(
        showNavigation ? (
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
                    {
                        isLogin ? (    <div onMouseLeave={removeDrop} > 
                            <img id='user-account' src={require('../data/account.png')} alt='account' onClick={accountHandler}></img>
                            <div className={accountInfo}>
                                <p onClick={() => navigate('/dashboard')}>Dashboard</p>
                                <p onClick={() => navigate('/userInfo')}>Account</p>
                                <p onClick={logoutHandler}>Logout</p>
                            </div>
                        </div>
                        ) :
                        (
                            <div className = 'btn'>
                                <Link id='links' to='/login'><h6>Log In</h6></Link>
                                <Link id='links' to='/signin'><h6>Sign In</h6></Link>
                            </div>
                        )
                    }
                </nav>
            </div>
        ) : (
            <></>
        )
    );
}