import './login.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState} from 'react';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

export default function Login({isLogin , setLogin}){
    const navigate = useNavigate();

    const [showpaswd, setshow] = useState(false);
    const [loginUsing , setLoggedin] = useState('username');
    const [currUser , setCurr] = useState(
        {
            loginId : "",
            passwd : ""
        }
    )
    const mainData = JSON.parse(localStorage.getItem("user"));

    function showhandler() { //show password
        setshow((prev) => !prev);
    }

    function changeHandler(event){ //adding details into the object
        const {name , value} = event.target;

        if(name === 'username' || name === 'email'){
            setCurr((prev) => {
                return {
                    ...prev ,
                    loginId : value
                }
            })
        }

        else{setCurr((prev) => {
            return {
                ...prev ,
                passwd : value
            }
        })
        }
    }

    function submitHandler(event){  // onsubmit
        let dataFound = false;
        let getKey = '';
        if(mainData){       
            if(loginUsing === 'email'){
                Object.keys(mainData).forEach(key => {
                    if(mainData[key].email === currUser.loginId){
                        dataFound = !dataFound;
                        getKey = key;
                    }
                })
            }
            else if(loginUsing === 'username'){
                    Object.keys(mainData).forEach(key => {
                    if(key === currUser.loginId){
                        dataFound = !dataFound;
                        getKey = key;
                    }
                });
            }
            if(!dataFound){
                toast.error("No such data found , Create a new account");
                event.preventDefault();
                return;
            }
            if(dataFound){
                if(mainData[getKey].confmpasswd !== currUser.passwd){
                    toast.error("Password hasn't matched");
                    event.preventDefault();
                    return;
                }
                else{
                    setLogin(true);
                    navigate('/dashboard');
                    toast.success("Login Success");
                }
            } 
        }
        else{
            toast.error("No such data found , Create a new account");
            event.preventDefault();
        }
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
                        <button type='button' onClick={() => {setLoggedin('email')}} className='emailorusername'>email
                        </button>or
                        <button type='button' onClick={() => {setLoggedin('username')}} className='emailorusername'> username
                        </button></sub>
                </p>
                <form onSubmit={submitHandler} >
                    {
                        loginUsing === 'username' ? (
                            <>
                            <label htmlFor='username'>Username <sup>*</sup>
                            </label>
                            <br></br>
                            <input type='text' name='username' required value={currUser.loginId} onChange={changeHandler}></input>
                            <br></br>
                            </>
                        ) : (
                            <>
                            <label htmlFor='email'>Email <sup>*</sup></label>
                            <br></br>
                            <input type='email' name='email' required value={currUser.loginId} onChange={changeHandler}></input>
                            <br></br>
                            </>
                        )
                    }
                    <label htmlFor='passwd'name='passwd' require>Password <sup>*</sup></label>
                    <input type={showpaswd ? 'text' : 'password'} name='passwd' value={currUser.passwd} onChange={changeHandler} required />
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
                    <button type='reset' onClick={() =>{
                        setCurr((prev) => {
                            return {
                                ...prev ,
                                loginId : "",
                                passwd : ""
                            }
                        })
                    }} >Reset</button>
                </form>
            </div>
        </div>
    );
} 