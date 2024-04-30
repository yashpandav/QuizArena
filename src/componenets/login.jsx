import './login.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState} from 'react';

export default function Login(){
    const [showpaswd, setshow] = useState(false);

    const [loginUsing , setLogin] = useState('username');

    function showhandler() {
        setshow((prev) => !prev);
    }
    
    return(
        <div id='login'>
            <img id='loginimg' src={require('../data/one.png')} alt="signup image" />

            <div id='loginform'>
                <h3>
                    Log In
                    <hr style={{ backgroundColor: "grey" }}></hr>
                </h3>

                <p>
                    <sub>Log In using
                        <button type='button' onClick={() => {setLogin('email')}} className='emailorusername'>email
                        </button>or
                        <button type='button' onClick={() => {setLogin('username')}} className='emailorusername'> username
                        </button></sub>
                </p>
                <form>
                    {
                        loginUsing === 'username' ? (
                            <>
                            <label htmlFor='username'>Username <sup>*</sup>
                            </label>
                            <br></br>
                            <input type='text' name='username' required></input>
                            <br></br>
                            </>
                        ) : (
                            <>
                            <label htmlFor='email'>Email <sup>*</sup></label>
                            <br></br>
                            <input type='email' name='email' required></input>
                            <br></br>
                            </>
                        )
                    }
                    <label htmlFor='passwd'name='passwd' require>Password <sup>*</sup></label>
                    <input type={showpaswd ? 'text' : 'password'} required />
                    <button type='button' className='passbtn' onClick={showhandler} >
                                {
                                    !showpaswd ? (
                                        <FaEye/>
                                    ) : (
                                        <FaEyeSlash/>
                                    )
                                }
                            </button>

                    <div id='forgot'>
                        <p id='paraforgot'>
                            <sub>
                                Forgot Password or Reset Password
                            </sub>
                        </p>
                    </div>
                    <hr style={{ backgroundColor: "grey" }}></hr>
                    <button type='submit' id='submit'>Log In</button>
                    <button type='reset'>Reset</button>
                </form>
            </div>
        </div>
    );
}