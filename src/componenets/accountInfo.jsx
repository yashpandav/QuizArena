import { useEffect, useState } from "react"
import './accountInfo.css'
import toast from "react-hot-toast";

export default function Account({userData , setUser , setLogin}){

    const [totalGivenExam, setTotalExam] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    useEffect(() => {
        setTotalExam(userData.dashboard.length);
    }, []);

    useEffect(() => {
        let score = 0;
        userData.dashboard.forEach((key) => {
            score += key.score;
        });
        setTotalScore(score);
    }, []);
    
    function deleteAccount() {
        const mainData = JSON.parse(localStorage.getItem("user"));
        if (mainData && mainData[userData.userName]) {
            delete mainData[userData.userName]; 
            localStorage.setItem("user", JSON.stringify(mainData)); 
            setUser({
                fn: "",
                ln: "",
                number: "",
                email: "",
                confmpasswd: "",
                userName: ""
            });
            toast.success("Account Delted")
            setLogin(false);
        }
    }
    
    function deleteAccountHander(event){
        let c = window.confirm("Are you sure want to delete account ?");
        if(c){
            deleteAccount();
        }
        else{
            event.preventDefault();
        }
    }

    return (
        <div id="accountInfo">
            <h3>Username: {userData.userName}</h3>
            <h3>Name: {userData.fn} {userData.ln}</h3>
            <h3>Email: {userData.email}</h3>
            <h3>Total Exams Taken: {totalGivenExam}</h3>
            <h3>Total Score: {totalScore}</h3>
            <button id="delAccount" type="button" onClick={deleteAccountHander}>
                Delete Account
            </button>
        </div>
    );
}