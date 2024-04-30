import './signin.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from 'react';

export default function Signin() {
    const [showcurrPasswd, setcurrShowPasswd] = useState(false);
    const [showfinalPasswd, setfinalShowPasswd] = useState(false);

    function currShowPasswdHandler() {
        setcurrShowPasswd((prev) => !prev);
    }
    
    function finalShowpasswdHandler(){
        setfinalShowPasswd((prev) => !prev);
    }

    const [currPaswd , setCurr] = useState('');
    const [confmPasswd , setConfm] = useState('');

    function submitHandler(event){
        if(currPaswd !== confmPasswd) {
            console.log("NO");
            return false;
        }
        else{
            console.log("yes");
            return true;
        }
    }

    return (
        <div id='signin'>
            <div id='form'>
                <h3>
                    <sub> Create a new account and</sub><br />
                    Start your preparation now
                </h3>

                <form onSubmit={submitHandler} target='_blank'>
                    <label htmlFor='fn'>First Name <sup>*</sup>
                    </label>
                    <br></br>
                    <input type='text' name='fn' required></input>
                    <br></br>
                    <label htmlFor='ln'>Last Name <sup>*</sup>
                    </label>
                    <br></br>
                    <input type='text' name='ln' required></input>
                    <br></br>
                    <label htmlFor='numb' name='numb'>Contact Number <sup>*</sup>
                    </label>
                    <br></br>
                    <input type='number' min={0} minLength={10} maxLength={10} name='numb' required></input>
                    <br></br>
                    <label htmlFor='email'>Email <sup>*</sup></label>
                    <br></br>
                    <input type='email' name='email' required></input>
                    <div style={{ display: "flex", justifyContent: 'space-evenly', alignItems: "center", marginTop: "8px" }}>
                        <div style={{ zIndex: '-100' }}>
                            <label htmlFor='createpasswd'>Create New Password <sup>*</sup></label>
                            <br></br>
                            <input type={showcurrPasswd ? 'text' : 'password'} value={currPaswd} name='createpasswd' onChange={(e) => setCurr(e.target.value)} required />
                            <button type='button' className='passbtn' onClick={currShowPasswdHandler} >
                                {
                                    !showcurrPasswd ? (
                                        <FaEye/>
                                    ) : (
                                        <FaEyeSlash/>
                                    )
                                }
                            </button>
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <label htmlFor='confmpasswd'>Confirm The Password <sup>*</sup></label>
                            <br></br>
                            <input type={showfinalPasswd ? 'text' : 'password'} value={confmPasswd} name='confmpasswd' onChange={(e) => setConfm(e.target.value)} required />
                            <button type='button' className='passbtn' onClick={finalShowpasswdHandler} >
                                {
                                    !showfinalPasswd ? (
                                        <FaEye/>
                                    ) : (
                                        <FaEyeSlash/>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <hr style={{ backgroundColor: "grey" }}></hr>
                    <button type='submit' id='submit'>Create Account</button>
                    <button type='reset'>Reset</button>
                </form>
            </div>
            <img id='signupimg' src={require('../data/two.png')} alt="signup image" />
        </div>
    );
}
