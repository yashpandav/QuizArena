import './signin.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const [showcurrPasswd, setcurrShowPasswd] = useState(false);
    const [showfinalPasswd, setfinalShowPasswd] = useState(false);
    const [currPaswd , setCurr] = useState('');
    const [confmPasswd , setConfm] = useState('');
    const [accountMatched , setAccountExist] = useState(false);
    const navigate = useNavigate();
    const [userData , setUserData] = useState({
        fn : "" ,
        ln : "" ,
        number : "",
        email : "" ,
        confmpasswd : "",
        userName : "",
        dashboard : []
    });

    useEffect(() => {
        const mainData = JSON.parse(localStorage.getItem("user"));
        let accountExists = false;
        if (mainData) {
            Object.keys(mainData).forEach(key => {
                if (userData.email === mainData[key].email || mainData[key].number === userData.number) {
                    accountExists = true;
                }
            });
        }
        setAccountExist(accountExists);
    }, [userData.email, userData.number]);

    function currShowPasswdHandler() {
        setcurrShowPasswd(prev => !prev);
    }
    
    function finalShowpasswdHandler() {
        setfinalShowPasswd(prev => !prev);
    }

    function dataChangeHandler(event) {
        const { name , value } = event.target;
        setUserData(prev => {
            if (name === "fn" || name === "ln") {
                const userName = userData.fn + userData.ln + "" + Math.floor(Math.random() * 15);
                return {
                    ...prev,
                    [name]: value,
                    userName: userName
                };
            } else {
                return {
                    ...prev,
                    [name]: value,
                };
            }
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        if (accountMatched) {
            toast.error("Account already exists");
            return;
        }

        if (currPaswd !== confmPasswd) {
            toast.error("Password didn't match");
            return;
        }

        const mainData = JSON.parse(localStorage.getItem("user")) || {};
        const updatedMainData = { ...mainData, [userData.userName]: userData };
        localStorage.setItem("user", JSON.stringify(updatedMainData));
    
        toast.success(`Account created successfully Your Username is "${userData.userName}"` , 
                {
                className: "toast-message", 
            }
        );

        setTimeout(() => {
            navigate('/login')
        } , 1700)
    }

    function resetHandler(){
        setUserData(prev => {
            return {
                ...prev,
                fn : "" ,
                ln : "" ,
                number : "",
                email : "" ,
                confmpasswd : "",
                userName : ""   
            };
        });
        setConfm("");
        setCurr("");
    }

    return (
        <div id='signin' className='sigin'>
            <div id='form'>
                <h3>
                    <sub> Create a new account and</sub><br />
                    Start your preparation now
                </h3>

                <form onSubmit={submitHandler}>
                    <label htmlFor='fn'>First Name <sup>*</sup>
                    </label>
                    <br></br>
                    <input type='text' name='fn' value={userData.fn} required onChange={dataChangeHandler} ></input>
                    <br></br>
                    <label htmlFor='ln'>Last Name <sup>*</sup>
                    </label>
                    <br></br>
                    <input type='text' name='ln' value={userData.ln} onChange={dataChangeHandler} required></input>
                    <br></br>
                    <label htmlFor='numb' name='numb'>Contact Number <sup>*</sup>
                    </label>
                    <br></br>
                    <input type='number' min={0} minLength={10} maxLength={10} name='number' value={userData.number} onChange={dataChangeHandler} required></input>
                    <br></br>
                    <label htmlFor='email'>Email <sup>*</sup></label>
                    <br></br>
                    <input type='email' name='email' value={userData.email} onChange={dataChangeHandler} required></input>
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
                            <input type={showfinalPasswd ? 'text' : 'password'} value={confmPasswd} name='confmpasswd' onChange={ 
                                    (e) => {setConfm(e.target.value)
                                            setUserData((prev) => {
                                                return {
                                                    ...prev ,
                                                    [e.target.name] : e.target.value,
                                                };
                                            });
                                    }
                                    } required />
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
                    <button type='reset' id='reset' onClick={resetHandler}>Reset</button>
                </form>
            </div>
            <img id='signupimg' src={require('../data/two.png')} alt="signup image" />
        </div>
    );
}