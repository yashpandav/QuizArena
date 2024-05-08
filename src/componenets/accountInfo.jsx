import { useEffect, useState } from "react";
import "./accountInfo.css";
import toast from "react-hot-toast";

export default function Account({ userData, setUser, setLogin }) {
    const [totalGivenExam, setTotalExam] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    useEffect(() => {
        setTotalExam(userData.dashboard.length);
    }, [userData.dashboard.length]);

    useEffect(() => {
        let score = 0;
        userData.dashboard.forEach((key) => {
            score += key.score;
        });
        setTotalScore(score);
    }, [userData.dashboard]);

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
                userName: "",
            });
            toast.success("Account Deleted");
            setLogin(false);
        }
    }

    function deleteAccountHandler(event) {
        let c = window.confirm("Are you sure you want to delete the account?");
        if (c) {
            deleteAccount();
        } else {
            event.preventDefault();
        }
    }

    return (
        <>
            <div id="accountInfo" className="account-container">
            <h2 className="account-heading">Account Information</h2>
                <div className="account-detail">
                    <span className="detail-label">Username:</span>{" "}
                    <span className="detail-value">{userData.userName}</span>
                </div>
                <div className="account-detail">
                    <span className="detail-label">Name:</span>{" "}
                    <span className="detail-value">
                        {userData.fn} {userData.ln}
                    </span>
                </div>
                <div className="account-detail">
                    <span className="detail-label">Email:</span>{" "}
                    <span className="detail-value">{userData.email}</span>
                </div>
                <div className="account-detail">
                    <span className="detail-label">Total Exams Taken:</span>{" "}
                    <span className="detail-value">{totalGivenExam}</span>
                </div>
                <div className="account-detail">
                    <span className="detail-label">Total Score:</span>{" "}
                    <span className="detail-value">{totalScore}</span>
                </div>
                <div style={{display :"flex" , justifyContent : "center" , alignItems : "center"}}>
                    <button
                        id="delAccount"
                        className="delete-account-btn"
                        type="button"
                        onClick={deleteAccountHandler}
                    >
                        Delete Account
                    </button>
                </div>
            </div>
            
        </>
    );
}
